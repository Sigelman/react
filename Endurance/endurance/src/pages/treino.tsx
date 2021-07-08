import {useEffect, useState} from "react";
import { useHistory} from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import {Link} from 'react-router-dom';


import loginImg from '../images/decatlo.png';
import rightArrow from '../images/circled-right.png'

import api from '../services/api';

import '../styles/pages/treino.css';


interface Aluno  {
    id:number;
    nome:string;
    idade:number;
    sexo:string;
    peso:number;
    altura:number;
    cintura:number;
    sessoes:number;
}

interface Personal  {
  id:string;
  nome:string;
  banco_id:string;
  alunos:Array<{
    id:number;
    nome:string;
    idade:number;
    sexo:string;
    peso:number;
    altura:number;
    cintura:number;
    sessoes:number;
  }>;
}


function Treino() {

    const history = useHistory();
    const params = new URLSearchParams(history.location.search);

    const [personal, setPersonal] = useState<Personal>();
    const [rows,setRows] = useState<Aluno[]>([]);
 
  
    
    
  
    const columns = [
      { key: "id", name: "ID", editable: false},
      { key: "nome", name: "NOME", editable: false },
      { key: "idade", name: "IDADE", editable: false },
      { key: "sexo", name : "SEXO", editable: false },
      { key: "peso", name: "PESO", editable: false},
      { key: "altura", name:"ALTURA", editable:false},
      { key: "cintura", name:"CINTURA", editable:false},
      { key: "sessoes", name:"SESSOES", editable: false},
      { key: "link", name:"LINK", }
      
    ];
    
    
    useEffect(()=> {
      api.get('personals/'+params.get('id')).then(response => {
        setPersonal(response.data);
        if (personal){
          setRows(personal.alunos);
        }
              
      });

  }, [personal]);


  

    const { goBack } = useHistory();



    return (
        <div id="page-treino">
            <aside>
               <header>
                   <img src={loginImg} alt="treino" />
                   <h2>Programar treino</h2>
                   <h2>Cadastrar login de aluno</h2>
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
                <label>Relação de Alunos</label>
                <table id="data-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Sexo</th>
                            <th>Peso</th>
                            <th>Altura</th>
                            <th>Cintura</th>
                            <th>Sessões</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                      {rows.map((row)=>(
                        <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{row.nome}</td>
                            <td>{row.idade}</td>
                            <td>{row.sexo}</td>
                            <td>{row.peso}</td>
                            <td>{row.altura}</td>
                            <td>{row.cintura}</td>
                            <td>{row.sessoes}</td>
                            <td>
                                <Link to={{pathname:"/cadastrartreino", search: '?id='+row.id+'&&sessoes='+row.sessoes, state: { detail: row.id }}}>
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

export default Treino;