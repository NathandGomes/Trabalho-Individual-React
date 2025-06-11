// src/Pages/Questao3/questao3.jsx
import styles from './questao3.module.css';
import { useState } from 'react';
import { Botao } from '../../Components/Button/button';
import { useNavigate } from 'react-router-dom';

export function Questao3() {
  const [tarefa, setTarefa] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);
  const navigate = useNavigate();

  const adicionarTarefa = () => {
    if (tarefa.trim() !== '') {
      setListaTarefas([...listaTarefas, tarefa]);
      setTarefa('');
    }
  };

  const removerTarefa = (index) => {
    const novaLista = listaTarefas.filter((_, i) => i !== index);
    setListaTarefas(novaLista);
  };

  return (
    <div className={styles.questao3Container}>
      <div className={styles.header}>
        <Botao 
          title="← Voltar"
          onClick={() => navigate('/')}
          type="button"
        />
        <h1>Questão 3 - Lista de Tarefas</h1>
      </div>
      
      <div className={styles.content}>
        <div className={styles.inputContainer}>
          <input 
            type="text"
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
            placeholder="Digite uma tarefa..."
            className={styles.inputTarefa}
            onKeyPress={(e) => e.key === 'Enter' && adicionarTarefa()}
          />
          <Botao 
            title="Adicionar"
            onClick={adicionarTarefa}
            type="button"
          />
        </div>

        <div className={styles.listaContainer}>
          <h3>Suas Tarefas:</h3>
          {listaTarefas.length === 0 ? (
            <p className={styles.semTarefas}>Nenhuma tarefa adicionada ainda.</p>
          ) : (
            <ul className={styles.lista}>
              {listaTarefas.map((item, index) => (
                <li key={index} className={styles.itemLista}>
                  <span>{item}</span>
                  <button 
                    onClick={() => removerTarefa(index)}
                    className={styles.botaoRemover}
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}