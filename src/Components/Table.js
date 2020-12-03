import React, { Component } from 'react';

class Table extends Component {
    renderColumns = columns => columns.map(column => <th>{column.columnName}</th>)
    
    render() {
        return (
            <div>
                <p>{this.props.table.tableName}</p>
                <table>
                    <thead>
                        <tr>
                            {this.renderColumns(this.props.table.columns)}
                        </tr>
                    </thead>
                </table>
            </div>
        );
    }
}

export default Table;
