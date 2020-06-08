import React from "react"

import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'

import NextButton from '../components/next-button'
import Question from "../components/question-text";
import SkipButton from "../components/skip-button";

import questionsData from "../content/questions.json"

function getQuestion(questionNum) {
  return questionsData[questionNum]
}

class QuestionForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      questionNum: 0,
      question: getQuestion(0)
    }
  }

  getNextQuestion = async () => {
    await this.setState((state) => ({
      questionNum: this.state.questionNum + 1,
      question: getQuestion(this.state.questionNum + 1)
    }));
    console.log(this.state)
  }

  saveNext = async () => {
    await this.getNextQuestion()
  }

  skipNext = async () => {
    await this.getNextQuestion()
  }

  render () {
    return (
    <Container fluid className = "text-center">
      <Question q={this.state.question.question} help={this.state.question.help}/>
      <Form>
        <Form.Row style={{marginBottom:10}}>
          <Form.Control type="text" placeholder="Enter your answer..."/>
        </Form.Row>
        <Form.Row>
          <Col md={6} sm={12}>
            <NextButton clickHandler={this.saveNext}/>
          </Col>
          <Col md={6} sm={12}>
            <SkipButton clickHandler={this.skipNext}/>
          </Col>
        </Form.Row>
      </Form>
    </Container>
    )
  }
}

export default QuestionForm
