export const sliceName = (name: string) => {
  return name.length < 8 ? name : name.slice(0, 7) + '...';
};
