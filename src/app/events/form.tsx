import { DatePicker, Form, Input } from 'antd';
import type { Dayjs } from 'dayjs';

export type EventForm = {
  id?: number;
  title: string;
  date: Dayjs;
  location: string;
  description: string;
};

const FormStructure: React.FC = (props) => {
  const validationExample = [{ required: true, message: 'Required field' }];

  return (
    <>
      <Form.Item<EventForm>
        label="Title"
        name="title"
        rules={validationExample}
      >
        <Input />
      </Form.Item>
      <Form.Item<EventForm>
        label="Description"
        name="description"
        rules={validationExample}
      >
        <Input />
      </Form.Item>
      <Form.Item<EventForm> label="Date" name="date" rules={validationExample}>
        <DatePicker className="w-full" />
      </Form.Item>
      <Form.Item<EventForm>
        label="Location"
        name="location"
        rules={validationExample}
      >
        <Input />
      </Form.Item>
    </>
  );
};

export default FormStructure;
