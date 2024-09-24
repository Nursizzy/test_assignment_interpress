import dayjs from 'dayjs';

export const HOURS_TYPES = [

  {
    id: 1,
    name: 'Академические',
  },
  {
    id: 2,
    name: 'Астрономические',
  },
];

export const DAYS = [
  {
    id: 1,
    name: 'Понедельник',
    code: 'ПН',
  },
  {
    id: 2,
    name: 'Вторник',
    code: 'ВТ',
  },
  {
    id: 3,
    name: 'Среда',
    code: 'СР',
  },
  {
    id: 4,
    name: 'Четверг',
    code: 'ЧТ',
  },
  {
    id: 5,
    name: 'Пятница',
    code: 'ПТ',
  },
  {
    id: 6,
    name: 'Суббота',
    code: 'СБ',
  },
  {
    id: 7,
    name: 'Воскресенье',
    code: 'ВС',
  },
];

export const DAYS_PRESETS = [
  {
    id: 1,
    name: 'ПH/СР/ПТ',
    days: [1, 3, 5],
  },
  {
    id: 2,
    name: 'ВТ/ЧТ',
    days: [2, 4],
  },
];

export const BREAK_TIMES = [
  {
    id: 1,
    name: 'Без перерыва',
    value: 0,
  },
  {
    id: 2,
    name: '5 минут',
    value: 5,
  },
  {
    id: 3,
    name: '10 минут',
    value: 10,
  },
  {
    id: 4,
    name: '20 минут',
    value: 20,
  },
  {
    id: 5,
    name: '30 минут',
    value: 30,
  },
];

export const TEACHERS = [
  {
    id: 1,
    name: 'Иванов Иван Иванович',
  },
  {
    id: 2,
    name: 'Петров Петр Петрович',
  },
  {
    id: 3,
    name: 'Сидоров Сидор Сидорович',
  },
  {
    id: 4,
    name: 'Кузнецов Кузнец Кузнецович',
  },
  {
    id: 5,
    name: 'Смирнов Смирн Смирнович',
  },
];

export const AUDITORIUMS = [
  {
    id: 1,
    name: 'Аудитория 1',
  },
  {
    id: 2,
    name: 'Аудитория 2',
  },
  {
    id: 3,
    name: 'Аудитория 3',
  },
  {
    id: 4,
    name: 'Аудитория 4',
  },
  {
    id: 5,
    name: 'Аудитория 5',
  },
];

export const initialValues = {
  hours_type: 1,
  hours_count: 30,
  hours_within_day: 2,
  course_start_end_dates: {
    startDate: dayjs(),
    endDate: dayjs(),
  },
  course_week_days: [1, 3, 5],
  break_time: 1,
  course_start_end_times: {
    startTime: dayjs().set('hour', 7).set('minute', 0),
    endTime: dayjs().set('hour', 18).set('minute', 0),
  },
  teacher: undefined,
  auditory: undefined,
};
