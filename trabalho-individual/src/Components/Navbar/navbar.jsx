import styles from './navbar.module.css';
import minhaimagem from '../../assets/imagem.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import icone from '../../assets/icone.png';
import imagemgi from '../../assets/imagemgi.png';


export function Navbar() {
    const navigate = useNavigate();
    return (
        <div className={styles.Navbar}>
            <img className={styles.navImagem}   src={imagemgi} alt="Imagem pessoa estressada" />

            <Link to="/alterartema">
            <   img className={styles.navImagems} src={icone} alt="icone de alterar tema" />
            </Link>
        </div>
    )
}