import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Container, Typography } from '@mui/material';

function CreateOrder() {
  const [symbol, setSymbol] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/orders/', { symbol, quantity });
      alert('Order created successfully!');
    } catch (error) {
      console.error('Failed to create order:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Create Order</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Create Order
        </Button>
      </form>
    </Container>
  );
}

export default CreateOrder;