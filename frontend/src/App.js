import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import NavBar from './navbar/NavBar';
import Question from './question/Question';
import Questions from './questions/Questions';
import Callback from './Callback';
import NewQuestion from './newquestion/NewQuestion';
import SecuredRoute from './securedroute/SecuredRoute';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Route exact path='/' component={Questions}/>
        <Route exact path='/question/:questionId' component={Question}/>
        <Route exact path='/callback' component={Callback}/>
        <SecuredRoute path='/new-question' component={NewQuestion} />
      </div>
    );
  }
}

export default App;
