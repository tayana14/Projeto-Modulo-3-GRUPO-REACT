import{useState, useEffect} from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton';

import styles from './ProjectForm.module.css'

function ProjectForm({handleSubmit, btnText, imovelData}) { // Talvez mudar projectData para imovelData
  const [imovel, setImovel] = useState(imovelData || {})
  const optionsForm = [
    {
      id: 1,
      value: 'imax',
      label: 'IMAX'
    },
    {
      id: 2,
      value: 'xplus',
      label: 'Xplus'
    },
    {
      id: 3,
      value: 'xd',
      label: 'XD'
    },
  ]

  useEffect(() => {
    fetch('http://localhost:5000/imovel', {
    method:"GET",
    headers: {
      'Content-type': 'application/json'
    }
  })}, [])

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(imovel)  // Quando duplicar alterar aqui p/ vendedores ou compradores
  }

  function handleChange(e) {
    setImovel({...imovel, [e.target.name]: e.target.value}) // Quando duplicar alterar imovel p/ vendedores ou compradores
   
  }

  function handleCategory(e) {
    setImovel({
      ...imovel, // Quando duplicar alterar imovel p/ vendedores ou compradores
      category: {
        id: e.target.value,
        tipo:e.target.options[e.target.selectedIndex].text,
      },
    })
    
  }

  return ( // incluído tbm o onSubmit (precisa duplicar nos outros forms)
    <form onSubmit={submit} className={styles.form}> 

      <Input 
        type='text'
        text='Filme'
        name='filme'
        placeholder='Insira o nome do Filme'
        handleOnChange={handleChange}
        value={imovel.filme ? imovel.filme : ''}
      />
      <Input 
        type='text'
        text='Duração'
        name='duracao'
        placeholder='Insira o tempo de duração'
        handleOnChange={handleChange}
        value={imovel.duracao ? imovel.duracao: ''}
      />
      <Input 
        type='text'
        text='Classicação'
        name='classificacao'
        placeholder='Insira a classificação do filme'
        handleOnChange={handleChange}
        value={imovel.classificacao ? imovel.classificacao : ''}
      />
      <Input
        type='text'
        text='Horário'
        name='horario'
        placeholder='Insira o horario da sessao'
        handleOnChange={handleChange}
        value={imovel.horario ? imovel.horario : ''}
      />
      <Input
        type='text'
        text='Idioma'
        name='idioma'
        placeholder='Insira o idioma da sessao'
        handleOnChange={handleChange}
        value={imovel.idioma ? imovel.idioma : ''}
      />
    
      <Select 
      name='category_id' 
      text='Selecione o tipo de Sala '
      options={optionsForm}
      handleOnChange={handleCategory}
      value={imovel.category ? imovel.category.id : ''}
       />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
