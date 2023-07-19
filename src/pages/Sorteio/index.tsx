import React, { useState } from 'react'
import { useListaDeParticipantes } from '../../state/hook/useListaDeParticipantes'
import { useResultadoDoSorteio } from '../../state/hook/useResultadoDoSorteio'
import Card from '../../components/Card'
import aviao from "../../utils/imagens/aviao.png"
import styles from './Sorteio.module.scss'

export default function Sorteio() {

  const participantes = useListaDeParticipantes()

  const [participanteDaVez, setParticipanteDaVez] = useState('')
  const [amigoScreto, setAmigoSecreto] = useState('')

  const resultado = useResultadoDoSorteio()

  const sortear = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!)
    }
  }

  return (
    <Card>
      <section className={styles.sorteio}>
        <h2>Quem vai tirar o papelzinho?</h2>
        <form onSubmit={sortear}>
          <select
            required
            name="participanteDavez"
            id="participanteDavez"
            placeholder="Selecione o seu nome"
            value={participanteDaVez}
            onChange={evento => setParticipanteDaVez(evento.target.value)}
          >
            <option>Selecione o seu nome</option>
            {participantes.map(participante => <option key={participante}>{participante}</option>)}
          </select>
          <p>Clique em sortear para ver quem é seu amigo secreto!</p>
          <button className={styles.botaoSortear}>Sortear</button>
        </form>
        {amigoScreto && <p className={styles.resultado} role="alert">{amigoScreto}</p>}
        <footer className={styles.sorteio}>
          <img src={aviao} className={styles.aviao} alt="Um desenho de um avião de papel" />
        </footer>
      </section>
    </Card>)
}
