import { ChangeEvent, useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { IsFocusedProps } from '../types/global';
import SearchIcon from '../components/SearchIcon';
import SuggestedKeywords from '../components/SuggestedKeywords';
import useDebounce from '../hooks/useDebounce';

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchKeywords, setSearchKeywords] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const debouncedSearchKeywords = useDebounce(searchKeywords);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
    if (inputRef.current) inputRef.current.focus();
  }, []);

  const handleChangeSearchKeywords = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchKeywords(event.target.value);
  };

  return (
    <MainContainer>
      <SearchHeader>
        국내 모든 임상시험 검색하고 <br />
        온라인으로 참여하기
      </SearchHeader>
      <SearchInputWrapper isFocused={isFocused}>
        <InputSection onClick={handleInputFocus} className="안녕">
          <SearchIconWrapper isFocused={isFocused} searchKeywords={searchKeywords}>
            <SearchIcon />
          </SearchIconWrapper>
          <PlaceholderText isFocused={isFocused} searchKeywords={searchKeywords}>
            질환명을 입력해 주세요.
          </PlaceholderText>
          <SearchInput
            type="text"
            ref={inputRef}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={handleChangeSearchKeywords}
          />
        </InputSection>
        <SearchBtn>
          <SearchIcon />
        </SearchBtn>
      </SearchInputWrapper>
      <SuggestedKeywords
        isFocused={isFocused}
        searchKeywords={debouncedSearchKeywords}
        changeKeyword={searchKeywords}
      />
    </MainContainer>
  );
};

export default Search;

const MainContainer = styled.main`
  background-color: #cae9ff;
  width: 100%;
  min-height: calc(100vh - 120px);
  display: flex;
  align-items: center;
  padding: 80px 0 160px;
  flex-direction: column;
`;

const SearchHeader = styled.h2`
  font-size: 2.125rem;
  letter-spacing: -0.018em;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 40px;
`;

const SearchInputWrapper = styled.div<IsFocusedProps>`
  width: 470px;
  border-radius: 42px;
  border: 2px solid;
  font-size: 1rem;
  font-weight: 400;
  color: #a7afb7;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 20px 10px 20px 24px;
  justify-content: space-between;
  border-color: ${({ isFocused }) => (isFocused ? '#007be9' : '#fff')};
`;

const InputSection = styled.div`
  position: relative;
  width: 100%;
  cursor: text;
`;

const SearchIconWrapper = styled.div<IsFocusedProps>`
  position: absolute;
  display: ${({ isFocused, searchKeywords }) => (isFocused || searchKeywords ? 'none' : 'block')};
  svg {
    width: 16px;
    height: 16px;
    margin-right: 12px;
    margin-top: 3px;
  }
`;

const PlaceholderText = styled.div<IsFocusedProps>`
  position: absolute;
  left: 28px;
  display: ${({ isFocused, searchKeywords }) => (isFocused || searchKeywords ? 'none' : 'block')};
`;

const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
`;

const SearchBtn = styled.button`
  border: 0;
  cursor: pointer;
  background-color: #007be9;
  color: #ffffff;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  svg {
    width: 21px;
    height: 21px;
  }
`;
