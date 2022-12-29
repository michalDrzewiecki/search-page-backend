export const validatePrice = (input: string) => {
  if (!input || typeof input !== 'string') {
    return false;
  }
  const numericValue = +input;
  const isANumber = !isNaN(numericValue);
  return isANumber && numericValue > 0;
}
