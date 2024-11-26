import React, { ReactNode } from 'react';
import { Card as AntCard, CardProps, Flex } from 'antd';
import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';

type Props = CardProps & {
  title: string;
  description: string;
  extra?: ReactNode;
};

const Card: React.FC<Props> = ({
  title,
  description,
  extra,
  onClick,
  ...props
}) => {
  return (
    <AntCard
      {...props}
      onClick={onClick}
      style={{
        ...props.style,
        cursor: onClick !== undefined ? 'pointer' : 'initial',
      }}
    >
      <Flex
        align="stretch"
        justify="space-between"
        vertical
        style={{ height: '100%' }}
      >
        <Flex vertical>
          <Title level={3}>{title}</Title>
          <Paragraph>{description}</Paragraph>
        </Flex>
        <div>{extra}</div>
      </Flex>
    </AntCard>
  );
};

export default Card;
