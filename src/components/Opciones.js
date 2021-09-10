import React, { Component } from 'react';

export default class Opciones extends Component {
    render() {
        const { opcionA, opcionB, onSelect } = this.props;
        return (
            <div className="opciones">
                <div className="opcion">
                    <button onClick={() => onSelect("A")} id="A" className="botones">A</button>
                    <h2>{opcionA}</h2>
                </div>
                <div className="opcion">
                    <button onClick={() => onSelect("B")} id="B" className="botones">B</button>
                    <h2>{opcionB}</h2>
                </div>
            </div>
        )
    }
}