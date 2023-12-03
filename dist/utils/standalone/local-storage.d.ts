declare function setItem<T extends string>(key: T, value: string | NonNullable<unknown> | undefined): void;
declare function getItem<T extends string>(key: T, parse?: boolean): NonNullable<unknown> | string | undefined;
declare function removeItem<T extends string>(key: T): void;
declare const _default: {
    setItem: typeof setItem;
    getItem: typeof getItem;
    removeItem: typeof removeItem;
};
export default _default;
