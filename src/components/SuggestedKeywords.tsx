import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import SearchIcon from './SearchIcon';
import SuggestedKeywordsList from './SuggestedKeywordsList';
import { searchApi } from '../api/api';
import { ISearchData, ISuggestedKeywordsProps, IsFocusedProps } from '../types/global';
import { setItemWithExpireTime } from '../utils/setItem';
import { checkCacheExpired } from '../utils/checkCacheExpired';
import useKeyboardNavigation from '../hooks/useKeyboardNavigation ';

const SuggestedKeywords = ({
  isFocused,
  searchKeywords,
  changeKeyword,
}: ISuggestedKeywordsProps) => {
  const [searchData, setSearchData] = useState<ISearchData[]>([]);
  const { selectedIndex, setSelectedIndex } = useKeyboardNavigation(searchData.length);

  const fetchSearchData = useCallback(async (searchKeywords: string) => {
    if (searchKeywords) {
      const cachedData = checkCacheExpired(searchKeywords);
      if (cachedData) {
        return setSearchData(cachedData);
      } else {
        const result = await searchApi(searchKeywords);
        setSearchData(result);
        setItemWithExpireTime(searchKeywords, result);
      }
    } else {
      setSearchData([]);
    }
  }, []);

  useEffect(() => {
    fetchSearchData(searchKeywords);
  }, [searchKeywords, fetchSearchData]);

  return (
    <KeywordsContainer isFocused={isFocused}>
      <SearchKeyWordsContainer>
        <SearchIcon />
        <p>{changeKeyword}</p>
      </SearchKeyWordsContainer>
      <SuggestedKeywordsContainer>
        <SuggestedKeywordsTitle>추천 검색어</SuggestedKeywordsTitle>
        {searchData?.map((keyword: ISearchData, index: number) => (
          <SuggestedKeywordsList
            key={keyword?.id}
            keyword={keyword?.name}
            isSelected={index === selectedIndex}
            handleMouseEnter={() => setSelectedIndex(index)}
            setSelectedIndex={setSelectedIndex}
          />
        ))}
        {searchData?.length === 0 && <NoSearchResults>검색어 없음</NoSearchResults>}
      </SuggestedKeywordsContainer>
    </KeywordsContainer>
  );
};

export default SuggestedKeywords;

const KeywordsContainer = styled.div<IsFocusedProps>`
  display: ${({ isFocused }) => (isFocused ? 'block' : 'none')};
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
  display: flex;
  padding-left: 24px;
  padding-bottom: 10px;
`;

const SuggestedKeywordsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SuggestedKeywordsTitle = styled.p`
  color: rgb(106, 115, 123);
  font-size: 13px;
  font-weight: 400;
  padding-left: 24px;
  padding-bottom: 5px;
`;

const NoSearchResults = styled.p`
  margin-top: 8px;
  padding-left: 24px;
`;
