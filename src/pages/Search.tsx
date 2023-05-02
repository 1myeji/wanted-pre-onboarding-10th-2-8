import { useRef, useState } from 'react';
import styled from 'styled-components';
import { IsFocusedProps } from '../types/global';

const Search = () => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = () => {
    setIsFocused(true);
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <MainContainer>
      <SearchHeader>
        국내 모든 임상시험 검색하고 <br />
        온라인으로 참여하기
      </SearchHeader>
      <SearchInputWrapper>
        <InputSection onClick={handleInputFocus}>
          <SearchIconWrapper isFocused={isFocused}>
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.56 0a6.56 6.56 0 015.255 10.49L16 14.674 14.675 16l-4.186-4.184A6.56 6.56 0 116.561 0zm0 1.875a4.686 4.686 0 100 9.372 4.686 4.686 0 000-9.372z"></path>
            </svg>
          </SearchIconWrapper>
          <PlaceholderText isFocused={isFocused}>질환명을 입력해 주세요.</PlaceholderText>
          <SearchInput
            type="text"
            ref={inputRef}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </InputSection>
        <SearchBtn>
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.56 0a6.56 6.56 0 015.255 10.49L16 14.674 14.675 16l-4.186-4.184A6.56 6.56 0 116.561 0zm0 1.875a4.686 4.686 0 100 9.372 4.686 4.686 0 000-9.372z"></path>
          </svg>
        </SearchBtn>
      </SearchInputWrapper>
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
  justify-content: center;
  flex-direction: column;
`;

const SearchHeader = styled.h2`
  font-size: 2.125rem;
  letter-spacing: -0.018em;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 40px;
`;

const SearchInputWrapper = styled.div`
  width: 470px;
  border-radius: 42px;
  border: 2px solid #fff;
  font-size: 1rem;
  font-weight: 400;
  color: #a7afb7;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 20px 10px 20px 24px;
  justify-content: space-between;
`;

const InputSection = styled.div`
  position: relative;
  width: 100%;
  cursor: text;
`;

const SearchIconWrapper = styled.div<IsFocusedProps>`
  position: absolute;
  display: ${({ isFocused }) => (isFocused ? 'none' : 'block')};
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
  display: ${({ isFocused }) => (isFocused ? 'none' : 'block')};
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
