import React, { Component } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import axios from "axios";
import ReactMarkdown from "react-markdown";

class Post extends Component {
  static async getInitialProps({ query: { id } }) {
    return { id };
  }
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      post: null
    };
    this.fetchData = this.fetchData.bind(this);
  }
  fetchData() {
    // console.log(this.props.query.id);
    axios
      .get(`/api/post/${this.props.id}`)
      .then(response => this.setState({ post: response.data, loading: false }))
      .catch(err => console.log(err));
  }
  componentDidMount() {
    this.fetchData();
  }
  renderPost = () => {
    const { loading, post } = this.state;
    if (loading) {
      return <div className="alert">Loading</div>;
    } else {
      return (
        <div>
          <Head>
            <title>
              {this.state.post.fields.title}
            </title>
          </Head>
          <div className="container">
            <div className="row">
              <div className="col">
                <h2>
                  {post.fields.title}
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <ReactMarkdown source={post.fields.body} />
              </div>
            </div>
          </div>
          <style jsx>{`
            img < p {
              text-align: center;
            }
          `}</style>
        </div>
      );
    }
  };
  render() {
    return (
      <Layout>
        {this.renderPost()}
      </Layout>
    );
  }
}

export default Post;
