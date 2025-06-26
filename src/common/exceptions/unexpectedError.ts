import { CoreException } from './coreException';

export class UnexpectedError extends CoreException {
  static readonly CODE = 'UNER';

  constructor(message: string) {
    super({
      code: UnexpectedError.CODE,
      message,
      shortMessage: 'Unexpected error occurred',
    });
  }
}
