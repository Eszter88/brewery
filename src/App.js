import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import brewerys from "./data.jsx";

const createCard = (brewery, index) => {
  return (
    <Card
      key={index}
      index={index}
      title={brewery.title}
      sub={brewery.sub}
      text={brewery.text}
    />
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <div className="card-container">{brewerys.map(createCard)}</div>
    </div>
  );
}

export default App;
