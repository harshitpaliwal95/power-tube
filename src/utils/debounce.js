export const debounce = function (fun, delay) {
  let timer;
  return function () {
    let context = this;

    clearTimeout(timer);

    timer = setTimeout(() => {
      fun.apply(context, arguments);
    }, delay);
  };
};
