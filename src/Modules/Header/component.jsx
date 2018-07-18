import React from 'react';
import { Grid, Image, Input, Icon, TextArea, Form } from 'semantic-ui-react';
import DatePicker from '../_Components/DatePicker';
import Logo from '../../logo.jpg';

const Header = ({
  dateValue, onDateChange, onBillToChange, onTaxChange,
}) => (
  <Grid columns="equal" container>
    <Grid.Column>
      <Image src={Logo} size="small" wrapped />
      <p style={{ marginTop: '2rem' }}>Bill To</p>
      <Form>
        <TextArea
          onChange={evt => onBillToChange(evt.target.value)}
          placeholder="Who is this invoice to? (*required)"
        />
      </Form>
    </Grid.Column>
    <Grid.Column width={6} />
    <Grid.Column>
      <h1>INVOICE</h1>
      <Input
        onChange={evt => onTaxChange(evt.target.value)}
        style={{ marginBottom: '2rem' }}
        iconPosition="left"
        placeholder="Invoice Number"
      >
        <Icon name="hashtag" />
        <input />
      </Input>
      <DatePicker dateValue={dateValue} onDateChange={onDateChange} />
    </Grid.Column>
  </Grid>
);

export default Header;
