import React from "react";

import { Container } from "./styles";

import CourseList from "../../components/CourseList";

export default function Dashboard() {
  return (
    <Container>
      <h2>Dashboard</h2>
      <CourseList />
    </Container>
  );
}
