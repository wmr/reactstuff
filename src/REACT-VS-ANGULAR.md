# Initialising components
## Initialisation that requires DOM nodes, etc
componentDidMount() {}

# Passing data between components
## Parent -> Child
Assuming parent has a property dataToPass
```javascript
render() {
  return (
    <div>
      <Child childProp={this.dataToPass}/>
    </div>
  )
}
...
// child can access it with:
this.props.childProp
```

## Child -> Parent
```javascript
class ToDoList extends Component {
    myCallback = (dataFromChild) => {
        [...we will use the dataFromChild here...]
    },
    render() {
        return (
            <div>
                 <ToDoItem callbackFromParent={this.myCallback}/>
            </div>
        );
    }
}

class ToDoItem extends React.Component{
    someFn = () => {
        [...somewhere in here I define a variable listInfo which    I think will be useful as data in my ToDoList component...]
        this.props.callbackFromParent(listInfo);
    },
    render() {
        [...]
    }
};

```

# Data binding
## One way binding
You need to use this.state, and this.setState({ ... })
```javascript

constuctor(props) {
  // skipping this will screw things up
  super(props)

  this.state = {
    dataToPass: 'initial value'
  }
}

render() {
  const { dataToPass } = this.state
  return (
    <div>
      <Child childProp={dataToPass}/>
    </div>
  )
}
```

## Two-way binding

```javascript
import React, { Component } from 'react'

export default class Main extends Component {
  constructor(props) {
    // mandatory
    super(props)

    // it is only allowed in the constructor,
    // everywhere else use this.setState(...)
    this.state = {
      inputValue : ''
    }
  }

  handleOnChange = event => {
    this.setState({ inputValue: event.target.value })
  }

  render() {
    // const may improve performance
    const { inputValue } = this.state
    // yikes
    const handleOnChange = this.handleOnChange.bind(this)

    return (
      <div>
        <input type="text" value={inputValue} onChange={handleOnChange} />
        <div>inputValue={inputValue}</div>
      </div>
    )
  }
}
```

# Routing
```javascript

import React, { Component } from 'react'
import { ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'
import FlatButton from 'material-ui/FlatButton'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Main from './Main'
import Stuff from './Stuff'

export default class MainNav extends Component {
  render() {
    return (
      <div><Router><div>
        <ToolbarGroup firstChild={true}>
        <!-- necessary to wrap you elements with 'Link'
          to avoid full page reload -->
          <Link to="/">
            <FlatButton linkButton={true} label="Main"/></Link>
          <Link to="/stuff/12">
            <FlatButton linkButton={true} label="Stuff"/></Link>
          <ToolbarTitle text="SomeApp"/>
        </ToolbarGroup>

        <Route exact path="/" component={Main}/>
        <Route path="/stuff/:stuffId" component={Stuff}/>

      </div></Router></div>
    )
  }
}
```
