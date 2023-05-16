import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"

import './policies.css';
function Policies() {
    return (
        <>
            <Header />
            <header>
                <h1>Política de Privacidad</h1>
            </header>

            <main>
                <section>
                    <h2>Información recopilada</h2>
                    <p>En esta sección, describe la información que recopilas de los usuarios de tu sitio web. Puedes mencionar datos como direcciones IP, cookies, información de contacto, etc.</p>
                </section>

                <section>
                    <h2>Uso de la información</h2>
                    <p>Explica cómo utilizarás la información recopilada de los usuarios. Por ejemplo, puedes indicar que la utilizarás para mejorar el sitio web, personalizar la experiencia del usuario, enviar correos electrónicos promocionales, etc.</p>
                </section>

                <section>
                    <h2>Divulgación de la información</h2>
                    <p>Si compartes información con terceros, menciona aquí los tipos de terceros con los que compartes datos y con qué fines. Por ejemplo, puedes mencionar que compartes información con proveedores de servicios, anunciantes o autoridades legales en casos específicos.</p>
                </section>

                <section>
                    <h2>Cookies</h2>
                    <p>Si utilizas cookies en tu sitio web, explica cómo las utilizas y qué tipo de cookies empleas (por ejemplo, cookies de sesión, cookies de análisis, cookies publicitarias, etc.). También puedes mencionar cómo los usuarios pueden gestionar las cookies a través de la configuración de su navegador.</p>
                </section>

                <section>
                    <h2>Enlaces a otros sitios web</h2>
                    <p>Si tu sitio web contiene enlaces a otros sitios web, puedes mencionar aquí que tu política de privacidad no se aplica a esos sitios externos y que los usuarios deben revisar las políticas de privacidad de esos sitios.</p>
                </section>

                <section>
                    <h2>Seguridad</h2>
                    <p>Explica las medidas de seguridad que has implementado para proteger la información de los usuarios. Esto puede incluir el uso de encriptación, protección de contraseñas, cortafuegos, etc.</p>
                </section>

                <section>
                    <h2>Cambios a la política de privacidad</h2>
                    <p>Indica que puedes realizar cambios en tu política de privacidad y cómo notificarás a los usuarios sobre esos cambios.</p>
                </section>

                <section>
                    <h2>Contacto</h2>
                    <p>Proporciona información de contacto para que los usuarios puedan comunicarse contigo en caso de tener preguntas o inquietudes relacionadas con la política de privacidad.</p>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Policies