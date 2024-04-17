import { Swiper, SwiperSlide } from 'swiper/react' // SwiperSlide é referente a cada item do slide
import Banner1 from '../Imgs/BannerMercenariosDesk.png'
import Banner2 from '../Imgs/BannerMarioDesk.png'
import Banner3 from '../Imgs/BannerA_ChamadaDesk.png'
import Banner4 from '../Imgs/BannerMario2Desk.png'
import Banner5 from '../Imgs/BannerOppenheimerDesk.png'
import Banner6 from '../Imgs/BannerMinhaIrmaeEuDesk.png'
import Banner1mobile from '../Imgs/BannerMinhaMobile.png'
import Banner2mobile from '../Imgs/BannerOpenhMobile.png'
import Banner3mobile from '../Imgs/BannerMercenariosMobile.png'
import Banner4mobile from '../Imgs/BannerTrollsMobile.png'
import Banner5mobile from '../Imgs/BannerAChamadaMobile.png'
import Banner6mobile from '../Imgs/BannerMarioMobile.png'


import styled from 'styled-components'

const CarouselContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    text-align: center;

    img{
        cursor: pointer;
    }

    @media (max-width: 768px){
        background-color: #141414;

        img{
            width: 100%;
        }
    }
`

export default function Carousel() {

    const imagens = [
        {id:'1', image:Banner1, imageResponsive: Banner1mobile},
        {id:'2', image:Banner2, imageResponsive: Banner2mobile},
        {id:'3', image:Banner3, imageResponsive: Banner3mobile},
        {id:'4', image:Banner4, imageResponsive: Banner4mobile},
        {id:'5', image:Banner5, imageResponsive: Banner5mobile},
        {id:'6', image:Banner6, imageResponsive: Banner6mobile} 
    ]

    return(
        <CarouselContainer>
            <Swiper
                slidesPerView={1} 
                pagination={{ clickable: true}}
                navigation  
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }} >

                    {imagens.map((item)=>(
                        <SwiperSlide key={item.id}>
                            <img src={window.innerWidth < 1224 ? item.imageResponsive : item.image} alt="Slide de filmes" />  
                        </SwiperSlide>
                    ))}
            </Swiper>            
        </CarouselContainer>
        
    )
}