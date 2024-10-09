import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LembreteEntrada from './LembreteEntrada';
import '../styles/lembreteLista.css';

const LembreteLista = ({ lista, onDelete }) => {
    return (
        <div className="lembrete-lista-container">
            <h2 className="lembrete-titulo">Meus Lembretes</h2>
            <div className="lembrete-lista-row">
                {lista.map((lembrete, index) => (
                    <div className="lembrete-lista-item" key={index}>
                        <LembreteEntrada 
                            lembrete={lembrete}
                            onDelete={() => onDelete(index)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LembreteLista;
