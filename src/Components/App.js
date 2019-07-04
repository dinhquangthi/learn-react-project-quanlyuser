import React from 'react';
import '../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';

function App() {
  return (
    <div>
     <Header/>
     <div className="searchForm">
        <div className="container">
          <div className="row">
          <Search/>
          <TableData/>
          <AddUser/>
          </div>
        </div>
     </div>
    </div>
  );
}

export default App;
