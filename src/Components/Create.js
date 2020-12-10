import React, { Component } from 'react';
import RecursiveButton from './RecursiveColumn'

class Create extends Component {
    state = {
        createTableName: ``,
        createColumns: [],
    }

    changeHandler = e => {
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
    
    render() {
        return (
            <span>
                <input 
                    placeholder='table name' 
                    onChange={this.changeHandler} 
                    id='create table name' 
                    value={this.state.createTableName}>
                </input>
                {'(ID INTEGER PRIMARY KEY'}<RecursiveButton 
                    id={0} 
                    inputHandler={this.inputHandler} 
                    typeHandler={this.typeHandler} 
                    addColumn={this.addColumn} 
                />{');'}
                <button type='submit' onClick={this.clickHandler}>RUN</button>
            </span>
        );
    }
}

export default Create;
