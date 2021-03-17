const pipe = (...fs: Function[]) => {
  return (...v: number[]) => {
    return fs.reduce((acc, f, idx) => {
      if (idx === 0) {
        return f(...v);
      } else {
        return f(acc);
      }
    }, 0);
  };
};

const add = (a: number, b: number) => a + b;
const double = (a: number) => a * 2;

const fn = pipe(add, double);

const result = fn(1, 2); // 6
