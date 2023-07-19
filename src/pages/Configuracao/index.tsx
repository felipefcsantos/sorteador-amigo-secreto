import React from 'react'
import Formulario from '../../components/Formulario'
import ListaParticipantes from '../../components/ListaParticipantes'
import Rodape from '../../components/Rodape'
import Card from '../../components/Card'

export default function Configuracao() {
  return (
    <Card>
    <section>
        <h2>Vamos começar!</h2>
        <Formulario />
        <ListaParticipantes />
        <Rodape />
    </section>
</Card>
  )
}
