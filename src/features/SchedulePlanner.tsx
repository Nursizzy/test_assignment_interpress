import { Col, Form, Row } from 'antd';

import { CustomDateRangePicker } from '../components/CustomDateRangePicker.tsx';
import { CustomDayPicker } from '../components/CustomDayPicker.tsx';
import { CustomSelect } from '../components/CustomSelect.tsx';
import { CustomTimePicker } from '../components/CustomTimePicker.tsx';
import { CustomTimeRangePicker } from '../components/CustomTimeRangePicker.tsx';
import {
  AUDITORIUMS, BREAK_TIMES, HOURS_TYPES, TEACHERS,
} from '../shared/constants.tsx';

export const SchedulePlanner = () => (
  <Row gutter={[16, 0]}>
    <Col span={8}>
      <Form.Item
        name="hours_type"
        label="Тип часов"
        rules={[{ required: true, message: 'Пожалуйста, выберите тип часов' }]}
      >
        <CustomSelect options={HOURS_TYPES} placeholder="Выберите тип часов" />
      </Form.Item>
    </Col>

    <Col span={8}>
      <Form.Item
        name="hours_count"
        label="Кол-во часов в курсе"
        rules={[
          { required: true, message: 'Пожалуйста, укажите количество часов' },
          { type: 'number', min: 1, message: 'Количество часов должно быть больше 0' },
        ]}
      >
        <CustomTimePicker />
      </Form.Item>
    </Col>

    <Col span={8}>
      <Form.Item
        name="course_start_end_dates"
        label="Дата начала/конца курса"
        rules={[
          { required: true, message: 'Пожалуйста, укажите даты начала и конца курса' },
        ]}
      >
        <CustomDateRangePicker />
      </Form.Item>
    </Col>

    <Col span={24}>
      <Form.Item
        name="course_week_days"
        label="Дни недели курса"
        rules={[
          { required: true, message: 'Пожалуйста, выберите дни недели' },
        ]}
      >
        <CustomDayPicker />
      </Form.Item>
    </Col>

    <Col span={8}>
      <Form.Item
        name="break_time"
        label="Перерыв между занятиями"
        rules={[{ required: true, message: 'Пожалуйста, выберите перерыв' }]}
      >
        <CustomSelect options={BREAK_TIMES} placeholder="Выберите перерыв" />
      </Form.Item>
    </Col>

    <Col span={8}>
      <Form.Item
        name="hours_within_day"
        label="Кол-во часов в день"
        rules={[
          { required: true, message: 'Пожалуйста, укажите количество часов в день' },
          { type: 'number', min: 1, message: 'Количество часов должно быть больше 0' },
        ]}
      >
        <CustomTimePicker />
      </Form.Item>
    </Col>

    <Col span={8}>
      <Form.Item
        name="course_start_end_times"
        label="Время начала/окончания курса"
        rules={[
          { required: true, message: 'Пожалуйста, укажите время начала и окончания' },
        ]}
      >
        <CustomTimeRangePicker />
      </Form.Item>
    </Col>

    <Col span={16}>
      <Form.Item
        name="teacher"
        label="Преподаватель"
        rules={[{ required: true, message: 'Пожалуйста, выберите преподавателя' }]}
      >
        <CustomSelect options={TEACHERS} placeholder="Выберите преподавателя на это время" />
      </Form.Item>
    </Col>

    <Col span={8}>
      <Form.Item
        name="auditory"
        label="Аудитория"
        rules={[{ required: true, message: 'Пожалуйста, выберите аудиторию' }]}
      >
        <CustomSelect options={AUDITORIUMS} placeholder="Выберите аудиторию" />
      </Form.Item>
    </Col>
  </Row>
);
