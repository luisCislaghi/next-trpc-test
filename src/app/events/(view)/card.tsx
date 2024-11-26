import { CardProps, Col, Row } from 'antd';
import type { Event } from '@/app/api/events/route';
import Card from '@/app/components/card';
import dayjs from 'dayjs';
import { CalendarOutlined, PushpinOutlined } from '@ant-design/icons';

type Props = Pick<CardProps, 'onClick'> & {
  event: Event;
};

const EventCard: React.FC<Props> = ({ event, ...props }) => {
  return (
    <Card
      {...props}
      style={{ height: '100%' }}
      styles={{ body: { height: '100%' } }}
      title={event.title}
      description={event.description}
      extra={<Extra event={event} />}
    />
  );
};

const Extra: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <>
      <Row gutter={4}>
        <Col>
          <PushpinOutlined />
        </Col>
        <Col>{event.location}</Col>
      </Row>
      <Row gutter={4}>
        <Col>
          <CalendarOutlined />
        </Col>
        <Col>{dayjs(event.date).format('MMMM D, YYYY')}</Col>
      </Row>
    </>
  );
};

export default EventCard;
