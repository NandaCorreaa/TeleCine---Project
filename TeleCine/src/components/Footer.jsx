import styled from 'styled-components'
import Instagram from '../Imgs/instagram.png'
import Tiktok from '../Imgs/tiktok.png'
import Twitter from '../Imgs/twitter.png'
import Facebook from '../Imgs/facebook.png'
import Telegram from '../Imgs/telegram.png'
import Youtube from '../Imgs/youtube.png'

const FooterContainer = styled.footer`
    background-color: #141414;

        ul{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 10vh;
            border-bottom: 1px solid rgb(54, 54, 54) ;  
            margin: 0 3vw;
        }
        li{
            color: #fff;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            cursor: pointer;
            width: 10vw;

            &:hover{
            color:  rgb(135, 132, 132);
            transition: all 0.2s ease-in-out 0s;
            }
        }

        p{
            background-color: #202022;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 5vh;
            font-size: 12px;
            color: #d1d1d1;
        }

 @media (max-width: 768px){
        flex-direction: column;
    
        ul{
            height: 45vh;
            flex-direction: column;
            align-items: start;
            justify-content: space-evenly;

        li{
            display: block;
            width: 80%;
           

         }
        }
    }   
`
const Icons = styled.div`
    height: 10vh;
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 0 3vw;

    div{
        text-align: center;
        width: 2vw;
    }

    img{
        width: 24px;
        cursor: pointer;
    }
    @media (max-width: 768px){
        div{
            width: 10vw;
        }

        img{
            width: 18px;
        }
    }   
`

export default function Footer() {

    const navFooter = ["Quem somos", "Assine Telecine", "Lançamentos","Programação Telecine", "Privacidade", "Transparência","Como anunciar", "Trabalhe no Telecine" ]

    const icons = [
       {
        image: Instagram ,
        alt: 'Logo do Instagram'
       },
       {
        image: Tiktok ,
        alt: 'Logo do TikTok'
       },
       {
        image: Twitter ,
        alt: 'Logo do Twitter'
       },
       {
        image: Facebook ,
        alt: 'Logo do Facebook'
       },
       {
        image: Telegram ,
        alt: 'Logo do Telegram'
       },
       {
        image: Youtube ,
        alt: 'Logo do Youtube'
       }
    ]
    return(
        <FooterContainer>
                <ul>
                    {navFooter.map((item)=>(
                        <li>{item}</li>
                    ))}
                </ul>
                <Icons>
                        {icons.map((item)=>(
                            <div><img src={item.image} alt={item.alt} /></div>
                        ))}
                </Icons>
                <p>© Copyright 2024 Telecine Programação de Filmes Ltda</p>
        </FooterContainer>
    )
}