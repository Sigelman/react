import React, {FormEvent, useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import CadloginImg from '../images/fitness_homemMulher.png';
import api from '../services/api';

import '../styles/pages/cadastrarAluno.css';

interface alunoX  {
  //id:string;
  nome:string;
  idade:string;
  sexo:string;
  peso:string;
  altura:string;
  cintura:string;
  sessoes:string;
  personal_id:string;
}


function CadastrarAluno() {
  

    const history = useHistory();
    const queryParams = new URLSearchParams(history.location.search);
  
    const [nome,setNome] = useState('');
    const [idade,setIdade] = useState('');
    const [sexo,setSexo] = useState('');
    const [peso,setPeso] = useState('');
    const [altura,setAltura] = useState('');
    const [cintura,setCintura] = useState('');
    const [sessoes,setSessoes] = useState('2');
    const [personal_id,setPersonalId] = useState('');
    const [personalNome,setPersonalNome] = useState('');

    //const [alunoAtualizado, setAlunoAtualizado] = useState<alunoX>();


    useEffect(()=> {
    //api.get('alunos').then(response => {
    //  setAlunos(response.data);
    //  });
    fetchAluno();
        },[]);

    async function fetchAluno()  {
        const response = await api.get('alunos/'+queryParams.get('id'));
        
        const  {nome,idade,sexo,peso,altura,cintura,sessoes,personal_id} = response.data;
        const aluno = {nome,idade,sexo,peso,altura,cintura,sessoes,personal_id};
            
        //const [aluno,setAluno] = useState<Alunos>(response.data);
        setNome(aluno.nome);
        setIdade(aluno.idade);
        setSexo(aluno.sexo);
        setPeso(aluno.peso);
        setAltura(aluno.altura);
        setCintura(aluno.cintura);
        setSessoes(aluno.sessoes);
        setPersonalId(aluno.personal_id);
        
        const responsePersonal = await api.get('personals/'+personal_id);

        const personal = responsePersonal.data;
        setPersonalNome(personal.nome); 

       }

    async function handleSubmit(event: FormEvent){
      event.preventDefault();

      const alunoAtualizado = {nome,idade,sexo,peso,altura,cintura,sessoes,personal_id};

      const response = await api.put('alunos/'+queryParams.get('id'), alunoAtualizado);
      alert('cadastro realizado com suesso');
      history.push('/aluno');

      //await api.put('alunos',aluno);
      //alert('cadastro realizado com suesso');
        
  }; 

   const { goBack } = useHistory();

    return (
        <div id="page-cadastrarAluno">
            <aside>
               <header>
                   <img src={CadloginImg} alt="login" />
                   <h2>Atualizar Cadastro dos alunos</h2>
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
                <form onSubmit={handleSubmit} className="create-cadaluno-form">
                    <div className="input-block">
                      <label htmlFor="name">Nome</label>
                      <input id="nome" value={nome} onChange={event =>setNome(event.target.value)}/>
                    </div>
                    <div className="input-block">
                      <label htmlFor="name">Idade</label>
                      <input id="idade" value={idade} onChange={event =>setIdade(event.target.value)}/>
                    </div>
                    <div className="input-block">
                      <label htmlFor="name">Sexo</label>
                      <input id="sexo" value={sexo} onChange={event =>setSexo(event.target.value)}/>
                    </div>
                    <div className="input-block">
                      <label htmlFor="name">Peso</label>
                      <input id="peso" value={peso} onChange={event =>setPeso(event.target.value)}/>
                    </div>
                    <div className="input-block">
                      <label htmlFor="name">Altura</label>
                      <input id="altura" value={altura} onChange={event =>setAltura(event.target.value)}/>
                    </div>
                    <div className="input-block">
                      <label htmlFor="name">Cintura</label>
                      <input id="Cintura" value={cintura} onChange={event =>setCintura(event.target.value)}/>
                    </div>
                    <div className="sessoes"><label>Sessoes</label></div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio" name="Nsessoes"
                          value="2" onChange={event =>setSessoes(event.target.value)}  checked={sessoes=="2"}
                        />
                        Duas
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio" name="Nsessoes"
                          value="3" onChange={event =>setSessoes(event.target.value)} checked={sessoes=="3"}
                        />
                        Três
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input
                          type="radio" name="Nsessoes"
                          value="4" onChange={event =>setSessoes(event.target.value)} checked={sessoes=="4"}
                        />
                        Quatro
                      </label>
                    </div>                    
                    <div className="radio">
                      <label>
                        <input
                          type="radio" name="Nsessoes"
                          value="5" onChange={event =>setSessoes(event.target.value)} checked={sessoes=="5"}
                        />
                        Cinco
                      </label>
                    </div>    
                                   
                    <div className="input-block">
                      <label htmlFor="name">Personal</label>
                      <input id="personal" value={personalNome} onChange={event =>setPersonalNome(event.target.value)} readOnly={true}/>
                    </div>

                    <button className="confirm-button" type="submit">
                            Confirmar
                    </button>

                </form>
            </main>

        </div>
    )
}

export default CadastrarAluno;