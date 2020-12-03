import React, { Component } from 'react';
import Table from './Table'

class TableList extends Component {
    renderTables = () => this.props.tables.map((table,i) => <Table key={i} table={table}/>)
    
    render() {
        return (
            <div>
                {this.renderTables()}
            </div>
        );
    }
}

export default TableList;
