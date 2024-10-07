import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const LembreteEntrada = ({lembrete}) => {
        return (
            <div className='container'>
                <div className='row justify-content-center'>
                    <div 
                        className='col-12 text-center'
                        style={{
                            padding: '1rem',
                            border: '1px solid #dee2e6',
                            borderRadius: '0.75rem',
                            textAlign: 'center'
                        }}>
                        {lembrete}
                    </div>
                </div>
            </div>
        );
}

export default LembreteEntrada;