import React from "react"

import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'

import NextButton from '../components/next-button'
import SkipButton from "../components/skip-button";
import Question from "../components/question-text";
import AnswerField from "../components/answer";

import questionsData from "../content/questions.json"

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
      <>
      <Question q={this.state.question.question} help={this.state.question.help}/>
      <Form>
        <AnswerField 
          type={this.state.question.type} 
          options={this.state.question.options}
          placeholder={this.state.question.placeholder}
        />
        <Form.Row>
          <Col md={6} sm={12}>
            <NextButton clickHandler={this.saveNext}/>
          </Col>
          <Col md={6} sm={12}>
            <SkipButton clickHandler={this.skipNext}/>
          </Col>
        </Form.Row>
      </Form>
      </>
    )
  }
}

export default QuestionForm


function getQuestion(questionNum) {
  if (questionNum <= nQuestions) {
    return questionsData[questionNum]
  } else {
    return {}
  }
}

const nQuestions = questionsData.length
