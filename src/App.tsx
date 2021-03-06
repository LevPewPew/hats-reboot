import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { PlayPage, MainMenuPage, ScoresPage, SettingsPage, SetupPage } from 'src/pages';

interface AppProps {
  className?: string;
}

export const App: React.FC<AppProps> = ({ className }) => {
  return (
    <div className={className}>
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

export default styled(App)``;
