export interface ImdbImage {
  url: string;
  width: number;
  height: number;
  type: string;
}

export interface ImdbRating {
  aggregateRating: number;
  voteCount: number;
}

export interface ImdbTitle {
  id: string;
  type: string;
  primaryTitle: string;
  primaryImage?: ImdbImage;
  startYear: number;
  endYear?: number;
  genres: string[];
  rating?: ImdbRating;
  plot?: string;
}

export interface ImdbTitlesResponse {
  titles: ImdbTitle[];
}