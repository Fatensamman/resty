
import { Component } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import Results from './components/Results/Results';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headers:{},
      count: 0,
      results: []
    }
  }
  clickHandler = (headers,count,results)=>{
    this.setState({headers,count,results})
  }
  render(){
  return(
    <>
    <Header/>
    <Form handleClick={this.clickHandler}/>
    <Results headers={this.state.headers} count={this.state.count} results={this.state.results}/>
    <Footer/>
    </>
  );
  }
}

export default App;
