
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';



function App() { 

  return (
    <div className="App">  
    <NavBar >
    <ItemListContainer/>
    </NavBar>
    <ItemCount stock={10} initial={1}/>

    </div>
  );
}

export default App;
