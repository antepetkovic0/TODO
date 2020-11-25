import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as S from './components/styled/App.styled';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <Router>
      <S.App>
        <Home />
        {/* <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/todos">
            <Todos />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch> */}
      </S.App>
    </Router>
  );
}

export default App;
