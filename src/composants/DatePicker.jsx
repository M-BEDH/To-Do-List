import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

function TimePicker() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}></LocalizationProvider>
  );
}
dayjs.extend(utc);

export default function Date() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker />
      <TimePicker defaultValue={dayjs.utc('2022-04-17T15:30')} />
    </LocalizationProvider>
  );
}
