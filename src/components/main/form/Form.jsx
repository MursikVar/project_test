import React from 'react';
import FormHelp from './formhelpers/FormHelp';
// import './formhelpers/Form.css'

const Form = () => {
  return (
    <section id='form'>
      <h1>Отправка формы в Telegram</h1>
      <FormHelp />
    </section>
  );
};

export {Form};
