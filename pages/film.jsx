import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import { Grid } from '../styles/GridStyles';


const Film = () => (
  <div style={{ backgroundColor: 'black' }}>
    <Layout height='88px' sticky={true}>
      <Header />
    </Layout>
    <Layout padding='0'>
      <Grid>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
      </Grid>
    </Layout>
  </div>
);

export default Film;