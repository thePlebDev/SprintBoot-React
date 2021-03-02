import React from 'react';
import {Button} from 'antd';

const Footer=({open,setOpen})=>{

    return(
        <div>
            <Button type='primary' onClick={()=>setOpen(true)}>Add new student + </Button>
        </div>
    )
}

export default Footer