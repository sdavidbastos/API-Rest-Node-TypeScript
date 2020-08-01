# API Rest Com Node e TypeScript

## SOLID

### Single Responsibility Principle
- Cada Classe ou arquivo deve ter uma única responsibilidade.
- Deve ser responsável por executar uma única tarefa dentro da nossa aplicação.

### Open Closed Principle
  
- Uma Classe deve ser aberta para extensões, mas não deve ser aberta para modificações.
  
### Liskov Substitution Principle (IMPORTANT)

- Defende que podemos substituir implementações que uma Classe depende.
  
### Interface Agregation Principle

- Não criar interfaces robustas, mas sim fragmenta-la em interfaces menores.

### Dependency Inversion Principle(IMPORTANT)

- AS Classes da nossa aplicação não devem dependeer de implementações, mas sim de interfaces.

## Entities
- Model: Geralmente relacionado diretamente com uma tabela do banco de dados!
    
- Entities: entidade que nem sempre são relacionadas diretamente com tabelas do banco de dados!

## Repositories
- São classes específicas para gente fazer a comunicação entre as funcionalidades da aplicação com o banco de dados.

## Providers

- Comunicações com API externa

## UseCases
- UseCases são ações que determinado tipo  de usuario pode realizar dentro da nossa aplicação.