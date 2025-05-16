import React from "react";

class CourseCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div
          className="card-main d-flex justify-content-center p-3"
          style={{ borderWidth: "12px" }}
        >
          <div
            className="card border border-primary shadow-sm rounded-3"
            style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h3 className="card-title">{this.props.course.title}</h3>
              <h3 className="card-subtitle mb-2 text-muted">
                <strong>Tutor:</strong> {this.props.course.instructor}
              </h3>
              <p className="card-text">
                <strong>Duration:</strong> {this.props.course.duration}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CourseCard;
