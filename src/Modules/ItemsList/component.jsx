import React from 'react';
import { Divider, Segment, Grid } from 'semantic-ui-react';
import ItemHeading from '../ItemHeading/component';
import InputRow from '../InputRow/component';
import CustomButton from '../_Components/Button';

const Items = ({
  fields,
  onAddFiled,
  onRemoveField,
  onNameChange,
  onRateChange,
  onQuantityChange,
  onBillGenerate,
  loading,
}) => (
  <Grid container>
    <Grid.Row>
      <Segment>
        <Divider horizontal>Bill Details</Divider>
        <ItemHeading />
        <InputRow
          fields={fields}
          onRemoveField={onRemoveField}
          onNameChange={onNameChange}
          onRateChange={onRateChange}
          onQuantityChange={onQuantityChange}
        />
        <Grid container>
          <Grid.Row>
            <Grid.Column width={4}>
              <CustomButton onClickAction={onAddFiled} buttonText="Add Item" iconName="add" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid container columns="equal">
          <Grid.Row>
            <Grid.Column width={10} />
            <Grid.Column width={2} />
            <Grid.Column width={4}>
              <CustomButton
                onClickAction={onBillGenerate}
                buttonText="Generate Bill"
                iconName="arrow circle right"
                loading={loading}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Grid.Row>
  </Grid>
);

export default Items;
