import React, { Component } from 'react';
import Layout from '../components/Layout';
import axios from 'axios';

class Post extends Component {
  static async getInitialProps({ query }) {
    console.log(query);
    return { query };
  }
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      post: null
    };
  }
  fetchData = () => {
    console.log(this.props.query.id);
    axios
      .get(`/api/post/${this.props.query.id}`)
      .then(response => this.setState({ post: response.data }))
      .catch(err => console.log(err));
  };
  componentWillMount() {
    this.fetchData();
  }
  render() {
    console.log(this.props);
    return (
      <Layout>
        <div>
          <p>oihoih</p>
        </div>
      </Layout>
    );
  }
}

export default Post;
