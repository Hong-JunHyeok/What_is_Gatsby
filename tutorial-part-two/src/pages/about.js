import React from "react"
import Container from "../components/containers"
import * as styles from './about.module.css';

export default function About() {
    console.log(styles);
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <p>CSS Modules are cool</p>
    </Container>
  )
}

