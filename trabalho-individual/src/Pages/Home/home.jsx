
import styles from './home.module.css';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../../Components/Navbar/navbar.jsx';
import { Botao } from '../../Components/Button/button.jsx';



export function HomePage() {
    const navigate = useNavigate();
    
    
    return (
        <div className={styles.HomeContainer}>
            <Navbar />
            <div className={styles.content}>
            <h1>Trabalho Individual React</h1>
            <div className={styles.buttonsContainer}>
                <Botao 
                    title="Questão 2 - Mensagem de Boas-Vindas"
                    onClick={() => navigate('/questao2')}
                    type="button"
                />
                <Botao 
                    title="Questão 3 - Lista de Tarefas"
                    onClick={() => navigate('/questao3')}
                    type="button"
                />
            </div>
            </div>
        </div>
    )
}