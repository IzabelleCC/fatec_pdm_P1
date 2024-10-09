import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/lembreteEntrada.css';
import '@fortawesome/fontawesome-free/css/all.css';

const LembreteEntrada = ({ lembrete, onDelete }) => {
    return (
        <div className="container">
            <div className="col-12 lembrete-container">
                <div className='column'>
                    {lembrete}
                    <button className="btn ml-2" onClick={onDelete}>
                        <i class="fa-solid fa-ban"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}


export default LembreteEntrada;
