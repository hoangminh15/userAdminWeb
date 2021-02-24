import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import AddEmployee from './Component/AddEmployee';
import SimpleTable from './Component/Table';

function App() {
  return (
    <BrowserRouter>
        <Route exact path="/" component={AddEmployee} />
        <Route exact path="/view" component={SimpleTable} />
      </BrowserRouter>
  );
}

export default App;
