import './Services.css'
export default function Services() {

    return (
        <section className="services" id='services'>
            <h2 className="heading">Nossos <span>Serviços</span></h2>
            <div className="services-container">
                <div className="services-box">
                    <i className='bx bx-code-alt'></i>
                    <h3>Desenvolvedor Web</h3>
                    <p>A função de um desenvolvedor web é construir e manter sites.Responsavéis por construir um produto que encontra ambas as necessidades do cliente e aquelas do usuário final.</p>
                    <a href="https://harve.com.br/blog/desenvolvimento-web/o-que-faz-um-desenvolvedor-web-e-como-se-tornar-um-em-2023/#:~:text=A%20fun%C3%A7%C3%A3o%20de%20um%20desenvolvedor%20web%20%C3%A9%20construir%20e%20manter%20sites." target="_blank" className='btn'>Leia Mais</a>
                </div>


                <div className="services-box">
                <i className='bx bxl-typescript'></i>
                    <h3>TypeScript</h3>
                    <p>TypeScript é uma linguagem de programação fortemente tipada que se baseia em JavaScript, oferecendo melhores ferramentas em qualquer escala.</p>
                    <a href="https://www.typescriptlang.org/" target="_blank" className='btn'>Leia Mais</a>
                </div>

                <div className="services-box">
                <i className='bx bxl-javascript' ></i>
                    <h3>JavaScript</h3>
                    <p>JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.</p>
                    <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank" className='btn'>Leia Mais</a>
                </div>

                <div className="services-box">
                <i className='bx bxl-java' ></i>
                    <h3>Java</h3>
                    <p>Java é uma linguagem de programação orientada a objetos. É uma linguagem de programação rápida, segura e confiável para codificar tudo.</p>
                    <a href="https://www.alura.com.br/artigos/java" target="_blank" className='btn'>Leia Mais</a>
                </div>

                <div className="services-box">
                <i className='bx bxl-react' ></i>
                    <h3>ReactJS</h3>
                    <p>React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p>
                    <a href="https://react.dev/learn" target="_blank"  className='btn'>Leia Mais</a>
                </div>

                <div className="services-box">
                <i className='bx bxl-nodejs' ></i>
                    <h3>NodeJS</h3>
                    <p>Node.js é um software de código aberto, multiplataforma.A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos</p>
                    <a href="https://nodejs.org/en/about" target="_blank"  className='btn'>Leia Mais</a>
                </div>

                <div className="services-box">
                <i className='bx bxl-figma'></i>
                    <h3>Figma</h3>
                    <p>Figma é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web.</p>
                    <a href="https://www.alura.com.br/artigos/figma" target="_blank" className='btn'>Leia Mais</a>
                </div>

                <div className="services-box">
                <i className='bx bxl-vuejs' ></i>
                    <h3>VueJS</h3>
                    <p>Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.</p>
                    <a href="https://vuejs.org/" target="_blank" className='btn'>Leia Mais</a>
                </div>

            </div>

        </section>
    )
}