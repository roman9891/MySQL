import React, { Component } from 'react';

class RecursiveColumn extends Component {
    state = {
        id: this.props.id,
        clicked: false,
        input: ``,
        type: ``
    }

    clickHandler = () => {
        this.setState({clicked: true})
        this.props.addColumn()
    }

    nameHandler = e => this.setState({input: e.target.value}, () => this.props.inputHandler(this.state))

    typeHandler = e => this.setState({type: e.target.value}, () => this.props.typeHandler(this.state))

    render() {
        return (
            <span>
                {this.state.clicked ? 
                    <span>,
                        <input placeholder='column name' onChange={this.nameHandler}></input>
                        <select onChange={this.typeHandler}>
                            <option value='text'>TEXT</option>
                            <option value='integer'>INTEGER</option>
                            <option value='real'>REAL</option>
                            <option value='date'>DATE</option>
                        </select>
                        <RecursiveColumn 
                            id={this.state.id + 1} 
                            inputHandler={this.props.inputHandler} 
                            typeHandler={this.props.typeHandler}
                            addColumn={this.props.addColumn}
                        />
                    </span>
                    : <button onClick={this.clickHandler}>+</button>
                }
            </span>
        );
    }   
}

export default RecursiveColumn;
