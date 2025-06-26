import { CoreException } from './coreException';

export class NotFoundException extends CoreException {
  static readonly CODE = 'NF404';

  constructor(message: string) {
    super({
      code: NotFoundException.CODE,
      message,
      shortMessage: 'Resource not found',
    });
  }
}
