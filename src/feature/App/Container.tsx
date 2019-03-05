import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { Header, Sidebar } from '../../common/component';
import { Todo } from '../Todo';
import { About } from '../About';

class App extends React.Component<any, any> {
  render() {
    return(
      <div className='App'>
        <Sidebar />
        <div className='o-container'>
          <Header />
          <div className='o-container__wrapper'>
            <Switch>
              <Route exact path='/todo' component={Todo} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </div>
    </div>
    )
  }
};

export default withRouter(App);
