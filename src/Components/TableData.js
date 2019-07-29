import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

    // mappingDataUser = () => {
    //     this.props.userDataProps.map((value,key) => {
    //         return (
    //             <TableDataRow key={key} userName={value.name} phone={value.tel} quyen={value.permission} ></TableDataRow>
    //         )
    //     });
    // }
   
    deleteButtonClick = (idUser) => {
        this.props.deleteUser(idUser);
    }

    render() {
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead className="thead-inverse">
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Điện Thoại</th>
                        <th>Quyền</th>
                        <th>Hành động</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.userDataProps.map((value,key) => {
                            return (
                                <TableDataRow deleteButtonClick={(idUser) => this.deleteButtonClick(idUser)} key={key} stt={key} id={value.id} userName={value.name} phone={value.tel} quyen={value.permission} editFunClick={(user)=>this.props.editFun(value)} changeEditUserStatus={() => this.props.changeEditUserStatus() }></TableDataRow>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;