import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';

function Footer() {
    return (


        <footer className="text-center footer text-center">
            <div className="container p-4">

                <div className="row  text-md-start mt-5">
                    <div className="col-md-4 ">
                        <h4 className="pb-3">NareCar</h4>

                        <p className="copy-right"> <a href='/policies'>Copyright © 2004-2023 NareCar. Todos los derechos reservados.</a></p>
                    </div>
                    <a href="/rss/rss.xml" className="Social ms-3"><i className="fa fa-rss"></i></a>

                    <div className="col-md-3">
                        <h5 className="pb-3">Redes sociales: </h5>
                        <ul className="list-style ps-0 ">
                            <li className="pb-3">
                                <a href='https://instagram.com/nareesuarezz' className="Social">
                                    <i className="fa fa-instagram"></i> Instagram
                                </a>
                            </li>
                            <li className="pb-3">
                                <a href='https://twitter.com/nareesuarezz' className="Social">
                                    <i className="fa fa-twitter"></i> Twitter
                                </a>
                            </li>
                            <li className="pb-3">
                                <a href='https://github.com/nareesuarezz' className="Social">
                                    <i className="fa fa-github"></i> GitHub
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer;