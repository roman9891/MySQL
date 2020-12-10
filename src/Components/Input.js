import React, { Component } from 'react';
import Create from './Create'
import Insert from './Insert'

class Input extends Component {
    state = {
        crud: ``
    }
    
    changeHandler = e => this.setState({crud: e.target.value}, () => console.log(this.state))
    
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
                    <Create appHandler={this.props.appHandler}/>
                : null}
                {this.state.crud === `insert` ? 
                    <Insert tables={this.props.tables} rowHandler={this.props.rowHandler}/>
                : null}
                {this.state.crud === `select` ? <input placeholder='column names'></input> : null}
                {this.state.crud === `update` ? <input placeholder='table name'></input> : null}
                {this.state.crud === `delete` ? <input placeholder='table name'></input> : null}
            </div>
        );
    }
}

export default Input;
