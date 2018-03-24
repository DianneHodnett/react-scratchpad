import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'

import Die from './Die'

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sidesState: 2
    }
  }
  render () {
    return (
      <Paper className="paper">
        <form>
          Set Number of Sides:
          <TextField type="number" className="numPicker"
                     onChange={(event) => this.setState({sidesState: event.target.value})}
                     min='2' max={20} step="1" value={this.sidesState}
          />
        </form>
        <Die numSides={this.state.sidesState}/>
      </Paper>
    )
  }
}