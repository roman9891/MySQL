import './App.css';
import Input from './Components/Input'
import Table from './Components/TableList'
import React, { Component } from 'react';

class App extends Component {
  state = {
    tables: [{
      tableName: `TestTable`,
      columns: [
        {
        columnName: `ID`,
        type: `integer`
        },
        {
          columnName: `String`,
          type: `string`
        },
        {
          columnName: `Integer`,
          type: `integer`
        },
        {
          columnName: `Real`,
          type: `real`
        },
        {
          columnName: `Date`,
          type: `date`
        }
      ],
      rows: []
    }]
  }

  appHandler = table => {
    const newTable = {...table}
    
    this.setState({
      tables: this.state.tables.concat(newTable)
    })
  }

  render() {
    return (
      <div>
          <p>Notes: add option for additional INSERT inputs//add plus button > when clicked, adds entry to parent array//insert renders inputs equal to size of entry array</p>
          <Input appHandler={this.appHandler} tables={this.state.tables}/>
          <Table tables={this.state.tables}/>
      </div>
    );
  }
}

export default App;
