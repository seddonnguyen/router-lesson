import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom'

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        const animalList = this.props.animals.map((animal, idx) => {
            return <h1 key={ idx }>{ animal }</h1>
        })
        return (
            <div className="list">
                { animalList }

                <button >Redirect Component Button</button>

                <button >History Push Button</button>
            </div >

        );
    }
}

export default withRouter(List);