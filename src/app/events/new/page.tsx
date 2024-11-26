'use client';

import EditPage from '@/app/components/edit';
import { Col, message, Row } from 'antd';
import { useRouter } from 'next/navigation';
import Form, { EventForm } from '../form';
import type { Event } from '@/app/api/events/route';
import { useCallback } from 'react';
import { fetchWrapper } from '@/util/fetch';
import mapper from '../mapper';
import Header from '@/app/components/header';

const Page: React.FC = (props) => {
  const router = useRouter();

  const onGoBack = useCallback(() => {
    router.push('/events');
    router.refresh();
  }, [router]);

  const onSave = useCallback(
    async (payload: Event) => {
      try {
        const response = await fetchWrapper('events', {
          method: 'POST',
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

  return (
    <>
      <Header title="New Event" />
      <Row>
        <Col sm={12}>
          <EditPage<Event, EventForm>
            onGoBack={onGoBack}
            onSave={onSave}
            mapper={mapper}
            form={Form}
          />
        </Col>
      </Row>
    </>
  );
};

export default Page;
