// utils/getDataUri.ts
import DataUriParser from "datauri/parser.js";
import path from "path";

interface File {
  originalname: string;
  buffer: Buffer;
}

const getDataUri = (file: File): { content: string } => {
  const parser = new DataUriParser();
  const extName = path.extname(file.originalname).toString();
  const dataUri = parser.format(extName, file.buffer);
  if (!dataUri || !dataUri.content) {
    throw new Error("Failed to generate Data URI");
  }
  return { content: dataUri.content };
};

export default getDataUri;
