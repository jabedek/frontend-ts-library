function setItem(
  key: string,
  value: string | NonNullable<unknown> | undefined
): void {
  if (value) {
    if (typeof value === "string") {
      localStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
}

function getItem(
  key: string,
  parse = false
): NonNullable<unknown> | string | undefined {
  const itemData = localStorage.getItem(key);

  if (!itemData) {
    return undefined;
  }

  return parse ? JSON.parse(itemData) || undefined : itemData;
}

function removeItem(key: string): void {
  localStorage.removeItem(key);
}

export default {
  setItem,
  getItem,
  removeItem,
};
