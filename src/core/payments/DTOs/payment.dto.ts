export interface PaymentDto {
  id: string;
  paid: boolean;
  paidAt: Date | null;
}
