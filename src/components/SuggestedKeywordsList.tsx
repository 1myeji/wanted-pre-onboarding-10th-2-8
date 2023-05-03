import styled from 'styled-components';
import SearchIcon from './SearchIcon';

const SuggestedKeywordsList = () => {
  return (
    <SuggestedKeywordsWrapper>
      <SearchIcon />
      <p>갑상선</p>
    </SuggestedKeywordsWrapper>
  );
};

export default SuggestedKeywordsList;

const SuggestedKeywordsWrapper = styled.div`
  display: flex;
  margin: 8px 0;
`;
