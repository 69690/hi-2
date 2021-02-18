import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

//interface course
export interface Course {
    id: number;
    title: string;
    author: string;
    price: number;
    disc: number;
};

//create course card component
export function CourseCard(course: Course) {
    return (
        <ol className="gradient-list">
            <li>
                <table className="cards">
                    <tr>
                        <td></td>
                        <td>
                            <div key={course.id}>
                                <h4>
                                    {course.title}
                                </h4>
                            </div>
                        </td>
                        <td>
                            {course.author}
                        </td>
                        <td>
                            <b>Rs {course.price}/-</b>
                        </td>
                        <td>
                            <button className="orangeBtn">
                                ADD TO CART
                            </button>
                        </td>
                        <td>
                            <div className="arrow">&gt;</div>
                        </td>
                    </tr>
                    {/* <tr>
                        <td>
                            <button className="orangeBtnSmall">React</button>
                        </td>
                        <td>
                            <button className="orangeBtnSmall">React</button>
                        </td>
                    </tr> */}
                    {/* <div key={course.id}>
                        <h4>
                            {course.title}
                        </h4>
                    </div> */}
                </table>
            </li>
        </ol>
    );
}