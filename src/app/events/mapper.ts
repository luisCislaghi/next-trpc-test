import dayjs from "dayjs";
import { EventForm } from "./form";
import type { Event } from "@/app/api/events/route";

const toForm = (payload: Event): EventForm => {
  return { ...payload, date: dayjs(payload.date) } as EventForm;
};
const toPayload = (form: EventForm): Event => {
  return {
    ...form,
    date: dayjs(form.date).startOf("day").toISOString(),
  } as Event;
};

export default { toForm, toPayload };
