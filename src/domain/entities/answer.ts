import { randomUUID } from "node:crypto";

interface AnswerProps {
    content: string,
    instructorId: string,
    questionId: string, 
}

export class Answer {
  public content: string;
  public id: string;
  public instructorId: string
  public questionId: string;

  constructor(
    props: AnswerProps,
    id?: string,
  ) {
    this.content = props.content;
    this.instructorId = props.instructorId;
    this.questionId = props.questionId;
    this.id = id ?? randomUUID()
  }
}