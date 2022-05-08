import React, { Component, setState } from 'react'
import { Link } from 'react-router-dom';
import Nav from "../Nav/Nav";
import Axios from "axios";
import { Temp3, count182, count282, count333, count380, count482, count490 } from './Classes';

class Stats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: [
                { priority: '1', number: 'Comp 110', title: 'Intro to Algorithms', students: Temp3 },
                { priority: '2', number: 'Comp 182', title: 'Data Structures', students: count182 },
                { priority: '3', number: 'Comp 282', title: 'Adv Data Structures', students: count282 },
                { priority: '4', number: 'Comp 333', title: 'Concepts of Program. Langauges', students: count333 },
                { priority: '5', number: 'Comp 380', title: 'Intro to Software Engineering', students: count380 },
                { priority: '6', number: 'Comp 482', title: 'Algorithm Design', students: count482 },
                { priority: '7', number: 'Comp 490', title: 'Senior Design', students: count490 }
            ],
            temp: { priority: '1', number: '1', title: '1', students: '1' }
        }
    }

    renderTableData() {
        this.state.classes[0].priority = 1;
        for (var j = 0; j < 6; j++) {
            for (var i = 0; i < 6; i++) {
                if (this.state.classes[i].students < this.state.classes[i + 1].students) {
                    this.state.temp = this.state.classes[i];
                    this.state.classes[i] = this.state.classes[i + 1];
                    this.state.classes[i + 1] = this.state.temp;
                }
            }
        }

        for (var j = 0; j < 6; j++) {
            for (var i = 0; i < 6; i++) {
                var temp = 0;
                if (this.state.classes[i].priority > this.state.classes[i + 1].priority) {
                    temp = this.state.classes[i].priority;
                    this.state.classes[i].priority = this.state.classes[i + 1].priority;
                    this.state.classes[i + 1].priority = temp;
                }
            }
        }

        return this.state.classes.map((sch, index) => {
            const { priority, number, title, students } = sch;
            const i = 1;
            return (
                <tr key={priority} >
                    <td>{priority}</td>
                    <td>{number}</td>
                    <td>{title}</td>
                    <td>{students}</td>
                </tr>
            );
        })
    }



    render() {
        return (
            <div>
                <Nav />
                <div class="container">
                <body></body>

                <h1>Class Statistics</h1><br />

                <table id='sch' class='table'>
                    <thead>
                        <th>Course Priority</th>
                        <th>Class Number</th>
                        <th>Title</th>
                        <th>Students</th>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
                </ div>
            </div>
        )
    }
}

export default Stats;
