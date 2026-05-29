export interface AccreditItem {
  id: string;
  title: string;
  organization: string;
  validUntil: string;
  status: "active" | "expired" | "pending";
  description: string;
}

export const accredData: AccreditItem[] = [];
