import React from 'react';
import NavbarMenu from './Navbar';
import { Container, Row, Col } from 'reactstrap';

const Layout = ({ children }) => {
  return (
    <div>
      {/* Sección 1: Barra de Título */}
      <header className="bg-dark text-white text-center p-3">
        <h1>Cinemateca Boliviana</h1>
      </header>

      {/* Sección 2: Barra de Menú */}
      <NavbarMenu />

      {/* Sección 3: Contenido */}
      <main className="my-4">
        <Container>
          <Row>
            <Col>{children}</Col>
          </Row>
        </Container>
      </main>

      {/* Sección 4: Footer y Publicidad */}
      <footer className="bg-light border-top p-3">
        <Container>
          <Row>
            <Col md="8">
              <p className="text-muted">© 2025 Cinemateca Boliviana - Todos los derechos reservados.</p>
            </Col>
            <Col md="4">
              <div className="bg-warning text-center p-2">
                <strong>Publicidad</strong>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Layout;
