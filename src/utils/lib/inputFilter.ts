export const inputFilter = (e: React.FormEvent<HTMLInputElement>) => {
  const inputValue = e.currentTarget.value;
  const filteredValue = inputValue.replace(/[^0-9]/g, '');

  if (inputValue !== filteredValue) {
    e.currentTarget.value = filteredValue;
  }
};
