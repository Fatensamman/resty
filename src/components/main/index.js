import { Route, Switch } from 'react-router-dom';

import HistoryPage from '../historyPage';
import Help from '../help';
import Home from '../home';

function Main() {

  return (
    <>
    <div>
      <Switch>
      <Route exact path="/" component ={Home}/>
        <Route path="/history" component={HistoryPage}/>
        <Route path="/help" component={Help}/>
      </Switch>
    </div>
    </>
  );
  }

export default Main;
