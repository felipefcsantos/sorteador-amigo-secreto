import { useSetRecoilState } from 'recoil'
import {useListaDeParticipantes} from './useListaDeParticipantes'
import { resultadoAmigoSecreto } from '../atom'
import realizarSorteio from '../helpers/realizarSorteio'

export function useSorteador() {

    const participantes = useListaDeParticipantes()
    const setResultado = useSetRecoilState(resultadoAmigoSecreto)

  return () => {
    const resultado = realizarSorteio(participantes)
    setResultado(resultado)
    }
  }
