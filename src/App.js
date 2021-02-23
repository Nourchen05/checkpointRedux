import "./App.css";
import AddTask from "./Components/AddTask/AddTask";
import ListTask from "./Components/ListTask/ListTask";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div className="App m-5">
      <AddTask /> {/*l importation se fait automatiquement*/}
      <ListTask />
    </div>
  );
}

export default App;
