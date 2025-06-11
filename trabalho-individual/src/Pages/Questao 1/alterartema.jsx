// src/Pages/Questao 2/alterartema.jsx
import styles from './alterartema.module.css';
import { useState } from 'react';
import { Botao } from '../../Components/Button/button';
import { useNavigate } from 'react-router-dom';

export function AlterarTema() {
  const [temaEscuro, setTemaEscuro] = useState(false);
  const navigate = useNavigate();

  const alternarTema = () => {
    setTemaEscuro(!temaEscuro);
    
    // Aplica o tema no body da página
    if (!temaEscuro) {
      document.body.style.backgroundColor = '#1a1a1a';
      document.body.style.color = '#ffffff';
    } else {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
    }
  };

  return (
    <div className={`${styles.AlterarTema} ${temaEscuro ? styles.escuro : styles.claro}`}>
      <div className={styles.header}>
              <Botao 
                title="← Voltar"
                onClick={() => navigate('/')}
                type="button"
              />
              </div>
      
              <Botao 
                title={temaEscuro ? 'Tema Claro' : 'Tema Escuro'}
               onClick={alternarTema}
               type="button"
      />
      <p>Tema atual: {temaEscuro ? 'Escuro' : 'Claro'}</p>
    </div>
  );
}