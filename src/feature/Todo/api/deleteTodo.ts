import httpService from '../../../core/services/http';

export const deleteTodoApi =  async (id: number) => {
  const path = `https://jsonplaceholder.typicode.com/todos/${id}`;
  const { data } = await httpService.delete({ path });
  return data;
}