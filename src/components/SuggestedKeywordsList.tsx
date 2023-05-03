import styled from 'styled-components';
import SearchIcon from './SearchIcon';
import { ISuggestedKeywordsListProps, IsSelectedProps } from '../types/global';

const SuggestedKeywordsList = ({
  keyword,
  isSelected,
  handleMouseEnter,
}: ISuggestedKeywordsListProps) => {
  return (
    <SuggestedKeywordsWrapper isSelected={isSelected} onMouseEnter={handleMouseEnter}>
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
`;
