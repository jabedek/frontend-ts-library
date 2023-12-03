function setItem(key, value) {
    if (value) {
        if (typeof value === "string") {
            localStorage.setItem(key, value);
        }
        else {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }
}
function getItem(key, parse = false) {
    const itemData = localStorage.getItem(key);
    if (!itemData) {
        return undefined;
    }
    return parse ? JSON.parse(itemData) || undefined : itemData;
}
function removeItem(key) {
    localStorage.removeItem(key);
}
export default {
    setItem,
    getItem,
    removeItem,
};
//# sourceMappingURL=local-storage.js.map