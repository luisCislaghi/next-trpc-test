'use client';

import { Button, Col, Form, FormProps, Row } from 'antd';
import { ComponentType, useCallback, useState } from 'react';
import { Entity } from '../api/types';

export type EditPageProps<T, U> = {
  data?: T;
  mapper: { toForm: (payload: T) => U; toPayload: (form: U) => T };
  form: ComponentType;
  onGoBack: () => void;
  onDelete?: (id: Entity['id']) => void;
  onSave: (values: T) => Promise<void>;
};

const EditPage = <T extends Entity, U extends object>({
  data,
  form: FormStructure,
  mapper,
  onGoBack,
  onDelete,
  onSave,
}: EditPageProps<T, U>) => {
  const [form] = Form.useForm();
  const [saving, setSaving] = useState<boolean>(false);
  const [deleting, setDeleting] = useState<boolean>(false);

  const onFinish = useCallback(
    async (values: U) => {
      setSaving(true);
      await onSave(mapper.toPayload({ id: data?.id, ...values })); // could wait and handle backend errors
      setSaving(false);
    },
    [data, onSave, mapper],
  );

  const handleDelete = useCallback(() => {
    if (!data?.id || !onDelete) return;
    setDeleting(true);
    onDelete(data.id);
    setDeleting(false);
  }, [data, onDelete]);

  const onFinishFailed: FormProps<U>['onFinishFailed'] = (errorInfo) => {
    // do something when validation has failed
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Row>
        <Col sm={24}>
          <Form
            form={form}
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={data ? mapper.toForm(data) : {}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <FormStructure />
          </Form>
        </Col>
      </Row>
      <Row justify="space-between">
        <Col>
          {onDelete !== undefined && (
            <Button danger ghost onClick={handleDelete} loading={deleting}>
              Delete
            </Button>
          )}
        </Col>
        <Col>
          <Row gutter={[12, 12]}>
            <Col>
              <Button type="default" onClick={onGoBack}>
                Cancel
              </Button>
            </Col>
            <Col>
              <Button
                type="primary"
                loading={saving}
                onClick={() => {
                  form.submit();
                }}
              >
                Save
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default EditPage;
