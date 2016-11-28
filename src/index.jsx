import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       val: 0
//     };
//     this.update = this.update.bind(this);
//   }
//   update() {
//     this.setState({
//       val: this.state.val + 1
//     })
//   }
//   componentWillMount() {
//     this.setState({
//       m: 2
//     })
//   }
//   componentDidMount() {
//     this.inc = setInterval(this.update, 1000);
//   }
//   render () {
//     console.log('rendering');
//     return (
//       <button onClick={this.update}>{this.state.val * this.state.m}</button>
//     )
//   }
//   componentWillUnmount() {
//     clearInterval(this.inc);
//   }
// }
//
// class Wrapper extends React.Component {
//   constructor() {
//     super();
//   }
//   mount() {
//     ReactDOM.render(<App />, document.getElementById('a'))
//   }
//   unmount() {
//     ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//   }
//   render () {
//     return (
//       <div>
//         <button onClick={this.mount.bind(this)}>mount</button>
//         <button onClick={this.unmount.bind(this)}>unmount</button>
//         <div id="a"></div>
//       </div>
//     )
//   }
// }


/*
 * componentWillReceiveProps
 * shouldComponentUpdate
 * componentDidUpdate
 */

// class App extends React.Component {
//   constructor() {
//     super();
//     this.update = this.update.bind(this);
//     this.state = {
//       isIncreacing: false
//     }
//   }
//
//
//   componentWillReceiveProps(nextProps) {
//     this.setState({
//       isIncreacing: nextProps.val > this.props.val
//     })
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     // 这里使用true,false逻辑来判断是否更新组件
//     return nextProps.val % 5 === 0
//   }
//   update() {
//     ReactDOM.render(
//       <App val={this.props.val+1} />,
//       document.getElementById('app')
//     );
//   }
//
//   render() {
//     console.log(this.state.isIncreacing);
//     return (
//       <button onClick={this.update}>{this.props.val}</button>
//     )
//   }
//
//   componentDidUpdate(prevProps, prevState) {
//     console.log('prevProps:', prevProps);
//   }
//
// }
//
// App.defaultProps = {
//   val: 0
// }
//
// ReactDOM.render(
//   <App />,
//   document.getElementById("app")
// )

/* higher order component */
let Mixin = InnerComponent => class extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
    this.update = this.update.bind(this);
  }
  update() {
    this.setState({
      val: this.state.val + 1
    })
  }

  componentWillMount() {
    console.log('will mount')
  }

  componentDidMount() {
    console.log('did mount')
  }

  render() {
    return (
      <InnerComponent
        update={this.update}
        {...this.state}
        {...this.props}
      />
    )
  }
}

const Button = (props) =>
  <button onClick={props.update}>{props.txt} - {props.val}</button>

const Label = (props) =>
  <label onMouseMove={this.update}>{props.txt} - {props.val}</label>

// Mixin
let ButtonMixed = Mixin(Button);
let LabelMixed = Mixin(Label)

class App extends React.Component {

  render() {
    return (
      <div>
        <ButtonMixed txt="Button" />
        <LabelMixed txt="Button" />
      </div>
    );
  }
}

App.defaultProps = {
  txt: 'button'
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
