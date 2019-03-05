import httpService from '../../../core/services/http';

export const deleteTodoApi =  async (id: number) => {
  const path = `https://jsonplaceholder.typicode.com/todos?_limit=${id}`;
  const { data } = await httpService.get({ path });
  return data;
}