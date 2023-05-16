import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

import './news.css';
function BMW() {
    return (
        <>

            <Header />
            <div className='new'>
                <h1>BMW lanza un nuevo modelo deportivo</h1>
                <p>BMW ha anunciado el lanzamiento de un nuevo modelo deportivo con un motor V8 y una velocidad máxima de 300 km/h.</p>
                <img src={'/assets/img/m8.jpg'} />
                <h2>La vuelta del Serie 8 a la gama de BMW era muy esperada y, una vez que se produjo, la marca alemana no ha tardado mucho en ofrecer una gama de lo más variada para el modelo. Primero fue el Coupé y después el Cabrio, a los que más tarde se sumó el Gran Coupé, el formato de gran berlina deportiva de cuatro puertas que, como sus hermanos, también está disponible ahora en una poderosa versión ‘M’.

                    Como la variante base, es más grande que las otras dos carrocerías, pero añade elementos similares a los vistos en ellos. Así,cuenta con un agresivo paragolpes con grandes entradas de aire, labio inferior de fibra de carbono y faros Laserlight.
                </h2>
            </div>

            <Footer />
        </>
    );
}

export default BMW;