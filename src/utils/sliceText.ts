export const sliceText = (text: string, num: number): string => {
  return text?.length > num ? text.slice(0, num - 1) + "..." : text;
};
