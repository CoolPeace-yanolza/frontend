export const sliceName = (name: string, max = 7) => {
  return name.length <= max ? name : name.slice(0, max) + '…';
};
