import styled from 'styled-components'

const PlanoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 31vh;
    width: 16%;
    background-color: #141414;
    color: white;
    border-radius: 15px;
    line-height: 1.20;
    letter-spacing: 0.15px;
    margin: 3vw;

    h2{
        font-size: 25px;
        color: #5e5e5e;
    }
    h1{
        font-size: 59px;
        color: #fff;
    }
    p{
        font-size: 14px;
        color: #b8b8bc;
    }
    div{
        height: 20vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        margin-left: 1vw;
    }

    @media (max-width: 768px){
        width: 70%;
        background-color: #000000;
        padding-left: 8px;
    }
    `

export default function Prop({h2, h1, p}){
    return(
        <PlanoDiv>
            <div>
                <h2>{h2}</h2>
                <h1>{h1}</h1>
                <p>{p}</p>
            </div>
        </PlanoDiv>    
    )
}