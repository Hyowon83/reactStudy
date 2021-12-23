import React, {Component} from 'react';
import Subject from './components/Subject';
import Content from './components/Content';
import TOC from './components/TOC';
import './App.css';

// class Subject extends Component {
//   render() {
//     return (
//       //반드시 하나의 최상위 태그만 써야한다.
//       <header>
//           <h1>WEB</h1>
//           world wide web!
//       </header>
//     );
//   }
// }

// class Content extends Component {
//   render () {
//     return (
//       <article>
//           <h2>HTML</h2>
//           HTML is HyperText Markup Language.
//       </article>
//     );
//   }
// }

//재사용성을 위한 컴포넌트로 바꾸기
// class Subject extends Component {
//   render() {
//     return (
//       <header>
//           <h1>{this.props.title}</h1>
//           {this.props.sub}
//       </header>
//     );
//   }
// }



class App extends Component {
  //컴포넌트가 실행되기 전에 먼저 constructor를 실행시켜서 state를 초기화 시킨다.
  constructor(props) {
    super(props);
    this.state = {
      subject:{title:"WEB", sub:"world wide web!!!"}
    }
  }
  render() {
    return (
      <div className="App">
        {/* <Subject></Subject> */}
        <Subject title = "WEB" sub = "world wide web!!!"></Subject>
        <Subject title = "React" sub = "For UI"></Subject>
        <Subject title = "Jang Hyowon" sub = "PLM Solution Engineer"></Subject>
        {/* constructor를 사용하는 방법 */}
        {/* 상위인 state를 하위의 props로 보낸다. */}
        <Subject
          title = {this.state.subject.title}
          sub = {this.state.subject.sub}>
        </Subject>
        <TOC></TOC>
        {/* <Content></Content> */}
        <Content title = "HTML" desc = "HTML is HyperText Markup Language."></Content>
        <Content title = "Genergy" desc = "PLM is Product Lifecycle Management."></Content>
      </div>
    );
  }
}

export default App;
