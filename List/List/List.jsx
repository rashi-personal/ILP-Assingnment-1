import React from "react";
import "./List.css";
import Fail from '../List/Fail';
import Pass from '../List/Pass';

const List = (props) => {
  return (
    <div className="Student">
      <h1>Student Data List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>math</th>
            <th>english </th>
            <th> Science</th>
            <th>TotalMarks</th>
            <th>Percentage</th>
            <th>Fail/Pass</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item) => {
            const TotalMarks = item.marks.math+item.marks.english+item.marks.science
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.marks.math}</td>
                <td>{item.marks.english}</td>
                <td>{item.marks.science}</td>
                <td>{item.marks.math+item.marks.english+item.marks.science }</td>
                <td>{(((item.marks.math+item.marks.english+item.marks.science) /300)*100).toFixed(2)}</td>
                {
                 TotalMarks >=50 ? <td><Pass/></td> : <td><Fail/></td>
                }
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
