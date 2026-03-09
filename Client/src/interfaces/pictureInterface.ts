interface PictureMetadata {
  id: number;
  created_at: string;
  name: string;
  description: string;
  filename: string;
}

interface PictureUrl {
  id: number | string;
  fileName: string;
  url: string;
}

export type { PictureMetadata, PictureUrl };
