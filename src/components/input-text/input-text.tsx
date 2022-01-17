import React from 'react';
import './input-text.scss';
import TopicLabel from '../../components/topic-label/topic-label';

type Props = {
  id: string;
  topic: string;
  label?: string;
  placeholder?: string;
  inputText?: string;
  state: string;
  type: string;
  name: string;
};

class InputText extends React.Component<Props> {
  static defaultProps = {
    topic: '',
    label: '',
    placeholder: 'Введите данные...',
    inputText: '',
    state: '',
    type: '',
    name: '',
  };

  data: Props;

  constructor(props: Props) {
    super(props);
    this.data = this.props;
  }

  checkSubscription(type: string) {
    return type === 'subscription' ? 'input-text_subscription' : '';
  }
  checkFocus(state: string) {
    return state === 'focus' ? 'input-text__input_hover' : '';
  }
  checkNameDate(name: string) {
    return name === 'date' ? 'input-text__input_date' : '';
  }

  render() {
    let {
      data: { id, topic, label, placeholder, inputText, state, type, name },
    } = this;

    return (
      <div className={`input-text ${this.checkSubscription(type)}`}>
        <TopicLabel topic={topic} label={label} />
        <input
          className={`input-text__input ${this.checkFocus(state)} ${this.checkNameDate(name)}`}
          name={name}
          placeholder={placeholder}
          id={`inputText${id}`}
          defaultValue={inputText}
        ></input>
      </div>
    );
  }
}

export default InputText;
