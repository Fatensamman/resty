
import { Component } from 'react';
import { If, Then, Else } from 'react-if';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import Results from './components/Results';
import History from './components/History';
import HistoryPage from './components/historyPage';
import Help from './components/help';


class App extends Component {

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
      callback: { url: '', method: '' },
    }
  }

  callback = (api) => {
    this.setState({ callback: api });
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
      let body2 ;
      let body3 ;

      if(data.method === 'Get'){
         body3 = null ;
         
      } else {
        if (body1.length === 0){
          body3 = null ;
          } else{
        body2 = JSON.parse(body1)
        body3 = JSON.stringify(body2);}
      }
      let request;
      
  try{
       request = await fetch(data.url,{
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
    } catch(error){
        await this.setState({
          body: [...this.state.body, 'url not found'],
          isLoading: false,
          isVisible:true
        });
      }
        
        if(request){
        this.toggleMenu();
        let response = await request.json();
        console.log(response);
  
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
 
  reRunHandler=(data)=>{
    this.setState({locationMethod:data.method,
    locationUrl: data.url})
    
  }
  render() {
    // console.log(this.state);
    return (
      <div className="Resty">
        <Header />
        <Switch>
        <Route exact path="/">
          <>
        <Form updateResults={this.updateResults} api={this.state.callback} />
          <History history={this.state.history} callback={this.callback} />
          <If condition={this.state.isLoading}>
            <Then>
              <p>Loading ...</p>
            </Then>
            <Else>
              <Results show ={this.state.isVisible} data={this.state}  />
            </Else>
          </If>
          </>
          </Route>
          <Route path="/history" component={()=><HistoryPage callback={this.callback}/>}/>
          <Route path="/help" component={Help}/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
