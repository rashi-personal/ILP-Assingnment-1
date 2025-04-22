import React from "react";
import "./List.css";

const List = (props) => {
  return (
    <div className="Student">
      <h1>Student Data List</h1>
      <table>
        <thead>
          <tr>
            <th>math</th>
            <th>english </th>
            <th> Science</th>
            <th>Total Marks</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item) => {
            return (
              <tr>
                <td>{item.marks.math}</td>
                <td>{item.marks.english}</td>
                <td>{item.marks.science}</td>
                <td>{item.marks.math+item.marks.english+item.marks.science }</td>
                <td>{(((item.marks.math+item.marks.english+item.marks.science) /300)*100).toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
