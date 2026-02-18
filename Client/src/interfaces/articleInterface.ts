export default interface Article {
  id: number;
  title: string;
  synopsis: string;
  content: {
    body: string;
    author: string;
  };
  date_written: string;
  slug: string;
}
