class Debouncer {
  fn?: (...args: any) => any;
  timeout: number;
  debounced?: NodeJS.Timeout;

  constructor(timeout: number = 0) {
    this.timeout = timeout;
  }

  call(fn?: (...args: any) => any) {
    this.fn = fn;
    clearInterval(this.debounced);
    this.debounced = setTimeout(() => this.fn && this.fn(), this.timeout);
  }
}

export default Debouncer;
