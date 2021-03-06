
import { Component } from 'react';
import { If, Then, Else } from 'react-if';

import Form from '../Form';
import Results from '../Results';
import History from '../History';
import './home.scss';


class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      headers: {},
      urls: [],
      methods: [],
      history: [],
      isLoading: false,
      isVisible: false,
      error: '',
      body: [],
      refill: { url: this.props.location.data?.url, method: this.props.location.data?.method },
    }
  }

  refill = (data) => {
    this.setState({ refill: data });
  }

  toggleMenu = () => {
    this.setState({ isVisible: !this.state.isVisible });
  }

  updateResults = async (data) => {
    this.setState({
      urls: [...this.state.urls, data.url],
      methods: [...this.state.methods, data.method],
      isLoading: true,
    });

    let body1 = data.body;
    let body2;
    let body3;

    if (data.method === 'Get') {
      body3 = null;

    } else {
      if (body1.length === 0) {
        body3 = null;
      } else {
        body2 = JSON.parse(body1)
        body3 = JSON.stringify(body2);
      }
    }
    let request;

    try {
      request = await fetch(data.url, {
        method: data.method,
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',

        body: body3

      })
    } catch (error) {
      await this.setState({
        body: [...this.state.body, 'url not found'],
        isLoading: false,
        isVisible: true
      });
    }

    if (request) {
      this.toggleMenu();
      let response = await request.json();
      // console.log(response);

      let data2 = {
        method: data.method,
        url: data.url,
        body: response,
      };
      let arr = this.state.history.map(element => {
        return element.url + element.method;
      })

      let update;

      if (arr.includes(data2.url + data2.method)) {
        update = this.state.history
      } else {
        update = [...this.state.history, data2];
        localStorage.setItem('h1', JSON.stringify(update));
      }


      await this.setState({
        body: [...this.state.body, response],
        isLoading: false,
        isVisible: true,
        history: update,
      });
    }
  }


  componentDidMount() {
    let history = JSON.parse(localStorage.getItem('h1')) || [];
    this.setState({ history });
  }

  render() {
    return (
      <div>
        <>
          <Form updateResults={this.updateResults} api={this.state.refill} />
          <History history={this.state.history} refill={this.refill} />
          <If condition={this.state.isLoading}>
            <Then>
              <p className="phome">Loading</p>
              <img src="https://icons8.com/preloaders/preloaders/373/Golf%20ball-128.gif" alt="loading"/>
            </Then>
            <Else>
              <Results show={this.state.isVisible} data={this.state} />
            </Else>
          </If>
        </>
      </div>
    );
  }
}

export default Home;
