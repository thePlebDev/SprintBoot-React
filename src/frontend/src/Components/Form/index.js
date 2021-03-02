import React from 'react';
import "antd/dist/antd.css";

//I STILL NEED TO QUERY THE DATABASE FOR THE ACTUAL DATA


import {
    Table
} from 'antd'


const Form =()=>{
    const columns =[
        {
            title:'StudentId',
            dataIndex:'studentId',
            key:"studentId"
        },
        {
            title:'Name',
            dataIndex:'name',
            key:"name"
        },
        {
            title:'Email',
            dataIndex:'email',
            key:"email"
        },
    ]

    const students =[
        {
            studentId:34214321,
            name:"Bob",
            email:"bob@Bobmail.com"

        }
    ]
    
    return(
        <Table dataSource={students} columns={columns} rowKey='studentId'/>
    )
}

export default Form;