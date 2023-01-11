
import { useState, useEffect } from 'react';

import Loading from '../../components/layout/Loading';

import cd1 from '../../img/cd1.jpeg'
import cd2 from '../../img/cd2.jpeg'
import cd3 from '../../img/cd3.jpeg'
import cd4 from '../../img/cd4.jpeg'
import styles from './Funcionarioos.module.css';
// importação do Components



function Funcionarioos() {
    const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);
  
    return(
      <section >
         {isLoading ? (
        <Loading />
      ) : (
        <>
        
        <h1 className={styles.h1}> Funcionários - Cinema Cine Star</h1>
        
<div class="container text-center mt-5">
  <div class="row">
    <div class="col ">
    <div class="card text-bg-dark" >
  <img src={cd1}  class="card-img-top" alt="..."/>
  <div class="card-body cd">
    <h5 className={styles.cardtitle}>Kauã Soares</h5>
    <p class="card-text">Setor: Direção</p>
    <button type="button" class="btn btn-secondary">Mais informações</button>
  
  </div>
</div>
  
    </div>
    <div class="col" >
    <div class="card text-bg-dark" >
  <img src={cd2} class="card-img-top" alt="..."/>
  <div class="card-body cd">
    <h5 className={styles.cardtitle}>Letícia Moretti</h5>
    <p class="card-text">Setor: Direção</p>
    <button type="button" class="btn btn-secondary">Mais informações</button>

  </div>
</div>
    </div>
    <div class="col" >
    <div class="card text-bg-dark" >
  <img src={cd3} class="card-img-top" alt="..."/>
  <div class="card-body cd" className={styles.cd}>
    <h5 className={styles.cardtitle}>Tayana Souza</h5>
    <p class="card-text" className="cd">Setor: Direção</p>
    <button type="button" class="btn btn-secondary" className={styles.btn}>Mais informações</button>
    
  </div>
</div>
    </div>
   
    <div class="col" >
    <div class="card text-bg-dark" >
  <img src={cd4} class="card-img-top" alt="..."/>
  <div class="card-body cd">
    <h5 className={styles.cardtitle}>Thiago Pereira</h5>
    <p class="card-text" className="cd">Setor: Direção</p>
    <button type="button" class="btn btn-secondary">Mais informações</button>
    
    
  </div>
</div>
    </div>
   
  </div>
</div>

  </>
)}
</section>

    )
}
export default Funcionarioos