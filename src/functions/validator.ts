export const isArray = (obj: Array<object | string | number>) => obj && Array.isArray(obj);
export const isEmpty = (obj: Array<object | string | number>) => obj && obj.length === 0;
