import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import Button from './Button';

@inject('count') @observer
class Counter extends Component {
  static propTypes = {
    count: PropTypes.object.isRequired,
  };

  render() {
    const { count } = this.props;
    return (
      <div>
        Count: {count.num} <br />
        Double count: {count.getDoubleCount} <br />
        <Button onClick={count.onIncrement}>+1</Button>
        <Button onClick={count.onDecrement}>-1</Button>
        <Button onClick={count.onAsyncIecrement}>After 1000ms +1</Button>
      </div>
    );
  }
}

export default Counter;
