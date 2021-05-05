
import { Component } from 'react';
import { If, Then, Else } from 'react-if';

import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import Results from './components/Results';
import History from './components/History';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      urls: [],
      methods: [],
      headers: {},
      count: 0,
      history: [],
      isLoading: false,
      isDataVisible: false,
      error: '',
      body: [],
      callback: { url: '', method: '' },
    }
  }
  callback=(api)=> {
    this.setState({ callback: api });
  }
  toggleMenu = () => {
    this.setState({ isDataVisible: !this.state.isDataVisible });
  }
  updateResults = async (data) => {
    // console.log(data);
    try {
      this.setState({
        urls: [...this.state.urls, data.url],
        methods: [...this.state.methods, data.method],
        isLoading: true,
      });
      const request = await fetch(data.url, {
        method: data.method,
      });

      const response = await request.json();
      if (response) {
        this.toggleMenu();
      }
    
      let dataInstance = {
        url: data.url,
        method: data.method,
        body: response,
      };

      let updateHistory = [...this.state.history, dataInstance];
      localStorage.setItem('History', JSON.stringify(updateHistory));
      await this.setState({
        body: [...this.state.body, response],
        isLoading: false,
        history: updateHistory,
      });
    } catch (error) {
      if (error) {
        this.setState({
          error: error,
        });
      }
      console.log(error);
    }
  }
  componentDidMount() {
    let history = JSON.parse(localStorage.getItem('History')) || [];
    this.setState({ history });
  }
  // -----------------------------------------------------
  // clickHandler = (headers,count,results)=>{
  //   this.setState({headers,count,results})
  // }
  // -----------------------------------------------------
  render() {
    return (
      <div className="Resty">
        <Header />
        <Form updateResults={this.updateResults} api={this.state.callback} />
        <main>
          <History history={this.state.history} callback={this.callback} />
          <If condition={this.state.isLoading}>
            <Then>
              <p>Loading...</p>
            </Then>
            <Else>
              <Results show={this.state.isDataVisible} data={this.state} />
            </Else>
          </If>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
