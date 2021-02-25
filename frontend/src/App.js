import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import AddUser from './Component/AddUser';
import SimpleTable from './Component/Table';

function App() {
  return (
    <BrowserRouter>
        <Route exact path="/" component={AddUser} />
        <Route exact path="/view" component={SimpleTable} />
    </BrowserRouter>
  );
}

export default App;
