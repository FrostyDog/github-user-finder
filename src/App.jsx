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
          <h2 className="App__header__title"> Git People Finder </h2>
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
