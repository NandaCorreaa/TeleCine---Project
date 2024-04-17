import { useEffect, useState } from "react"
import Header from "./Header"
import axios from 'axios'
import styled from "styled-components"
import Duvidas from "./Duvidas"
import Footer from "./Footer"


const CatalogoContainer = styled.section`
    color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #000000;
    padding: 40px;

    h1{
        height: 15vh;
        font-size: 36px;
        display: flex;
        align-items: center;
}

@media (max-width: 768px){
    padding: 0;
    background-color: #141414;

    h1{
        font-size: 26px;
        text-align: center;
    }
}
`
const CatalogoFilmes = styled.section`
display: flex;
flex-wrap: wrap;
width: 65%;

div{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 20%;
    height: 45vh;
    text-align: center;
    font-size: 15px;
    color: #d1d1d1;
    padding-bottom: 25px;
}

img{
    width: 220px;
    border-radius: 5px;
}

@media (max-width: 768px){
     width: 100%;
     justify-content: center;

    div{
        width: 32%;
        height: 40vh;
        padding: 0;        
    }

    img{
        width: 100px;
    }

    p{
        width: 90%;
    }
}
`

export default function Catalogo(){

    const [filmes, setFilmes] = useState([])

    const pegarDados = async() =>{
        const Dados = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6040fbaaf2352854942894b5b45b4729&language=pt-BR&page=1`)

        try {
            setFilmes(Dados.data.results)
        } catch (error) {
            alert(`Desculpe, ocorreu um erro ${error}`)  

        }
    }

    useEffect(()=>{
        pegarDados()
    }, [])

    return(
        <>
        <Header/>
            <CatalogoContainer>
                <h1>Conheça o catálogo do Telecine</h1>
                    <CatalogoFilmes>
                        {filmes.map((item)=>(
                            
                            <div>
                                <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
                                <p>{item.title}</p>
                            </div>
                            
                        ))}
                    </CatalogoFilmes>
            </CatalogoContainer>
        <Duvidas/>
        <Footer/>
        </>
    )
}