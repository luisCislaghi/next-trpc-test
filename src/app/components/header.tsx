import Title from 'antd/es/typography/Title';
import React, { ReactNode } from 'react';

type Props = {
  title: ReactNode;
};

const Header: React.FC<Props> = ({ title }) => {
  return (
    <div>
      <Title level={1}>{title}</Title>
    </div>
  );
};

export default Header;
