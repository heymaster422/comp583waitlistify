import React, { useState, Component } from 'react'
import { Link } from 'react-router-dom';
import Nav from "../Nav/Nav";
import Axios from "axios";

//this is firebase stuff
import { initializeApp } from 'firebase/app';
import {
    getFirestore, collection, getDocs,
    onSnapshot, query, updateDoc,
    where, orderBy, serverTimestamp,
    addDoc, deleteDoc, doc,
    DocumentSnapshot
} from "firebase/firestore"

import { FirebaseError } from 'firebase/app';


export var Temp3 = 0;
export var count182 = 0;
export var count282 = 0;
export var count333 = 0;
export var count380 = 0;
export var count482 = 0;
export var count490 = 0;

export default function Classes() {
    //this is the javascript portion
    //these are variables, useState(0) makes it 0 at page load
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    //below are variables for classes, storage variable and function to set
    var setTemp3 = 0;
    var setcount182 = 0;
    var setcount282 = 0;
    var setcount333 = 0;
    var setcount380 = 0;
    var setcount482 = 0;
    var setcount490 = 0;
    [Temp3, setTemp3] = useState(0); //110
    [count182, setcount182] = useState(0); //182
    [count282, setcount282] = useState(0); //282
    [count333, setcount333] = useState(0); //333
    [count380, setcount380] = useState(0); //380
    [count482, setcount482] = useState(0); //482
    [count490, setcount490] = useState(0); //490

    //more firebase stuff
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

    //below is the method to grab firestore stuff and put into array
    //grab collection to reference
    const colRef = collection(db, 'counter');
    //below puts data into array called counter
    getDocs(colRef)
        .then((snapshot) => {
            let counter = [];
            snapshot.docs.forEach((doc) => {
                counter.push({ ...doc.data(), id: doc.id })
            })
            //puts data into variables 
            Temp3 = counter[0].number;
            count182 = counter[1].number;
            count282 = counter[2].number;
            count333 = counter[3].number;
            count380 = counter[4].number;
            count482 = counter[5].number;
            count490 = counter[6].number;

            //console.log(counter[0].number);
        })
        .catch(err => { //in case of error
            console.log(err.message)
        })

    //below was an attempt to make it accurate on load, good luck lol
    /*
    window.onload = function() {
        FuncUpdate();
    };
    function FuncUpdate(){
        console.log("test")
        Temp3++;
        setTemp3(Temp3)
    }*/

    //below are functions to update the counter
    function myFunc(x) { //if x is 0, add 1, if 0 subtract
        if (x == 0) {//add
            Temp3++; //increment variable to increase it
            setTemp3(Temp3) //set the display to new value
            const docRef = doc(db, 'counter', 'count') //grab firestore reference
            //below sets the number field to variable
            updateDoc(docRef, {
                number: Temp3
            })
        }
        if (x == 1) {//subtract
            Temp3--;
            setTemp3(Temp3)
            const docRef = doc(db, 'counter', 'count')

            updateDoc(docRef, {
                number: Temp3
            })
        }

    }

    function Func182(x) {
        if (x == 0) {
            count182++;
            setcount182(count182)
            const docRef = doc(db, 'counter', 'count182')

            updateDoc(docRef, {
                number: count182
            })
        }
        else if (x == 1) {
            count182--;
            setcount182(count182)
            const docRef = doc(db, 'counter', 'count182')

            updateDoc(docRef, {
                number: count182
            })
        }

    }

    function Func282(x) {
        if (x == 0) {
            count282++;
            setcount282(count282)
            const docRef = doc(db, 'counter', 'count282')

            updateDoc(docRef, {
                number: count282
            })
        }
        if (x == 1) {
            count282--;
            setcount282(count282)
            const docRef = doc(db, 'counter', 'count282')

            updateDoc(docRef, {
                number: count282
            })
        }

    }

    function Func333(x) {
        if (x == 0) {
            count333++;
            setcount333(count333)
            const docRef = doc(db, 'counter', 'count333')

            updateDoc(docRef, {
                number: count333
            })
        }
        if (x == 1) {
            count333--;
            setcount333(count333)
            const docRef = doc(db, 'counter', 'count333')

            updateDoc(docRef, {
                number: count333
            })
        }

    }

    function Func380(x) {
        if (x == 0) {
            count380++;
            setcount380(count380)
            const docRef = doc(db, 'counter', 'count380')

            updateDoc(docRef, {
                number: count380
            })
        }
        if (x == 1) {
            count380--;
            setcount380(count380)
            const docRef = doc(db, 'counter', 'count380')

            updateDoc(docRef, {
                number: count380
            })
        }

    }

    function Func482(x) {
        if (x == 0) {
            count482++;
            setcount482(count482)
            const docRef = doc(db, 'counter', 'count482')

            updateDoc(docRef, {
                number: count482
            })
        }
        if (x == 1) {
            count482--;
            setcount482(count482)
            const docRef = doc(db, 'counter', 'count482')

            updateDoc(docRef, {
                number: count482
            })
        }

    }

    function Func490(x) {
        if (x == 0) {
            count490++;
            setcount490(count490)
            const docRef = doc(db, 'counter', 'count490')

            updateDoc(docRef, {
                number: count490
            })
        }
        if (x == 1) {
            count490--;
            setcount490(count490)
            const docRef = doc(db, 'counter', 'count490')

            updateDoc(docRef, {
                number: count490
            })
        }

    }

    const [check, setCheck] = useState(true);

    //below is html, for some reason react is like this idk
    return (

        <div>
            <Nav isColorBlind = {check} />

            <h1>Class Enrollment</h1>
            
            <div class="container">
                <h2>Class List</h2>
                <table class="table">
                    <tr>
                        <th>Class Number</th>
                        <th>Class Title</th>
                        <th>Enroll</th>
                        <th>Drop</th>
                        <th>Students</th>
                    </tr>
                    <tr>
                        <td>Comp 110</td>
                        <td>Intro to Algorithms</td>
                        <td>
                            <div className="my-5">

                                <button id="btn btn-success mx-3" type="button" onClick={() => myFunc(0)}>Enroll</button>
                            </div>
                        </td>
                        <td>
                            <div className="my-5">
                                <button id="btn btn-danger mx-3" type="button" onClick={() => myFunc(1)}>Drop</button>
                            </div>
                        </td>
                        <td>
                            <h2 className="my-5">{Temp3}</h2>
                        </td>
                    </tr>
                    <tr>
                        <td>Comp 182</td>
                        <td>Data Structures</td>
                        <td>
                            <div className="my-5">

                                <button id="btn btn-success mx-3" type="button" onClick={() => Func182(0)}>Enroll</button>
                            </div>
                        </td>
                        <td>
                            <div className="my-5">
                                <button id="btn btn-danger mx-3" type="button" onClick={() => Func182(1)}>Drop</button>
                            </div>
                        </td>
                        <td>
                            <h2 className="my-5">{count182}</h2>
                        </td>
                    </tr>
                    <tr>
                        <td>Comp 282</td>
                        <td>Adv Data Structures</td>
                        <td>
                            <div className="my-5">

                                <button id="btn btn-success mx-3" type="button" onClick={() => Func282(0)} >Enroll</button>
                            </div>
                        </td>
                        <td>
                            <div className="my-5">
                                <button id="btn btn-danger mx-3" type="button" onClick={() => Func282(1)}>Drop</button>
                            </div>
                        </td>
                        <td>
                            <h2 className="my-5">{count282}</h2>
                        </td>
                    </tr>
                    <tr>
                        <td>Comp 333</td>
                        <td>Concepts of Program. Languages</td>
                        <td>
                            <div className="my-5">

                                <button id="btn btn-success mx-3" type="button" onClick={() => Func333(0)}>Enroll</button>
                            </div>
                        </td>
                        <td>
                            <div className="my-5">
                                <button id="btn btn-danger mx-3" type="button" onClick={() => Func333(1)}>Drop</button>
                            </div>
                        </td>
                        <td>
                            <h2 className="my-5">{count333}</h2>
                        </td>
                    </tr>
                    <tr>
                        <td>Comp 380</td>
                        <td>Intro to Software Engineering</td>
                        <td>
                            <div className="my-5">

                                <button id="btn btn-success mx-3" type="button" onClick={() => Func380(0)}>Enroll</button>
                            </div>
                        </td>
                        <td>
                            <div className="my-5">
                                <button id="btn btn-danger mx-3" type="button" onClick={() => Func380(1)}>Drop</button>
                            </div>
                        </td>
                        <td>
                            <h2 className="my-5">{count380}</h2>
                        </td>
                    </tr>
                    <tr>
                        <td>Comp 482</td>
                        <td>Algorithm Design</td>
                        <td>
                            <div className="my-5">

                                <button id="btn btn-success mx-3" type="button" onClick={() => Func482(0)}>Enroll</button>
                            </div>
                        </td>
                        <td>
                            <div className="my-5">
                                <button id="btn btn-danger mx-3" type="button" onClick={() => Func482(1)}>Drop</button>
                            </div>
                        </td>
                        <td>
                            <h2 className="my-5">{count482}</h2>
                        </td>
                    </tr>
                    <tr>
                        <td>Comp 490</td>
                        <td>Senior Design</td>
                        <td>
                            <div className="my-5">

                                <button id="btn btn-success mx-3" type="button" onClick={() => Func490(0)}>Enroll</button>
                            </div>
                        </td>
                        <td>
                            <div className="my-5">
                                <button id="btn btn-danger mx-3" type="button" onClick={() => Func490(1)}>Drop</button>
                            </div>
                        </td>
                        <td>
                            <h2 className="my-5">{count490}</h2>
                        </td>
                    </tr>
                </table>
            </div>




        </div>


    )


}

