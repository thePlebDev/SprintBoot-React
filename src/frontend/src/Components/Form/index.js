import React,{useState} from 'react';
import "antd/dist/antd.css";

//I STILL NEED TO QUERY THE DATABASE FOR THE ACTUAL DATA


import {
    Table,
    Modal
} from 'antd'


const Form =({setOpen,open})=>{
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
    const onOpen =()=>{
        setOpen(true)
    }
    const onClock =()=>{
        setOpen(false)
    }

    
    return(
        <>
        <Table dataSource={students} columns={columns} rowKey='studentId'/>
        <Modal title="Add new student" visible={open} onOk={onOpen} onCancel={onClock}>
            <h2>Hello from the modal</h2>
        </Modal>
        </>
    )
}

export default Form;