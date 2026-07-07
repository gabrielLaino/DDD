import { AnswerRepository } from "@/repositories/answeres-repository";
import { Answer } from "../entities/answer";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";

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
    const answer = Answer.create({ 
      instructorId: new UniqueEntityId(instructorId),
      questionId: new UniqueEntityId(questionId),
      content,
    })

    await this.answersRepository.create(answer);

    return answer;
  }
}