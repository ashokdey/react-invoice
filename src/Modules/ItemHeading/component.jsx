import React from 'react';
import { Grid } from 'semantic-ui-react';

const ItemHeading = () => (
  <Grid container>
    <Grid.Row>
      <Grid.Column width={9}>
        <h4>Item Name</h4>
      </Grid.Column>
      <Grid.Column width={2}>
        <h4>Quantity</h4>
      </Grid.Column>
      <Grid.Column width={2}>
        <h4>Rate</h4>
      </Grid.Column>
      <Grid.Column width={2}>
        <h4>Amount</h4>
      </Grid.Column>
    </Grid.Row>
    <hr style={{ width: '100%' }} />
  </Grid>
);

export default ItemHeading;
