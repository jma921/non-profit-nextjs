import React, { Component } from "react";
import Link from "next/link";

class SmallPost extends Component {
  render() {
    console.log(this.props);
    const { title } = this.props.post.fields;
    const { id } = this.props.post.sys;
    let url = "";
    if (this.props.post.fields.featuredImage) {
      url = this.props.post.fields.featuredImage.fields.file.url;
    }
    // const post = this.props.post.data;
    // console.log(this.props.post.getImage);
    // const image = post['posts.post_image'];
    // const text = post['posts.text_field'];
    // const title = post['posts.title'];
    // // console.log(image, text, title);
    // const { url } = this.props.post.data['posts.post_image'].value.main;

    return (
      <div className="col-md-4">
        <Link href={`/post?id=${id}`} as={`/post/${id}`}>
          <a>
            <img className="img-fluid rounded" src={url} alt="" />
          </a>
        </Link>
        <h3>
          {title}
        </h3>
      </div>
    );
  }
}

export default SmallPost;
