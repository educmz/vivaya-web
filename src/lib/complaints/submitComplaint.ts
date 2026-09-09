import type { ComplaintFormData } from "@/types/complaint";

export const submissionEnabled = false;

export async function submitComplaint(
  complaint: ComplaintFormData,
): Promise<never> {
  void complaint;

  // TODO: Conectar posteriormente con el endpoint de reclamaciones. El backend
  // deberá generar el correlativo, persistir la reclamación, enviar la copia al
  // consumidor y notificar a Vivaya.
  throw new Error("Complaint submission is not configured.");
}
