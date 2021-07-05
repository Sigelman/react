import React, {FormEvent, useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import CadloginImg from '../images/fitness_homemMulher.png';
import api from '../services/api';

import '../styles/pages/cadastrarTreino.css';

interface Treino  {
  //id:string;
  metodo:number;
  minutagem:number;
  distancia: number;
  zonaesforco:number;
  terreno:number;
  pseprevista:number;
  sessao:number;
  aluno_id:number;
}

interface EnumServiceItem {
  id: number; label: string; 
}

//interface EnumServiceItems extends Array<EnumServiceItem>{}

function CadastrarTreino() {
  const history = useHistory();
  const queryParams = new URLSearchParams(history.location.search);
  const sessoes = Number(queryParams.get('sessoes'));
  const [options, setOptions] = useState<EnumServiceItem[]>([]);
  
  useEffect(()=> {
    let indents = options;
      for (let i = 0; i < sessoes; i++) {
        indents.push({"id":i+1,"label":"Sessão "+(i+1)});
      };
      setOptions(indents);
    },[]);


  
    const [sessao,setSessao] = useState('1');
    const [metodo, setMetodo] = useState('1');
    const [minutagem,setMinutagem] = useState('');
    const [distancia,setDistancia] = useState('');
    const [zonaesforco,setZonaesforco] = useState('1');
    const [terreno,setTerreno] = useState('1');
    const [pseprevista,setPseprevista] = useState('1');
    const [aluno_id,setIdaluno] = useState(queryParams.get('id'));
    const [cargaprevista,setCargaprevista] = useState((Number(minutagem)*Number(pseprevista)).toString());
  
    async function handleSubmit(event: FormEvent){
      event.preventDefault();

      const cadastroTreino = {metodo,minutagem,distancia,zonaesforco,terreno,pseprevista,sessao,aluno_id};
      const response = await api.post('treinos/', cadastroTreino);
      alert('cadastro realizado com suesso');
      //history.push('/treino');
       
  }; 

   const { goBack } = useHistory();

    return (
        <div id="page-cadastrarTreino">
            <aside>
               <header>
                   <img src={CadloginImg} alt="login" />
                   <h2>Cadastrar Treinos</h2>
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
                <form onSubmit={handleSubmit} className="create-cadtreino-form">
                      <div className="input-block">
                      <label htmlFor="name">Método</label>
                      <select id="metodo" value={metodo} onChange={event =>setMetodo(event.target.value)}>
                           <option value='1'>Contínuo</option>
                           <option value='2'>Intervalado</option>
                           <option value='3'>Fartlek</option>
                           <option value='4'>Contínuo Variativo</option>
                      </select>                      
                    </div>
                    <div className="input-block">
                      <label htmlFor="name">Minutagem</label>
                      <input id="minutagem" value={minutagem} onChange={event =>setMinutagem(event.target.value)}/>
                    </div>
                    <div className="input-block">
                      <label htmlFor="name">Distância</label>
                      <input id="distancia" value={distancia} onChange={event =>setDistancia(event.target.value)}/>
                    </div>
                    <div className="input-block">
                      <label htmlFor="name">Zona de esforço</label>
                      <select id="zonaesforco" value={zonaesforco} onChange={event =>setZonaesforco(event.target.value)}>
                           <option value='1'>Leve</option>
                           <option value='2'>Moderado</option>
                           <option value='3'>Vigoroso</option>
                      </select>
                    </div>
                    <div className="input-block"> 
                      <label htmlFor="name">Terreno</label>
                      <select id="terreno" value={terreno} onChange={event =>setTerreno(event.target.value)}>
                           <option value='1'>Asfalto</option>
                           <option value='2'>Pista</option>
                           <option value='3'>Piçarra</option>
                           <option value='3'>Trilha</option>
                           <option value='3'>Misto</option>
                      </select>
                    </div>
                    <div className="input-block">
                      <label htmlFor="name">PSE Prevista</label>
                      <select id="pseprevista" value={pseprevista} onChange={event =>setPseprevista(event.target.value)}>
                           <option value='1'>Um</option>
                           <option value='2'>Dois</option>
                           <option value='3'>Três</option>
                           <option value='4'>Quatro</option>
                           <option value='5'>Cinco</option>
                           <option value='6'>Seis</option>
                           <option value='7'>Sete</option>
                           <option value='8'>Oito</option>
                           <option value='9'>Nove</option>
                           <option value='10'>Dez</option>
                      </select>
                    </div>
                                   
                    <div className="input-block">
                      <label htmlFor="name">Carga Prevista</label>
                      <input id="cargaprevista" value={cargaprevista} onChange={event =>setCargaprevista(event.target.value)} readOnly={true}/>
                    </div>

                    <div className="input-block">
                      <label htmlFor="name">Sessão</label>
                      <select id="sessao" value={sessao} onChange={event =>setSessao(event.target.value)}>
                        {options.map((option: { id: {} | null | undefined; })=>(
                           <option key={option.id} value={option.id}>Sessão{option.id}</option>
                        )
                        )}
                      </select>
                    </div>

                    <button className="confirm-button" type="submit">
                            Confirmar
                    </button>

                </form>
            </main>

        </div>
    )
}

export default CadastrarTreino;