'use client';

import React, { useCallback, useState } from 'react';
import type { Event } from '@/app/api/events/route';
import Grid from './grid';
import Header, { DisplayOption } from './header';
import List from './list';
import { useRouter } from 'next/navigation';

const View: React.FC<{ data: Event[] }> = ({ data }) => {
  const router = useRouter();

  const [display, setDisplay] = useState<DisplayOption>('grid');

  const onClick = useCallback(
    (event: Event) => {
      if (!event.id) return;
      router.push(`/events/${event.id}`);
    },
    [router],
  );

  return (
    <>
      <Header setDisplay={setDisplay} display={display} />
      {display === 'grid' ? (
        <Grid data={data} onClick={onClick} />
      ) : (
        <List data={data} onClick={onClick} />
      )}
    </>
  );
};

export default View;
