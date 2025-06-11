import styles from './button.module.css';


export function Botao({ title, onClick, type}) {
    return (
        <button className={styles.botao} onClick={onClick} type={type}>
      {title}
        </button>
    )
}

