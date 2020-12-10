import './App.css';
import Input from './Components/Input'
import TableList from './Components/TableList'
import React, { Component } from 'react';

class App extends Component {
  state = {
    tables: [{
      tableID: 0,
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
      rows: [
        {
          ID: 1,
          String: 'thing',
          Integer: '',
          Real: 4.37,
          Date: '12/10/20'
        },
        {
          ID: 2,
          String: 'doodad',
          Integer: 7,
          Real: 5.37,
          Date: '12/11/20'
        }
      ]
    }]
  }

  appHandler = table => {
    const newTable = {tableID: this.state.tables.length,...table}
    
    this.setState({
      tables: this.state.tables.concat(newTable)
    })
  }

  rowHandler = (row, table) => {
    console.log('rowHandler input:', row, table)
    const newRow = {...row}
    const tables = [...this.state.tables]
    // const targetTable = {...this.state.tables.find(eachTable => eachTable.tableID === table.tableID)}
    const targetTable = tables.find(eachTable => eachTable.tableID === table.tableID)
    targetTable.rows.push(newRow)

    console.log(tables, targetTable)

    this.setState({tables: tables}, () => console.log(this.state))
    //must add row to approprate table
    //find table
    
  }

  render() {
    return (
      <div>
          <p>Notes: add option for additional INSERT inputs//add plus button > when clicked, adds entry to parent array//insert renders inputs equal to size of entry array</p>
          <Input appHandler={this.appHandler} rowHandler={this.rowHandler} tables={this.state.tables}/>
          <TableList tables={this.state.tables}/>
      </div>
    );
  }
}

export default App;
