export const CapitalFirstLetter = (name: string) => {
  return name.replace(/(^|[\s-])\S/g, match => match.toUpperCase());
};
export const isImage = (url: string) => {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
};
