import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LembreteEntrada from './LembreteEntrada';

const LembreteLista = ({ lista }) => {
    return (
        <div className="container">
            <div className="row">
                {lista.map((lembrete, index) => (
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3" key={index}>
                        <LembreteEntrada lembrete={lembrete} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LembreteLista;
