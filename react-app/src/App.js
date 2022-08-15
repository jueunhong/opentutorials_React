import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'read', //페이지 구분
      subject:{title:'WEB', sub:'wolrd wide web!'}, //상위 컴포넌트의 state값 초기화, subject 값을 state화
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    } 
  }
  render() {
    var _title, _desc = null;
    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject 
        title={this.state.subject.title}  //state값을 subject의 props값으로 다시 줌
        sub={this.state.subject.sub}></Subject> */}
        <header> 
          <h1><a href="/" onClick={function(e){
            e.preventDefault();
            //this.state.mode = 'welcome';
            this.setState({
              mode:'welcome'
            });
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
        <TOC 
        data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}


// function App() {
//   return (
//     <div className="App">
//       Hello, React!!
//     </div>
//   );
// }

export default App;
