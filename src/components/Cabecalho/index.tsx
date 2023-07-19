import styles from './Cabecalho.module.scss'
import logo from '../../utils/imagens/participante.png'

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <div 
                className={styles.imagemLogo} 
                role="img" 
                aria-label='Logo do Sorteador'></div>
            <img 
                className={styles.participante}
                src={logo}
                alt="Participante com um presente na mão" />
        </header>
    )
}
