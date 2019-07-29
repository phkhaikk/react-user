import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {

    constructor(props) {
        super(props);
        this.State = {
            keyWord : "",
            userObj : {}
        };
    }

    isChange = (event) => {
        this.setState({
            keyWord : event.target.value
        });
        this.props.getTxtSearch(event.target.value);
    }


    hienThiNut = () => {
        if (this.props.hienThiForm === true){
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.ketNoi()}>Đóng</div>;
        }else{
            return <div className="btn btn-block btn-outline-info"  onClick={() => this.props.ketNoi()}>Thêm mới</div>;
        }
    }

    getUserEditInfo = (info) => {
        this.setState({
            userObj:info
        });
        this.props.getUserEditInfoApp(info);
    }

    isShowEditForm = () => {
        if (this.props.editUserStatus === true){
            return <EditUser changeEditUserStatus ={() => this.props.changeEditUserStatus()}  userEditObject={this.props.userEditObject}  getUserEditInfo={(info) => this.getUserEditInfo(info) }/>
        }
    }

    render() {
        return (
            <div className="col-md-12">
                <div className="row">
                    {this.isShowEditForm()}
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <div className="btn-group">
                                <input type="text" className="form-control" onChange={(event) => this.isChange(event)} aria-describedby="helpId" placeholder="Từ khóa tìm kiếm" />
                                <div className="btn btn-info" onClick={() => this.props.getTxtSearch(this.state.keyWord)}>Tìm</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-right">
                        <div className="btn-group">
                            {this.hienThiNut()}
                        </div>
                    </div>
                </div>
                
                <hr/>
            </div>
        );
    }
}

export default Search;