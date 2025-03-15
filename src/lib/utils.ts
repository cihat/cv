import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDateDiff(start, end) {
  const isContinuous = end === "Present";

  const startDate = dayjs(start);
  const endDate = isContinuous ? dayjs() : dayjs(end);
  const years = endDate.diff(startDate, 'year');
  const months = endDate.diff(startDate, 'month') % 12;

  let result = '';
  if (years) result += `${years} year${years > 1 ? 's' : ''}`;
  if (months) result += `${result ? ', ' : ''}${months} month${months > 1 ? 's' : ''}`;
  if (isContinuous) result += '~';

  return result || '0 days';
}
