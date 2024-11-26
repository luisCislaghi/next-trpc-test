'use client';
import EditPage from '@/app/components/edit';
import { Col, message, Row } from 'antd';
import { useRouter } from 'next/navigation';
import Form, { EventForm } from '../form';
import type { Event } from '@/app/api/events/route';
import { useCallback, useEffect, useState } from 'react';
import { fetchWrapper } from '@/util/fetch';
import mapper from '../mapper';
import Header from '@/app/components/header';
import { Entity } from '@/app/api/types';

type PageProps = {
  params: {
    id: string;
  };
};

const Page: React.FC<PageProps> = ({ params }) => {
  const router = useRouter();
  const [data, setData] = useState<Event | undefined>();

  const load = async () => {
    try {
      const response = await fetchWrapper(`events/${params.id}`);

      if (!response.ok) {
        if (response.status === 404) throw new Error('Event not found.');
        else throw new Error('Failed to load the event. Please try again.');
      }

      const { data } = await response.json();
      setData(data);
    } catch (error: any) {
      message.error(error.message);
      console.error(error);
      router.push('/events');
      router.refresh();
    }
  };

  useEffect(() => {
    load();
  }, []);

  const onSave = useCallback(
    async (payload: Event) => {
      try {
        const response = await fetchWrapper(`events/${payload.id}`, {
          method: 'PUT',
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error('Failed to submit the event. Please try again.');
        }

        router.push('/events');
        router.refresh();
      } catch (error: any) {
        message.error(error.message);
        console.error(error);
      }
    },
    [router],
  );

  const onDelete = useCallback(
    async (id: Entity['id']) => {
      try {
        const response = await fetchWrapper(`events/${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Failed to delete the event. Please try again.');
        }

        router.push('/events');
        router.refresh();
      } catch (error: any) {
        message.error(error.message);
        console.error(error);
      }
    },
    [router],
  );

  const onGoBack = useCallback(() => {
    router.push('/events');
    router.refresh();
  }, [router]);

  return (
    <>
      {data && (
        <>
          <Header title={`Editing ${data.title}`} />
          <Row>
            <Col sm={12}>
              <EditPage<Event, EventForm>
                data={data}
                onGoBack={onGoBack}
                onSave={onSave}
                onDelete={onDelete}
                mapper={mapper}
                form={Form}
              />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default Page;
