import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

import './news.css';
function Volkswagen() {
    return (
        <>

            <Header />
            <div className='new'>
                <h1>Volkswagen anuncia un nuevo SUV híbrido</h1>
                <p>Volkswagen presentó su nuevo SUV híbrido que combina un motor eléctrico con un motor de gasolina para ofrecer una mayor eficiencia de combustible.</p>
                <img src={'/assets/img/volkswagen.jpg'} />
                <h2>Volkswagen España anuncia que da comienzo la comercialización de la versión híbrida enchufable del SUV más popular de la firma. Se trata del Volkswagen Tiguan e-Hybrid, que ya está disponible en nuestro país.

                    Es el segundo SUV híbrido enchufable que encontramos en la gama actual de Volkswagen en nuestro país, ya que la firma alemana anunció anteriormente, también, el inicio de la comercialización del Volkswagen Touareg e-Hybrid y del Touareg R. Un SUV más lujoso que el Tiguan, cuyo precio arranca en 81.220 euros de la versión de acceso.
                </h2>
            </div>

            <Footer />
        </>
    );
}

export default Volkswagen;