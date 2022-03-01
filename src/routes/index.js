import React from 'react';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import routes from './routes';

const getRoutes = (
  <Switch>
    {routes.items.map((item, index) =>
      item.type === 'external' && item.type !== undefined ? (
        <Route exact path={item.path} component={item.component} name={item.name} key={index} />
      ) : item.type === 'submenu' ? (
        item.children.map((subItem) => (
          <Route
            exact
            path={`${item.path}${subItem.path}`}
            component={subItem.component}
            name={subItem.name}
          />
        ))
      ) : (
        <Route
          exact
          path={item.path}
          component={item.layout ? item.component: item.component}
          name={item.name}
          key={index}
        />
      )
    )}
    <Redirect to='/404' />
  </Switch>
);

const Routes = () => {
  return (
    <Router>
      <Switch>{getRoutes}</Switch>
    </Router>
  );
};
export default Routes;
