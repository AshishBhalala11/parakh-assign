import './App.css';
import {data} from './data.js';
import Catagory from './Catagory.js'

function App() {
  //console.log('maindata' , data);

  return (
    <div className="app">
      {data.map((catagory)=> {
        return <Catagory {...catagory} key={catagory.name} />
      })
      }
      
    </div>
  );
}
export default App;
