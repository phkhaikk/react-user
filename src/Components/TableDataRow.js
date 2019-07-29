import React, { Component } from 'react';

class TableDataRow extends Component {

    checkPermisson = () => {
        if (this.props.quyen === 1) {
            return "Admin";
        } else if (this.props.quyen === 2) {
            return "Moderator";
        } else {
            return "Editor";
        }
    }

    editClick = () => {
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }

    deleteButtonClick = (idUser) => {
       this.props.deleteButtonClick(idUser);
    }

    render() {



        return (
            <tr>
                <td>{this.props.stt + 1}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.phone}</td>
                <td>{this.checkPermisson()}</td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua" onClick={() => this.editClick()}> <i className="fa fa-edit" />Sửa</div>
                        <div className="btn btn-danger xoa" onClick={(idUser) => this.deleteButtonClick(this.props.id)}> <i className="fa fa-delete" />Xóa</div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;