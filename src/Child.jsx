import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <div>{this.props.passed}</div>
    )
  }
}
