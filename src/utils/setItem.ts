import { ISearchData } from '../types/global';

export const setItemWithExpireTime = (searchKeywords: string, searchValue: ISearchData[]) => {
  const searchValueObj = {
    searchValue,
    expire: Date.now() + 3600000,
  };
  localStorage.setItem(searchKeywords, JSON.stringify(searchValueObj));
};
