import styled from 'styled-components'

const TelegramContainer = styled.section`
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45vh;

    @media (max-width: 768px){
       height: 60vh;
       background-color: #141414;
    }
`
const TelegramDiv = styled.div`
    background-color: #141414;
    color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 35vh;
    width: 62%;
    border-radius: 30px;

        div{
            width: 50%;
            height: 35vh;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            padding: 3vw;

        h1{
            font-size: 36px;
            width: 16vw;
        }

        p{
            font-size: 14px;
            width: 16vw;
            color: #b8b8bc;
        }
        
        button{
            width: 16vw;
            height: 4.5vh;
            background-image: linear-gradient(to right, rgb(255, 20, 45) 0%, rgb(185, 16, 34) 100%);
            color: #fff;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            font-weight: 700;
            font-size: 14px;
        }
    }

    @media (max-width: 768px){
        width: 90%;
        height: 60vh;

        div{
            padding: 0;
            width: 95%;
            height: 30vh;
            text-align: center;
 
            h1{
                font-size: 26px;
                width: 100%;
            }
            
            p{
                width: 94%;
            }

            button{
                width: 100%;
                height: 6vh;
            }
        }
        .banner{
            display: none;
        }
    }
`
const DivImage = styled.div`
    border-radius: 0 30px 30px 0;
    background-image: url("https://www.telecine.com.br/_next/static/public/Imagem_Site_Telegram_596x330-5ef8db71960c67e059b4818f0ca75376.jpg");
`

export default function Telegram () {
function irTelegram(){
    alert("Hi hi !! Esse botão também é ilustrativo.")
}

    return(
        <TelegramContainer>
            <TelegramDiv>
                <div>
                    <h1>Participe da nossa comunidade</h1>
                    <p>Entre para o nosso grupo do Telegram e fique por dentro do que rola no mundo do cinema.</p>
                    <button onClick={irTelegram}>Ir para o Telegram</button>
                </div>
                <DivImage className='banner'></DivImage>
            </TelegramDiv>
        </TelegramContainer>
    )
}