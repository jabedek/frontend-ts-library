function setItem<T extends string>(
  key: T,
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

function getItem<T extends string>(
  key: T,
  parse = false
): NonNullable<unknown> | string | undefined {
  const itemData = localStorage.getItem(key);

  if (!itemData) {
    return undefined;
  }

  return parse ? JSON.parse(itemData) || undefined : itemData;
}

function removeItem<T extends string>(key: T): void {
  localStorage.removeItem(key);
}

export default {
  setItem,
  getItem,
  removeItem,
};
