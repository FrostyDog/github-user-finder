import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.scss";
import UserFinderBlock from "./components/UserFinderBlock";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App__header">
          <h1 className="App__header__title"> GitHub People Finder </h1>
        </header>
        <main className="App__main">
          <UserFinderBlock />
        </main>
        <footer className="App__footer" />
      </div>
    </Provider>
  );
}

export default App;
