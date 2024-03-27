import styles from './Header.module.css'

import igniteLogo from '../Img/Ignite simbol.png';

export function Header(){
    return(
        <header className={styles.Header}>
            <img src={igniteLogo} alt="Logotipo do ignite" />
        </header>
    );
}