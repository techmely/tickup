export interface NormalizedException {
  message: string;
  code: string;
  correlationId: string;
  stack?: string;
  cause?: string;
  /**
   * ^ Consider adding optional `metadata` object to
   * exceptions (if language doesn't support anything
   * similar by default) and pass some useful technical
   * information about the exception when throwing.
   * This will make debugging easier.
   */
  metadata?: unknown;
}

export abstract class ExceptionBase extends Error {
  abstract code: string;
  readonly correlationId: string;

  constructor(readonly message: string, cause?: Error, readonly metadata?: unknown) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
    const ctx = {
      requestId: "1",
    };
    this.correlationId = ctx.requestId;
  }
}
