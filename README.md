# DDD (Domain-driven Design)

Como relacionar os problemas da vida real ao softwere

## Domain 

Em DDD, o **Domain** é a área de negócio que o software precisa representar e resolver. Ele envolve as regras, processos, pessoas, termos e problemas reais daquele contexto.

Antes de pensar em banco de dados, telas ou frameworks, é importante entender como o negócio funciona na prática.

Os **Domain Experts** são as pessoas que conhecem bem esse contexto, como usuários, clientes, gestores ou operadores. Conversar com elas ajuda a entender as regras, exceções e termos usados no dia a dia.

A **Linguagem Ubíqua** é a linguagem compartilhada entre desenvolvedores e pessoas do negócio. Os nomes usados no código devem refletir os termos reais do domínio.

Por exemplo, em um sistema escolar, pode fazer mais sentido usar `Student`, `Teacher` ou `Instructor` em vez de nomes genéricos como `User`.

O objetivo é fazer com que o código represente melhor o mundo real que o sistema está tentando resolver.


## Value Objects

Em DDD, **Value Objects** são objetos que representam valores importantes do domínio, mas que não possuem identidade própria. Diferente de uma entidade, um Value Object não é comparado por um `id`, e sim pelos seus valores.

Eles ajudam a encapsular regras e validações do domínio, evitando o uso de tipos primitivos soltos como `string`, `number` ou `boolean`.

Exemplos comuns de Value Objects são: `Email`, `CPF`, `CNPJ`, `Money`, `Address` e `DateRange`.

```ts
class Email {
  constructor(private readonly value: string) {
    if (!value.includes("@")) {
      throw new Error("E-mail inválido");
    }
  }

  getValue() {
    return this.value;
  }
}
```

Assim, em vez de passar qualquer `string` como e-mail, o domínio passa a trabalhar com um objeto que garante que aquele valor é válido.


# Sistema

Rodar servidor: Ainda não tem;
Rodar testes: npx run vitest