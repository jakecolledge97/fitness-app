import React from "react";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return ( 
    <div className="App">
      <header className="App-header">
        <LoginPage />
        {!data ? "Loading..." : data}
      </header>
    </div>
  ); 
}

export default App;
