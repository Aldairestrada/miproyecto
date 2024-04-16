import React from "react"
import {useState} from "react";
import './CustomButton.css';
interface Valores {
texto: String;
posicion:number
}
function CustomButton({texto, posicion}:Valores){
    const [contador, setContador]
                                      = useState('-');



const [movimiento, setMovimientos] = useState([]);
const [estadoGato, setEstadoGato] =
                        useState('-');
const funciones = (n:number)=>{
    cambiarEstado();
    agregarMovimiento(n);
};
const agregarMovimiento = (n:number)=>{
      setMovimientos(estado=>{
        return estado[n];
      });
    };
        const cambiarEstado = ()=>{
        setEstadoGato(estado=>{
            if(estado === '-') return 'X';
            if(estado === 'X') return 'O';
            return '-';
        })
    };

    return(
        <div onClick={()=>{funciones(posicion)}} className="mi-button">
            {estadoGato}
        </div>
    );

}
export default CustomButton;
    