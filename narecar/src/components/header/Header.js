import './Header.css';

function Header() {
    return (
        <div className="header">
            <h1 className='tittle'>NARECAR</h1>
            <div className='image'><img src={'/assets/img/logo.png'}></img></div>
            <ul>

                <li><a href="/home">Inicio</a></li>
                <li><a href="/carsV6">Coches con motor V6</a></li>
                <li><a href="/carsWankel">Coches con motor Wankel</a></li>
                <li><a href="/cars4L">Coches con motor 4L</a></li>
            </ul>
        </div>
    )
}

export default Header;