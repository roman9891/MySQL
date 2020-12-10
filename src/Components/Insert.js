import React, { Component } from 'react';

class Insert extends Component {
    state = {
        table: ``
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
                        {this.renderColumnNames(this.state.table)}//needs to allow for multiple columns
                    </select>{')VALUES('}
                    <input></input>{')'}//needs to allow mutiple input fields or split input based on # columns
                </span> : null}   
                <button>RUN</button>            
            </span>
        );
    }
}

export default Insert;
