import { expect, test } from 'vitest';
import { AnswerQuestionUseCase } from '@/domain/use-cases/answer-question';

test("create an answer", () => {
  const answerQuestion = new AnswerQuestionUseCase()

  const answer = answerQuestion.execute({ 
    content: "Nova Resposta",
    questionId: "1",
    instructorId: "1"
  });

  expect(answer.content).toEqual("Nova Resposta")
})