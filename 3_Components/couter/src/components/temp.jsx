import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3'],
    imageUrl: "https://picsum.photos/200",
  };

  styles = {
      fontSize: 20,
      fontWeight: "bold",

  };
  render() {
    return (
      <React.Fragment>
        <img style={{ fontSize: 20}} src= {this.imageUrl} alt="image"></img>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Incremenet</button>
        <ul>
            { this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
        </ul>
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
