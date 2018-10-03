import React, { Component } from 'react';
import List from './components/list/list.js';
import Reply from './components/list/itemTemplates/reply';

class App extends Component {

  constructor(){

    super();

    this.state = {

      items:[{
        
        
      },{},{}]
    };
  
  }
  

  render() {
    return (
     
        <List items={this.state.items} itemRenderer={Reply}></List>
    );
  }
}

export default App;
