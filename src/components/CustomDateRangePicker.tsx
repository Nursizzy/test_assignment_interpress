import { useEffect } from 'react';
import {
  Button, DatePicker, Form, Space,
} from 'antd';
import dayjs, { Dayjs } from 'dayjs';

interface CustomDateRangePickerProps {
  value?: { startDate: dayjs.Dayjs; endDate: dayjs.Dayjs };
  onChange?: (value: { startDate: dayjs.Dayjs; endDate: dayjs.Dayjs }) => void;
}

export const CustomDateRangePicker = ({ value, onChange }:CustomDateRangePickerProps) => {
  const form = Form.useFormInstance();

  const hoursCount = Form.useWatch('hours_count', form);
  const hoursWithinDay = Form.useWatch('hours_within_day', form);
  const courseWeekDays = Form.useWatch('course_week_days', form);

  const calculateEndDate = (startDate: dayjs.Dayjs) => {
    if (!startDate || !hoursCount || !hoursWithinDay || !courseWeekDays || courseWeekDays.length === 0) {
      return null;
    }

    let currentDate = startDate.clone();
    let hoursCompleted = 0;
    let lastCourseDay = null;

    while (hoursCompleted < hoursCount) {
      if (courseWeekDays.includes(currentDate.day())) {
        hoursCompleted += Math.min(hoursWithinDay, hoursCount - hoursCompleted);
        lastCourseDay = currentDate.clone();
      }
      currentDate = currentDate.add(1, 'day');
    }

    return lastCourseDay;
  };

  const handleStartDateChange = (date: dayjs.Dayjs) => {
    const endDate = calculateEndDate(date) as Dayjs;
    if (onChange) {
      onChange({ startDate: date, endDate });
    }
  };

  useEffect(() => {
    if (value?.startDate) {
      const endDate = calculateEndDate(value.startDate);
      if (endDate && (!value.endDate || !value.endDate.isSame(endDate, 'day'))) {
        if (onChange) {
          onChange({ ...value, endDate });
        }
      }
    }
  }, [hoursCount, hoursWithinDay, courseWeekDays, value?.startDate]);

  return (
    <Space.Compact block>
      <DatePicker
        suffixIcon={null}
        minDate={dayjs()}
        placeholder="Start date"
        value={value?.startDate}
        onChange={handleStartDateChange}
      />

      <Button disabled>
        До
      </Button>

      <DatePicker
        suffixIcon={null}
        placeholder="End date"
        value={value?.endDate}
        disabled
      />
    </Space.Compact>
  );
};
