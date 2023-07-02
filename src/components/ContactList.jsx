import React from "react";
export default function ContactList(props){
    const date = new Date();
    const fulldate= date.getDate() +"-"+date.getMonth()+"-"+date.getFullYear(); 
    function handleClick(){
        props.Delete(props.id);
    }
    
    return (
    <section id="contact-list">
        <div className="row">
            <div className="col-lg-12">
                <h3 className="name">
                    <i className="fa-solid fa-user"></i> {props.name}
                </h3>
        
                <h5 className="number">
                    <i className="fa-solid fa-phone-volume"></i> {props.number}
                </h5>
               
                <p> <i className="fa-solid fa-calendar-days"></i> {fulldate}</p>
               <a href={"tel:"+props.number}> <button > <i className="fa-solid fa-square-phone"></i> Call</button></a>
               <button onClick={handleClick}> <i className="fa-solid fa-user-minus"></i> Delete</button>
               <a href="#create-contact">
               <button> <i className="fa-solid fa-user-plus"></i> New add</button>
               </a>
              
            </div>
        </div>
    </section>
    )
}