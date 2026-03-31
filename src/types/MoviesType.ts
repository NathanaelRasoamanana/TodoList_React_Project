export type ImdbImage = {
  url: string;
  width: number;
  height: number;
  type: string;
}

export type ImdbRating = {
  aggregateRating: number;
  voteCount: number;
}

export type ImdbTitle = {
  id: string;
  type: string;
  primaryTitle: string;
  primaryImage?: ImdbImage;
  genres: string[];
  rating?: ImdbRating;
  plot?: string;
  dates : string[];
}

export type ImdbTitlesResponse = {
  titles: ImdbTitle[];
}