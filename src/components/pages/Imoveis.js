import {useNavigate} from 'react-router-dom'//useHistory foi substituído por useNavigate

import ProjectForm from '../project/ProjectForm'; // Formulário dentro da pasta project

import styles from './Imoveis.module.css'; // CSS da página


function Imoveis() {

  const navigate = useNavigate(); //useHistory foi substituído por useNavigate()

  function createPost(project){ // Talvez mudar project para imovel

    //initialize cost and services - Por enquanto os dados abaixo ñ estao sendo utilizados
    project.cost = 0
    project.services = []

    fetch('http://localhost:5000/imovel', {
      method:'POST',
      headers:{
        'Content-type':'application/json',
      },
      body: JSON.stringify(project), // Talvez mudar project para imovel
    })
      .then((resp) => resp.json())
      .then((data) => {
      console.log(data)
      //redirect
      navigate('/dashimoveis', {message:'Imovel cadastrado com sucesso!'}) //
    })
    .catch((err) => console.log(err))

  }

  return (
    <section className={styles.cp}>
    <div className={styles.imoveis_container}>
      <h1>Sessões</h1>
      <p> Aqui você pode criar uma nova sessão.</p>
      
      <ProjectForm handleSubmit={createPost} btnText={"Criar uma nova Sessão"} /> {/*Essa prop(btnText) irá mudar para de acordo com o método. Esse método será um POST. */}
    </div>
    </section>
  );
}

export default Imoveis;
