import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dieState: 0
    }
  }
  render () {
    const rollDie = () => {
      this.setState(() => ({dieState: Math.ceil(Math.random() *  this.props.numSides)}))
    }
    return (
      <Paper className="paper">
        <p>Number o' Sides: {this.props.numSides}</p>
        <p>Result of Roll: {this.state.dieState}</p>
        <RaisedButton label="Roll Die" onClick={rollDie}/>
      </Paper>
    )
  }
}