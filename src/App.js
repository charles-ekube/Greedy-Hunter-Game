import React from "react";
import { WelcomeBoard } from "./components/message-boards";
import GamePage from "./pages";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Route
          exact
          path="/"
          render={(props) => (
            <React.Fragment>
              <WelcomeBoard />
            </React.Fragment>
          )}
        />
        <Route path="/gamepage" component={GamePage} />
      </Router>
    </>
  );
}

export default App;
