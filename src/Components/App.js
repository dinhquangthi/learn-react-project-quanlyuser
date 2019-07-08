import React, {Component} from 'react';
import '../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hienThiForm : false,
      data : DataUser,
      searchText: ''
    }
  }
   doiTrangThai  = () => {
     this.setState({
       hienThiForm : !this.state.hienThiForm
     });
   }

   getTextSearch = (dl) => {
     this.setState({
       searchText : dl
     });
    console.log('Du lieu nhan duoc la ' + this.state.searchText);
   }

  render() {
    var ketqua = [];
    this.state.data.forEach((item) => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        ketqua.push(item);
      }
    })

    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search 
              ketNoi={() => this.doiTrangThai()} 
              hienThiForm={this.state.hienThiForm}
              checkConnectFunction = {(dl) => {this.getTextSearch(dl)}}
              />
              <TableData dataUserProps={ketqua}/>
              <AddUser hienThiForm={this.state.hienThiForm}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;