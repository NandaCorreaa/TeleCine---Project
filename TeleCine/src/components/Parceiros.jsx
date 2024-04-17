import { styled, css } from 'styled-components'
import logoClaro from '../Imgs/claro.png'
import logoSky from '../Imgs/sky.png'
import logoVivo from '../Imgs/vivo.png'
import logoPrime from '../Imgs/prime.png'

const center = css`
display: flex;
justify-content: center;
align-items: center;
`
const column = css`
display: flex;
flex-direction: column;
justify-content: space-between;
`
const ParceirosContainer = styled.section`
    background-color: #000000;
    ${center}
    height: 45vh;
    
    @media (max-width: 768px){
        height: 80vh;
        background-color: #141414;
    }
`
const ParceirosDiv = styled.div`
    background-color: #141414;
    color: #fff;
    ${center}
    height: 35vh;
    width: 62%;

    @media (max-width: 768px){
        height: 80%;
        width: 90%;
        flex-direction: column;
        justify-content: space-evenly;
    }
`
const ParceirosText = styled.div` 
${column}
height: 16vh;
width: 16vw;
line-height: 1.20;
letter-spacing: 0.15px;

h1{
    font-size: 36px;
}
p{
    font-size: 14px;
    line-height: 1.50;
    color: #b8b8bc;
}

@media (max-width: 768px){
    height: 17vh;
    width: 80%;

    h1{
        font-size: 26px;
        text-align: center;
    }
    p{
        text-align: center;
    }
}
`
const ParceirosLogos = styled.div`
 width: 60%;

 img{
    width: 100px;
    cursor: pointer;
 }
 div{
    display: flex;
    justify-content: space-evenly;
    padding-left: 3vw;
 }

 @media (max-width: 768px){
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;

    div{
        flex-wrap: wrap;
        display: flex;
        padding: 0;   
    }
     
    img{
        margin: 0.4rem 0;
    }
 }
`

export default function Parceiros(){

    const Streamings = [
        {   logo: logoClaro,
            alt:"Logo da ClaroTv"
        },
        {   logo: logoSky,
            alt:"Logo da Sky"
        },
        {   logo: logoVivo,
            alt:"Logo da Vivo"
        },
        {   logo: logoPrime,
            alt:"Logo do Prime Video"
        }
        ]

    return(
        <ParceirosContainer>
            <ParceirosDiv>
                <ParceirosText>
                    <h1>Assine por um de nossos parceiros</h1>
                    <p>Selecione uma das opções, assine agora e viva a experiência Telecine.</p>
                </ParceirosText>
                <ParceirosLogos>
                    <div >
                          {Streamings.map((item)=>(
                            <img src={item.logo} alt={item.alt} />
                          ))}
                    </div>
                </ParceirosLogos>
            </ParceirosDiv>
        </ParceirosContainer >
    )
}