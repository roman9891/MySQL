import React, { Component } from 'react';

class Table extends Component {
    
    renderColumns = columns => columns.map(column => <th>{column.columnName}</th>)
    
    renderRows = (table) => table.rows.map((row,i) => <tr>{this.renderCells(row, table)}</tr>)

    renderCells = (row, table) => table.columns.map((column, i) => <td>{row[column.columnName] ? row[column.columnName] : ''}</td>)
    
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
                    <tbody>
                        {this.renderRows(this.props.table)}
                    </tbody>
                </table>
            </div>
            // renders column then rows then cells
            // still need to link placement of cells to column position
            // how do I align cells if their is missing fields especially in the middle
        );
    }
}

export default Table;
