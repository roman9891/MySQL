import React, { Component } from 'react';
import RecursiveButton from './RecursiveColumn'
import Insert from './Insert'

class Input extends Component {
    state = {
        crud: ``,
        createTableName: ``,
        createColumns: [],
    }
    
    changeHandler = e => {
        if (e.target.id === 'crud menu') {
            this.setState({
            crud: e.target.value
            }, () => console.log(this.state))
        }

        if (e.target.id === 'create table name') {
            console.log('hi')
            this.setState({
            createTableName: e.target.value.replaceAll(' ', '_')
            }, () => console.log(this.state))
        }
    }
    
    clickHandler = e => {
        const newTable = {
            tableName: this.state.createTableName,
            columns: [{columnName: `ID`, type: `integer`}, ...this.state.createColumns]
        }
        
        this.props.appHandler(newTable)

        this.setState({
            crud: ``,
            createTableName: ``,
            createColumns: []
        })
    }

    inputHandler = state => {
        let columns = this.state.createColumns

        columns[state.id].columnName = state.input
        
        this.setState({createColumns: columns}, () => console.log(this.state))
    }

    typeHandler = state => {
        let columns = this.state.createColumns

        columns[state.id].type = state.type

        this.setState({createColumns: columns}, () => console.log(this.state))
    }

    addColumn = () => {
        this.setState({createColumns: [...this.state.createColumns, {columnName: ``, type: `text`}]}, () => console.log(this.state))
    }

    renderTableNames = tables => tables.map((table,i) => <option key={i} value={table.tableName}>{table.tableName}</option>)
    
    render() {
        return (
            <div id='input'>
                <select onChange={this.changeHandler} id='crud menu'>
                    <option ></option>
                    <option value='create'>CREATE TABLE</option>
                    <option value='insert'>INSERT INTO</option>
                    <option value='select'>SELECT</option>
                    <option value='update'>UPDATE</option>
                    <option value='delete'>DELETE FROM</option>
                </select>
                {this.state.crud === `create` ? 
                    <span>
                        <input placeholder='table name' onChange={this.changeHandler} id='create table name' value={this.state.createTableName}></input>
                        {'(ID INTEGER PRIMARY KEY'}<RecursiveButton 
                            id={0} 
                            inputHandler={this.inputHandler} 
                            typeHandler={this.typeHandler} 
                            addColumn={this.addColumn} 
                        />{');'}
                        <button type='submit' onClick={this.clickHandler}>RUN</button>
                    </span>
                : null}
                {this.state.crud === `insert` ? 
                    <span>
                        <Insert tables={this.props.tables}/>
                        {/* <input placeholder='table name'></input>
                        {'('}<input placeholder='column names'></input>{')VALUES'}
                        {'('}<input placeholder='values'></input>{');'} */}
                    </span>
                : null}
                {this.state.crud === `select` ? <input placeholder='column names'></input> : null}
                {this.state.crud === `update` ? <input placeholder='table name'></input> : null}
                {this.state.crud === `delete` ? <input placeholder='table name'></input> : null}
            </div>
        );
    }
}

export default Input;
