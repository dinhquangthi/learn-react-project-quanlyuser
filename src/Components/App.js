import React, {Component} from 'react';
import '../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';
const uuidv1 = require('uuid/v1');

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hienThiForm : false,
      data : DataUser,
      searchText: '',
      editUserStatus: false,
      userEditObject : {}
    }
  }
  getUserEditInfoApp = (info) => {
    this.state.data.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    })
  
  }
  changeEditUserStatus  = () => {
    this.setState({
      editUserStatus : !this.state.editUserStatus
    });
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

  editUser = (user) => {
  
    this.setState({
      userEditObject:user
    });
  
  }

  getNewUserData = (name, tel, permission) => {
    
    var item = {};
    item.id = uuidv1();
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    
    var items = this.state.data;
    items.push(item);
   
    this.setState({
      data: items
    });
    console.log(this.state.data);
   }

   

  //  --render--
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
              editUserStatus={this.state.editUserStatus}
              changeEditUserStatus = {() => this.changeEditUserStatus()}
                userEditObject={this.state.userEditObject}
                getUserEditInfoApp = {(info) => this.getUserEditInfoApp(info)}
             />
              <TableData 
                editFun={(user) => this.editUser(user)}
                changeEditUserStatus={() => this.changeEditUserStatus()}

              dataUserProps={ketqua}/>
              <AddUser hienThiForm={this.state.hienThiForm} add={(name,tel,permission) => this.getNewUserData(name,tel,permission)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;