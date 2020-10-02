import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { PlayPage, MainMenuPage, ScoresPage, SettingsPage, SetupPage } from 'src/pages';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

interface AppProps {
  className?: string;
}

export const App: React.FC<AppProps> = ({ className }) => {
  return (
    <div className={className}>
      <AmplifySignOut />
      <Router>
        <Switch>
          <Route exact path="/">
            <MainMenuPage />
          </Route>
          <Route path="/setup">
            <SetupPage />
          </Route>
          <Route path="/play">
            <PlayPage />
          </Route>
          <Route path="/scores">
            <ScoresPage />
          </Route>
          <Route path="/settings">
            <SettingsPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export const AmplifyApp = withAuthenticator(App);

export default styled(AmplifyApp)``;
