import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
    mappingDataUser = () => this.props.dataUserProps.map((value,key) => (
        <TableDataRow key={key} id={value.id} userName={value.name}  tel={value.tel}
            permission={value.permission}/>
       
        ))
    
    render() {
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện thoại</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                            {this.mappingDataUser()}   
                        
                    </tbody>
                </table>
            </div>

        );
    }
}

export default TableData;