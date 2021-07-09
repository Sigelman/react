import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from 'react-router-dom';


import loginImg from '../images/decatlo.png';
import rightArrow from '../images/circled-right.png'

import api from '../services/api';

import '../styles/pages/treino.css';


interface Treino  {
  id:string;
  metodo:number;
  minutagem:number;
  distancia: number;
  zonaesforco:number;
  terreno:number;
  pseprevista:number;
  sessao:number;
}

interface Aluno  {
    id:number;
    nome:string;
    idade:number;
    sexo:string;
    peso:number;
    altura:number;
    cintura:number;
    sessoes:number;
    treinos: Array<{
      id:string;
      metodo:number;
      minutagem:number;
      distancia: number;
      zonaesforco:number;
      terreno:number;
      pseprevista:number;
      sessao:number;
    }>

}



function ExecutarTreino() {

    const history = useHistory();
    const params = new URLSearchParams(history.location.search);

    const [aluno, setAluno] = useState<Aluno>();
    const [rows,setRows] = useState<Treino[]>([]);

    const metodo = ['Contínuo','Intervalado','Fartlek','Contínuo Variativo'];
    const zonaesforco = ['Leve','Moderado','Vigoroso'];
    const terreno = ['Asfalto','Pista','Piçarra','Trilha','Misto'];
    const pse = ['Um','Dois','Três','Quatro','Cinco','Seis','Sete','Oito','Nove','Dez'];
    
    useEffect(()=> {
      api.get('alunos/'+params.get('id')).then(response => {
        setAluno(response.data);
        if (aluno){
          setRows(aluno.treinos);
        }
      
      });

  }, [aluno]);

    const { goBack } = useHistory();

    return (
        <div id="page-treino">
            <aside>
               <header>
                   <img src={loginImg} alt="treino" />
                   <h2>Executar treino</h2>
                   <h2>Fazer prática de treino</h2>
               </header> 
               <footer>
                    <strong>Direito de cópia</strong>
                    <span>SSA Sistemas</span>
                      <button type="button" onClick={goBack}>
                        <FiArrowLeft size={24} color="#FFF" />
                      </button>
               </footer>
            </aside>
            <main id="container">
              <section id="transaction">
                <label>Aluno: {aluno ? aluno.nome:""}: Sessões de Treino</label>
                <table id="data-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Método</th>
                            <th>Minutagem</th>
                            <th>Distância</th>
                            <th>Zona de Esforço</th>
                            <th>Terreno</th>
                            <th>PSE Prevista</th>
                            <th>Sessão</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                      {rows.map((row)=>(
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{metodo[row.metodo-1]}</td>
                            <td>{row.minutagem}</td>
                            <td>{row.distancia}</td>
                            <td>{zonaesforco[row.zonaesforco-1]}</td>
                            <td>{terreno[row.terreno-1]}</td>
                            <td>{pse[row.pseprevista-1]}</td>
                            <td>{row.sessao}</td>
                            <td>
                                <Link to={{pathname:"/treinamento", search: '?id='+row.id+'&&aluno='+params.get('id')+'&&sessao='+row.sessao, state: { detail: row.id }}}>
                                    <img src={rightArrow}/>
                                </Link>
                            </td>

                        </tr>
                      ))}
                    </tbody>
                </table>
              </section>
            </main>

        </div>
    )
}

export default ExecutarTreino;