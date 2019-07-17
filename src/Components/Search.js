import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: '',
            userObj : {}
        }
    }
    getUserEditInfo = (info) => {
        this.setState({
            userObj : info
        });
        this.props.getUserEditInfoApp(info);
    }
    isShowEditForm  = () => {
        if(this.props.editUserStatus === true)
            return <EditUser changeEditUserStatus={() => this.props.changeEditUserStatus()}
                userEditObject={this.props.userEditObject}
                getUserEditInfo ={(info) => this.getUserEditInfo(info)}/>

    }
    hienThiNut = () => {
        if (this.props.hienThiForm === true) {
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.ketNoi()} style={{ width: '30%' }} >
                Đóng lại
                    </div>
        } else {
            return <div className="btn btn-block btn-outline-info" onClick={() => this.props.ketNoi()} style={{ width: '30%' }}>
                Thêm mới user
                    </div>
        }
    }

    isChange = (event) => {
        console.log(event.target.value);
        this.setState({
            tempValue: event.target.value
        }
        );
        this.props.checkConnectFunction(this.state.tempValue)
    }

    render() {
        return (
            <div className="col-12">
               {this.isShowEditForm()}
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" placeholder="Nhập từ khóa" style={{ width: '350px' }} 
                        onChange={(event) => this.isChange(event)}
                        />
                        <div className="btn btn-info" 
                        onClick={(dl) => this.props.checkConnectFunction(this.state.tempValue)}
                        >Tìm</div>

                    </div>

                    {this.hienThiNut()}

                </div>
                <hr />
            </div>

        );
    }
}

export default Search;