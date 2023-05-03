import styled from 'styled-components';
import SearchIcon from './SearchIcon';
import SuggestedKeywordsList from './SuggestedKeywordsList';

const SuggestedKeywords = () => {
  return (
    <KeywordsContainer>
      <SearchKeyWordsContainer>
        <SearchIcon />
        <p>갑상선</p>
      </SearchKeyWordsContainer>
      <SuggestedKeywordsContainer>
        <SuggestedKeywordsTitle>추천 검색어</SuggestedKeywordsTitle>
        {[1, 2, 3, 4, 5, 6].map((data: number) => (
          <SuggestedKeywordsList />
        ))}
      </SuggestedKeywordsContainer>
    </KeywordsContainer>
  );
};

export default SuggestedKeywords;

const KeywordsContainer = styled.div`
  margin-top: 8px;
  border-radius: 20px;
  background-color: rgb(255, 255, 255);
  padding-top: 24px;
  padding-bottom: 16px;
  box-shadow: rgba(30, 32, 37, 0.1) 0px 2px 10px;
  width: 500px;
  svg {
    width: 16px;
    height: 16px;
    color: rgb(167, 175, 183);
    margin-right: 10px;
    margin-top: 3px;
  }
`;

const SearchKeyWordsContainer = styled.div`
  padding: 8px 24px;
  display: flex;
`;

const SuggestedKeywordsContainer = styled(SearchKeyWordsContainer)`
  flex-direction: column;
`;

const SuggestedKeywordsTitle = styled.p`
  color: rgb(106, 115, 123);
  font-size: 13px;
  font-weight: 400;
`;
