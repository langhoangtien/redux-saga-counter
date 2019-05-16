import React, { Component } from "react";
import { connect } from "react-redux";

const IncrementAction = {
  type: "INCREMENT"
};

const IncrementAsyncAction = {
  type: "INCREMENT_ASYNC"
};
const DecrementAction = {
  type: "DECREMENT"
};

function mapStateToProps(state) {
  return { counter: state.count };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    Increment: () => dispatch(IncrementAction),
    Decrement: () => dispatch(DecrementAction),
    IncrementAsync: () => dispatch(IncrementAsyncAction)
  };
}

class Counter extends Component {
  render() {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "2rem" }}
      >
        <p>{this.props.counter}</p>
        <button onClick={() => this.props.Increment()}>Increment</button>
        <button onClick={() => this.props.Decrement()}>Decrement</button>
        <button onClick={() => this.props.IncrementAsync()}>
          Increment after 1s
        </button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
