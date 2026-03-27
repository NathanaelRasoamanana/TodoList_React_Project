export type ApiProps = {
  id: number;
  name: string;
  image: { medium: string };
  genres: string[];
  rating: { average: number };
  summary: string;
}