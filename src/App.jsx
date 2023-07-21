// Import data

// Import components
import './App.css';
import SearchBar from './SearchBar'
import Directory from './Directory'
import Gallery from './Gallery'
import Sidebar from './Sidebar'


function App(){
  return (
      <div className="flex-row" style={{ justifyContent: 'space-around'}}>
        <div>
          <Sidebar/>
      </div>
      <div style={{ width: "70vh"}}>
        <SearchBar />
        <Directory />
        <Gallery />
      </div>
      </div>
  );
}

export default App;
