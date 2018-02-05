/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import NavigationBar from '../../components/NavigationBar/index';
import ResultsPage from 'containers/ResultsPage/Loadable';
import MnistPage from 'containers/MnistPage/Loadable';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';

const theme = createMuiTheme({
  paletter: {
    primary: purple,
  }
});

export default function App() {
  return (
      <div>
        <MuiThemeProvider theme={theme}>
          <div>
            <NavigationBar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/MnistPage" component={MnistPage} />
              <Route path="/ResultsPage" component={ResultsPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </div>
  );
}
