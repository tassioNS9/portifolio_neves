import './About.css'
import logo from "../../public/assets/logo.jpg";
export default function About() {

    return (
        <section className="about" id='about'>
            <div className="about-img">
                <img src={logo} alt="logo" />
            </div>
            <div className="about-content">
                <h2 className="heading">Sobre <span>Mim</span></h2>
                <h3>Desenvolver Frontend!</h3>
                <p>Estudante com diploma de bacharel em ciências exatas e tecnológicas e
                     formando em Engenharia da Computação, 27 anos com foco em desenvolvimento 
                     com Javascript, ReactJS, TypeScript, Styled-Components dentre outras tecnologias 
                     que uso para aplicações web. Me considero ágil e consistente para aprender 
                     cada vez mais e me adapatar a qualquer mudança, pronto para superar desafios, 
                     me declaro otimista e esforçado.Desde dashboards até landing pages, tenho uma boa experiência com aplicações
                      responsivas e otimizadas em velocidade, seo e navegação.Procuro sempre a disciplina e trabalho em equipe, cooperando com todos e ajudando da melhor maneira possível com bastante determinação para aprender e superar os obstáculos!</p>
            </div>
        </section>
    )
}