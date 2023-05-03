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

export interface ISuggestedKeywordsListProps {
  keyword: string;
  isSelected: boolean;
  handleMouseEnter: () => void;
}

export interface IsSelectedProps {
  isSelected: boolean;
}
