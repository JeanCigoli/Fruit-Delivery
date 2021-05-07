import fs from 'fs-extra';
import { resolve } from 'path';

export const removeFile = async (name: string) => {
  const filePath = resolve(__dirname, '..', '..', 'uploads', name);
  await fs.remove(filePath);
};
