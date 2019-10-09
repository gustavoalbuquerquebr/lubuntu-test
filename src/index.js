import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

const App = () => {

  const [title, setTitle] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("/.netlify/functions/hello-world/hello-world.js");
      const json = await res.json();
      console.log(json);
      setTitle(json.message);
    })()
  });

  return (
    <h1>
      { title ? title : "Loading..."}
    </h1>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
