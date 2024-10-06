export const envUtils = {
  convertToBoolean(value: string): boolean {
    return value === 'true';
  },

  convertToNumber(value: string): number {
    return Number(value);
  },

  convertToArray(value: string): Array<string> {
    return value?.split(',').map((item) => item.trim());
  },
};
