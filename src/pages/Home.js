import React, { useEffect, useState } from "react";

import { getUser, editUser, postUser, deleteUser } from "../services";


export const Home = () => {
    // const [counter, setCounter] = useState(0);
    const [listUser, setListUser] = useState([]);
    const [dataUser, setDataUser] = useState({city: "", country: "", currency:"",language :"",province:"", tanggal: ""});
    const [isEditing, setIsEditing] = useState(false);
    const [message, setMessage] = useState("");
    // const [name, setName] = useState("");
    // const [fullName, setFullName] = useState("");
    // const [email, setEmail] = useState("");
    // const [dateOfBirth, setDateOfBirth] = useState("");
    // console.log("DATA USER: ", dataUser);

    useEffect(() => {
        getUser(setListUser);
        setTimeout(() => {
            setMessage("");
        }, 3000);
    }, [message]);

    return (
        <>
        
        <div style={{ width:'25%',border:'solid',borderTopColor:"yellow", paddingBlockEnd:"10%",marginLeft:500,marginTop:20}}>
            <button  type="button" class="close" aria-label="Close"> <span aria-hidden="true">&times;</span></button>
         <h4 style={{textAlign:"left",margin:"1cm"}}>Registrasi</h4>
            <div>
                
                <div style={{ display: "flex",boxShadow:"rgba(0,0,0, 0.1) 0px 0px 8px;", flexDirection: "row", justifyContent: "space-evenly", marginBottom: 10 }}>
                    
                    <input 
                        type="text" 
                        placeholder="Nama Lengkap" 
                        value={dataUser?.country}  
                        onChange={(e) => {
                            setDataUser({...dataUser, country: e.target.value});
                        }}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: 10 }}>
                  
                    <input 
                        type="text" 
                        placeholder="Alamat Lengkap" 
                        value={dataUser?.currency} 
                        onChange={(e) => {
                            setDataUser({...dataUser, currency: e.target.value});
                        }}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: 10 }}>
                    
                    <input 
                        type="text" 
                        placeholder="Nomor Telepon" 
                        value={dataUser?.launguage} 
                        onChange={(e) => {
                            setDataUser({...dataUser, launguage: e.target.value});
                        }}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: 10 }}>
                  
                    
                    <input
                        type="text" 
                        placeholder="Alamat Email" 
                        value={dataUser?.province} 
                        onChange={(e) => {
                            setDataUser({...dataUser, province: e.target.value});
                            // setName(e.target.value);
                        }}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: 10 }}>
                  
                    
                    <input
                        type="password" 
                        placeholder="Password" 
                        value={dataUser?.tanggal} 
                        onChange={(e) => {
                            setDataUser({...dataUser, tanggal: e.target.value});
                            // setName(e.target.value);
                        }}
                    />
                </div>
                {
                    isEditing === false ? 
                    <div>
                        <button style={{backgroundColor:"orange",color:"white",display:"inline-block",width:"7cm"}} 
                            onClick={() => {
                                postUser(dataUser, setDataUser, setMessage)
                            }}
                        >
                            Register
                        </button>
                    </div> 
                    :
                    <div>
                        <button 
                            onClick={() => {
                                editUser(dataUser, setIsEditing, setDataUser, setMessage);
                            }}
                        >
                            Create New
                        </button>
                    </div> 
                }
                
            </div>
        </div>
        </>
    );
};