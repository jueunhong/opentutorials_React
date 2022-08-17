import React, { Component } from 'react';

//article
class ReadContent extends Component {
    render() {
      return (
        <article>
              <h2>{this.props.title}</h2>
              {this.props.desc}
        </article>
      );
    }
  }

  export default ReadContent;