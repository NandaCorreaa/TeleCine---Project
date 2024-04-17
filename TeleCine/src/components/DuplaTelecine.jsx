import Header from "./Header"
import ImagemDuplaTelecine from '../Imgs/ImagemDuplaTelecine.jpg'
import Footer from "./Footer"
import styled from "styled-components"
import Duvidas from "./Duvidas"

const DuplaContainer = styled.section`
    color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #000000;
    padding-bottom: 100px;
    
    div{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        height: 15vh;

        p{
        display: flex;
        align-items: center;
        width: 62%;
        color: #b8b8bc;
        font-size: 17px;   
    }
    }

    @media (max-width: 768px){
        background-color: #141414;
        
        div{
            height: 50vh;

            p{
                width: 90%;
            }
        }
        img{
            width: 140%;
        }
    }
`

export default function DuplaTelecine(){
    return(
        <>
            <Header/>
                <DuplaContainer>
                    <div>
                        <p>Só quem é assinante Telecine ganha ingresso em dobro no Kinoplex para curtir um cineminha em ótima companhia, com tecnologia e conforto ao máximo. É isso aí! Na compra de uma meia, você ganha outra e, na compra de uma inteira, você recebe outra inteira. E o melhor: esse benefício é válido para todas as sessões, salas e horários da rede Kinoplex,* e pode ser utilizado uma vez por mês. Consulte aqui o regulamento.</p>
                        <p>Para aproveitar é só seguir o passo a passo:</p>
                    </div>
                    <img src={ImagemDuplaTelecine} alt="" />
                </DuplaContainer>
            <Footer/>
        </>
    )
}