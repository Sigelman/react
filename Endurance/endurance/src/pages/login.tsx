import React, {FormEvent, useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft, FiPlus } from "react-icons/fi";

import loginImg from '../images/cadeado.png';
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


function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [logins, setLogins] = useState<Logins[]>([]);
    let id = '';
    let achou = false;
    let perfil = '';
    let cadastro_id = '';
    let primeiro_acesso = true;

    useEffect(()=> {
      api.get('logins').then(response => {
        setLogins(response.data);
      });
    }, []);

    function handleSubmit(event: FormEvent){
      event.preventDefault();


      logins.forEach(lgn =>{
          if (lgn.email===email) {
            if (lgn.senha===senha){
                id = lgn.id;
                achou = true;
                perfil = lgn.perfil;
                cadastro_id = lgn.cadastro_id;
                primeiro_acesso = lgn.primeiro_acesso;
            } 
          };
      });
      
      
      if (achou){
          if (perfil==='P') {
              history.push({pathname:'/personal', search: '?id='+cadastro_id, state: { detail: cadastro_id }});
          } else 
          if (perfil === 'A') {
              {primeiro_acesso ? history.push({pathname:'/novasenha', search: '?id='+id, state: { detail: id }}):
              history.push({pathname:'/aluno', search: '?id='+id, state: { detail: id }})};
          };

      } else alert('usuário não encontrado');
//            {achou ? history.push({pathname:'/cadastrarlogin', state: { id: cadastro_id }}):alert('usuário não encontrado')};
  }; 

    const { goBack } = useHistory();

    return (
        <div id="page-login">
            <aside>
               <header>
                   <img src={loginImg} alt="login" />
                   <h2>Efetuar login no sistema</h2>
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
                      <label htmlFor="name">Email</label>
                      <input id="email" value={email} onChange={event =>setEmail(event.target.value)}/>
                    </div>
                    <div className="input-block">
                      <label htmlFor="name">Senha</label>
                      <input id="senha" type='password' value={senha} onChange={event =>setSenha(event.target.value)}/>
                    </div>
                    <button className="confirm-button" type="submit">
                            Confirmar
                    </button>

                </form>
            </main>

        </div>
    )
}

export default Login;