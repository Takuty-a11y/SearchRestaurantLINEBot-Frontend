export type QueryParam = {
  keyword: string | null;
  large_area: string | null;
  middle_area: string | null;
  genre: string | null;
  budget: string | null;
  sort: string | null;
  page?: number;
};

export type Genre = {
  code: string;
  name: string;
};

export type Budget = {
  code: string;
  name: string;
};

export type Sort = {
  code: string;
  name: string;
};
