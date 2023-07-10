import './Portifolio.css'
import cordel_encantado from "../../public/assets/cordel_encantado.png"
import logo_android from "../../public/assets/logo-android.jpg"
import finance_image from "../../public/assets/finance_image.png"
import tn_lib from "../../public/assets/tn_lib.png"
import tnt_flix from "../../public/assets/tnt_flix.png"
import logo_burguer from "../../public/assets/logo_burger.png"
import capputeeno from "../../public/assets/capputeeno_image.png"
export default function Portifolio() {

    return (
        <section className="portifolio" id='portifolio'>

            <h2 className="heading">Ultimos <span>Projetos</span></h2>
            <div className="portifolio-container">
                <div className="portifolio-box">
                    <img src={cordel_encantado} alt="logo2" />
                    <div className="portifolio-layer">
                        <h4>Projeto Poema</h4>
                        <p>Simples projeto criado para prática de HTML e CSS!</p>
                        <a href="https://tassions9.github.io/projeto-cordel/" target="_blank"><i className='bx bx-link-external'></i></a>
                    </div>
                </div>

                <div className="portifolio-box">
                    <img src={finance_image} alt="finance_image" />
                    <div className="portifolio-layer">
                        <h4>Finanças</h4>
                        <p>Projeto em react de sistama de finanças</p>
                        <a href="https://github.com/tassioNS9/expense-tracker" target="_blank"><i className='bx bx-link-external'></i></a>
                    </div>
                </div>

                <div className="portifolio-box">
                    <img src={tnt_flix} alt="tnt_flix_image" />
                    <div className="portifolio-layer">
                        <h4>Filmes</h4>
                        <p>Simples página home desenvolvida clone da netflix consumido api</p>
                        <a href="https://github.com/tassioNS9/netflix-clone" target="_blank"><i className='bx bx-link-external'></i></a>
                    </div>
                </div>

                <div className="portifolio-box">
                    <img src={logo_burguer} alt="burger image" />
                    <div className="portifolio-layer">
                        <h4>Burger</h4>
                        <p>Projeto de um simples fastfood de hamburguer </p>
                        <a href="https://github.com/tassioNS9/make_your_burguer" target="_blank"><i className='bx bx-link-external'></i></a>
                    </div>
                </div>

                <div className="portifolio-box">
                    <img src={tn_lib} alt="logo-android" />
                    <div className="portifolio-layer">
                        <h4>Filmes</h4>
                        <p>Web de livraria de filmes completo consumindo api</p>
                        <a href="https://github.com/tassioNS9/nevesfilmes-lib" target="_blank"><i className='bx bx-link-external'></i></a>
                    </div>
                </div>

                <div className="portifolio-box">
                    <img src={capputeeno} alt="capputeeno" />
                    <div className="portifolio-layer">
                        <h4>Capputeeno</h4>
                        <p>Projeto web de um eccommerce de canecas e camisas ainda em desenvolvimento</p>
                        <a href="https://github.com/tassioNS9/ecommerce-capputeeno" target="_blank"><i className='bx bx-link-external'></i></a>
                    </div>
                </div>

                <div className="portifolio-box">
                    <img src={logo_android} alt="logo2" />
                    <div className="portifolio-layer">
                        <h4>Curiosidades</h4>
                        <p>Site desenvolvido falando um pouco sobre o Android</p>
                        <a href="https://tassions9.github.io/site-android/" target="_blank"><i className='bx bx-link-external'></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}