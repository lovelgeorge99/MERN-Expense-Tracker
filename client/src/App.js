
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import Graph from './components/Graph';
import Sidebar from './components/Sidebar';
import Dashboard from './screens/Dashboard';
import Income from './screens/Income';
import Expense from './screens/Expense';


function App() {
  return (
    <div className="App">
     
      <Router>
      <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard/>} exact />
          <Route path="/income" element={<Income/>}  />
          <Route path="/expense" element={<Expense/>}  />
        </Routes>
      </Router>
     
     
    
    </div>
  );
}

export default App;
