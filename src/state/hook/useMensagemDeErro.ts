import { useRecoilValue } from "recoil"
import { erroState } from "../atom"

export default function useMensagemDeErro() {
    const mensagem = useRecoilValue(erroState)
  return mensagem
}
