import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function addCoursesAction(title) {
  return { type: "ADD_COURSE", title };
}

export default function CourseList() {
  const [titleCourse, setTitleCourse] = useState("");
  const qty = 10;

  const courses = useSelector((state) => state.data.slice(0, qty), [qty]);
  console.log(courses);
  const dispatch = useDispatch();

  const handleInput = ({ currentTarget: { value } }) => {
    setTitleCourse(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(addCoursesAction(titleCourse));
  };

  return (
    <div>
      <ul>
        {courses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="titleCourse"
          value={titleCourse}
          onChange={handleInput}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
