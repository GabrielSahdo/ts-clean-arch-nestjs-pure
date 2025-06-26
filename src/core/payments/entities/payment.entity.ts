import { generateUUID } from '../../utils/generateUUID.utils';

export class Payment {
  id: string;
  paid: boolean;
  paidAt: Date | null;

  private constructor(id: string, paid: boolean, paidAt: Date | null) {
    this.id = id;
    this.paid = paid;
    this.paidAt = paidAt;
  }

  static create(): Payment {
    return new Payment(generateUUID(), false, null);
  }

  static restore(id: string, paid: boolean, paidAt: Date | null): Payment {
    return new Payment(id, paid, paidAt);
  }
}
