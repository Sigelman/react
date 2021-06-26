import React, {FormEvent, useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import CadloginImg from '../images/personal.png';
import api from '../services/api';

import '../styles/pages/cadastrarLogin.css';

interface Personals {
  id: string;
  nome: string;
  banco_id: string; 
}

//interface cadastrarLogins {
//  nome: string;  
//  email: string;
//  senha: string;
//  cadastro_id:string;
//}




function CadastrarLogin() {

    let achou = false;
   let personalNome = '';

    const history = useHistory();
    const queryParams = new URLSearchParams(history.location.search);
  
    const [personals,setPersonals] = useState<Personals[]>([]);

    useEffect(()=> {
    api.get('personals').then(response => {
      setPersonals(response.data);
      });
        });
          
        //const [personalNome, setPersonalNome] = useState('');

        personals.forEach(psl =>{
          if (psl.id==queryParams.get('id')) {
                achou = true;
                personalNome = psl.nome;
          };
          });
        
        const [nome, setNome]   = useState('');
        const [email, setEmail] = useState('');
        const [senha, setSenha] = useState('123456');
    

    async function handleSubmit(event: FormEvent){
      event.preventDefault();

      let idade = 0;
      let sexo = 'M';
      let peso = 0;
      let altura = 0;
      let cintura = 0;
      let sessoes = 0;
      let personal_id = queryParams.get('id');

      
      const aluno = {nome,idade,sexo,peso,altura,cintura,sessoes,personal_id };
      //api.post('alunos',aluno).then(response => {response.data});
      const response = await api.post('alunos',aluno);

      const alunos = response.data;

    
      let perfil = 'A';
      let primeiro_acesso = true;     
      let cadastro_id = alunos.id;
      
      const login = {email,senha,primeiro_acesso,perfil,cadastro_id};
      await api.post('logins',login);
      alert('cadastro realizado com suesso');
        
  }; 

   const { goBack } = useHistory();

    return (
        <div id="page-cadastrarLogin">
            <aside>
               <header>
                   <img src={CadloginImg} alt="login" />
                   <h2>Cadastrar login dos alunos</h2>
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
                <form onSubmit={handleSubmit} className="create-cadlogin-form">
                    <div className="input-block">
                      <label htmlFor="name">Nome</label>
                      <input id="nome" value={nome} onChange={event =>setNome(event.target.value)}/>
                    </div>
                    <div className="input-block">
                      <label htmlFor="name">Email</label>
                      <input id="email" value={email} onChange={event =>setEmail(event.target.value)}/>
                    </div>
                    <div className="input-block">
                      <label htmlFor="name">Senha</label>
                      <input id="senha" value={senha} onChange={event =>setSenha(event.target.value)} readOnly={achou}/>
                    </div>
                    <div className="input-block">
                      <label htmlFor="name">Personal</label>
                      <input id="personal" value={personalNome} readOnly={achou}/>
                    </div>

                    <button className="confirm-button" type="submit">
                            Confirmar
                    </button>

                </form>
            </main>

        </div>
    )
}

export default CadastrarLogin;