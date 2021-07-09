import React, {FormEvent, useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import CadloginImg from '../images/fitness_homemMulher.png';
import api from '../services/api';

import '../styles/pages/treinamento.css';

interface Treinamento  {
  id: number;
  distancia:number;
  tempo:string;
  fcrepouso:number;
  fcmedia:number;
  fcmaxima:number;
  pse:number;
  sessao:number;
  treino_id:number;
  aluno_id:number;
}


//interface EnumServiceItems extends Array<EnumServiceItem>{}

function Treinamento() {
  const history = useHistory();
  const queryParams = new URLSearchParams(history.location.search);
  
  useEffect(()=> {
    },[]);


  
    const [distancia, setDistancia] = useState('');
    const [tempo,setTempo] = useState('');
    const [fcrepouso,setFcrepouso] = useState('');
    const [fcmedia,setFcmedia] = useState('');
    const [fcmaxima,setFcmaxima] = useState('');
    const [pse,setPse] = useState('');
    const [sessao,setSessao] = useState(queryParams.get('sessao'));
    const [treino_id,setTreinoid] = useState(queryParams.get('id'));
    const [aluno_id,setAlunoid] = useState(queryParams.get('aluno'));
  
    async function handleSubmit(event: FormEvent){
      event.preventDefault();

      const treinamento = {distancia,tempo,fcrepouso,fcmedia,fcmaxima,pse,sessao,treino_id,aluno_id};
      const response = await api.post('treinamentos/', treinamento);
      alert('cadastro realizado com sucesso');
       
  }; 

   const { goBack } = useHistory();

    return (
        <div id="page-treinamento">
            <aside>
               <header>
                   <img src={CadloginImg} alt="login" />
                   <h2>Prática dos Treinos</h2>
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
                <form onSubmit={handleSubmit} className="create-treinamento-form">
                      <div className="input-block">
                      <label htmlFor="name">Distância</label>
                      <input id="distancia" value={distancia} onChange={event =>setDistancia(event.target.value)}/>
                    </div>
                    <div className="input-block">
                      <label htmlFor="name">Tempo</label>
                      <input id="tempo" value={tempo} onChange={event =>setTempo(event.target.value)}/>
                    </div>
                    <div className="input-block">
                      <label htmlFor="name">FCrepouso</label>
                      <input id="fcrepouso" value={fcrepouso} onChange={event =>setFcrepouso(event.target.value)}/>
                    </div>
                    <div className="input-block">
                      <label htmlFor="name">FCmédia</label>
                      <input id="fcmedia" value={fcmedia} onChange={event =>setFcmedia(event.target.value)}/>
                    </div>
                    <div className="input-block"> 
                      <label htmlFor="name">FCmáxima</label>
                      <input id="fcmaxima" value={fcmaxima} onChange={event =>setFcmaxima(event.target.value)}/>
                    </div>
                    <div className="input-block">
                      <label htmlFor="name">PSE</label>
                      <input id="pse" value={pse} onChange={event =>setPse(event.target.value)}/>
                    </div>

                    <button className="confirm-button" type="submit">
                            Confirmar
                    </button>

                </form>
            </main>

        </div>
    )
}

export default Treinamento;