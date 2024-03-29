import React, { useContext } from 'react';
import Layout from '../../components/layout/Layout';
import MyContext from '../../context/data/myContext';

function Order() {
  // Ensure the context object is available before accessing its properties
  const context = useContext(MyContext);
  const { name, rollno } = context || {};

  return (
    <Layout>
      Order
      <h1>Name: {name}</h1>
      <h1>Rollno: {rollno}</h1>
    </Layout>
  );
}

export default Order;
