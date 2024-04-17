import styled from 'styled-components'
import Mario from '../Imgs/Mario.png'

const PlanoContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70vh;
    background-color: #000000;
    color: white;

    @media (max-width: 768px){
        height: 110vh;
        background-color: #141414;
    }
`
const PlanoDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 65vh;
    width: 62%;
    background-color: #141414;
    color: white;
    border-radius: 30px;
    line-height: 1.20;
    letter-spacing: 0.15px;

    h1{
        font-size: 36px;
        margin-bottom: 1.5vw;
    }
    p{
        font-size: 14px;
        line-height: 1.50;
        color: #b8b8bc;
    }
    img{
        width: 20px;
    }

    @media (max-width: 768px){
        height: 110vh;
        width: 95%;
        flex-direction: column;
        
        h1{
            font-size: 26px;
        }
        p{
            font-size: 16px;
        }
    }
`
const Descrição = styled.div`
    width: 32%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 12vh;
    margin-left: 3vw;

    figure{
        color: #fff;
        display: flex;
        align-items: center;
    }
    figcaption{
        margin-left: 1vw;
        font-size: 14px;
    }
    
    @media (max-width: 768px){
        width: 100%;
        text-align: center;
        margin-top: 0;
        
        figure, figcaption{
            display: none;
        }
    }
`
const MarioContainer = styled.div`
    width: 10vw;
    height: 62vh;

    img{
        width: 14vw;
    }

    @media (max-width: 768px){
        display: none;
    }
`
const DivPlano = styled.div`
height: 60vh;
width: 20vw;
border: solid 1px #b8b8bc42;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
margin-left: 3vw;

@media (max-width: 768px){
    width: 90%;
    padding: 20px 0;
    height: 70vh;
    margin-bottom: 30px;
}
`
const ItemPlano = styled.div`
height: 60vh;
width: 13vw;
display: flex;
flex-direction: column;
justify-content: space-evenly;

    h3{
        color: #b8b8bc9b;
        font-weight: 300;
        letter-spacing: 1px;
    }

    ul{
        height: 25vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-size: 14px;
        width: 12vw;
    }
    button{
        width: 100%;
        height: 4.5vh;
        background-image: linear-gradient(to right, rgb(255, 20, 45) 0%, rgb(185, 16, 34) 100%);
        color: #fff;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        font-weight: 700;
        font-size: 14px;
    }

    @media (max-width: 768px){
    width: 85%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

        h3{
            width: 55vw;
        }

        ul{
            width: 80%;
            height: 35vh;
            li{
                margin: 5px;
            }
        }
        button{
            width: 75%;
            height: 5vh;
        }
}
`
const Aviso = styled.div`
text-align: center;
margin: 0px 5.7px;

    p{
        font-size: 12px;
    }
`
export default function PlanoTeleCine() {

    function assinatura(){
        alert("Ah, esse botão? Ele é só para dar um charme extra!!")
    }

    return(
        <PlanoContainer id='buttonAssine'>
            <PlanoDiv>
                <Descrição>
                        <div>
                            <h1>Ou curta nossos filmes dentro do Globoplay</h1>
                            <p>Confira todos os benefícios de assisnar apenas o streaming do Telecine dentro do Globoplay.</p>
                        </div>
                        <figure> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/DJCTQ_-_L.svg/1024px-DJCTQ_-_L.svg.png" alt="Classificação indicativa: Livre" />
                                <figcaption>Super Mario Bros.- O Filme</figcaption>
                        </figure>
                </Descrição>

                <MarioContainer><img src={Mario} alt="Super Mario" /></MarioContainer>
                
                 <DivPlano>
                    <ItemPlano>
                        <div>
                            <h3>Plano</h3>
                            <h2>Telecine</h2>
                        </div>
                        <ul>
                            <li>✔  6 canais Telecine ao vivo*</li>
                            <li>✔  Lançamentos dos grandes estúdios do cinema</li>
                            <li>✔  Dicas de especialistas apaixonados por cinema</li>
                            <li>✔  Estreias exclusivas</li>
                            <li>✔  Dupla Telecine: Na compra de um ingresso em qualquer sala de cinema da rede Kinoplex, ganhe o segundo.**</li>
                        </ul>
                        <button  onClick={assinatura}>Assine agora</button>
                    </ItemPlano>
                    <Aviso>
                            <p>*Os canais ao vivo podem ser assistidos apenas pelo Globoplay.</p>
                            <p>**Dupla Telecine para dois ingressos por mês. Valida por tempo limitado. Consulte o regulamento.</p>
                    </Aviso>
                </DivPlano>  
            </PlanoDiv>
        </PlanoContainer>
    )
}