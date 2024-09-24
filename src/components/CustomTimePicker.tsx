import { Button, Space } from 'antd';

interface CustomTimePickerProps {
  value?: number;
  onChange?: (value: number) => void;
}

export const CustomTimePicker = ({ value = 0, onChange } : CustomTimePickerProps) => {
  const handleIncrement = () => {
    if (onChange) {
      onChange(value + 1);
    }
  };

  const handleDecrement = () => {
    if (onChange) {
      onChange(Math.max(0, value - 1));
    }
  };

  return (
    <Space.Compact block>
      <Button onClick={handleDecrement} type="primary">
        -
      </Button>

      <Button style={{ width: '100%' }}>
        {value}
      </Button>

      <Button onClick={handleIncrement} type="primary">
        +
      </Button>
    </Space.Compact>
  );
};
