import React,{useState} from "react";
import Profile from "./components/profile";

import CreateContact from "./components/createContact";
import ContactList from "./components/ContactList";

function App() {
  const [contacts,setContacts]=useState([]);
  function addContact(newContact){
    setContacts((prev)=>{
      return [...prev, newContact]
    })
  }
 function deleteHandle(id){
setContacts((prev)=>{
  return prev.filter((contactItem,index)=>{
    return index !== id;
  })
})
 }
  return (
    <div className="container">
   <Profile />






{/* <!----Create Contact --> */}

<CreateContact
  onAdd = {addContact}
/>







{/* 
    <!----- Contact list start --> */}


{
contacts.map((contactItem,index)=>{
  return <ContactList
  id={index}
  key={index}
    name= {contactItem.name}
    number={contactItem.number}
    Delete ={deleteHandle}
  />;
})
}
   
</div>






  );
}

export default App;
