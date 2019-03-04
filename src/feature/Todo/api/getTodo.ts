import httpService from '../../../core/services/http';

export const getTodo =  async () => {
  const path = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
  const { data } = await httpService.get({ path });
  return data;
}