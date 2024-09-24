import { Select } from 'antd';

interface Option {
  id: number;
  name: string;
}

interface CustomSelectProps {
  options: Option[];
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const CustomSelect = ({
  options, placeholder, value, onChange,
}:CustomSelectProps) => (
  <Select
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  >
    {
                options.map((item) => (
                  <Select.Option value={item.id} key={item.id}>
                    {item.name}
                  </Select.Option>
                ))
            }
  </Select>
);
