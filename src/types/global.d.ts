export interface IsFocusedProps {
  isFocused: boolean;
  searchKeywords?: string;
}

export interface ISearchData {
  name: string;
  id: number;
}

export interface ISuggestedKeywordsProps {
  isFocused: boolean;
  searchKeywords: string;
  changeKeyword: string;
}
