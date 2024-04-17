import styled from 'styled-components'
import axios from "axios" // 1º Importação do Axios
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide} from "swiper/react"

const SucessosContainer = styled.div`
    color: aliceblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 60vh;
    background-color: #000000;

    @media (max-width: 768px){
        text-align: center;
        font-size: 14px;
        height: 65vh;
        background-color: #141414;
    }
`
const StyledSwiper = styled(Swiper)`
    border: red;
    width: 65%;

    img{
        width: 12vw;
        border-radius: 10px;
    }   

    @media (max-width: 768px){
       width: 320%;
       padding-left: 1rem;
        
        img{
            width: 55vw;
        }
    }
`

export default function Sucessos() {

    const [filmes, setFilmes] = useState([]) // 3º Criar o useState

    const pegarDados = async () =>{ // 2º Criar função assíncrona. A função assíncrona (async) só é executada quando se tem os dados
        const Dados = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6040fbaaf2352854942894b5b45b4729&language=pt-BR&page=1`)


        try { //try é onde da certo
            setFilmes(Dados.data.results) // 4º Chamar o useState (data é onde ficam guardados os dados)
        } catch (error) { //caso dê erro - isso é conhecido como tratamento de erro 
            alert(`Desculpe, ocorreu um erro ${error}`)  
        }
    }

    useEffect(()=>{ // 5º Chamar a função assíncrona dentro do useEffect
        pegarDados()
    }, [])

    return(
        <SucessosContainer>
            <h1>Os sucessos do cinema estão aqui</h1>

        <StyledSwiper
            slidesPerView={5} 
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}>
                {filmes.map((item)=>(
                    <SwiperSlide>
                        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt="" />
                    </SwiperSlide>
                ))}
        </StyledSwiper>
        </SucessosContainer>
    )
}