export class CustomError extends Error {
  constructor(
    message: string,
    public statusCode: number
  ) {
    super(message);
    this.name = this.constructor.name;
  }

  static badRequest(message: string) {
    return new CustomError(message, 400);
  }
}
