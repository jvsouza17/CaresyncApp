# CaresyncApp

O **CareSync** é um projeto desenvolvido com o objetivo de modernizar a gestão de postos de saúde, centralizando informações e otimizando processos que, tradicionalmente, ainda são realizados de forma manual. A proposta é oferecer uma solução tecnológica que:

- Centraliza o histórico médico e agendamentos dos pacientes.
- Melhora a comunicação entre profissionais de saúde e pacientes.
- Garante segurança e conformidade com a LGPD.
- Reduz erros e otimiza processos administrativos.

## Objetivo

O CareSync nasceu da necessidade de transformar o atendimento nos postos de saúde, minimizando perdas de dados, atrasos e erros que impactam pacientes, profissionais e administradores. O sistema é dividido em duas frentes:

- **CareSync Pro:** Plataforma para gestores administrarem registros de pacientes, profissionais e agendamentos.
- **CareSync App:** Aplicativo para pacientes visualizarem diagnósticos, consultas, vacinas e exames de forma prática e integrada.

Este repositório refere-se ao **CareSync App**, desenvolvido em Angular.

## Tecnologias utilizadas

- **Angular** (front-end principal)
- **Angular Material** (componentes de UI)
- **Bootstrap** (estilização)
- **angular-datatables** (exibição de dados tabulares)
- **RxJS** (programação reativa)
- **Consumo de API REST** (integração com back-end em Java Spring Boot)
- **MySQL** (banco de dados, via back-end)
- **TypeScript** (linguagem principal)
- **Pipes personalizados**
- **DTOs (Data Transfer Objects)**
- **Proteção de rotas**
- **Injeção de dependências via services**

## Funcionalidades implementadas

- Cadastro, login e logout com interceptor para token JWT.
- Reset de senha intuitivo.
- Formulários reativos com validações.
- Pipes nativos e personalizados para transformação de dados.
- Interface moderna, responsiva e consistente com Angular Material.
- Exibição eficiente de dados com angular-datatables.
- Proteção de rotas para acesso seguro.
- Agendamento de consultas e exames para pacientes e profissionais.
- Consumo de dados via API REST.
- Organização do código com services e DTOs para tipagem forte e segurança.

## Como rodar o projeto

1. Instale as dependências:
   ```sh
   npm install
   ```

2. Inicie o servidor de desenvolvimento Angular:
   ```sh
   ng serve
   ```

3. Acesse o aplicativo no navegador:
   ```
   http://localhost:4200/
   ```

4. Certifique-se de que o back-end (API REST em Java Spring Boot) esteja rodando e configurado para aceitar requisições do front-end.

## Testes

Para rodar os testes unitários:
```sh
ng test
```
