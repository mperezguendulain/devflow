// biome-ignore lint/suspicious/noExplicitAny: This function needs to be generic
export const debounceFn = (fn: (...args: any[]) => any, ms: number) => {
  let timerId: number;
  // biome-ignore lint/suspicious/noExplicitAny: This function needs to be generic
  return (...args: any[]) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(fn, ms, ...args);
  };
};
