import React, {FormEvent, useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft, FiPlus } from "react-icons/fi";

import loginImg from '../images/login.png';
import api from '../services/api';

import '../styles/pages/login.css';


interface Logins {
  id: string;
  email: string;
  senha: string;
  primeiro_acesso:boolean;
  perfil:string;
  cadastro_id:string;
}

function NovaSenha() {

    const history = useHistory();
    const queryParams = new URLSearchParams(history.location.search);

    const [novasenha, setNovasenha] = useState('');
    const [confirmarsenha, setConfirmarsenha] = useState('');
    //const [logins, setLogins] = useState<Logins>();

    useEffect(()=> {
    });


    async function handleSubmit(event: FormEvent){
      event.preventDefault();

      const resposta = await api.get('logins/'+queryParams.get('id'));
      if (novasenha == confirmarsenha){
        const logins = resposta.data;
        logins.senha = novasenha;
        logins.primeiro_acesso = false;
        const response = await api.put('logins/'+queryParams.get('id'),logins);
        alert('Senha alterada com suesso');
        history.push('/app');
      } else alert('As senhas não conferem');
      

  }; 

    const { goBack } = useHistory();

    return (
        <div id="page-login">
            <aside>
               <header>
                   <img src={loginImg} alt="login" />
                   <h2>Cadastrar Nova Senha</h2>
                   <p>Sua saúde em primeiro lugar :)</p>
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
                <form onSubmit={handleSubmit} className="create-login-form">
                    <div className="input-block">
                      <label htmlFor="name">Nova Senha</label>
                      <input id="novasenha" type='password' value={novasenha} onChange={event =>setNovasenha(event.target.value)}/>
                    </div>
                    <div className="input-block">
                      <label htmlFor="name">Confirmar Senha</label>
                      <input id="confirmrsenha" type='password' value={confirmarsenha} onChange={event =>setConfirmarsenha(event.target.value)}/>
                    </div>
                    <button className="confirm-button" type="submit">
                            Confirmar
                    </button>

                </form>
            </main>

        </div>
    )
}

export default NovaSenha;