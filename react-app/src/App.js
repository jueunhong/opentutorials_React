import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject:{title:'WEB', sub:'wolrd wide web!'}, //상위 컴포넌트의 state값 초기화, subject 값을 state화
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    } 
  }
  render() {
    return (
      <div className="App">
        <Subject 
        title={this.state.subject.title}  //state값을 subject의 props값으로 다시 줌
        sub={this.state.subject.sub}></Subject>
        <TOC 
        data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language"></Content>
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
