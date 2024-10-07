import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/lembreteEntrada.css';

const LembreteEntrada = ({ lembrete }) => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 lembrete-container">
                    {lembrete}
                </div>
            </div>
        </div>
    );
}


export default LembreteEntrada;
