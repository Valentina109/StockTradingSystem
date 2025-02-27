// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// You can optionally import recharts if you installed it
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Dashboard = () => {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({
    symbol: 'BTC',
    type: 'buy',
    quantity: 1,
    price: 0
  });

  // Sample market data
  const [marketData] = useState([
    { symbol: 'BTC', price: 45000, change: '+2.5%' },
    { symbol: 'ETH', price: 2800, change: '-1.2%' },
    { symbol: 'SOL', price: 98, change: '+5.3%' }
  ]);

  const handleCreateOrder = (e) => {
    e.preventDefault();
    const order = {
      ...newOrder,
      id: Date.now(),
      status: 'pending',
      timestamp: new Date().toLocaleString()
    };
    setOrders([...orders, order]);
    setNewOrder({ ...newOrder, quantity: 1, price: 0 });
  };

  return (
    <Container className="mt-4">
      <h1 className="mb-4">Trading Dashboard</h1>

      {/* Market Overview */}
      <Row className="mb-4">
        {marketData.map((item) => (
          <Col key={item.symbol} md={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{item.symbol}/USD</Card.Title>
                <Card.Text className="h3">${item.price.toLocaleString()}</Card.Text>
                <Card.Text
                  className={item.change.startsWith('+') ? 'text-success' : 'text-danger'}
                >
                  {item.change}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Row>
        {/* Create Order Form */}
        <Col md={6}>
          <Card>
            <Card.Header>
              <h5>Create Order</h5>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleCreateOrder}>
                <Form.Group className="mb-3">
                  <Form.Label>Symbol</Form.Label>
                  <Form.Select
                    value={newOrder.symbol}
                    onChange={(e) => setNewOrder({...newOrder, symbol: e.target.value})}
                  >
                    <option value="BTC">Bitcoin (BTC)</option>
                    <option value="ETH">Ethereum (ETH)</option>
                    <option value="SOL">Solana (SOL)</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Order Type</Form.Label>
                  <div className="d-flex">
                    <Form.Check
                      type="radio"
                      id="buy-radio"
                      name="orderType"
                      label="Buy"
                      className="me-3"
                      checked={newOrder.type === 'buy'}
                      onChange={() => setNewOrder({...newOrder, type: 'buy'})}
                    />
                    <Form.Check
                      type="radio"
                      id="sell-radio"
                      name="orderType"
                      label="Sell"
                      checked={newOrder.type === 'sell'}
                      onChange={() => setNewOrder({...newOrder, type: 'sell'})}
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="number"
                    value={newOrder.quantity}
                    onChange={(e) => setNewOrder({...newOrder, quantity: Number(e.target.value)})}
                    min="0.001"
                    step="0.001"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Price (USD)</Form.Label>
                  <Form.Control
                    type="number"
                    value={newOrder.price}
                    onChange={(e) => setNewOrder({...newOrder, price: Number(e.target.value)})}
                    min="0"
                    step="0.01"
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Place Order
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Orders List */}
        <Col md={6}>
          <Card>
            <Card.Header>
              <h5>Recent Orders</h5>
            </Card.Header>
            <Card.Body>
              {orders.length === 0 ? (
                <p className="text-center text-muted">No orders yet</p>
              ) : (
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Symbol</th>
                      <th>Type</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map(order => (
                      <tr key={order.id}>
                        <td>{order.symbol}</td>
                        <td className={order.type === 'buy' ? 'text-success' : 'text-danger'}>
                          {order.type.toUpperCase()}
                        </td>
                        <td>{order.quantity}</td>
                        <td>${order.price}</td>
                        <td>{order.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;