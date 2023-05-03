import styled from 'styled-components';
import SearchIcon from './SearchIcon';
import { ISuggestedKeywordsListProps, IsSelectedProps } from '../types/global';

const SuggestedKeywordsList = ({
  keyword,
  isSelected,
  handleMouseEnter,
  setSelectedIndex,
}: ISuggestedKeywordsListProps) => {
  return (
    <SuggestedKeywordsWrapper
      isSelected={isSelected}
      onMouseOver={handleMouseEnter}
      onMouseOut={() => setSelectedIndex(-1)}
    >
      <SearchIcon />
      <p>{keyword}</p>
    </SuggestedKeywordsWrapper>
  );
};

export default SuggestedKeywordsList;

const SuggestedKeywordsWrapper = styled.div<IsSelectedProps>`
  display: flex;
  padding: 8px 24px;
  background-color: ${({ isSelected }) => (isSelected ? '#f1f3f5' : 'transparent')};
  cursor: pointer;
`;
