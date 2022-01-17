import React from 'react';
//import './calendar.ts';
//import 'air-datepicker';
import './cell.scss';
import './datepicker-config.scss';
import './datepicker.scss';
import './navigation.scss';

type Props = {
  open?: boolean;
  classWrapper?: string;
};

class Calendar extends React.Component<Props> {
  static defaultProps = {
    open: false,
    classWrapper: '',
  };

  data: Props;

  constructor(props: Props) {
    super(props);
    this.data = this.props;
  }

  render() {
    let {
      data: { open, classWrapper },
    } = this;

    return (
      <div className={classWrapper}>
        {open ? (
          <div className="datepicker-here js-datepicker-here"></div>
        ) : (
          <div className="datepicker-here js-datepicker-here datepicker-here_hide"></div>
        )}
      </div>
    );
  }
}

export default Calendar;
