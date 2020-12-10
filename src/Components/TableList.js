import React, { Component } from 'react';
import Table from './Table'

class TableList extends Component {
    renderTables = () => this.props.tables.map((table,i) => <Table key={i} table={table}/>)
    
    render() {
        console.log(this.props.tables)
        return (
            <div>
                {this.renderTables()}
            </div>
        );
    }
}

export default TableList;
