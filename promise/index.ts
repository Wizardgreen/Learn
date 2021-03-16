enum StateEnum {
  PENDING = "PENDING",
  FULFILLED = "FULFILLED",
}

class CPromise {
  value: any;
  currentState: keyof typeof StateEnum = StateEnum.PENDING;
  deferred = null;

  constructor(fn: Function) {
    fn(this.resolve.bind(this));
  }

  resolve(newValue) {
    this.currentState = StateEnum.FULFILLED;
    this.value = newValue;

    if (this.deferred) {
      this.deferred(this.value);
    }
  }

  then(onResolve: Function) {
    this.handle(onResolve);
  }

  handle(onResolve) {
    if (this.currentState === StateEnum.PENDING) {
      this.deferred = onResolve;
      return;
    }
    onResolve(this.value);
  }
}

const promise = new CPromise((resolve) => {
  const result = "the answer";
  setTimeout(() => {
    resolve(result);
  }, 2000);
});

promise.then((res) => console.log(res));
