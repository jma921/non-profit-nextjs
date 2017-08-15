import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';

class Index extends React.Component {
  // static async getInitialProps(req) {
  // return req
  //   ? { userAgent: req.headers['user-agent'] }
  //   : { userAgent: navigator.userAgent };
  // const baseUrl = req ? `${req.protocol}://${req.headers.host}` : '';
  // const res = await fetch(`${baseUrl}/starwars`);
  // const json = await res.json();
  // return { starwars: json };
  // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  // const res = await fetch('/api/starwars');
  // const data = await res.json();

  // console.log(`Show data fetched. Count: ${data.length}`);

  // return {
  //   shows: data
  // };
  // }
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
