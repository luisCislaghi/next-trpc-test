import React from 'react';
import type { Event } from '@/app/api/events/route';
import { Col, Row } from 'antd';
import EventCard from './card';

const Grid: React.FC<{ data: Event[]; onClick: (event: Event) => void }> = ({
  data,
  onClick,
}) => {
  return (
    <Row gutter={[16, 16]} align={'stretch'}>
      {data?.map((e) => (
        <Col xl={6} sm={12} key={e.id}>
          <EventCard
            event={e}
            onClick={() => {
              onClick(e);
            }}
          />
        </Col>
      ))}
    </Row>
  );
};

export default Grid;
