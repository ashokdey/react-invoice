import React from 'react';
import { Grid, Input, Icon, Button } from 'semantic-ui-react';

const InputRow = ({
  fields, onRemoveField, onNameChange, onRateChange, onQuantityChange,
}) => (
  <Grid container>
    {fields.map((el, i) => (
      <React.Fragment key={i}>
        <Grid.Row>
          <Grid.Column width={9}>
            <Input value={el.name} style={{ width: '100%' }} onChange={onNameChange(i)} />
          </Grid.Column>
          <Grid.Column width={2} textAlign="right">
            <Input value={el.quantity} style={{ width: '100%' }} onChange={onQuantityChange(i)} />
          </Grid.Column>
          <Grid.Column width={2} textAlign="right">
            <Input value={el.unit_cost} style={{ width: '100%' }} onChange={onRateChange(i)} />
          </Grid.Column>
          <Grid.Column width={2} textAlign="right">
            <Input value={el.unit_cost * el.quantity} disabled style={{ width: '100%' }} />
          </Grid.Column>
          <Grid.Column width={1} textAlign="right" verticalAlign="middle">
            <Button icon={<Icon name="close" />} onClick={() => onRemoveField(i)} />
          </Grid.Column>
        </Grid.Row>
      </React.Fragment>
    ))}
  </Grid>
);

export default InputRow;
