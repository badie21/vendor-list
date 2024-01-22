export const numberSeprator = (value: string | number) => {
  const num = Number(value);
  if (isNaN(num)) return 'invalid number';

  return num.toLocaleString('fa');
};
