import styled from 'styled-components'
import Prop from "./PropMomentoCinema";

const MomentoContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 53vh;
    width: 100%;
    background-color: #000000;
    color: white;

    @media (max-width: 768px){
        height: 100vh;
        background-color: #141414;
        flex-direction: column;
    }
`
export default function MomentoCinema() {
    return(
        <MomentoContainer>
                <Prop h2="seu momento" h1="cinema" p="Dos heróis aos premiados, o melhor conteúdo de cinema é aqui"/>
                <Prop h2="assista como" h1="quiser" p="Filmes on demand ou na programação 24h dos 6 canais"/>
                <Prop h2="estreias" h1="inéditas" p="Filmes exclusivos que você só encontra no Telecine"/>                       
        </MomentoContainer>
    )
}