import realizarSorteio from "./realizarSorteio"

describe('Dado um sorteio de amigo secreto', () => {
    test('Cada participante não sorteie o própio nome', () => {

        const participantes = [
            'Felipe',
            'Izabela',
            'Julia',
            'Charles',
            'Maria'
        ]
        const sorteio = realizarSorteio(participantes)
        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })
    })
})