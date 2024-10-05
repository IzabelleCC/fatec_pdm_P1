import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LembreteEntrada from './LembreteEntrada';

export default class App extends Component {
    render() {
        return (
            <div 
                style={{
                    marginTop: '3rem',
                    paddingLeft: '15px', 
                    paddingRight: '15px',
                    maxWidth: '1140px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}
            >
                <div 
                    style={{ 
                        display: 'flex', 
                        justifyContent: 'center',
                        marginBottom: '1.5rem'
                    }}
                >
                    <LembreteEntrada />
                </div>
                <div 
                    style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        marginBottom: '1rem'
                    }}
                >
                    <input
                        type='text'
                        placeholder='Digite seu novo lembrete'
                        style={{
                            width: '100%',
                            padding: '0.375rem 0.75rem',
                            fontSize: '1rem',
                            lineHeight: '1.5',
                            color: '#495057',
                            backgroundColor: '#fff',
                            backgroundClip: 'padding-box',
                            border: '1px solid #ced4da',
                            borderRadius: '0.25rem',
                            transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
                            textAlign: 'center'
                        }}
                    />
                </div>
                <div 
                    style={{ 
                        display: 'flex', 
                        justifyContent: 'center'
                    }}
                >
                    <button
                        style={{
                            color: '#fff',
                            backgroundColor: '#007bff',
                            borderColor: '#007bff',
                            display: 'inline-block',
                            fontWeight: '400',
                            textAlign: 'center',
                            verticalAlign: 'middle',
                            userSelect: 'none',
                            padding: '0.375rem 0.75rem',
                            fontSize: '1rem',
                            lineHeight: '1.5',
                            borderRadius: '0.25rem',
                            border: '1px solid transparent',
                            transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out'
                        }}
                    >
                        OK
                    </button>
                </div>
            </div>
        );
    }
}
