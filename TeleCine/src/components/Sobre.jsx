import styled from 'styled-components'

const SobreContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60vh;
    background-color: #000000;

    div{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 23vw;
        height: 30vh;
        color: #b8b8bc;
        font-size: 14px;
        margin-left: 4vw;
        line-height: 24px;    
    }

    @media (max-width: 768px){
            flex-direction: column;
            height: 100vh;
            justify-content: space-evenly;
            background-color: #141414;

            iframe{
                width: 300px;
                height: 200px;
            }
            div{
                width: 90%;
                text-align: center;
                font-size: 16px;
                height: 50vh;

                p{
                    margin-bottom: 10px;
                }
            }
        }
`

export default function Sobre() { 
    return(
        <SobreContainer>
            <iframe width="492" height="277" src="https://www.youtube.com/embed/OBI7ceFhksA?si=N_o64Jn2CW2TQpJf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <div>
                <p>Líder e referência em filmes, o Telecine leva a magia do cinema para perto de você. Nosso conteúdo está disponível 24h nos nossos 6 canais de TV e também em streaming para transformar seu momento cinema em uma experiência cada vez mais completa.</p>
                <p>Aqui, todos os títulos do catálogo são selecionados por um time de especialistas apaixonados por cinema. Você curte clássicos dos grandes estúdios, do mercado independente e nacional, além de filmes inéditos e estreias exclusivas. </p>
                <p>Escolha a sua tela preferida, prepare a pipoca e tenha uma ótima sessão.</p>
            </div>
        </SobreContainer>
    )
}