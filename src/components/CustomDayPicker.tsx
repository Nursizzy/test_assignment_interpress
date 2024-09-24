import { Button, Space } from 'antd';

import { DAYS, DAYS_PRESETS } from '../shared/constants.tsx';

interface CustomDayPickerProps {
  value?: number[];
  onChange?: (value: number[]) => void;
}

export const CustomDayPicker = ({ value = [], onChange } : CustomDayPickerProps) => {
  const toggleDay = (dayId : number) => {
    const newValue = value.includes(dayId)
      ? value.filter((id) => id !== dayId)
      : [...value, dayId].sort((a, b) => a - b);
    if (onChange) {
      onChange(newValue);
    }
  };

  const applyPreset = (presetDays : number[]) => {
    if (onChange) {
      onChange(presetDays);
    }
  };

  const isPresetActive = (presetDays : number[]) => presetDays.length === value.length
            && presetDays.every((day) => value.includes(day));

  return (
    <Space.Compact block>
      {DAYS_PRESETS.map((preset) => (
        <Button
          key={`${String(preset.id)}presets`}
          onClick={() => applyPreset(preset.days)}
          type={isPresetActive(preset.days) ? 'primary' : 'default'}
          style={{ width: '100%' }}
        >
          {preset.name}
        </Button>
      ))}

      {DAYS.map((day) => (
        <Button
          key={`${String(day.id)}days`}
          onClick={() => toggleDay(day.id)}
          type={value.includes(day.id) ? 'primary' : 'default'}
          style={{ width: '100%' }}
        >
          {day.code}
        </Button>
      ))}
    </Space.Compact>
  );
};
