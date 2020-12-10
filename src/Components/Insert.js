import React, { Component } from 'react';

class Insert extends Component {
    state = {
        table: ``,
        row: {}
    }

    renderTableNames = tables => tables.map((table,i) => 
            <option 
                key={i} 
                value={table.tableName}>
                    {table.tableName}
            </option>
    )

    renderColumnNames = table => table.columns.map((columnObj,i) => <option key={i} >{columnObj.columnName}</option>)
    
    changeHandler = e => {
        console.log('e.target.value:', e.target.value)
        this.setState({
            table: this.props.tables.find(table => table.tableName === e.target.value)
        },
        () => console.log(this.state))
    }

    runClickHandler = e => {
        //send row up to app
        //grabs row from state?
        //app adds finds table and concats row into .rows
        this.props.rowHandler(this.state.row)
    }

    render() {
        console.log(this.props.tables[0]?.tableName)
        return (
            <span>
                <select onChange={this.changeHandler} defaultValue={this.props.tables[0]?.tableName}>
                    {this.renderTableNames(this.props.tables)}
                </select>
        {this.state.table ? 
                <span>
                    {'('}<select>
                        {this.renderColumnNames(this.state.table)}
                    </select>
                    <button>+</button>{')VALUES('}
                    <input></input>{')'}
                </span> : null}   
                <button onClick={this.runClickHandler}>RUN</button>            
            </span>
        );
    }
}

export default Insert;
