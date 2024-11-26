import { NextRequest, NextResponse } from 'next/server';
import { ItemResponse } from '../../types';
import type { Event } from '../route';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
): Promise<NextResponse<ItemResponse<Event>>> {
  const { id } = await params;

  if (id) {
    const event = global.events.find((e) => e.id === parseInt(id as string));
    if (event !== undefined) {
      return NextResponse.json({ data: event });
    }
    return NextResponse.json({ message: 'Event not found' }, { status: 404 });
  }
  return NextResponse.json({ message: 'Invalid Id' }, { status: 400 });
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
): Promise<NextResponse<ItemResponse<Event>>> {
  const { id } = await params;
  const body = await req.json();
  const index = global.events.findIndex((e) => e.id === parseInt(id));
  if (index !== -1) {
    global.events[index] = { id: parseInt(id), ...body };
    return NextResponse.json({ data: global.events[index] });
  } else {
    return NextResponse.json({ message: 'Event not found' }, { status: 404 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
): Promise<NextResponse<ItemResponse<Event>>> {
  const { id } = await params;
  const index = global.events.findIndex((e) => e.id === parseInt(id as string));
  if (index !== -1) {
    const deletedEvent = global.events.splice(index, 1);
    return NextResponse.json({ data: deletedEvent[0] });
  } else {
    return NextResponse.json({ message: 'Event not found' }, { status: 404 });
  }
}
