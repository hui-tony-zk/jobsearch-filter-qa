import React from "react"

import QuestionForm from "../templates/question-form";
import Container from 'react-bootstrap/Container';

export default function Home() {
  return (
    <Container>
      <div>
        <p>We can help you find the perfect job! Just answer the following questions below to help us narrow our search</p>
      </div>
      <QuestionForm/>
    </Container>
  )
}
