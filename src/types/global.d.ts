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
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

export interface IsSelectedProps {
  isSelected: boolean;
}
