import Cleave from 'cleave.js';

const runInputsDate = () => {
  if (document.querySelector('.input-text__input_date')) {
    new Cleave('.input-text__input_date', {
      date: true,
      delimiter: '.',
      datePattern: ['d', 'm', 'Y'],
    });
  }
};

export { runInputsDate };
