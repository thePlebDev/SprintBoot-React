import React,{useState} from "react";

import Form from '../Form';
import Button from '../Footer';


const App =()=>{
    const [open,setOpen] = useState(false)
    return(
        <div>
            <Form setOpen={setOpen} open={open}/>
            <Button open={open} setOpen={setOpen}/>
        </div>
    )
}

export default App;