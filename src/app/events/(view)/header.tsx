import { Button, Row, Segmented } from 'antd';
import type { Event } from '@/app/api/events/route';
import { useRouter } from 'next/navigation';
import { SegmentedOptions } from 'antd/es/segmented';
import { useCallback } from 'react';
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons';

export type DisplayOption = 'list' | 'grid';

export type HeaderProps = {
  display: DisplayOption;
  setDisplay: React.Dispatch<React.SetStateAction<DisplayOption>>;
  event?: Event;
};

const Header: React.FC<HeaderProps> = ({ display, setDisplay }) => {
  const router = useRouter();

  const handleAddNew = useCallback(() => {
    router.push('/events/new');
  }, [router]);

  const handleDisplayChange = useCallback(
    (value: DisplayOption) => {
      setDisplay(value);
    },
    [setDisplay],
  );

  const displayOptions: SegmentedOptions<DisplayOption> = [
    { label: 'Grid', icon: <AppstoreOutlined />, value: 'grid' },
    { label: 'List', icon: <UnorderedListOutlined />, value: 'list' },
  ];

  return (
    <Row justify={'space-between'} style={{ marginBottom: 16 }}>
      <Segmented
        options={displayOptions}
        value={display}
        onChange={handleDisplayChange}
      />
      <Button type="primary" ghost onClick={handleAddNew}>
        Add new event
      </Button>
    </Row>
  );
};

export default Header;
