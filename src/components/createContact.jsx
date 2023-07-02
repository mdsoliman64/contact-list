import React ,{useState}from "react";
export default function CreateContact(props){


const [Contact,setContact]=useState({
    name:"",
    number:""
});

function changeHandle(event){
    const {name,value}=event.target;
    setContact((prev)=>{
        return {...prev,[name]:value};
    })
    console.log(name + value);
}
function clickHandle(event){
    props.onAdd(Contact);
    event.preventDefault();
}

   return  <section id="create-contact">
    <div className="row">
<form action="">

    <div className="col-lg-12">
        <input onChange={changeHandle} type="text" name="name" value={Contact.name} placeholder="Enter the name .............." required/>

    
    
        <input onChange={changeHandle} type="number" name="number" placeholder="+880 xxx xxxx " value={Contact.number} required />

    

            <button onClick={clickHandle}><i className="fa-solid fa-user-plus"></i> add </button>
    </div>


</form>

      

    </div>
</section>
};