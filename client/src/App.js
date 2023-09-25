
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './screens/Dashboard';
import Income from './screens/Income';
import Expense from './screens/Expense';
import Login from './components/Login';


import Register from './components/Register';
import HomeScreen from './screens/HomeScreen';
import Contact from './screens/Contact';


function App() {
  return (
    <div className="App">
     
      <Router>
      <Sidebar />
        <Routes>
        <Route path="/" element={<HomeScreen/>} exact />
          <Route path="/dashboard" element={<Dashboard/>} exact />
          <Route path="/income" element={<Income/>}  />
          <Route path="/expense" element={<Expense/>}  />
          <Route path="/login" element={<Login/>}  />
        
          <Route path="/register" element={<Register/>}  />
          <Route path="/contact" element={<Contact/>}  />
        </Routes>
      </Router>
     
     
     
    
    </div>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route
//             path="/*"
//             element={
//               <React.Fragment>
//                 <Sidebar />
//                 <Routes>
//                   <Route path="/" element={<Dashboard />} exact />
//                   <Route path="/income" element={<Income />} />
//                   <Route path="/expense" element={<Expense />} />
//                 </Routes>
//               </React.Fragment>
//             }
//           />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

export default App;
