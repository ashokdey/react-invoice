import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.min.css';

class CustomDatePicker extends React.Component {
  render() {
    return (
      <DatePicker
        selected={moment(this.props.dateValue)}
        onChange={date => this.props.onDateChange(date)}
      />
    );
  }
}

export default CustomDatePicker;
