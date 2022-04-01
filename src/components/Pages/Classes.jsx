import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import Nav from "../Nav/Nav";


export default function Classes() {

    return(
        
        <div>
            <Nav />
        <h1>Class Enrollment</h1>
            <div className = "table">
                <h2>Class List</h2>
                <table>
                    <tr>
                        <th>Class Title</th>
                        <th>Professor</th>
                        <th>Enroll</th>
                        <th>Drop</th>
                    </tr>
                    <tr>
                        <td>Comp 110</td>
                        <td>Dewey</td>
                        <td>
                            <button type="button">Enroll</button>
                        </td>
                        <td>
                            <button type="button">Drop</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Comp 333</td>
                        <td>Zamanifar</td>
                        <td>
                            <button type="button">Enroll</button>
                        </td>
                        <td>
                            <button type="button">Drop</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Comp 583</td>
                        <td>Wang</td>
                        <td>
                            <button type="button">Enroll</button>
                        </td>
                        <td>
                            <button type="button">Drop</button>
                        </td>
                    </tr>
                </table>
            </div>



        </div>
        
    )
   
}