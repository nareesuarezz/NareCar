import Header from '../../components/header/Header';
import './Home.css';
function Home() {
    return (
        <>

            <Header />
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className='whoWeAre'>
                <h1>¿Quienes somos?</h1>
                <p>Narecar es una empresa de venta de coches, un concesionario único en la isla con los coches más exoticos que puedes ver por la zona.</p>
                <p>¿Quieres salir de la rutina y tener el mejor coche de tu barrio? ¡COMPRA EN NARECAR!</p>
                <p>Tenemos los coches más rentables en calidad-precio del mercado, con ofertas inmejorables y con un trato profesional y cercano con nuestros clientes.</p>
                <br></br>
                <br></br>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className='brandWeWork'>
                <h1>¿Con qué marcas trabajamos?</h1>
                <p>Tenemos un gran abanico de posibilidades y marcas con las que trabajamos, desde marcas de clase media como Mazda, hasta lo mas exclusivo de Audi.</p>
                <br></br>
                <br></br>
            </div>
        </>
    );
}

export default Home;