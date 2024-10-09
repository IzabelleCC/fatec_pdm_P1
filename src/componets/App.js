import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.css';
import LembreteLista from './LembreteLista';

export default class App extends Component {
    state = {
        listaLembretes: [],
        novoLembrete: ''
    }

    onTermoAlterado = (event) => {
        this.setState({ novoLembrete: event.target.value });
    }

    onListaAlterada = (event) => {
        event.preventDefault();
        if (this.state.novoLembrete.trim() !== '') {
            this.setState(prevState => ({
                listaLembretes: [...prevState.listaLembretes, prevState.novoLembrete],
                novoLembrete: ''
            }));
        }
    }
    
    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.onListaAlterada(event);
        }
    }

    deleteLembrete = (index) => {
        this.setState(prevState => {
            const listaAtualizada = [...prevState.listaLembretes];
            listaAtualizada.splice(index, 1);
            return { listaLembretes: listaAtualizada };
        });
    }

    render() {
        return (
            <div className="app-container">
                <div>
                    <LembreteLista 
                        lista={this.state.listaLembretes}
                        onDelete={this.deleteLembrete}
                    />
                </div>
                
                <div className="row justify-content-center mb-3">
                    <div className="col-12">
                        <input
                            type='text'
                            placeholder='Digite seu novo lembrete'
                            value={this.state.novoLembrete}
                            onChange={this.onTermoAlterado}
                            onKeyDown={this.handleKeyDown}
                            className="input-field"
                        />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12">
                        <button
                            className="btn btn-custom w-100"
                            onClick={this.onListaAlterada}
                        >
                            Adicionar lembrete
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
