import React from 'react';
import Head from 'next/head';
import Footer from './Footer';

const HtmlContent = () => (
  <>
    <div>
      <html lang="es">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>cabraslocas</title>
          <link rel="stylesheet" href="./styles/normalize.css" />
          <link rel="stylesheet" href="./styles/skeleton.css" />
          <link rel="stylesheet" href="./styles/style.css" />
        </Head>
        <body>
          <header className="header">
            <div className="container">
              <div className="row">
                <div className="four columns">
                  <h1>
                    <img src="../src/images/logo.png" alt="logo"/>
                    Cabras<br />Locas
                  </h1>
                </div>
                <div className="two columns u-pull-right">
                  <ul>
                    <li className="submenu">
                      <img src="../src/images/cart.png" alt="cart" />
                      <div id="carrito">
                        <p className="vaciar">Carrito Vacío</p>
                        <table className="u-full-width">
                          <thead>
                            <tr>
                              <th>Imagen</th>
                              <th>Platillos</th>
                              <th>Precio</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <img src="../src/images/platillo1.jpg" width="100" />
                              </td>
                              <td>Hamburguesa Helado</td>
                              <td>$500</td>
                              <td>
                                <a href="#" className="borrar-platillo"></a>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img src="../src/images/platillo3.jpg" width="100" />
                              </td>
                              <td>Hamburguesa con gaseosa</td>
                              <td>$1500</td>
                              <td>
                                <a href="a" className="borrar-platillo"></a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <a href="#" className="button u-full-width">
                          Vaciar Carrito
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>

          <div className="hero">
            <div className="container">
              <div className="row">
                <div className="six columns">
                  <div className="contenido-hero">
                    <h2>Prueba una Hamburguesa</h2>
                    <p>Todas nuestras Hamburguesas a $1500</p>
                    <form>
                      <input className="u-full-width" type="text" placeholder="que te gustaria probar?" id="buscador" />
                      <input type="submit" className="submit-buscador" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ... Otro contenido ... */}

          <footer>
            <div className="container">
              <div className="row">
                <div className="four columns">
                  <nav className="menu">
                    <a className="enlace" href="#">
                      Restaurante
                    </a>
                    <a className="enlace" href="#">
                      Ubicación
                    </a>
                    <a className="enlace" href="#">
                      Teléfono
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </div>
  </>
);

export default HtmlContent;
