import React, {useState, Component} from 'react'
import {Link} from 'react-router-dom';
import Nav from "../Nav/Nav";
import Axios from "axios";
//import testFunc from "./Login";
import { initializeApp } from 'firebase/app';
import {
    getFirestore, collection, getDocs,
    onSnapshot, query, updateDoc,
    where, orderBy, serverTimestamp,
    addDoc, deleteDoc, doc,
    DocumentSnapshot
  } from "firebase/firestore"

import { FirebaseError } from 'firebase/app';



export default function Classes() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    var [Temp3, setTemp3] = useState(0);
    
    const firebaseConfig = {

        apiKey: "AIzaSyCdJuqa3xNCaxVbSwTM4lo5_qdkA-ww4h4",
      
        authDomain: "comp583-data.firebaseapp.com",
      
        projectId: "comp583-data",
      
        storageBucket: "comp583-data.appspot.com",
      
        messagingSenderId: "301140683903",
      
        appId: "1:301140683903:web:dcbe2a3d2da51c6ba8e34a"
      
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    //var count4 = 0;
    //var temp = 0;
    const colRef = collection(db, 'counter');
    
    
    getDocs(colRef)
    .then((snapshot) => {
        let counter = [];
        snapshot.docs.forEach((doc) => {
        counter.push({ ...doc.data(), id: doc.id})
    })
    Temp3 = counter[0].number;
    console.log(counter[0].number);
    
    
    
    })
    .catch(err => {
    console.log(err.message)
    })
    
    
    //firestore functions
    function myFunc(){
        
        Temp3++;
        setTemp3(Temp3)
        const docRef = doc(db, 'counter', 'count')
        
        updateDoc(docRef, {
            number: Temp3
        })
     
    }
   
    function myFunc2(){
        
        Temp3--;
        setTemp3(Temp3)
        const docRef = doc(db, 'counter', 'count')
        
        updateDoc(docRef, {
            number: Temp3
        })
    }
    
    
    

    
        


    return(
        
        <div>
            <Nav />
            
        <h1>Class Enrollment</h1>
        
            <div class= "table">
                <h2>Class List</h2>
                <table>
                    <tr>
                        <th>Class Title</th>
                        <th>Professor</th>
                        <th>Enroll</th>
                        <th>Drop</th>
                        <th>Students</th>
                    </tr>
                    <tr>
                        <td>Comp 110</td>
                        <td>Dewey</td>
                        <td>      
                            <div className="my-5">
                                            
                                <button id="btn btn-success mx-3" type="button" onClick={() => setCount(count + 1)}>Enroll</button>
                            </div>       
                        </td>
                        <td>
                            <div className="my-5">
                                <button id="btn btn-danger mx-3" type="button" onClick={() => setCount(count - 1)}>Drop</button>
                            </div> 
                        </td>
                        <td>
                        <h2 className="my-5">{count}</h2>
                        </td>
                    </tr>
                    <tr>
                        <td>Comp 333</td>
                        <td>Zamanifar</td>
                        <td>      
                            <div className="my-5">
                                            
                                <button id="btn btn-success mx-3" type="button" onClick={() => setCount2(count2 + 1)}>Enroll</button>
                            </div>       
                        </td>
                        <td>
                            <div className="my-5">
                                <button id="btn btn-danger mx-3" type="button" onClick={() => setCount2(count2 - 1)}>Drop</button>
                            </div> 
                        </td>
                        <td>
                        <h2 className="my-5">{count2}</h2>
                        </td>
                    </tr>
                    <tr>
                        <td>Comp 583</td>
                        <td>Wang</td>
                        <td>      
                            <div className="my-5">
                                            
                                <button id="btn btn-success mx-3" type="button" onClick={() => myFunc()} >Enroll</button>
                            </div>       
                        </td>
                        <td>
                            <div className="my-5">
                                <button id="btn btn-danger mx-3" type="button" onClick={() => myFunc2()}>Drop</button>
                            </div> 
                        </td>
                        <td>
                        <h2 className="my-5">{Temp3}</h2>
                        </td>
                    </tr>
                </table>
            </div>
            
            


        </div>
        
        
    )
    
   
}

