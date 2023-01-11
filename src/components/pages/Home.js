// importação do React
import { useState, useEffect } from 'react';

// importação do Components
import Loading from '../../components/layout/Loading';

// importação do CSS
import styles from './Home.module.css';

//importação da imagem
import savings from '../../img/savings.svg';
import LinkButton from '../layout/LinkButton';

//imagens
import bn2 from '../../img/bn2.png';
import bn1 from '../../img/bn1.png';
import crep from '../../img/crep.png';
import cd1 from '../../img/cd1.png';
import cd2 from '../../img/cd2.png';
import cd3 from '../../img/cd3.png';
import cd4 from '../../img/cd4.png';
import cd5 from '../../img/cd5.png';
import cd6 from '../../img/cd6.png';
import cd7 from '../../img/cd7.png';
import cd8 from '../../img/cd8.png';
import cd9 from '../../img/cd9.png';
import cp1 from '../../img/cp1.jpg';
import f1 from '../../img/f1.jpg';
import f2 from '../../img/f2.jpg';
import f3 from '../../img/f3.jpg';

function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  return (
    <section class="container w-75 text-center" className={styles.homeContainer}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={bn2} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={bn1} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={crep} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>


          <h1 className={styles.titulof}>Filmes em Cartaz</h1>


          <LinkButton to="/imoveis" text="Adicionar Sessão" />

          <div class="text-center mt-5 ">
            <div class="row justify-content-around">
              <div class="col-12 col-sm-6 col-lg-4">
                <img className={styles.card} src={cd1} />
                <p>Black Adam</p>
              </div>

              <div class="col-12 col-sm-6 col-lg-4">
                <img className={styles.card} src={cd2} />
                <p>Don't Worry Darling</p>
              </div>
              <div class="col-12 col-sm-6 col-lg-4">
                <img className={styles.card} src={cd5} />
                <p>Bones and All</p>
              </div>
              <div class="col-12 col-sm-6 col-lg-4">
                <img className={styles.card} src={cd4} />
                <p>Wakanda Forever</p>
              </div>

              <div class="col-12 col-sm-6 col-lg-4">
                <img className={styles.card} src={cd3} />
                <p>Crepúsculo</p>
              </div>
              <div class="col-12 col-sm-6 col-lg-4">
                <img className={styles.card} src={cd6} />
                <p>Avatar: O caminho da água</p>
              </div>
              <div class="col-12 col-sm-6 col-lg-4">
                <img className={styles.card} src={cd7} />
                <p>A Mulher Rei</p>
              </div>

              <div class="col-12 col-sm-6 col-lg-4">
                <img className={styles.card} src={cd8} />
                <p>Morte. Morte. Morte.</p>
              </div>
              <div class="col-12 col-sm-6 col-lg-4">
                <img className={styles.card} src={cd9} />
                <p>Ruído Branco</p>
              </div>
            </div>
          </div>
          
          <div class="container text-center mt-5">
            <div class="row">
              <div class="col">
                <img className={styles.f1} src={f1} />
                <p>Excelente Atendimento.</p>
              </div>
              <div class="col">
                <img className={styles.f1} src={f2} />
                <p>As melhores salas e filmes.</p>
              </div>
              <div class="col">
                <img className={styles.f1} src={f3} />

                <p>Você é nossa prioridade.</p>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Home;
