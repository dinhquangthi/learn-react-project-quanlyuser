import React, { Component } from 'react';

class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            trangThaiChinhSua : false
        }
    }
    thayDoiTrangThai = () => {
        this.setState({
            trangThaiChinhSua: !this.state.trangThaiChinhSua
        });
    }
    hienThiNut= () => {
                if(this.state.trangThaiChinhSua === true){
                    return <div className="btn btn-block btn-outline-secondary" onClick={()=> this.thayDoiTrangThai()}>
                        Đóng lại
                    </div>;
                } else {
                    return <div className="btn btn-block btn-outline-info" onClick={() =>this.thayDoiTrangThai()}>
                        Thêm mới user
                    </div>;
                }
    }
    hienThiForm  = () => {
        if (this.state.trangThaiChinhSua === true) {
            return (<div className="card-body">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Tên user" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Điện thoại" />
                </div>
                <div className="form-group">
                    <select className="form-control">
                        <option value>Chọn quyền</option>
                        <option value={1}>Admin</option>
                        <option value={2}>User</option>
                    </select>
                </div>
                <div className="form-group">
                    <div className="btn btn-block btn-primary">Thêm mới</div>
                </div>
            </div>)
        } 
    }
    // -------------------------------
    render() {
        return (
            <div className="col-3">
                <div className="card bg-light mb-3" style={{ maxWidth: '18rem' }}>
                 
                    { this.hienThiNut()}
                    { this.hienThiForm()}
                    
                </div>
            </div>

        );
    }
}

export default AddUser;