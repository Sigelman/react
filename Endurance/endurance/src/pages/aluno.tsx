import React, {FormEvent, useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft, FiPlus } from "react-icons/fi";
import {Link} from 'react-router-dom';


import loginImg from '../images/decatlo.png';
import api from '../services/api';

import '../styles/pages/personal.css';


function Personal() {

    const history = useHistory();
    const queryParams = new URLSearchParams(history.location.search);

    const { goBack } = useHistory();

    return (
        <div id="page-personal">
            <aside>
               <header>
                   <img src={loginImg} alt="personal" />
                   <h2>Atualizar cadastro</h2>
                   <h2>executar Treino</h2>
               </header> 
               <footer>
                    <strong>Direito de cópia</strong>
                    <span>SSA Sistemas</span>
                      <button type="button" onClick={goBack}>
                        <FiArrowLeft size={24} color="#FFF" />
                      </button>
               </footer>
            </aside>
            <main>
                <form  className="create-personal-form">
                    <Link to={{pathname:"/cadastraraluno", search: '?id='+queryParams.get('id'), state: { detail: queryParams.get('id') }}}>
                        <button className="confirm-button" type="button">
                                Atualizar Cadastro
                        </button>
                    </Link>
                    <Link to={{pathname:"/executartreino", search: '?id='+queryParams.get('id'), state: { detail: queryParams.get('id') }}}>
                        <button className="confirm-button" type="button">
                                Executar Treino
                        </button>
                    </Link>

                </form>
            </main>

        </div>
    )
}

export default Personal;