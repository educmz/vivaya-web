"use client";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type FormEvent,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { AlertCircle, Check, FileText, Printer } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { legalConfig } from "@/config/legal";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type {
  ComplaintFormData,
  ComplaintType,
  ContractedItemType,
  DocumentType,
  ReceiptType,
  ResponseMethod,
} from "@/types/complaint";

type FieldName =
  | "fullName"
  | "address"
  | "documentType"
  | "documentNumber"
  | "phone"
  | "email"
  | "representativeFullName"
  | "representativeAddress"
  | "representativeDocumentType"
  | "representativeDocumentNumber"
  | "representativePhone"
  | "representativeEmail"
  | "contractedItemType"
  | "amount"
  | "description"
  | "receiptType"
  | "receiptNumber"
  | "complaintType"
  | "detail"
  | "request"
  | "responseMethod";

type FormErrors = Partial<Record<FieldName, string>>;

const ease = [0.22, 1, 0.36, 1] as const;
const inputClass =
  "min-h-12 w-full rounded-xl border-2 border-[#302E2A]/20 bg-background px-4 text-base font-normal text-[#302E2A] outline-none transition placeholder:text-[#302E2A]/35 focus:border-[#FF8A00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF8A00]";
const textareaClass = `${inputClass} min-h-32 resize-y py-3 leading-6`;

const initialData: ComplaintFormData = {
  consumer: {
    fullName: "",
    address: "",
    documentType: "DNI",
    documentNumber: "",
    phone: "",
    email: "",
    isMinor: false,
    parentOrGuardian: {
      fullName: "",
      address: "",
      documentType: "DNI",
      documentNumber: "",
      phone: "",
      email: "",
    },
  },
  contractedItem: {
    type: "product",
    amount: "",
    description: "",
    receiptType: "receipt",
    receiptNumber: "",
  },
  complaint: {
    type: "claim",
    detail: "",
    request: "",
    responseMethod: "email",
  },
};

const fieldOrder: FieldName[] = [
  "fullName",
  "address",
  "documentType",
  "documentNumber",
  "phone",
  "email",
  "representativeFullName",
  "representativeAddress",
  "representativeDocumentType",
  "representativeDocumentNumber",
  "representativePhone",
  "representativeEmail",
  "contractedItemType",
  "amount",
  "description",
  "receiptType",
  "receiptNumber",
  "complaintType",
  "detail",
  "request",
  "responseMethod",
];

function subscribeToDate() {
  return () => undefined;
}

function getClientDate() {
  return new Intl.DateTimeFormat("es-PE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date());
}

function describedBy(id: string, error?: string, hasHint = false) {
  return [hasHint ? `${id}-hint` : "", error ? `${id}-error` : ""]
    .filter(Boolean)
    .join(" ") || undefined;
}

function validate(data: ComplaintFormData): FormErrors {
  const errors: FormErrors = {};
  const consumer = data.consumer;
  const representative = consumer.parentOrGuardian;
  const item = data.contractedItem;
  const complaint = data.complaint;

  if (consumer.fullName.trim().length < 3) {
    errors.fullName = "Ingresa tu nombre completo.";
  }
  if (!consumer.address.trim()) {
    errors.address = "Ingresa tu domicilio.";
  }
  if (consumer.documentType === "DNI") {
    if (!/^\d{8}$/.test(consumer.documentNumber.trim())) {
      errors.documentNumber = "El DNI debe tener exactamente 8 dígitos.";
    }
  } else if (!/^[A-Za-z0-9-]{6,15}$/.test(consumer.documentNumber.trim())) {
    errors.documentNumber = "Ingresa un Carné de Extranjería válido.";
  }

  const normalizedPhone = consumer.phone.replace(/[\s()-]/g, "");
  if (!/^(?:\+?51)?\d{7,9}$/.test(normalizedPhone)) {
    errors.phone = "Ingresa un teléfono válido.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(consumer.email.trim())) {
    errors.email = "Ingresa un correo válido.";
  }
  if (consumer.isMinor) {
    if (representative.fullName.trim().length < 3) {
      errors.representativeFullName = "Ingresa el nombre del representante.";
    }
    if (!representative.address.trim()) {
      errors.representativeAddress = "Ingresa el domicilio del representante.";
    }
    if (representative.documentType === "DNI") {
      if (!/^\d{8}$/.test(representative.documentNumber.trim())) {
        errors.representativeDocumentNumber = "El DNI debe tener exactamente 8 dígitos.";
      }
    } else if (!/^[A-Za-z0-9-]{6,15}$/.test(representative.documentNumber.trim())) {
      errors.representativeDocumentNumber = "Ingresa un Carné de Extranjería válido.";
    }

    const representativePhone = representative.phone.replace(/[\s()-]/g, "");
    if (!/^(?:\+?51)?\d{7,9}$/.test(representativePhone)) {
      errors.representativePhone = "Ingresa un teléfono válido.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(representative.email.trim())) {
      errors.representativeEmail = "Ingresa un correo válido.";
    }
  }
  if (item.amount && (!Number.isFinite(Number(item.amount)) || Number(item.amount) < 0)) {
    errors.amount = "El monto no puede ser negativo.";
  }
  if (!item.description.trim()) {
    errors.description = "Describe el producto o servicio.";
  }
  if (!(["receipt", "invoice", "other", "none"] as string[]).includes(item.receiptType)) {
    errors.receiptType = "Selecciona un tipo de comprobante.";
  } else if (item.receiptType !== "none") {
    if (!/^[A-Za-z0-9-]{1,40}$/.test(item.receiptNumber.trim())) {
      errors.receiptNumber = "Ingresa un número con letras, números o guiones.";
    }
  }
  if (!complaint.detail.trim()) {
    errors.detail = "Describe lo ocurrido.";
  }
  if (!complaint.request.trim()) {
    errors.request = "Indica la solución que solicitas.";
  }
  if (!(["email", "letter"] as string[]).includes(complaint.responseMethod)) {
    errors.responseMethod = "Selecciona un medio de respuesta.";
  }

  return errors;
}

function ErrorMessage({ id, message }: { id: string; message?: string }) {
  if (!message) return null;

  return (
    <p id={`${id}-error`} className="mt-2 flex items-start gap-1.5 text-sm font-bold text-[#9F321D]" role="alert">
      <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      {message}
    </p>
  );
}

function Field({
  id,
  label,
  required = false,
  hint,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-bold text-[#302E2A]">
        {label} {required && <span aria-hidden="true" className="text-[#FF8A00]">*</span>}
      </label>
      {children}
      {hint && <p id={`${id}-hint`} className="mt-2 text-sm text-[#302E2A]/60">{hint}</p>}
      <ErrorMessage id={id} message={error} />
    </div>
  );
}

function FormSection({
  number,
  title,
  reducedMotion,
  children,
}: {
  number: string;
  title: string;
  reducedMotion: boolean;
  children: ReactNode;
}) {
  return (
    <motion.section
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, ease }}
      className="complaint-print-section rounded-[1.75rem] border-2 border-[#302E2A]/15 bg-white p-5 shadow-[0_18px_55px_rgba(62,42,27,0.06)] sm:p-8"
    >
      <div className="mb-7 flex items-baseline gap-3 border-b border-[#302E2A]/12 pb-5">
        <span className="font-accent text-3xl font-bold text-[#FF8A00]">{number}</span>
        <h2 className="text-2xl font-black tracking-[-0.035em] text-[#073B3A]">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

function ChoiceCard<T extends string>({
  name,
  value,
  checked,
  title,
  description,
  onChange,
}: {
  name: string;
  value: T;
  checked: boolean;
  title: string;
  description?: string;
  onChange: (value: T) => void;
}) {
  return (
    <label className={`relative flex cursor-pointer gap-3 rounded-2xl border-2 p-4 transition focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#FF8A00] ${checked ? "border-[#3F7D4F] bg-[#EAF2E7]" : "border-[#302E2A]/15 bg-background"}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="mt-1 size-4 accent-[#3F7D4F]"
      />
      <span>
        <span className="flex items-center gap-2 text-sm font-black uppercase tracking-[0.08em] text-[#073B3A]">
          {title}
          {checked && <Check className="size-4" aria-hidden="true" />}
        </span>
        {description && <span className="mt-1 block text-sm leading-5 text-[#302E2A]/65">{description}</span>}
      </span>
    </label>
  );
}

function ReviewItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <dt className="text-xs font-black uppercase tracking-[0.12em] text-[#302E2A]/50">{label}</dt>
      <dd className="mt-1 whitespace-pre-wrap break-words text-sm leading-6 text-[#241B15]">{value || "—"}</dd>
    </div>
  );
}

export function ComplaintBook() {
  const reducedMotion = useReducedMotion();
  const date = useSyncExternalStore(subscribeToDate, getClientDate, () => "—");
  const [data, setData] = useState<ComplaintFormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [view, setView] = useState<"form" | "review">("form");
  const formRef = useRef<HTMLFormElement>(null);
  const reviewHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (view === "review") reviewHeadingRef.current?.focus();
  }, [view]);

  function updateConsumer<K extends keyof ComplaintFormData["consumer"]>(
    key: K,
    value: ComplaintFormData["consumer"][K],
  ) {
    setData((current) => ({
      ...current,
      consumer: { ...current.consumer, [key]: value },
    }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function updateItem<K extends keyof ComplaintFormData["contractedItem"]>(
    key: K,
    value: ComplaintFormData["contractedItem"][K],
  ) {
    setData((current) => ({
      ...current,
      contractedItem: { ...current.contractedItem, [key]: value },
    }));
    const errorKey = key === "type" ? "contractedItemType" : key;
    setErrors((current) => ({ ...current, [errorKey]: undefined }));
  }

  function updateRepresentative<K extends keyof ComplaintFormData["consumer"]["parentOrGuardian"]>(
    key: K,
    value: ComplaintFormData["consumer"]["parentOrGuardian"][K],
  ) {
    setData((current) => ({
      ...current,
      consumer: {
        ...current.consumer,
        parentOrGuardian: { ...current.consumer.parentOrGuardian, [key]: value },
      },
    }));
    const errorKey = `representative${key.charAt(0).toUpperCase()}${key.slice(1)}` as FieldName;
    setErrors((current) => ({ ...current, [errorKey]: undefined }));
  }

  function handleMinorChange(isMinor: boolean) {
    updateConsumer("isMinor", isMinor);
    if (!isMinor) {
      setErrors((current) => ({
        ...current,
        representativeFullName: undefined,
        representativeAddress: undefined,
        representativeDocumentType: undefined,
        representativeDocumentNumber: undefined,
        representativePhone: undefined,
        representativeEmail: undefined,
      }));
    }
  }

  function handleReceiptTypeChange(receiptType: ReceiptType) {
    updateItem("receiptType", receiptType);
    if (receiptType === "none") {
      setErrors((current) => ({ ...current, receiptNumber: undefined }));
    }
  }

  function updateComplaint<K extends keyof ComplaintFormData["complaint"]>(
    key: K,
    value: ComplaintFormData["complaint"][K],
  ) {
    setData((current) => ({
      ...current,
      complaint: { ...current.complaint, [key]: value },
    }));
    const errorKey = key === "type" ? "complaintType" : key;
    setErrors((current) => ({ ...current, [errorKey]: undefined }));
  }

  function handleReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(data);
    setErrors(nextErrors);

    const firstError = fieldOrder.find((field) => nextErrors[field]);
    if (firstError) {
      requestAnimationFrame(() => {
        const target = formRef.current?.querySelector<HTMLElement>(`[name="${firstError}"]`);
        target?.focus();
        target?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "center" });
      });
      return;
    }

    setView("review");
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  }

  return (
    <section className="complaint-page relative overflow-hidden bg-background pb-24 text-[#302E2A] sm:pb-32">
      <div className="pointer-events-none absolute -right-40 top-0 size-[30rem] rounded-full bg-[#3F7D4F]/10 blur-[110px] print:hidden" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-48 top-[34rem] size-[28rem] rounded-full bg-[#FF8A00]/10 blur-[110px] print:hidden" aria-hidden="true" />

      <Container className="relative">
        <header className="mx-auto max-w-3xl pb-12 pt-16 sm:pb-16 sm:pt-20">
          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease }}
            className="text-xs font-black uppercase tracking-[0.24em] text-[#3F7D4F]"
          >
            Libro de Reclamaciones
          </motion.p>
          <motion.h1
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05, ease }}
            className="font-accent mt-4 text-[clamp(3.4rem,9vw,6rem)] leading-[0.88] text-[#FF8A00]"
          >
            Queremos escucharte.
          </motion.h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#302E2A]/70 sm:text-lg">
            Si algo no salió como esperabas, cuéntanos qué ocurrió.
          </p>

          <div className="complaint-print-section mt-9 border-l-2 border-[#3F7D4F] pl-4 text-sm leading-6">
            <p className="font-black text-[#073B3A]">{legalConfig.commercialName}</p>
            <p>{legalConfig.legalName}</p>
            <p>RUC {legalConfig.ruc}</p>
            <p>{legalConfig.establishmentAddress}</p>
            <p className="text-[#302E2A]/65">Código de establecimiento: {legalConfig.establishmentCode}</p>
          </div>

          <dl className="mt-7 grid gap-3 text-sm sm:grid-cols-2">
            <div><dt className="font-bold text-[#073B3A]">Fecha</dt><dd>{date}</dd></div>
            <div><dt className="font-bold text-[#073B3A]">Hoja de reclamación</dt><dd>Se generará al registrar</dd></div>
          </dl>
        </header>

        <AnimatePresence mode="wait" initial={false}>
          {view === "form" ? (
            <motion.form
              key="form"
              ref={formRef}
              onSubmit={handleReview}
              noValidate
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease }}
              className="mx-auto grid max-w-3xl gap-7"
            >
              <FormSection number="01" title="Tus datos" reducedMotion={reducedMotion}>
                <div className="grid gap-5">
                  <Field id="fullName" label="Nombre completo" required error={errors.fullName}>
                    <input id="fullName" name="fullName" autoComplete="name" value={data.consumer.fullName} onChange={(event) => updateConsumer("fullName", event.target.value)} aria-invalid={Boolean(errors.fullName)} aria-describedby={describedBy("fullName", errors.fullName)} className={inputClass} />
                  </Field>
                  <Field id="address" label="Domicilio" required error={errors.address}>
                    <input id="address" name="address" autoComplete="street-address" value={data.consumer.address} onChange={(event) => updateConsumer("address", event.target.value)} aria-invalid={Boolean(errors.address)} aria-describedby={describedBy("address", errors.address)} className={inputClass} />
                  </Field>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="documentType" label="Tipo de documento" required error={errors.documentType}>
                      <select id="documentType" name="documentType" value={data.consumer.documentType} onChange={(event) => updateConsumer("documentType", event.target.value as DocumentType)} aria-invalid={Boolean(errors.documentType)} aria-describedby={describedBy("documentType", errors.documentType)} className={inputClass}>
                        <option value="DNI">DNI</option>
                        <option value="CE">Carné de Extranjería</option>
                      </select>
                    </Field>
                    <Field id="documentNumber" label="Número de documento" required error={errors.documentNumber}>
                      <input id="documentNumber" name="documentNumber" inputMode={data.consumer.documentType === "DNI" ? "numeric" : "text"} maxLength={data.consumer.documentType === "DNI" ? 8 : 15} value={data.consumer.documentNumber} onChange={(event) => updateConsumer("documentNumber", event.target.value)} aria-invalid={Boolean(errors.documentNumber)} aria-describedby={describedBy("documentNumber", errors.documentNumber)} className={inputClass} />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="phone" label="Teléfono" required error={errors.phone}>
                      <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" value={data.consumer.phone} onChange={(event) => updateConsumer("phone", event.target.value)} aria-invalid={Boolean(errors.phone)} aria-describedby={describedBy("phone", errors.phone)} className={inputClass} />
                    </Field>
                    <Field id="email" label="Correo electrónico" required error={errors.email}>
                      <input id="email" name="email" type="email" inputMode="email" autoComplete="email" value={data.consumer.email} onChange={(event) => updateConsumer("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={describedBy("email", errors.email)} className={inputClass} />
                    </Field>
                  </div>

                  <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-[#EAF2E7] p-4 text-sm font-bold text-[#073B3A]">
                    <input type="checkbox" name="isMinor" checked={data.consumer.isMinor} onChange={(event) => handleMinorChange(event.target.checked)} className="mt-0.5 size-4 accent-[#3F7D4F]" />
                    El consumidor es menor de edad
                  </label>

                  <AnimatePresence initial={false}>
                    {data.consumer.isMinor && (
                      <motion.div initial={reducedMotion ? false : { opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={reducedMotion ? undefined : { opacity: 0, height: 0 }} transition={{ duration: 0.3, ease }} className="grid gap-5 overflow-hidden border-t border-[#302E2A]/12 pt-5">
                        <h3 className="text-xs font-black uppercase tracking-[0.16em] text-[#3F7D4F]">Padre, madre o representante</h3>
                        <Field id="representativeFullName" label="Nombre completo" required error={errors.representativeFullName}>
                          <input id="representativeFullName" name="representativeFullName" autoComplete="name" value={data.consumer.parentOrGuardian.fullName} onChange={(event) => updateRepresentative("fullName", event.target.value)} aria-invalid={Boolean(errors.representativeFullName)} aria-describedby={describedBy("representativeFullName", errors.representativeFullName)} className={inputClass} />
                        </Field>
                        <Field id="representativeAddress" label="Domicilio" required error={errors.representativeAddress}>
                          <input id="representativeAddress" name="representativeAddress" autoComplete="street-address" value={data.consumer.parentOrGuardian.address} onChange={(event) => updateRepresentative("address", event.target.value)} aria-invalid={Boolean(errors.representativeAddress)} aria-describedby={describedBy("representativeAddress", errors.representativeAddress)} className={inputClass} />
                        </Field>
                        <div className="grid gap-5 sm:grid-cols-2">
                          <Field id="representativeDocumentType" label="Tipo de documento" required error={errors.representativeDocumentType}>
                            <select id="representativeDocumentType" name="representativeDocumentType" value={data.consumer.parentOrGuardian.documentType} onChange={(event) => updateRepresentative("documentType", event.target.value as DocumentType)} aria-invalid={Boolean(errors.representativeDocumentType)} aria-describedby={describedBy("representativeDocumentType", errors.representativeDocumentType)} className={inputClass}>
                              <option value="DNI">DNI</option>
                              <option value="CE">Carné de Extranjería</option>
                            </select>
                          </Field>
                          <Field id="representativeDocumentNumber" label="Número de documento" required error={errors.representativeDocumentNumber}>
                            <input id="representativeDocumentNumber" name="representativeDocumentNumber" inputMode={data.consumer.parentOrGuardian.documentType === "DNI" ? "numeric" : "text"} maxLength={data.consumer.parentOrGuardian.documentType === "DNI" ? 8 : 15} value={data.consumer.parentOrGuardian.documentNumber} onChange={(event) => updateRepresentative("documentNumber", event.target.value)} aria-invalid={Boolean(errors.representativeDocumentNumber)} aria-describedby={describedBy("representativeDocumentNumber", errors.representativeDocumentNumber)} className={inputClass} />
                          </Field>
                        </div>
                        <div className="grid gap-5 sm:grid-cols-2">
                          <Field id="representativePhone" label="Teléfono" required error={errors.representativePhone}>
                            <input id="representativePhone" name="representativePhone" type="tel" inputMode="tel" autoComplete="tel" value={data.consumer.parentOrGuardian.phone} onChange={(event) => updateRepresentative("phone", event.target.value)} aria-invalid={Boolean(errors.representativePhone)} aria-describedby={describedBy("representativePhone", errors.representativePhone)} className={inputClass} />
                          </Field>
                          <Field id="representativeEmail" label="Correo electrónico" required error={errors.representativeEmail}>
                            <input id="representativeEmail" name="representativeEmail" type="email" inputMode="email" autoComplete="email" value={data.consumer.parentOrGuardian.email} onChange={(event) => updateRepresentative("email", event.target.value)} aria-invalid={Boolean(errors.representativeEmail)} aria-describedby={describedBy("representativeEmail", errors.representativeEmail)} className={inputClass} />
                          </Field>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FormSection>

              <FormSection number="02" title="Sobre tu compra" reducedMotion={reducedMotion}>
                <div className="grid gap-6">
                  <fieldset>
                    <legend className="mb-3 text-sm font-bold">Tipo de bien contratado <span aria-hidden="true" className="text-[#FF8A00]">*</span></legend>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <ChoiceCard<ContractedItemType> name="contractedItemType" value="product" checked={data.contractedItem.type === "product"} title="Producto" onChange={(value) => updateItem("type", value)} />
                      <ChoiceCard<ContractedItemType> name="contractedItemType" value="service" checked={data.contractedItem.type === "service"} title="Servicio" onChange={(value) => updateItem("type", value)} />
                    </div>
                  </fieldset>

                  <Field id="amount" label="Monto reclamado" error={errors.amount} hint="Puedes dejarlo vacío si no corresponde.">
                    <div className="flex rounded-xl border-2 border-[#302E2A]/20 bg-background focus-within:border-[#FF8A00] focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[#FF8A00]">
                      <span className="grid min-h-12 place-items-center border-r border-[#302E2A]/15 px-4 font-bold text-[#073B3A]" aria-hidden="true">S/</span>
                      <input id="amount" name="amount" type="number" inputMode="decimal" min="0" step="0.01" value={data.contractedItem.amount} onChange={(event) => updateItem("amount", event.target.value)} aria-invalid={Boolean(errors.amount)} aria-describedby={describedBy("amount", errors.amount, true)} className="min-h-12 min-w-0 flex-1 bg-transparent px-4 outline-none" />
                    </div>
                  </Field>

                  <Field id="description" label="Descripción del producto o servicio" required error={errors.description}>
                    <textarea id="description" name="description" value={data.contractedItem.description} onChange={(event) => updateItem("description", event.target.value)} placeholder="Ej. bebida, pedido o servicio recibido" aria-invalid={Boolean(errors.description)} aria-describedby={describedBy("description", errors.description)} className={textareaClass} />
                  </Field>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="receiptType" label="Comprobante de pago" required error={errors.receiptType}>
                      <select id="receiptType" name="receiptType" value={data.contractedItem.receiptType} onChange={(event) => handleReceiptTypeChange(event.target.value as ReceiptType)} aria-invalid={Boolean(errors.receiptType)} aria-describedby={describedBy("receiptType", errors.receiptType)} className={inputClass}>
                        <option value="receipt">Boleta</option>
                        <option value="invoice">Factura</option>
                        <option value="other">Otro</option>
                        <option value="none">No cuento con comprobante</option>
                      </select>
                    </Field>
                    <AnimatePresence initial={false}>
                      {data.contractedItem.receiptType !== "none" && (
                        <motion.div initial={reducedMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={reducedMotion ? undefined : { opacity: 0 }} transition={{ duration: 0.2 }}>
                          <Field id="receiptNumber" label="Número de comprobante" required error={errors.receiptNumber}>
                            <input id="receiptNumber" name="receiptNumber" value={data.contractedItem.receiptNumber} onChange={(event) => updateItem("receiptNumber", event.target.value)} maxLength={40} aria-invalid={Boolean(errors.receiptNumber)} aria-describedby={describedBy("receiptNumber", errors.receiptNumber)} className={inputClass} />
                          </Field>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </FormSection>

              <FormSection number="03" title="Cuéntanos qué ocurrió" reducedMotion={reducedMotion}>
                <div className="grid gap-6">
                  <fieldset>
                    <legend className="mb-3 text-sm font-bold">Tipo de reclamación <span aria-hidden="true" className="text-[#FF8A00]">*</span></legend>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <ChoiceCard<ComplaintType> name="complaintType" value="claim" checked={data.complaint.type === "claim"} title="Reclamo" description="Disconformidad relacionada con un producto o servicio." onChange={(value) => updateComplaint("type", value)} />
                      <ChoiceCard<ComplaintType> name="complaintType" value="complaint" checked={data.complaint.type === "complaint"} title="Queja" description="Malestar relacionado con la atención al público." onChange={(value) => updateComplaint("type", value)} />
                    </div>
                  </fieldset>

                  <Field id="detail" label="Detalle" required error={errors.detail} hint="Cuéntanos brevemente qué ocurrió.">
                    <textarea id="detail" name="detail" value={data.complaint.detail} onChange={(event) => updateComplaint("detail", event.target.value)} aria-invalid={Boolean(errors.detail)} aria-describedby={describedBy("detail", errors.detail, true)} className={textareaClass} />
                  </Field>

                  <Field id="request" label="¿Qué solución solicitas?" required error={errors.request} hint="Indica de forma concreta qué esperas como respuesta.">
                    <textarea id="request" name="request" value={data.complaint.request} onChange={(event) => updateComplaint("request", event.target.value)} aria-invalid={Boolean(errors.request)} aria-describedby={describedBy("request", errors.request, true)} className={textareaClass} />
                  </Field>

                  <fieldset aria-describedby={describedBy("responseMethod", errors.responseMethod)}>
                    <legend className="mb-3 text-sm font-bold">¿Cómo deseas recibir nuestra respuesta? <span aria-hidden="true" className="text-[#FF8A00]">*</span></legend>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <ChoiceCard<ResponseMethod> name="responseMethod" value="email" checked={data.complaint.responseMethod === "email"} title="Correo electrónico" description="Recibirás la respuesta en el correo indicado." onChange={(value) => updateComplaint("responseMethod", value)} />
                      <ChoiceCard<ResponseMethod> name="responseMethod" value="letter" checked={data.complaint.responseMethod === "letter"} title="Carta a mi domicilio" description="La respuesta será enviada al domicilio indicado." onChange={(value) => updateComplaint("responseMethod", value)} />
                    </div>
                    <ErrorMessage id="responseMethod" message={errors.responseMethod} />
                  </fieldset>
                </div>
              </FormSection>

              <aside className="rounded-2xl bg-[#073B3A] p-5 text-sm leading-6 text-[#FFF7E8] sm:p-6">
                <p>La formulación de un reclamo no impide acudir a otras vías de solución de controversias ni constituye un requisito previo para presentar una denuncia ante Indecopi.</p>
                <p className="mt-3 font-bold">El proveedor debe responder el reclamo o queja en un plazo máximo de 15 días hábiles improrrogables.</p>
              </aside>

              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-sm leading-6 text-[#302E2A]/65">Versión de preparación: los datos ingresados no se envían ni se almacenan.</p>
                {/* Espacio reservado para el enlace a /politica-de-privacidad. */}
                <Button type="submit" className="w-full bg-[#FF8A00] px-7 text-[#302E2A] sm:w-auto">
                  Revisar reclamación
                </Button>
              </div>
            </motion.form>
          ) : (
            <motion.div key="review" initial={reducedMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease }} className="mx-auto max-w-3xl">
              <div className="mb-7 flex flex-col gap-4 border-y-2 border-[#9F321D] py-5 text-[#9F321D] sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em]">Vista de revisión</p>
                  <h2 ref={reviewHeadingRef} tabIndex={-1} className="mt-1 text-2xl font-black outline-none">BORRADOR — NO REGISTRADO</h2>
                </div>
                <FileText className="size-8 print:hidden" aria-hidden="true" />
              </div>

              <div className="grid gap-6">
                <section className="complaint-print-section rounded-2xl border border-[#302E2A]/20 bg-white p-5 sm:p-7">
                  <h3 className="mb-5 text-xl font-black text-[#073B3A]"><span className="mr-2 font-accent text-2xl text-[#FF8A00]">01</span>Tus datos</h3>
                  <dl className="grid gap-5 sm:grid-cols-2">
                    <ReviewItem label="Nombre completo" value={data.consumer.fullName.trim()} />
                    <ReviewItem label="Documento" value={`${data.consumer.documentType}: ${data.consumer.documentNumber.trim()}`} />
                    <ReviewItem label="Domicilio" value={data.consumer.address.trim()} />
                    <ReviewItem label="Teléfono" value={data.consumer.phone.trim()} />
                    <ReviewItem label="Correo electrónico" value={data.consumer.email.trim()} />
                    <ReviewItem label="Menor de edad" value={data.consumer.isMinor ? "Sí" : "No"} />
                  </dl>
                  {data.consumer.isMinor && (
                    <div className="mt-6 border-t border-[#302E2A]/12 pt-5">
                      <h4 className="mb-5 text-xs font-black uppercase tracking-[0.14em] text-[#3F7D4F]">Padre, madre o representante</h4>
                      <dl className="grid gap-5 sm:grid-cols-2">
                        <ReviewItem label="Nombre completo" value={data.consumer.parentOrGuardian.fullName.trim()} />
                        <ReviewItem label="Documento" value={`${data.consumer.parentOrGuardian.documentType}: ${data.consumer.parentOrGuardian.documentNumber.trim()}`} />
                        <ReviewItem label="Domicilio" value={data.consumer.parentOrGuardian.address.trim()} />
                        <ReviewItem label="Teléfono" value={data.consumer.parentOrGuardian.phone.trim()} />
                        <ReviewItem label="Correo electrónico" value={data.consumer.parentOrGuardian.email.trim()} />
                      </dl>
                    </div>
                  )}
                </section>

                <section className="complaint-print-section rounded-2xl border border-[#302E2A]/20 bg-white p-5 sm:p-7">
                  <h3 className="mb-5 text-xl font-black text-[#073B3A]"><span className="mr-2 font-accent text-2xl text-[#FF8A00]">02</span>Sobre tu compra</h3>
                  <dl className="grid gap-5 sm:grid-cols-2">
                    <ReviewItem label="Bien contratado" value={data.contractedItem.type === "product" ? "Producto" : "Servicio"} />
                    <ReviewItem label="Monto reclamado" value={data.contractedItem.amount ? `S/ ${Number(data.contractedItem.amount).toFixed(2)}` : "No indicado"} />
                    <div className="sm:col-span-2"><ReviewItem label="Descripción" value={data.contractedItem.description.trim()} /></div>
                    <ReviewItem label="Comprobante" value={{ receipt: "Boleta", invoice: "Factura", other: "Otro", none: "No cuento con comprobante" }[data.contractedItem.receiptType]} />
                    {data.contractedItem.receiptType !== "none" && <ReviewItem label="N.º comprobante" value={data.contractedItem.receiptNumber.trim()} />}
                  </dl>
                </section>

                <section className="complaint-print-section rounded-2xl border border-[#302E2A]/20 bg-white p-5 sm:p-7">
                  <h3 className="mb-5 text-xl font-black text-[#073B3A]"><span className="mr-2 font-accent text-2xl text-[#FF8A00]">03</span>Reclamación</h3>
                  <dl className="grid gap-5">
                    <ReviewItem label="Tipo" value={data.complaint.type === "claim" ? "Reclamo" : "Queja"} />
                    <ReviewItem label="Detalle" value={data.complaint.detail.trim()} />
                    <ReviewItem label="Solución solicitada" value={data.complaint.request.trim()} />
                    <ReviewItem label="Medio de respuesta" value={data.complaint.responseMethod === "email" ? "Correo electrónico" : "Carta a mi domicilio"} />
                  </dl>
                </section>

                <section className="complaint-print-section rounded-2xl border border-dashed border-[#302E2A]/30 bg-white/65 p-5 sm:p-7">
                  <h3 className="mb-5 text-xl font-black text-[#073B3A]"><span className="mr-2 font-accent text-2xl text-[#FF8A00]">04</span>Uso del proveedor</h3>
                  <dl className="grid gap-5">
                    <ReviewItem label="Fecha de comunicación de la respuesta" value="Pendiente" />
                    <ReviewItem label="Observaciones / acciones adoptadas" value="Pendiente" />
                  </dl>
                </section>
              </div>

              <div className="mt-7 flex flex-col gap-3 print:hidden sm:flex-row sm:justify-end">
                <Button type="button" variant="ghost" onClick={() => setView("form")} className="border-[#073B3A] text-[#073B3A]">Volver a editar</Button>
                <Button type="button" onClick={() => window.print()} className="gap-2 bg-[#FF8A00] text-[#302E2A]"><Printer className="size-4" aria-hidden="true" />Imprimir borrador</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  );
}
