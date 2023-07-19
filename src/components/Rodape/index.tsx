import {useListaDeParticipantes} from '../../state/hook/useListaDeParticipantes'
import { useNavigate } from 'react-router-dom'
import styles from './Rodape.module.scss'
import sacolas from '../../utils/imagens/sacolas.png'
import {useSorteador} from '../../state/hook/useSorteador'

export default function Rodape() {

  const participantes = useListaDeParticipantes()
  const navegarPara = useNavigate()
  const sortear = useSorteador()

  const iniciar = () => {
    sortear()
    navegarPara('/sorteio')
  }

  return (
    <footer className={styles.rodapeConfiguracoes}>
      <button
        className={styles.botao}
        disabled={participantes.length < 3}
        onClick={iniciar}>
        Iniciar brincadeira
      </button>
      <img src={sacolas} alt="Sacolas de compras" />
    </footer>)
}
