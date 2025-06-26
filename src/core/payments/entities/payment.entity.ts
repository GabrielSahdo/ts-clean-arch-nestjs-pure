import { ResourceInvalidException } from 'src/common/exceptions/resourceInvalidException';
import { generateUUID } from '../../utils/generateUUID.utils';
import { CoreResponse } from 'src/common/DTOs/coreResponse';

export class Payment {
  id: string;
  paid: boolean;
  paidAt: Date | null;

  private constructor(id: string, paid: boolean, paidAt: Date | null) {
    this.id = id;
    this.paid = paid;
    this.paidAt = paidAt;
  }

  validate() {
    if (this.paid !== !!this.paid) {
      throw new ResourceInvalidException('Payment `paid` invalid');
    }
  }

  static create(): CoreResponse<Payment> {
    try {
      const payment = new Payment(generateUUID(), false, null);
      return [undefined, payment];
    } catch (error) {
      return [error, undefined];
    }
  }

  static restore(
    id: string,
    paid: boolean,
    paidAt: Date | null,
  ): CoreResponse<Payment> {
    try {
      const payment = new Payment(id, paid, paidAt);
      return [undefined, payment];
    } catch (error) {
      return [error, undefined];
    }
  }
}
