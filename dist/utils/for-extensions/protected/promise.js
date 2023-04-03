function fireAndForgetFn(promise, printError = false) {
    promise.then().catch((e) => {
        if (printError) {
            console.error(e);
        }
        else {
            // Swallow error by design in "Fire and Forget" mode.
        }
    });
}
export default { fireAndForgetFn };
//# sourceMappingURL=promise.js.map