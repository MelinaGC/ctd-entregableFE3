import React, {Component} from 'react';

export default class Historial extends Component {
    render() {
        const {historial, seleccionPrevia} = this.props;
        return (
            <div className="recordatorio">
                <h3>Selección anterior: {seleccionPrevia}</h3>
                <h4>Historial de opciones elegidas: </h4>
                <ul>{historial}</ul>
            </div>
        )
    }
}
