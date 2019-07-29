import React, { Component } from 'react';
import './../App.css';
import Hearder from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hienThiForm: true,
            data: [],
            searchText: "",
            editUserStatus:false,
            userEditObject:{}
        }
    }

    
    componentWillMount() {
        if(localStorage.getItem('userData') === null){
            localStorage.setItem('userData',JSON.stringify(DataUser));
        }else{
            var temp = JSON.parse(localStorage.getItem('userData'));
            this.setState({
                data:temp
            });
        }
    }
    

    changeEditUserStatus = () => {
        this.setState({
            editUserStatus : !this.state.editUserStatus
        });
    }

    getUserEditInfoApp = (info) => {
        this.state.data.forEach((value,key) => {
            if(value.id === info.id){
                value.name = info.name;
                value.tel = info.tel;
                value.permission = info.permission;
            }
        })
        localStorage.setItem('userData',JSON.stringify(this.state.data));

    }

    getNewUserData = (name, tel, permission) => {
        var item = {};
        item.id = this.state.id;
        item.name = name;
        item.tel = tel;
        item.permission = permission;

        var items = this.state.data;
        items.push(item);

        this.setState({
            data: items
        });

        localStorage.setItem('userData',JSON.stringify(items));

    }

    getTextSearch = (keyword) => {
        this.setState({
            searchText: keyword
        });
    }

    doiTrangThai = () => {
        this.setState({
            hienThiForm: !this.state.hienThiForm
        });
    }

    //  thongBao = () => {alert("ke noi thanh cong");}

    editUser = (user) => {
        this.setState({
            userEditObject:user
        });
        console.log(user);
        
    }

    deleteUser = (idUser) => {
        
        var tempData = this.state.data;
        tempData = tempData.filter(item => item.id !== idUser);
        
        this.setState({
            data : tempData
        });

        localStorage.setItem('userData',JSON.stringify(tempData));
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
                <Hearder></Hearder>
                <div className="SearchForm">
                    <div className="container">
                        <div className="row">
                            <Search 

                            ketNoi={() => this.doiTrangThai()} 
                            hienThiForm={this.state.hienThiForm} 
                            getTxtSearch={(keyword) => this.getTextSearch(keyword)} 
                            editUserStatus={this.state.editUserStatus} 
                            changeEditUserStatus={() => this.changeEditUserStatus() } 
                            userEditObject={this.state.userEditObject}
                            getUserEditInfoApp = {(info) => this.getUserEditInfoApp(info)}
                            >

                            </Search>
                            <TableData editFun={(user) => { this.editUser(user) }} userDataProps={ketqua} changeEditUserStatus={() => this.changeEditUserStatus()} deleteUser={(idUser) => this.deleteUser(idUser)}></TableData>
                            <AddUser hienThiForm={this.state.hienThiForm} ketNoiUser={(name, tel, permission) => this.getNewUserData(name, tel, permission)} ></AddUser>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;