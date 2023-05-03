import axios from 'axios';

export const searchApi = async (keyword: string) => {
  try {
    const res = await axios.get(`/api/api/v1/search-conditions/?name=${keyword}`);
    console.info('calling api');
    return res.data;
  } catch (e) {
    console.error('API 호출 중 오류 발생:', e);
    return { error: '데이터를 불러오는 데 실패했습니다. 다시 시도해 주세요.' };
  }
};
