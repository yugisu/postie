import React from 'react';
import { Switch, Route } from 'react-router-dom';

export const Routing = () => {
  return (
    <Switch>
      <Route path='/'>
        <span>Hello World!</span>
      </Route>
    </Switch>
  );
};
