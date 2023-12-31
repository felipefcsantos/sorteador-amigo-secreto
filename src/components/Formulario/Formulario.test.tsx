import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Formulario from "./index";
import { RecoilRoot } from "recoil";

describe('O comportamento do Formulario.tsx', () => {

    test('Quando o input está vazio, novos particiantes não podem ser adicionados', () => {

        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
        //encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        //encontrar no DOM o botão de submeter
        const botao = screen.getByRole('button')
        //garantir que o input esteja  no documento
        expect(input).toBeInTheDocument()
        //garantir que o botão esteja desabilitado
        expect(botao).toBeDisabled()
    })
    
    test('Adicionar novo participante caso exista um nome preenchido', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
        //encontrar no DOM o input
        const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
        //encontrar no DOM o botão de submeter
        const botao = screen.getByRole('button')
        //inserir um valor no input
        fireEvent.change(input, {
            target: {
                value: 'Felipe Santos'
            }
        })
        //clicar no botão de submeter
        fireEvent.click(botao)
        //garantir que o input esteja com o foco ativo
        expect(input).toHaveFocus()
        //garantir que o input não tenha valor
        expect(input).toHaveValue('')
    })
    
    test('Nomes duplicados não podem ser adicionados na lista', () => {
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
         //encontrar no DOM o input
         const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
         //encontrar no DOM o botão de submeter
         const botao = screen.getByRole('button')
         //inserir um valor no input
         fireEvent.change(input, {
             target: {
                 value: 'Felipe Santos'
             }
         })
         //clicar no botão de submeter
         fireEvent.click(botao)
    
         fireEvent.change(input, {
            target: {
                value: 'Felipe Santos'
            }
        })
        //clicar no botão de submeter
        fireEvent.click(botao)
    
        const mensagemDeErro = screen.getByRole('alert')
        expect(mensagemDeErro.textContent).toBe('Nomes duplicados não são permitidos!')
    })
    
    test('As mensagens de erro devem sumir após os timers', () => {
        jest.useFakeTimers()
    
        render(
            <RecoilRoot>
                <Formulario />
            </RecoilRoot>
        )
         //encontrar no DOM o input
         const input = screen.getByPlaceholderText('Insira os nomes dos participantes')
         //encontrar no DOM o botão de submeter
         const botao = screen.getByRole('button')
         //inserir um valor no input
         fireEvent.change(input, {
             target: {
                 value: 'Felipe Santos'
             }
         })
         //clicar no botão de submeter
         fireEvent.click(botao)
    
         fireEvent.change(input, {
            target: {
                value: 'Felipe Santos'
            }
        })
        //clicar no botão de submeter
        fireEvent.click(botao)
    
        let mensagemDeErro = screen.queryByRole('alert')
        expect(mensagemDeErro).toBeInTheDocument()
    
        act(()=> {
            jest.runAllTimers()
        })
    
        mensagemDeErro = screen.queryByRole('alert')
        expect(mensagemDeErro).toBeNull()
    })
})

