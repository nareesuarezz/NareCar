import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

import './news.css';
function Tesla() {
    return (
        <>

            <Header />
            <div className='new'>
                <h1>Presentado el nuevo modelo eléctrico de Tesla</h1>
                <p>El fabricante estadounidense de automóviles Tesla presentó hoy su último modelo eléctrico con una autonomía de 600 km.</p>
                <img src={'/assets/img/tesla.jpg'} />
                <h2>Bajo el nombre en clave 'Highland', esta actualización del Tesla Model 3 se ha señalado para este 2023: seis años después de su lanzamiento al mercado y siete desde su presentación. De hecho, Reuters le ponía fecha para el inicio de su fabricación en las plantas de Shanghai y Fremont: tercer trimestre de este 2023.
                    
                    Quien ha publicado la foto en Reddit es ffiarpg, que la ha indexado en la comunidad de la marca de esta plataforma. Detalla que no trabaja en Tesla y no aclara dónde se ha tomado la foto. Además, explica en los comentarios que él no ha inmortalizado al renovado eléctrico, que muestra veladamente solo el frontal, asomando tímidamente tras una lona.

                </h2>
            </div>

            <Footer />
        </>
    );
}

export default Tesla;