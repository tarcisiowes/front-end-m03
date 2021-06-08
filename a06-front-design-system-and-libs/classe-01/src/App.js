import './App.css';
import CustomCard from './components/deck'
import NavBar from './components/navbar'

function App() {

  return (

    <div className="App">

      <NavBar />
      <div className="deck">
        <CustomCard/>
      </div>
    </div>
  );
}

export default App;
