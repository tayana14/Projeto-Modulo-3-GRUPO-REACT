import { Link } from "react-router-dom"
import styles from './ProjectCard.module.css'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs' //Assim se puxam os ícones
import { IoMdPhotos } from 'react-icons/io';

function ProjectCard({id, name, filme, horario, idioma, handleRemove}){
    const remove = (e) => {
      e.preventDefault()
      handleRemove(id)
    }

    return (
        <div className={styles.project_card}>
         <h4> {name} </h4>
         <p className={styles.category_text}><strong>Filme: &nbsp;</strong> {filme} </p>
         <p className={styles.category_text}><strong>Horario: &nbsp;</strong> {horario} Horas </p>
         <p className={styles.category_text}><strong>Idioma: &nbsp;</strong> {idioma} </p>
         <div className={styles.project_card_actions}>
            <Link to={`/imovel/${id}`}>
                <BsPencil /> Editar
            </Link>
            <button>
                <IoMdPhotos /> Ver
            </button>
            <button onClick={remove}>
                <BsFillTrashFill /> Excluir
            </button>
            
         </div>
       </div>
    )
}

export default ProjectCard;