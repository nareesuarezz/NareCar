import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

import './news.css';
function News() {
    return (
        <>

            <Header />
            <h1>NOTICIAS</h1>

            <div className='news'>
                <h1>Presentado el nuevo modelo eléctrico de Tesla</h1>
                <img src={'/assets/img/tesla.jpg'}/>
                <p>El fabricante estadounidense de automóviles Tesla presentó hoy su último modelo eléctrico con una autonomía de 600 km.</p>

                <h1>BMW lanza un nuevo modelo deportivo</h1>
                <img src={'/assets/img/m8.jpg'}/>
                <p>BMW ha anunciado el lanzamiento de un nuevo modelo deportivo con un motor V8 y una velocidad máxima de 300 km/h.</p>

                <h1>Volkswagen anuncia un nuevo SUV híbrido</h1>
                <img src={'/assets/img/volkswagen.jpg'}/>
                <p>Volkswagen presentó su nuevo SUV híbrido que combina un motor eléctrico con un motor de gasolina para ofrecer una mayor eficiencia de combustible.</p>
            </div>
            
            <Footer/>
        </>
    );
}

export default News;