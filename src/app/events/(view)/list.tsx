import React from 'react';
import type { Event } from '@/app/api/events/route';
import { Row, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';

const List: React.FC<{ data: Event[]; onClick: (event: Event) => void }> = ({
  data,
  onClick,
}) => {
  const columns: ColumnsType<Event> = [
    { dataIndex: 'title', title: 'Title' },
    { dataIndex: 'description', title: 'Description' },
    { dataIndex: 'location', title: 'Location' },
    {
      dataIndex: 'date',
      title: 'Date',
      render: (value) => dayjs(value).format('MMMM D, YYYY'),
    },
  ];

  return (
    <Row>
      <Table<Event>
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey={'id'}
        rowClassName={'cursor-pointer'}
        style={{ width: '100%' }}
        onRow={(record: Event) => {
          return {
            onClick: (e) => {
              onClick(record);
            },
          };
        }}
      />
    </Row>
  );
};

export default List;
