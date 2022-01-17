import React from 'react';
import './form-search-room.scss';
import Button from '../../components/button/button';
import Dropdown from '../../components/dropdown/dropdown';
import DropdownDates from '../../components/dropdown-dates/dropdown-dates';

type Props = {
  action: string;
  text: string;
  type: string;
  classBlock: string;
};

class FormSearchRoom extends React.Component<Props> {
  static defaultProps = {
    action: './link-stub',
    text: 'Ссылка',
    type: '',
    classBlock: '',
  };

  data: Props;
  button: {
    text: string;
  };
  guests: {
    topic: string;
    id: string;
    items: {
      text: string;
      number?: number;
    }[];
  };
  fieldsDates: {
    topic: string;
  }[];

  constructor(props: Props) {
    super(props);
    this.data = this.props;
    this.button = {
      text: 'подобрать номер',
    };
    this.guests = {
      topic: 'Гости',
      id: 'dropdownFormSearchRoom',
      items: [
        {
          text: 'взрослые',
          number: 2,
        },
        {
          text: 'дети',
          number: 1,
        },
        {
          text: 'младенцы',
        },
      ],
    };
    this.fieldsDates = [
      {
        topic: 'Прибытие',
      },
      {
        topic: 'Выезд',
      },
    ];
  }

  render() {
    let {
      data: { action },
      button,
      guests,
      fieldsDates,
    } = this;

    return (
      <form className="form-search-room" action={action}>
        <h1 className="form-search-room__topic">Найдём номера под ваши пожелания</h1>
        <div className="form-search-room__dropdown-dates">
          <DropdownDates data={fieldsDates} />
        </div>
        <Dropdown topic={guests.topic} id={guests.id} items={guests.items} />
        <div className="form-search-room__button">
          <Button text={button.text} />
        </div>
      </form>
    );
  }
}

export default FormSearchRoom;
