import React, { Component } from 'react';

//header
// Subject라는 class를 만들겠다. class 첫 글자 대문자
class Subject extends Component {
    render() {
      return (
        // 컴포넌트는 반드시 하나의 최상의 태그만 사용해야한다.
        <header> 
          <h1><a href="/" onClick={function(e){
            e.preventDefault();
            this.props.onChangePage();
          }.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      );
    }
  }

  export default Subject;