import React, { Component } from 'react'
import Child from './Child'
import './Main.css'

export default class Main extends Component {
  constructor(props) {
    // mandatory
    super(props)

    // it is only allowed in the ctor,
    // everywhere else use this.setState(...)
    this.state = {
      inputValue : '',
      stuff: '12'
    }
  }

  handleOnChange = event => {
    this.setState({ inputValue: event.target.value })
  }

  handleClick = event => {
    this.setState({stuff: 'biotsch'})
  }

  render() {
    // yikes
    const handleOnChange = this.handleOnChange.bind(this)
    const handleClick = this.handleClick.bind(this)
    const { inputValue, stuff } = this.state

    return (
      <div>
        <div>Main</div>
        <input type="text" value={inputValue} onChange={handleOnChange} />
        <div>current state of inputValue={inputValue}</div>
        <button onClick={handleClick}></button>
        <Child passed={stuff + inputValue}/>
      </div>
    )
  }
}
