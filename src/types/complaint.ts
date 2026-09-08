export type DocumentType = "DNI" | "CE";
export type ContractedItemType = "product" | "service";
export type ComplaintType = "claim" | "complaint";
export type ReceiptType = "receipt" | "invoice" | "other" | "none";
export type ResponseMethod = "email" | "letter";

export interface RepresentativeData {
  fullName: string;
  address: string;
  documentType: DocumentType;
  documentNumber: string;
  phone: string;
  email: string;
}

export interface ComplaintFormData {
  consumer: {
    fullName: string;
    address: string;
    documentType: DocumentType;
    documentNumber: string;
    phone: string;
    email: string;
    isMinor: boolean;
    parentOrGuardian: RepresentativeData;
  };
  contractedItem: {
    type: ContractedItemType;
    amount: string;
    description: string;
    receiptType: ReceiptType;
    receiptNumber: string;
  };
  complaint: {
    type: ComplaintType;
    detail: string;
    request: string;
    responseMethod: ResponseMethod;
  };
}
