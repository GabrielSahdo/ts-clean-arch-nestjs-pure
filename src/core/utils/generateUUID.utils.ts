export const generateUUID = (): string => {
  return [1e7].toString().replace(/[018]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    return (c === '1' ? r : (r & 0x3) | 0x8).toString(16);
  });
};
