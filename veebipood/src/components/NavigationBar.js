import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function NavigationBar() {
  const { t, i18n } = useTranslation();

function muudaKeelEE() {
  i18n.changeLanguage("et");
}

function muudaKeelEN() {
  i18n.changeLanguage("en");
}


  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Veebipood</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/osta-kinkekaart">{t("gift-card")}</Nav.Link>
            <Nav.Link as={Link} to="/ostukorv">{t("cart")}</Nav.Link>
            <NavDropdown title={t("manage")} id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/halda-autod">{t("manage-cars")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/halda-esindused">{t("manage-shops")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/halda-hinnad">{t("manage-prices")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/halda-kasutajad">Halda kasutajaid</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/halda-tootajad">Halda töötajaid</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/halda-tooted">Halda tooteid</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/lisa-toode">Lisa toode</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Tava Kasutaja vaade" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/autod">Autod</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/esindused">Esindused</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/hinnad">Hinnad</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/kasutajad">Kasutajad</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tootajad">Töötajad</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tooted">Tooted</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/kaart">Kaart</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            

            <Nav.Link>
            <img onClick={muudaKeelEE} src="/estonian.png" className="lang" alt=""></img>
            <img onClick={muudaKeelEN} src="/english.png" className="lang" alt=""></img>
            </Nav.Link>

            {/* <button >Eesti</button>
            <button >English</button> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;