import { Link } from 'react-router-dom';

import Container from './Container';
import styles from './Navbar.module.css';
import logo from '../../img/logo2.png'; // Alterar a logo do Navbar aqui

function Navbar() {
  return (
    <nav className={styles.navbar}>
        <div className={styles.menuToggle}>
          {/* <!--
    A fake / hidden checkbox is used as click reciever,
    so you can use the :checked selector on it.
    --> */}
          <input type="checkbox" />

          {/* <!--
    Some spans to act as a hamburger.
    
    They are acting like a real hamburger,
    not that McDonalds stuff.
    --> */}
          <span></span>
          <span></span>
          <span></span>

          {/* <!--
    Too bad the menu has to be inside of the button
    but hey, it's pure CSS magic.
    --> */}
          <ul className={styles.menu}>
          <li className={styles.item}>
            {' '}
            <Link exacted to="/">
              <img src={logo} alt="Logotipo da CINESTAR" />
            </Link>
          </li>
          {/* Serve como ancora */}
          <li className={styles.item}>
            <Link to="/dashimoveis">Sessões</Link>
          </li>
          {/*<li className={styles.item}>
            <Link to="">Filmes</Link>
  </li>}*/}
          <li className={styles.item}>
            <Link to="/funcionarioos">Funcionários</Link>
          </li>
          
          </ul>
        </div>

        <ul className={styles.list}>
          <li className={styles.item}>
            {' '}
            <Link exacted to="">
              <img src={logo} alt="Logotipo da CINESTAR" />
            </Link>
          </li>
          {/* Serve como ancora */}
          <li className={styles.item}>
            <Link to="/dashimoveis">Sessões</Link>
          </li>
          {/*<li className={styles.item}>
            <Link to="/">Filmes</Link>
</li>*/}
          <li className={styles.item}>
            <Link to="/Funcionarioos">Funcionários</Link>
          </li>
        </ul>

      <div class="search-container">
                <label for="search-input" class={styles.search_icon}></label>
                <input type="text" class={styles.search_input} id="search-input" required />
      </div>
    </nav>
  );
}

export default Navbar;
