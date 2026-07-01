import { AnswerRepository } from "@/repositories/answeres-repository";
import { Answer } from "../entities/answer";

interface AnswerQuestionUseCaseRequest {
  instructorId: string;
  questionId: string;
  content: string
}

export class AnswerQuestionUseCase {
  constructor(
    private answersRepository: AnswerRepository,
  ) {}

  async execute({ 
    instructorId, 
    questionId,
    content,
  }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer({ 
      instructorId, 
      questionId, 
      content,
    })

    await this.answersRepository.create(answer);

    return answer;
  }
}