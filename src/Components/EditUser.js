import React, { Component } from 'react';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : this.props.userEditObject.id,
            name : this.props.userEditObject.name,
            tel : this.props.userEditObject.tel,
            permission : this.props.userEditObject.permission,
            userObj : {}
        }
    }
    

    ischange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]:value});
    }

    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus(); //an form
    }
    render() {
        return (
            <div className="col-12">
                <form>
                    <div className="card border-primary text-white bg-secondary mb-3 mt-2">
                        <div className="card-header text-center">Sửa User</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input type="text" onChange={(event) => this.ischange(event)}  className="form-control" name="name" aria-describedby="helpId" placeholder="Tên User"  defaultValue={this.props.userEditObject.name}/>
                            </div>
                            <div className="form-group">
                                <input type="text" onChange={(event) => this.ischange(event)}  className="form-control" name="tel" aria-describedby="helpId" placeholder="Số điện thoại" defaultValue={this.props.userEditObject.tel} />
                            </div>
                            <div className="form-group">
                                <select className="custom-select" onChange={(event) => this.ischange(event)}  name="permission" defaultValue={this.props.userEditObject.permission} required>
                                    <option value>Chọn Quyền</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Moderator</option>
                                    <option value={3}>Editor</option>
                                </select>
                                <div className="invalid-feedback">Example invalid custom select feedback</div>
                            </div>
                            <div className="form-group">
                                <input type="reset" className="btn btn-block btn-primary"  value="Update" onClick={() => this.saveButton()} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditUser;