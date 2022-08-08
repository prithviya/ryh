import React from 'react';
import CountUp from 'react-countup';

class Counter extends React.Component {
    constructor() {
      super();
      this.state = {
        count: 0,
      };
    }
  
     counter = (minimum, maximum) => {
          for (let count = minimum; count <= maximum; count++) {
              setTimeout(() => {
                  this.setState({count})
              }, 1000);
          }
      }
  
      componentDidMount() {
          this.counter(0,75000)
      }
  
    render() {
      return (
        <div>
                <h1 id='stats-number'>{this.state.count}</h1>
            </div>
      );
    }
  }
  
  React.render(<Counter />, document.getElementById('app'));
export default Counter