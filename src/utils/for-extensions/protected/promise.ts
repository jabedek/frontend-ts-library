function fireAndForgetFn(promise: Promise<any>, printError = false): void {
  promise.then().catch((e) => {
    if (printError) {
      console.error(e);
    } else {
      // Swallow error by design in "Fire and Forget" mode.
    }
  });
}

export default { fireAndForgetFn };
