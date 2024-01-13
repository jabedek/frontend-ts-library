declare function setItem(key: string, value: string | NonNullable<unknown> | undefined): void;
declare function getItem(key: string, parse?: boolean): NonNullable<unknown> | string | undefined;
declare function removeItem(key: string): void;
declare const _default: {
    setItem: typeof setItem;
    getItem: typeof getItem;
    removeItem: typeof removeItem;
};
export default _default;
