export function debounce(callback, limit = 100) {
  let inDebounce;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => {
      callback.apply(context, args);
    }, limit);
  };
}
