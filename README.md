# Course Schedule Planner

## Overview

This project is a React-based web application for planning and scheduling courses. It provides an intuitive interface for creating course schedules, taking into account various factors such as course duration, weekly schedule, break times, and more.

## Technologies Used

- React 18+
- TypeScript
- Ant Design (antd) for UI components
- Day.js for date and time manipulation

## Features

- Set course type (Academic or Astronomical hours)
- Define total course hours
- Select course days (weekdays)
- Set daily course duration
- Choose break times between lessons
- Automatic calculation of course end date based on start date and other parameters
- Select teachers and auditoriums
- Form validation to ensure all necessary information is provided

## Components

The application consists of several custom components:

1. `CustomSelect`: A wrapper around Ant Design's Select component
2. `CustomTimePicker`: A custom component for selecting time duration
3. `CustomDateRangePicker`: A component for selecting date ranges with automatic end date calculation
4. `CustomDayPicker`: A component for selecting days of the week
5. `CustomTimeRangePicker`: A component for selecting time ranges with automatic end time calculation

## Setup and Running

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```

## Usage

1. Open the application in a web browser
2. Click on "Открыть планировщик" to open the course planner modal
3. Fill in the required information:
    - Select the type of hours (Academic or Astronomical)
    - Enter the total number of course hours
    - Choose the start date (end date will be calculated automatically)
    - Select the days of the week for the course
    - Choose the break time between lessons
    - Set the number of hours per day
    - Select the course start and end times
    - Choose a teacher and auditorium
4. The form will validate your inputs and provide feedback if there are any issues
5. Click "Создать" to submit the form and create the course schedule

## Project Structure

```
src/
├── components/
│   ├── CustomSelect.tsx
│   ├── CustomTimePicker.tsx
│   ├── CustomDateRangePicker.tsx
│   ├── CustomDayPicker.tsx
│   ├── CustomTimeRangePicker.tsx
│   └── SchedulePlanner.tsx
├── data/
│   └── index.tsx (contains constant data like HOURS_TYPES, BREAK_TIMES, etc.)
├── App.tsx
└── main.tsx
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.