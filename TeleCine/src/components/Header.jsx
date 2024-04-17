import styled from "styled-components"
import Logo from '../Imgs/Logo.svg'
import { Link } from 'react-router-dom';
import { useState } from "react";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 9vh;
    background-color: rgb(20, 20, 20);
    color: #fff;
    font-size: 15px;

@media (min-width: 320px) and (max-width: 768px){
  height: 11vh;
  justify-content: flex-start;
  position: relative;
}
`
const DivHeader = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 40vw;

img{
    width: 122px;
}
`
const NavHeader = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 25vw;

    ul {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 0;
    
    li {
        margin-right: 20px;
        }
    }
    a {
        text-decoration: none;
        color: rgb(255, 255, 255);
    }
   
    @media (max-width: 768px){
            display: none;     
    }
`
const ButtonAssine = styled.a`
    width: 11vw;
    height: 4.5vh;
    background-image: linear-gradient(to right, rgb(255, 20, 45) 0%, rgb(185, 16, 34) 100%);
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 700;
    font-size: 14px;
    margin: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    @media (max-width: 768px){
         display: none;
    }
`
const ButtonMenu = styled.button`
   display: none;

    @media (max-width: 768px){
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    width: 40px;
    color: #fff;
    background-color: transparent;
    border: none;
    }
`
const NavMenu = styled.nav`
  position: absolute;
  background-color: rgb(20, 20, 20);
  width: 90%;
  top: 10vh;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  ul{
    height: 40vh;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;

    li{
        width: 100%;
        border-bottom: solid 1px #b8b8bc42;
        padding-bottom: 10px;

    }

    a{
        color: #fff;
        text-decoration: none;
        font-size: 1rem;
    }
  }
  .buttonAssine{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 6vh;
    margin: 0;
  }
`

export default function Header() {

    const [abrirMenu, setAbrirMenu] = useState(false);

    const [menuAberto, setMenuAberto] = useState(false);

    function alternarMenu() {
        setAbrirMenu(!abrirMenu);
        setMenuAberto(!menuAberto);
    }

    return(
        <HeaderContainer>
            <div> {/*RESPONSIVO */}
                <ButtonMenu  onClick={alternarMenu} >{abrirMenu ? "✖" : "☰"}</ButtonMenu>
                {menuAberto && 
                (<NavMenu>
                    <ul>
                        <li>
                            <ButtonAssine className="buttonAssine">Assine agora</ButtonAssine>
                        </li>
                        <li>
                            <Link to="/">QUEM SOMOS</Link>
                        </li>
                        {/* <li>
                            <Link to="/programacao">PROGRAMAÇÃO</Link>
                        </li> */}
                        <li>
                            <Link to="/catalogo">CATÁLOGO</Link>
                        </li>
                        <li>
                            <Link to="/duplaTelecine">DUPLA TELECINE</Link>
                        </li>
                    </ul>
                </NavMenu>)}
            </div>

            <DivHeader> {/*DESKTOP */}
                <Link to="/"><img src={Logo} alt="Logo da Telecine" />  </Link>                               
            <NavHeader>
                    <li>
                        <Link to="/">QUEM SOMOS</Link>
                    </li>
                    {/* <li>
                        <Link to="/programacao">PROGRAMAÇÃO</Link>
                    </li> */}
                    <li>
                        <Link to="/catalogo">CATÁLOGO</Link>
                    </li>
                    <li>
                        <Link to="/duplaTelecine">DUPLA TELECINE</Link>
                    </li>
             </NavHeader>
           </DivHeader>
            <ButtonAssine href="#buttonAssine">Assine agora</ButtonAssine>
        </HeaderContainer>
    )

}