import { useState } from 'react';
import {
  Button, Divider, Flex, Form, Modal, notification,
} from 'antd';
import { useForm } from 'antd/es/form/Form';

import { SchedulePlanner } from './features/SchedulePlanner.tsx';
import { initialValues } from './shared/constants.tsx';

import './App.css';

const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [form] = useForm();

  const onSubmit = () => {
    form.validateFields().then(
      (values) => {
        console.log('Form values:', values);
      },
    ).then(
      () => {
        notification.success({
          message: 'Успех',
          description: 'Расписание успешно создано',
        });
      },
    ).catch(
      () => {
        notification.error({
          message: 'Ошибка',
          description: 'Не удалось создать расписание',
        });
      },
    );
  };

  const handleClose = () => {
    form.resetFields();
    setOpenModal(false);
  }

  return (
    <Flex justify="center" align="center">
      <Button onClick={handleClose}>
        Открыть планировщик
      </Button>

      <Modal
        title="Создание расписания"
        width={800}
        open={openModal}
        onCancel={() => setOpenModal(false)}
        footer={[
          <Button key="submit" type="primary" onClick={onSubmit}>
            Создать
          </Button>,
        ]}
      >
        <Divider />

        <Form layout="vertical" form={form} initialValues={initialValues}>
          <SchedulePlanner />
        </Form>

        <Divider />
      </Modal>
    </Flex>
  );
};

export default App;
