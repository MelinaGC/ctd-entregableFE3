import React, { Component } from "react";
import data from "./data.json";
import Opciones from "./Opciones";
import Historial from "./Historial";
import Swal from 'sweetalert2'

export default class Historia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
            historial: [],
            seleccionPrevia: ""
        }
    }

    componentDidMount(){
        Swal.fire({
            title: "Comenzá tu aventura",
            background: '#000000'
        });
    }

    handleSelect = (opcion) => {

        if (this.state.contador >= data.length - 2){
            Swal.fire({
                title: "Fin",
                background: '#000000'
            });
        } else if ((opcion === "A" && this.state.seleccionPrevia === "") || (opcion === "A" && this.state.seleccionPrevia === "B")){
            this.setState({
                contador: this.state.contador + 1, 
                seleccionPrevia: opcion
            })
        } else if ((opcion === 'B' && this.state.seleccionPrevia === "") || (opcion === "A" && this.state.seleccionPrevia === "A") 
        || (opcion === "B" && this.state.seleccionPrevia === "B")){
            this.setState({
                contador: this.state.contador + 2, 
                seleccionPrevia: opcion
            })
        } else if (opcion === "B" && this.state.seleccionPrevia === "A"){
            this.setState({
                contador: this.state.contador + 3, 
                seleccionPrevia: opcion
            })
        } 
        this.state.historial.push(opcion);
    }

    render() {
        return (
            <>
                <h1 className='historia'>{data[this.state.contador].historia}</h1>
                <Opciones onSelect={this.handleSelect} opcionA={data[this.state.contador].opciones.a} opcionB={data[this.state.contador].opciones.b} />
                <Historial seleccionPrevia={this.state.seleccionPrevia} historial={this.state.historial.map((elemento, index) => <li key={index}>{elemento}</li>)} />
            </>
        )
    }
}
