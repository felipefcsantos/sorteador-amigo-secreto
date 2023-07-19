import {useListaDeParticipantes} from '../../state/hook/useListaDeParticipantes'
import styles from './ListaParticipantes.module.scss'

export default function ListaParticipantes() {
    const participantes: string[] = useListaDeParticipantes()
  return (
    <ul className={participantes.length !== 0? styles.lista : ''}>
        {participantes.map(participante => <li key={participante}>{participante}</li>)}
    </ul>
  )
}
 