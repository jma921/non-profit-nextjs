import Link from "next/link";
import Layout from "../components/Layout";
import SmallPost from "../components/SmallPost";
import fetch from "isomorphic-unfetch";
import { Container, Row, Col, Button } from "reactstrap";
import axios from "axios";

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
    return req
      ? { userAgent: req.headers["user-agent"] }
      : { userAgent: navigator.userAgent };
  }
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = () => {
    this.setState({ loading: true }, () => {
      axios
        .get("/api/posts")
        .then(response => {
          const { items } = response.data;
          this.setState({
            posts: items,
            loading: false
          });
        })
        .catch(error => {
          this.setState({ loading: false });
        });
    });
  };
  renderPosts = () => {
    let posts = [];
    // console.log(this.state.posts);
    if (this.state.posts === []) {
      return;
    }
    posts = this.state.posts.map((post, index) => {
      return <SmallPost post={post} key={index} />;
    });
    return posts;
  };
  render() {
    console.log(this.props);
    return (
      <Layout>
        <Container
          fluid
          style={{
            background: `url('/static/bg.jpg') no-repeat center center`,
            backgroundSize: "cover",
            height: "90vh"
          }}
        >
          <Row
            className="align-items-center"
            style={{ height: "100%", color: "white" }}
          >
            <Col sm="12" md={{ size: 6, offset: 1 }}>
              <h1>Non profit organization</h1>
              <p className="lead">
                Dropbox Business is the secure file sharing and storage solution
                that employees love and IT admins trust.
              </p>
              <button
                type="button"
                className="btn btn-primary btn-lg cta-button"
              >
                Large button
              </button>
            </Col>
          </Row>
        </Container>
        <div className="container">
          <div className="row description-text">
            <div className="col">
              <p className="lead">
                People need nature — and for almost 30 years, Conservation
                International has worked to protect it. Through cutting-edge
                science, innovative policy and global reach, we empower people
                to protect the nature that we rely on for food, fresh water and
                livelihoods.
              </p>
              <Link href="/about">
                <a className="description-link">
                  Learn More About Conservation International{" "}
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid about-section">
          <div className="row">
            <div className="col text-center">
              <h2 className="about-section--header">How It Works</h2>
            </div>
          </div>
          <div className="row text-center">
            <div className="col">
              <img
                className="about-section--img"
                src="/static/angellist.png"
                alt="oi"
              />
              <h4 className="about-section--subheader">Hiuhiuh</h4>
              <p className="about-section--p">
                CI measures and monitors the species and ecosystems that we need
                the most, while making that information available to the
                governments and businesses that need it.
              </p>
              <Link href="/about" prefetch>
                <a className="about-section--link">iuhiuhiuhiuh</a>
              </Link>
            </div>
            <div className="col">
              <img
                className="about-section--img"
                src="/static/angellist.png"
                alt="oi"
              />
              <h4 className="about-section--subheader">Hiuhiuh</h4>
              <p className="about-section--p">
                CI measures and monitors the species and ecosystems that we need
                the most, while making that information available to the
                governments and businesses that need it.
              </p>
              <Link href="/about" prefetch>
                <a className="about-section--link">iuhiuhiuhiuh</a>
              </Link>
            </div>
            <div className="col">
              <img
                className="about-section--img"
                src="/static/angellist.png"
                alt="oi"
              />
              <h4 className="about-section--subheader">Hiuhiuh</h4>
              <p className="about-section--p">
                CI measures and monitors the species and ecosystems that we need
                the most, while making that information available to the
                governments and businesses that need it.
              </p>
              <Link href="/about" prefetch>
                <a className="about-section--link">iuhiuhiuhiuh</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="container donate-section">
          <div className="row">
            <div className="col text-center">
              <h2 className="donate-section--header">
                Donate Now to Help Protect Nature
              </h2>
              <p>
                Your donation will help protect natural resources for everyone,
                now and for the future.
              </p>
            </div>
          </div>
        </div>
        <div className="container posts-section">
          <div className="row">
            {this.renderPosts()}
          </div>
        </div>
        <style jsx>{`
          .cta-button {
            background-color: #e74c3c;
            border-color: #e74c3c;
          }
          .cta-button:hover {
            background-color: #c73e30;
            border-color: #c73e30;
          }
          button {
            cursor: pointer;
          }
          .description-text {
            padding: 5rem;
            text-align: center;
          }
          .description-link {
            color: #e74c3c;
            font-weight: 600;
          }
          .description-link:hover {
            text-decoration: none;
            color: #c73e30;
          }
          .about-section {
            background-color: #e74c3c;
            padding-top: 3rem;
            padding-bottom: 4rem;
            color: white;
          }
          .about-section--header {
            font-weight: 200;
            font-size: 3rem;
            padding-bottom: 3rem;
          }
          .about-section--subheader {
            font-weight: bold;
          }
          .about-section--p {
            font-weight: 300;
          }
          .about-section--img {
            padding-bottom: 1rem;
          }
          .about-section--link {
            text-decoration: none;
            color: white;
            font-weight: bold;
          }
          .donate-section {
            padding-top: 3rem;
          }
          .donate-section--header {
            font-weight: 200;
            font-size: 3rem;
            padding-bottom: 1rem;
            color: #e74c3c;
          }
        `}</style>
      </Layout>
    );
  }
}

export default Index;
