import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/counterStyle.css'

class Counter extends Component {
  render(){
    return (
      <div className="counterDiv">
        <h3>{this.props.counter}</h3>
        <div>
          <button onClick ={() =>this.props.onIncrementCounter()}>+</button>
          <button onClick={() => this.props.onDecrementCounter()}>-</button>
          <button onClick={() => this.props.onAddTen()}>Add 10</button>
          <button onClick={() => this.props.onSubTen()}>Subtract 10</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({type: 'INC_COUNTER'}),
    onDecrementCounter: () => dispatch({type: 'DEC_COUNTER'}),
    onAddTen: () => dispatch({type: 'ADD_TEN_COUNTER'}),
    onSubTen: () => dispatch({type: 'SUB_TEN_COUNTER'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)
