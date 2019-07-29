import React, { Component } from 'react';

class AddUser extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         trangThaiChinhSua: false
    //     }
    // }

    // thayDoiTrangThai = () => {
    //     this.setState({
    //         trangThaiChinhSua: !this.state.trangThaiChinhSua
    //     });
    // }

    // hienThiNut = () => {
    //     if (this.state.trangThaiChinhSua === true) {
    //         return <div className="btn btn-block btn-outline-secondary" onClick={() => this.thayDoiTrangThai()}>Đóng</div>;
    //     } else {
    //         return <div className="btn btn-block btn-outline-info" onClick={() => this.thayDoiTrangThai()}>Thêm mới</div>;
    //     }
    // }

    // hienThiForm = () => {
    //     if (this.state.trangThaiChinhSua === true) {
    //         return (
    //             <div className="card border-primary mb-3 mt-2">
    //                 <div className="card-header">Thêm Mới</div>
    //                 <div className="card-body text-primary">
    //                     <div className="form-group">
    //                         <input type="text" className="form-control" aria-describedby="helpId" placeholder="Tên User" />
    //                     </div>
    //                     <div className="form-group">
    //                         <input type="text" className="form-control" aria-describedby="helpId" placeholder="Số điện thoại" />
    //                     </div>
    //                     <div className="form-group">
    //                         <select className="custom-select" required>
    //                             <option value>Chọn Quyền</option>
    //                             <option value={1}>Admin</option>
    //                             <option value={2}>Moderator</option>
    //                             <option value={3}>Normal</option>
    //                         </select>
    //                         <div className="invalid-feedback">Example invalid custom select feedback</div>
    //                     </div>
    //                     <div className="form-group">
    //                         <div className="btn btn-block btn-primary">
    //                             Thêm mới
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         )
    //     }
    // }

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tel: "",
            permission: ""
        }
    }


    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });

        //dongoidulieu
        //    var item = {};
        //    item.id = this.state.id;
        //    item.name = this.state.name;
        //    item.tel = this.state.tel;
        //    item.permission = this.state.permission;
    }

    kiemTraTrangThai = () => {
        if (this.props.hienThiForm === true) {
            return (
                <div className="col">
                    <form>
                        <div className="card border-primary mb-3 mt-2">
                            <div className="card-header">Thêm Mới</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.isChange(event)} className="form-control" name="name" aria-describedby="helpId" placeholder="Tên User" />
                                </div>
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.isChange(event)} className="form-control" name="tel" aria-describedby="helpId" placeholder="Số điện thoại" />
                                </div>
                                <div className="form-group">
                                    <select className="custom-select" onChange={(event) => this.isChange(event)} name="permission" required>
                                        <option value>Chọn Quyền</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Moderator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                    <div className="invalid-feedback">Example invalid custom select feedback</div>
                                </div>
                                <div className="form-group">
                                    <input type="reset" className="btn btn-block btn-primary" onClick={(name, tel, permission) => this.props.ketNoiUser(this.state.name, this.state.tel, this.state.permission)} value=" Thêm mới" />


                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                {this.kiemTraTrangThai()}
            </div>

        );
    }
}

export default AddUser;