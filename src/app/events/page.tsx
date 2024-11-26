import { fetchWrapper } from '@/util/fetch';
import type { Event } from '@/app/api/events/route';
import View from './(view)';
import { ListResponse } from '../api/types';
import Header from '@/app/components/header';

async function getData(): Promise<ListResponse<Event>> {
  const res = await fetchWrapper('events');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Page: React.FC = async (props) => {
  const { data } = await getData();

  return (
    <>
      <Header title="Events" />
      {data && <View data={data} />}
    </>
  );
};

export default Page;
