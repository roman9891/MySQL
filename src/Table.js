import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Roman</td>
                        <td>Opalacz</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Table;
