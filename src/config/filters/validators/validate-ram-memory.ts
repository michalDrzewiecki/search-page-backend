export const validateRamMemory = (input: string) => {
  if (!input || typeof input !== 'string') {
    return false;
  }
  const numericValue = +input;
  const isANumber = !isNaN(numericValue);
  return isANumber && Number.isInteger(numericValue) && numericValue >= 1 && numericValue <= 128;
}
