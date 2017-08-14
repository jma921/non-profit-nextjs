import Link from 'next/link';
import Head from 'next/head';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    const { children, title = 'Title' } = this.props;
    return (
      <div>
        <Head>
          <title>
            {title}
          </title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"
          />
        </Head>
        <header>
          <Navbar style={{ backgroundColor: '#e74c3c' }} inverse toggleable>
            <NavbarToggler right onClick={this.toggle} />
            <Link href="/" prefetch>
              <a className="navbar-brand">Home</a>
            </Link>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link href="/about" prefetch>
                    <a
                      className={
                        this.props.title === 'About Us'
                          ? 'nav-link active'
                          : 'nav-link'
                      }
                    >
                      About
                    </a>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="/contact" prefetch>
                    <a
                      className={
                        this.props.title === 'Contact Us'
                          ? 'nav-link active'
                          : 'nav-link'
                      }
                    >
                      Contact
                    </a>
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </header>

        {children}
        <style jsx>{`
          nav {
            background-color: #27ae60;
          }
        `}</style>
      </div>
    );
  }
}
