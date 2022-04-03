import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import Nav from "../Nav/Nav";


export default function Classes() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

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
                                            
                                <button id="btn btn-success mx-3" type="button" onClick={() => setCount3(count3 + 1)}>Enroll</button>
                            </div>       
                        </td>
                        <td>
                            <div className="my-5">
                                <button id="btn btn-danger mx-3" type="button" onClick={() => setCount3(count3 - 1)}>Drop</button>
                            </div> 
                        </td>
                        <td>
                        <h2 className="my-5">{count3}</h2>
                        </td>
                    </tr>
                </table>
            </div>
            
            


        </div>
        
        
    )
    
   
}