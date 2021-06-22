import React from 'react';
import { 
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import LogEntriesNew from './LogEntriesNew';
import LogEntriesListView from './LogEntriesListView';

function LogEntries() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>LogEntries</h2>


      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/new`}>
          <LogEntriesNew />
        </Route>
        <Route path={`${match.path}/:logEntryUuid`}>
          <LogEntry />
        </Route>
        <Route path={match.path}>
          
            <ul>
                <li>
                <Link to={`${match.url}/new`}>New Entry</Link>
                </li>
            </ul>
            <h3>Please select a LogEntry.</h3>
            <LogEntriesListView />
        </Route>
      </Switch>
    </div>
  );
}

function LogEntry() {
  let { logEntryUuid } = useParams();
  return <h3>Requested LogEntry UUID: {logEntryUuid}</h3>;
}

export default LogEntries;