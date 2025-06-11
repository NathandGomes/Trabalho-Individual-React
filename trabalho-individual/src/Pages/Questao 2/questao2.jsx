// src/Pages/Questao2/questao2.jsx
import styles from './questao2.module.css';
import { useState } from 'react';
import { Botao } from '../../Components/Button/button';
import { useNavigate } from 'react-router-dom';

export function Questao2() {
  const [mensagem, setMensagem] = useState('Olá!');
  const navigate = useNavigate();

  const alterarMensagem = () => {
    setMensagem('Bem-vindo!');
  };

  return (
    <div className={styles.questao2Container}>
      <div className={styles.header}>
        <Botao 
          title="← Voltar"
          onClick={() => navigate('/')}
          type="button"
        />
        <h1>Questão 2 - Mensagem de Boas-Vindas</h1>
      </div>
      
      <div className={styles.content}>
        <p className={styles.mensagem}>{mensagem}</p>
        <Botao 
          title="Entrar"
          onClick={alterarMensagem}
          type="button"
        />
      </div>
    </div>
  );
}