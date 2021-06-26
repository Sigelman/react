import React, {FormEvent, useEffect, useState, Component} from "react";
import { useHistory, useParams } from "react-router-dom";
import { FiArrowLeft, FiPlus } from "react-icons/fi";
import {Link} from 'react-router-dom';
//import ReactDataGrid, { Row } from 'react-data-grid';
import {Container, Column, Row} from '../component/grid';




import loginImg from '../images/decatlo.png';
import api from '../services/api';

import '../styles/pages/treino.css';
import { StringifyOptions } from "querystring";
import FlatButton from "material-ui/FlatButton";


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

    //const params = useParams<PersonalParams>()

    const history = useHistory();
    const params = new URLSearchParams(history.location.search);

    const [personal, setPersonal] = useState<Personal>();
    const [rows,setRows] = useState<Aluno[]>([]);
 
      //api.get(`personals/${params.get('id')}`).then(response => {
      //  setPersonal(response.data);
      //});
      //const DataFormatter = ({ id }) => { return <Link to={{pathname:"/cadastraraluno", search: '?id='+params.get('id'), state: { detail: params.get('id') }}}>
      //{ id }</Link> };

      //<Button variant="contained" color="primary" startIcon={<EditIcon />}>
      //Edit
    //</Button>

    const firstNameActions = [
      {
        icon: <span className="glyphicon glyphicon-remove" />,
        callback: () => {
          alert("Deleting");
        }
      },
      {
        icon: "glyphicon glyphicon-link",
        actions: [
          {
            text: "Option 1",
            callback: () => {
              alert("Option 1 clicked");
            }
          },
          {
            text: "Option 2",
            callback: () => {
              alert("Option 2 clicked");
            }
          }
        ]
      }
    ];
    
    
    const MyFormatter = ({
      render(){
        return(
          <Link to={{pathname:"/cadastraraluno", search: '?id='+params.get('id'), state: { detail: params.get('id') }}}>
            <button className="confirm-button" type="button">
                                Atualizar Cadastro
                        </button>
            </Link>
        );
      }
    });

    const columns = [
      { key: "id", name: "ID", editable: false},
      { key: "nome", name: "NOME", editable: false },
      { key: "idade", name: "IDADE", editable: false },
      { key: "sexo", name : "SEXO", editable: false },
      { key: "peso", name: "PESO", editable: false},
      { key: "altura", name:"ALTURA", editable:false},
      { key: "cintura", name:"CINTURA", editable:false},
      { key: "sessoes", name:"SESSOES", editable: false},
      { key: "link", name:"LINK", Formatter: MyFormatter,}
      
    ];

    useEffect(()=> {
      api.get('personals/'+params.get('id')).then(response => {
        setPersonal(response.data);
        if (personal){
          setRows(personal.alunos);
        }
      });

    }, [params.get('id')]);

        const { goBack } = useHistory();


    return (
        <div id="page-personal">
            <aside>
               <header>
                   <img src={loginImg} alt="personal" />
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
            <main>
                <form  className="create-personal-form">
                  <ReactDataGrid columns={columns} rows = {rows} />
                </form>
            </main>

        </div>
    )
}

export default Treino;