'use client';
import { CalendarOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { MenuItemType } from 'antd/es/menu/interface';
import { useRouter } from 'next/navigation';
import React, { useCallback } from 'react';

const SideMenu: React.FC = () => {
  const router = useRouter();

  const handleNavigation = useCallback(
    (info: any) => {
      router.push(info.key);
    },
    [router],
  );

  const items: MenuItemType[] = [
    {
      key: '/events',
      title: 'Events',
      label: 'Events',
      icon: <CalendarOutlined />,
      onClick: handleNavigation,
    },
  ];

  return (
    <Menu
      items={items}
      mode="inline"
      defaultSelectedKeys={[items[0].key.toString()]}
      style={{ height: '100%', borderRight: 0 }}
    />
  );
};

export default SideMenu;
