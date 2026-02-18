export default interface Book {
  id: number;
  created_at: string;
  title: string;
  cover_url: string;
  metadata: {
    author: string;
    date_written: string;
    synopsis: string;
  };
}
