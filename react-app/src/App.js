import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import Subject from './components/Subject';
import Control from './components/Control';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'read', //페이지 구분
      selected_contents_id:2,
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
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_contents_id){
        _title = data.title;
        _desc = data.desc;
        break;
        }
        i = i + 1;
      }
      
    }
    return (
      <div className="App">
        <Subject 
        title={this.state.subject.title}  //state값을 subject의 props값으로 다시 줌
        sub={this.state.subject.sub}
        onChangePage={function(){
          this.setState({mode:'welcome'});
        }.bind(this)}>          
        </Subject>
        <TOC
        onChangePage={function(id){
          this.setState({
            mode:'read',
            selected_contents_id:Number(id)});
        }.bind(this)}
        data={this.state.contents}
        ></TOC>
        <Control onChangeMode={function(_mode){
          this.setState({
            mode:_mode
          });
        }.bind(this)}></Control>
        <ReadContent title={_title} desc={_desc}></ReadContent>
      </div>
    );
  }
}


export default App;
