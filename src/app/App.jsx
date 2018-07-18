import React from 'react';
import moment from 'moment';
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
import Header from '../Modules/Header/component';
import Items from '../Modules/ItemsList/component';

const initialState = {
  items: [
    {
      name: '',
      quantity: 0,
      unit_cost: 0
    }
  ],
  date: moment(),
  to: '',
  currency: 'INR',
  number: '',
  tax: 12,
  tax_title: 'CGST+IGST',
  logo: 'http://invoiced.com/img/logo-invoice.png',
  fields: {
    tax: '%'
  },
  loading: false
};

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  handleAddFiled = () => {
    this.setState((prevState, props) => {
      return {
        items: this.state.items.concat({
          name: '',
          quantity: 0,
          unit_cost: 0
        })
      };
    });
  };

  handleRemoveField = idx => {
    this.setState((prevState, props) => {
      return {
        items: this.state.items.filter((s, sidx) => idx !== sidx)
      };
    });
  };

  handleItemNameChange = idx => evt => {
    const newItemArray = this.state.items.map((item, sidx) => {
      if (idx !== sidx) return item;
      return { ...item, name: evt.target.value };
    });

    this.setState((prevState, props) => {
      return {
        items: newItemArray
      };
    });
  };

  handleItemRateChange = idx => evt => {
    const newItemArray = this.state.items.map((item, sidx) => {
      if (idx !== sidx) return item;
      return { ...item, unit_cost: evt.target.value };
    });

    this.setState((prevState, props) => {
      return {
        items: newItemArray
      };
    });
  };

  handleItemQuantityChange = idx => evt => {
    const newItemArray = this.state.items.map((item, sidx) => {
      if (idx !== sidx) return item;
      return { ...item, quantity: evt.target.value };
    });

    this.setState((prevState, props) => {
      return {
        items: newItemArray
      };
    });
  };

  handleDateChange = date => {
    this.setState((prevState, props) => {
      return {
        date: moment(date)
      };
    });
  };

  handleBillToChange = data => {
    this.setState((prevState, props) => {
      return {
        to: data
      };
    });
  };

  handleTaxChange = data => {
    this.setState((prevState, props) => {
      return {
        number: data
      };
    });
  };

  handleSubmit = () => {
    this.setState((prevState, props) => {
      return {
        loading: true
      };
    });
    const payload = JSON.parse(JSON.stringify(this.state)); // need deep cloning here
    const newItems = payload.items;
    for (let i = 0; i < newItems.length; i++) {
      newItems[i].unit_cost =
        newItems[i].unit_cost - newItems[i].unit_cost * 0.12;
    }
    const formatedDate = moment(payload.date).format('Do MMM, YYYY');
    payload.items = newItems;
    payload.date = formatedDate;
    delete payload.loading;
    axios
      .post('https://ad-invoice.herokuapp.com/invoice', payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        this.setState((prevState, props) => {
          return initialState;
        });
        const url = response.data.url;
        window.open(url, '_blank');
      })
      .catch(err => {
        this.setState((prevState, props) => {
          return {
            loading: false
          };
        });
        console.log(err);
      });
  };

  render() {
    return (
      <React.Fragment>
        <br />
        <Header
          dateValue={this.state.date}
          onDateChange={this.handleDateChange}
          onBillToChange={this.handleBillToChange}
          onTaxChange={this.handleTaxChange}
          address={this.state.to}
          invoiceNumber={this.state.number}
        />
        <Items
          fields={this.state.items}
          onAddFiled={this.handleAddFiled}
          onRemoveField={this.handleRemoveField}
          onNameChange={this.handleItemNameChange}
          onRateChange={this.handleItemRateChange}
          onQuantityChange={this.handleItemQuantityChange}
          onBillGenerate={this.handleSubmit}
          loading={this.state.loading}
        />
      </React.Fragment>
    );
  }
}

export default App;
