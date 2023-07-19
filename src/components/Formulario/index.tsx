import { useRef, useState } from "react"
import useAdicionarParticipante from "../../state/hook/useAdicionarParticipante"
import useMensagemDeErro from "../../state/hook/useMensagemDeErro"
import styles from './Formulario.module.scss'

export default function Formulario() {

  const [nome, setNome] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const adicionarNaLista = useAdicionarParticipante()

    const mensagemDeErro = useMensagemDeErro()

    const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        adicionarNaLista(nome)
        setNome('')
        inputRef.current?.focus()
    }

    return (<form onSubmit={adicionarParticipante}>
        <div className={styles.grupoInputBtn}>
            <input
                ref={inputRef}
                value={nome}
                onChange={evento => setNome(evento.target.value)}
                type="text"
                placeholder="Insira os nomes dos participantes"
            />
            <button disabled={!nome}>Adicionar</button>
        </div>
        {mensagemDeErro && <p className={styles.alerta} role="alert">{mensagemDeErro}</p>}
    </form>)
}

