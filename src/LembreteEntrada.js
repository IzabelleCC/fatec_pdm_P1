import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class LembreteEntrada extends Component {
    render() {
        return (
            <div className='container' style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                <div className='row justify-content-center'>
                    <div 
                        className='col-12 text-center'
                        style={{
                            padding: '1rem',
                            border: '1px solid #dee2e6',
                            borderRadius: '0.75rem',
                            textAlign: 'center'
                        }}>
                        Lembrete
                    </div>
                </div>
            </div>
        );
    }
}
