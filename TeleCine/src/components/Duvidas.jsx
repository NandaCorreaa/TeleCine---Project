import { useState } from "react"
import styled from "styled-components"

const DúvidasContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: #000000;
    color: #fff;
    width: 100%;
    padding-bottom: 10vh;

        h1{
            height: 13vh;
            font-size: 36px;
            display: flex;
            align-items: center;
        }

        div{
            width: 90%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
            
        }
        li{
            list-style: disc;
            margin: 20px;
        }

        @media (max-width: 768px){
            background-color: #141414;

            h1{
                font-size: 26px;
            }

            div{
                width: 97%;
            }
        }
`
const DivButton = styled.div`
    border-bottom: 1px solid rgb(54, 54, 54) ;  
    display: flex;
    justify-content: start;

    button{
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
        background-color: #000000;
        border: none;
        height: 6vh;
        cursor: pointer;
        font-size: 18px;
        
        &:hover{
           color:  rgb(135, 132, 132);
           transition: all 0.4s ease-in-out 0s;
           span{
            background-color:  rgb(135, 132, 132);
           }
        }
    }

    span{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        color: black;
        background-color: rgb(221, 227, 233);
        width: 28px;
        height: 28px;
        font-size: 17px;
    }

    @media (max-width: 768px){
        width: 100%;
        
        button{
            background-color: #141414;
            width: 100%;
            font-size: 14px;
            text-align: start;
            height: 7vh;
        }

        span{
            padding: 13px;
            font-size: 14px;
        }
    }
`
const DivResposta = styled.div`
    font-size: 16px;
    color: rgb(184, 184, 188);

        div{
            width: 90%;
            text-align: start;
            padding: 20px 0;
        }
    
        p{
            width: 100%;
            margin: 5px;
        }

        ol{
            width: 100%;
           li{
            list-style: decimal;
            width: 100%;
           } 
        }
        a{
            color: red;
            width: 100%;
        }

        @media (max-width: 768px){
            div{
                width: 100%;
            }
        }
`

export default function Duvidas() {

    const [respostasIndex, setRespostasIndex] = useState(-1) //Aqui será usado para controlar qual resposta está sendo exibida. Ele é iniciado com o valor -1, indicando que nenhuma resposta está sendo exibida inicialmente.
    function click(id) { 
// Aqui defini a função click que recebe o id da pergunta como argumento. Essa função verifica se o id recebido é igual ao respostasIndex atual. Se for igual, significa que a resposta correspondente está sendo exibida e define -1 para ocultar a resposta. Se for diferente, define o id como o novo respostasIndex, o que fará com que a resposta correspondente seja exibida.
        setRespostasIndex( id === respostasIndex ? -1 : id)
    }
   
    const duvidasERespostas = [
        {
            id: 1,
            duvida: "O que é o Telecine?",
            resposta: (
                <div>
                   <p>Líder e referência em filmes, o Telecine te oferece a melhor experiência de cinema do Brasil. Com o catálogo mais completo, nossos filmes estão disponíveis na programação ininterrupta dos 6 canais e em streaming, selecionados pelo nosso time de apaixonados por cinema, pra você encontrar o que quer assistir rapidinho. Com muito conteúdo de bastidores, curiosidades e dicas, aqui no Telecine, o filme é só o começo. Você curte os clássicos que adora rever, sucessos dos grandes estúdios, o melhor do mercado independente e do cinema nacional, além de filmes inéditos e estreias exclusivas.</p>
                </div>
            )        },
        {
            id: 2,
            duvida: "Como assinar o Telecine?",
            resposta: (
                <div>
                    <p>
                        Você assina o Telecine por um de nossos <a href="#">parceiros</a>. São três as opções de contratação:
                    </p>
                    <ul>
                        <li>
                            Nosso pacote de 6 canais via operadora de TV por assinatura, que também te dará acesso ao nosso conteúdo via streaming. Nesse caso, a contratação é feita diretamente com a sua operadora de TV. Acesse os canais de venda da sua operadora e solicite a inclusão dos canais Telecine no seu pacote.
                        </li>
                        <li>
                            Você também pode contratar apenas o nosso conteúdo via streaming. Esse modelo está disponível para compra em algumas operadoras e é necessário que você acesse seus canais de venda para mais informações. Também é possível assinar desta forma diretamente pelo <a href="#">Globoplay</a>.
                        </li>
                        <li>
                            Assinatura do Telecine dentro do <a href="#">Prime Video Channels</a>. Se você já possui o Prime Vídeo, você pode incluir o Telecine ao seu pacote como uma assinatura extra. Neste modelo, você terá acesso a todo o nosso catálogo de filmes para assistir via streaming dentro do Prime Video.
                        </li>
                    </ul>
                </div>
            )
        },
        {
            id: 3,
            duvida: "Aonde eu posso assistir aos filmes do Telecine?",
            resposta: (
                <div>
                    <p>Você assiste ao Telecine de várias maneiras e em várias telas diferentes.</p>
                    <p>Assinatura via operadora:</p>
                    <ul>
                        <li>Se você assinou nosso pacote de canais por uma operadora de TV por assinatura, pode assistir à programação ininterrupta dos nossos 6 canais na TV. Consulte aqui para saber também se a sua operadora oferece o acesso aos filmes do Telecine via streaming ou para consumo no seu decoder.</li>
                        <li>Se você assinou apenas o nosso streaming através de uma operadora parceira, você acessa nossos filmes pelo site e aplicativo do Globoplay. Não é necessário ser assinante do Globoplay para assistir aos filmes do Telecine por lá.</li>
                        <li>Se você assinou o Telecine pelo DIRECTV GO, você acessa nossos filmes <a href="#">direto por lá</a>, seja no site ou aplicativo.</li>
                    </ul>
                    <p>Assinatura via Prime Video Channels:</p>
                    <ul>
                        <li>Você pode assistir a todos os filmes do nosso catálogo em streaming pelo <a href="#">Prime Video</a>. Se você contratou o Telecine diretamente por lá como um channel, encontrará todo o nosso conteúdo no trilho <strong>“Minhas assinaturas"</strong> da home. Basta clicar na logo do Telecine que você será direcionado para a nossa página específica. Importante lembrar que essa modalidade de assinatura permite assistir aos filmes do Telecine somente pela plataforma <a href="#">Prime Video</a>.</li>
                    </ul>
                    <p>Assinatura direto no Globoplay:</p>
                    <ul><li>Agora, se você contratou nosso <em>streaming</em> diretamente pelo Telecine ou <strong>Globoplay</strong>, vai curtir todo o conteúdo do Telecine em <i>streaming</i>, dentro do <a href="#">Globoplay</a>. Você encontra o Telecine por lá em <strong>Explore > Canais > Telecine</strong>.</li></ul>
                </div>
            )
        },
        {
           id: 4,
           duvida: "Como funciona a promoção Dupla Telecine?",
           resposta: (
            <div>
                <p>A Dupla Telecine é válida apenas para assinantes adimplentes do Telecine, independente de contratarem o pacote de canais pela TV por assinatura ou terem contratado para consumo via streaming. Ao comprar um ingresso para qualquer sessão em qualquer sala de cinema da rede Kinoplex, o assinante Telecine ganha um segundo ingresso igual ao primeiro (Ex: Na compra de uma entrada inteira, ele ganha a segunda inteira e na compra de uma meia-entrada, ganha a segunda também como meia*.) Os ingressos podem ser adquiridos pelo site da rede <a href="">Kinoplex</a> e pelo site ou pelo app da <a href="#">Ingresso.com</a>. Para resgatar o benefício, é preciso selecionar 2 assentos e seguir o fluxo normal de compra. Quando chegar à etapa "tipo de ingressos", selecione 'Dupla Telecine Meia' ou 'Inteira', de acordo com a sua elegibilidade e a do seu acompanhante para o benefício de 'meia entrada'. A promoção é válida por tempo limitado, <a href="#">consulte aqui o regulamento</a>.</p>
                <p>*Na compra da meia, os dois ingressos deverão ter comprovação do direito ao benefício.</p>
            </div>
           ) 
        },
        {
            id: 5,
            duvida: "Sou assinante via operadora, como posso acessar o streaming do Telecine?",
            resposta: (
                <div>
                    <p>O streaming do Telecine funciona agora dentro do <a href="">Globoplay</a>.</p>
                    <p>Se você assina o Telecine por alguma operadora parceira, é importante confirmar por onde você acessa nosso conteúdo em streaming.</p>
                    <a href="#">Entenda mais detalhes.</a>
                </div>
            )
        },
        {
            id: 6,
            duvida: "Como eu cancelo o Telecine?",
            resposta: (
                <div>
                    <p><strong>Se você contratou o Telecine por uma operadora parceira</strong>, é necessário que você entre em contato com ela para questões referentes ao cancelamento de seu pacote.</p>
                    <p><strong>Se você contratou o Telecine diretamente via streaming do Telecine ou Globoplay</strong>, o cancelamento pode ser solicitado a qualquer momento diretamente pela sua <a href="#">Conta Globo</a>.</p>
                    <p><strong>Se você contratou o Telecine pelo Prime Video Channels</strong>, você cancela a assinatura pelo próprio Prime Video, seguindo os 3 passos abaixo:</p>
                    <ol>
                        <li>Acesse <a href="#">Conta e configurações</a> e selecione Canais no menu superior.</li>
                        <li>Encontre a assinatura que deseja cancelar.</li>
                        <li>Selecione Cancelar canal e confirme.</li>
                    </ol>
                    <p>Para mais informações sobre cancelamento pelo <a href="#">Prime Video Channels acesse o link</a>.</p>
                </div>
            )
        }
    ]

    return(
        <DúvidasContainer>
            <h1>Tire suas dúvidas aqui</h1>
                <div >
    {/* Aqui eu mapeei o array duvidasERespostas e para cada item, renderizei uma <div> 
    com um <button> contendo a pergunta. Quando o botão é clicado, a função click é
    chamada com o id da pergunta como argumento. Também verifico se o respostasIndex é 
    igual ao id da pergunta atual. Se forem iguais, a resposta correspondente é
    renderizada dentro de um <p>. */}
                    {duvidasERespostas.map((item)=>(
                        <DivButton key={item.id}>
                            <button onClick={() => click(item.id)} >{item.duvida} <span>{respostasIndex === item.id ? "▲" : "▼"}</span></button> {/*. Se respostasIndex for igual ao id da pergunta (item.id), mostramos a seta para cima (▲), indicando que a resposta está sendo exibida. Caso contrário, mostramos a seta para baixo (▼), indicando que a resposta está oculta. */}
                                {respostasIndex === item.id && <DivResposta>{item.resposta}</DivResposta>}
                        </DivButton>
                    ))}
                </div>
        </DúvidasContainer>
    )
}