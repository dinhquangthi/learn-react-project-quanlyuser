import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            permission: this.props.userEditObject.permission
           
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
    }
    saveButton  = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;
        this.props.changeEditUserStatus();
        this.props.getUserEditInfo(info);
    }
    render() {
        
        return (
            <div className="col-12">
                <div className="row">
                    <div className="col">
                        <form>
                            <div className="card border-primary mb-3 mt-2">
                                <div className="card-body">
                                    <div className="card-header text-center">Sửa thông tin user</div>
                                    <div className="form-group">
                                        <input defaultValue={this.props.userEditObject.name} type="text" name="name" className="form-control" placeholder="Tên user"
                                            onChange={(event) => this.isChange(event)} />
                                    </div>
                                    <div className="form-group">
                                        <input defaultValue={this.props.userEditObject.tel} type="text" name="tel" className="form-control" placeholder="Điện thoại"
                                            onChange={(event) => this.isChange(event)} />
                                    </div>
                                    <div className="form-group">
                                        <select defaultValue={this.props.userEditObject.permission} className="form-control" name="permission" onChange={(event) => this.isChange(event)}>
                                            <option value>Chọn quyền</option>
                                            <option value={1}>Admin</option>
                                            <option value={2}>User</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input type="button" className="btn btn-block btn-success"
                                            value="Lưu" onClick = {()=> this.saveButton()}/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditUser;