import styles from './Imovel.module.css'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ProjectForm from '../project/ProjectForm'

function Sessoes () {
    const {id} = useParams()
    
    const [imovel, setImovel] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)

    useEffect(() => {
        setTimeout(() => {
          fetch(`http://localhost:5000/imovel/${id}`, {
            method:'GET',
            headers: {
            'Content-Type':'application/json',
      },
    
    })
    .then((resp) => resp.json())
    .then((data) => {
        setImovel(data)
    })
    .catch(err => console.log)
    }, 300) // Inserir esse Timeout nos outros Puts
    }, [id])


    function editPost(imovel) { // Alterar onde está escrito imóvel para vendedores ou compradores nas outras páginas
      fetch(`http://localhost:5000/imovel/${imovel.id}`, {
        method:'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(imovel),
      })
      .then(resp => resp.json())
      .then((data) => {
        setImovel(data)
        setShowProjectForm(false)
        //mensagem
      })
      .catch(err => console.log(err))
    }

    function toggleProjectForm() {
      setShowProjectForm(!showProjectForm)
    }
    
    return (
      

        <>
        {imovel.filme ? (
        <div className={styles.project_details}>
          <Container customClass='column'>
            <div className={styles.details_container}>
              <h1> Filme: {imovel.filme}</h1>
              <button className={styles.btn} onClick={toggleProjectForm}>
                {!showProjectForm ? 'Editar Sessão' : 'Fechar'}
                </button>
                {!showProjectForm ? (
                  <div className={styles.project_info}>
                    <p>
                      <span> Filme: </span> {imovel.filme}.
                    </p>
                    <p>
                      <span> Horário: </span> {imovel.horario} Horas.
                    </p>
                    <p>
                      <span> Idioma: </span> {imovel.idioma}.
                    </p>
                    <p>
                      <span> Classificação: </span>  Maior de {imovel.classificacao} anos.
                    </p>
                   
                  </div>
                ) : (
                  <div className={styles.project_info}>
                    <ProjectForm 
                    handleSubmit={editPost} 
                    btnText='Concluir edição'
                    imovelData={imovel}/>  {/* Alterar onde está escrito imovel e imovelData p/ vendedores ou compradores*/}
                  </div>
                )} 
            </div>
          </Container>
        </div>
        ) : (
        <Loading />
        )}
        </>
    )
}

export default Sessoes