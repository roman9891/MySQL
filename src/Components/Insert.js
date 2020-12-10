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

    renderColumnNames = table => table.columns.map((columnObj,i) => <option key={i} value={columnObj.columnName}>{columnObj.columnName}</option>)
    
    changeHandler = e => {
        console.log('e.target.value:', e.target.value)
        this.setState({
            table: this.props.tables.find(table => table.tableName === e.target.value)
        },
        () => console.log(this.state))
    }

    changeHandler2 = e => {
        const row = {...this.state.row}
        const column = e.target.value
        
        row[column] = ``
        
        this.setState({row: row, column: column})
    }

    runClickHandler = e => {
        //send row up to app
        //grabs row from state?
        //app adds finds table and concats row into .rows
        this.props.rowHandler(this.state.row, this.state.table)
    }

    clickHandler = e => {
        //need to track if clicked through state
        //add select element
        //select does not contain already selected
    }

    typeHandler = e => {
        const input = e.target.value
        const row = {...this.state.row}
        const column = this.state.column

        row[column] = input

        this.setState({input: input, row: row}, () => console.log(this.state))
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
                        {'('}
                        <select onChange={this.changeHandler2}>{this.renderColumnNames(this.state.table)}</select>
                        {')VALUES('}
                        {this.state.column ? 
                        <span>
                            <input onChange={this.typeHandler} value={this.state.input}></input>
                            <button onClick={this.clickHandler}>+</button>
                        </span>  : null}
                        {')'}
                    </span> : null}   
                <button onClick={this.runClickHandler}>RUN</button>            
            </span>
        );
    }
}

export default Insert;
