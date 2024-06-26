import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

//   constructor() {
//     super()
//     this.handleIncrement = this.handleIncrement.bind(this);
//   }


  handleIncrement = (product) => {
    console.log(product);
    // this.state.count++;
    this.setState({count: this.state.count + 1});
    //    console.log('click', this);
    //obj.method => obj;
    //function => window obj;
    //stick mode => undefined;

  }


  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id:1 })}
          className="btn btn-secondary btn-sm"
        >
          Incremenet
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
