import dayjs from 'dayjs';
import { NextRequest, NextResponse } from 'next/server';
import { Entity, ItemResponse, ListResponse } from '../types';

if (global.nextId === undefined) {
  global.nextId = 1;
}
if (global.events === undefined) {
  global.events = [
    {
      id: global.nextId++,
      title: 'Start Up Day',
      date: dayjs('2024/10/11').startOf('day').toISOString(),
      location: 'Boston, MA',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: global.nextId++,
      title: 'AI Conference',
      date: dayjs('2024/12/08').startOf('day').toISOString(),
      location: 'São Francisco, CA',
      description: ' Excepteur sint occaecat cupidatat non proident',
    },
    {
      id: global.nextId++,
      title: 'Web Summit',
      date: dayjs('2024/09/02').startOf('day').toISOString(),
      location: 'Los Angeles, CA',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
    },
    {
      id: global.nextId++,
      title: 'Git Summit 24',
      date: dayjs('2024/08/03').startOf('day').toISOString(),
      location: 'Springfield, MA',
      description:
        'Temporibus autem quibusdam et aut officiis debitis aut rerum',
    },
  ];
}

export type Event = Entity & {
  title: string;
  date: string;
  location: string;
  description: string;
};

export async function POST(
  req: NextRequest,
): Promise<NextResponse<ItemResponse<Event>>> {
  const body = await req.json();
  const newEvent: Event = { id: global.nextId++, ...body };
  global.events.push(newEvent);
  return NextResponse.json({ data: newEvent }, { status: 201 });
}

export async function GET(): Promise<NextResponse<ListResponse<Event>>> {
  return NextResponse.json({ data: global.events });
}
