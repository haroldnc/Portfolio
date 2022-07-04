import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
   console.log('render: App');

   return (
      <div className="App">
         <Router>
            <h1>Hello World</h1>
         </Router>
      </div>
   );
}

export default App;
