import styled from 'styled-components';
import SearchIcon from './SearchIcon';

const SuggestedKeywordsList = ({ keyword }: { keyword: string }) => {
  return (
    <SuggestedKeywordsWrapper>
      <SearchIcon />
      <p>{keyword}</p>
    </SuggestedKeywordsWrapper>
  );
};

export default SuggestedKeywordsList;

const SuggestedKeywordsWrapper = styled.div`
  display: flex;
  margin: 8px 0;
`;
