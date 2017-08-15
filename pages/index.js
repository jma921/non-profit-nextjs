import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';

class Index extends React.Component {
  static async getInitialProps({
    req,
    pathname,
    query,
    asPath,
    res,
    jsonPages,
    err
  }) {
    console.log(res);
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    this.setState({ loading: true }, () => {
      axios
        .get('/api/starwars')
        .then(response => {
          const { name, birth_year } = response.data;
          this.setState({
            name,
            birth_year,
            loading: false
          });
        })
        .catch(error => {
          this.setState({ loading: false });
        });
    });
  };
  render() {
    return (
      <Layout>
        <Container>
          <Row>
            <Col>
              <h1>Home Page</h1>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default Index;
