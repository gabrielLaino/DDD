import { expect, test } from 'vitest';
import { AnswerQuestionUseCase } from '@/domain/use-cases/answer-question';
import { AnswerRepository } from '@/repositories/answeres-repository';
import { Answer } from '@/domain/entities/answer';

const fakeRepository: AnswerRepository = {
  create: async function (answer: Answer): Promise<void> {
    return;
  }
}

test("create an answer", async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeRepository);

  const answer = await answerQuestion.execute({ 
    content: "Nova Resposta",
    questionId: "1",
    instructorId: "1"
  });

  expect(answer.content).toEqual("Nova Resposta")
})