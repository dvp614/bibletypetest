export const getLoc = (field: any, language: string): string => {
  if (typeof field === 'string') return field;
  if (Array.isArray(field)) return field.join(', ');
  if (field && typeof field === 'object') return field[language] || field.ko || '';
  return '';
};

export const getLocArray = (field: any, language: string): string[] => {
  if (Array.isArray(field)) return field;
  if (field && typeof field === 'object' && Array.isArray(field[language])) return field[language];
  if (field && typeof field === 'object' && Array.isArray(field.ko)) return field.ko;
  return [];
};
