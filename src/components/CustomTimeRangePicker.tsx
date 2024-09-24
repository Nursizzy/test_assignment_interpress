import { useEffect } from 'react';
import {
  Button, Form, Space, TimePicker,
} from 'antd';
import dayjs, { Dayjs } from 'dayjs';

import { BREAK_TIMES } from '../shared/constants.tsx';

interface CustomTimeRangePickerProps {
  value?: { startTime: dayjs.Dayjs; endTime: dayjs.Dayjs };
  onChange?: (value: { startTime: dayjs.Dayjs; endTime: dayjs.Dayjs }) => void;
}

export const CustomTimeRangePicker = ({ value, onChange }: CustomTimeRangePickerProps) => {
  const form = Form.useFormInstance();

  const hoursType = Form.useWatch('hours_type', form);
  const breakTime = Form.useWatch('break_time', form);
  const hoursWithinDay = Form.useWatch('hours_within_day', form);

  const calculateEndTime = (startTime : dayjs.Dayjs) => {
    if (!startTime || !hoursType || breakTime === undefined || !hoursWithinDay) {
      return null;
    }

    const hourDuration = hoursType === 1 ? 45 : 60; // 45 minutes for academic, 60 for astronomical
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const totalMinutes = (hourDuration * hoursWithinDay) + (BREAK_TIMES.find((b) => b.id === breakTime).value * (hoursWithinDay - 1));

    return startTime.add(totalMinutes, 'minute');
  };

  const handleStartTimeChange = (time : dayjs.Dayjs) => {
    const endTime = calculateEndTime(time) as Dayjs;
    if (onChange) {
      onChange({ startTime: time, endTime });
    }
  };

  useEffect(() => {
    if (value?.startTime) {
      const endTime = calculateEndTime(value.startTime);
      if (endTime && (!value.endTime || !value.endTime.isSame(endTime))) {
        if (onChange) {
          onChange({ ...value, endTime });
        }
      }
    }
  }, [hoursType, breakTime, hoursWithinDay, value?.startTime]);

  return (
    <Space.Compact block>
      <TimePicker
        suffixIcon={null}
        placeholder="Start time"
        value={value?.startTime}
        onChange={handleStartTimeChange}
        format="HH:mm"
      />

      <Button disabled>
        До
      </Button>

      <TimePicker
        suffixIcon={null}
        placeholder="End time"
        value={value?.endTime}
        disabled
        format="HH:mm"
      />
    </Space.Compact>
  );
};
