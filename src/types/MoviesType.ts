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

export type imdbapiPrecisionDate ={ 
  year : number;
  month : number;
  day : number;
}

export type imdbapiReleaseDate ={
  releaseDate : imdbapiPrecisionDate;
}

export type ImdbTitle = {
  id: string;
  type: string;
  primaryTitle: string;
  primaryImage?: ImdbImage;
  startYear: number;
  endYear?: number;
  genres: string[];
  rating?: ImdbRating;
  plot?: string;
  releaseDate : imdbapiReleaseDate;
}

export type ImdbTitlesResponse = {
  titles: ImdbTitle[];
}