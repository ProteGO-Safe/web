const useDelayedAction = () => {
  const timeout = func =>
    setTimeout(() => {
      func();
    }, 200);

  return { timeout };
};

export default useDelayedAction;
