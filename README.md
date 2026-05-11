# Projeto de Testes Automatizados com Cypress + Cucumber

![Testes Cypress](https://github.com/pedroFurlaniQA/colmeIA-codeTest/actions/workflows/cypress.yml/badge.svg)

Este repositório contém uma suíte de **testes automatizados end-to-end** para a aplicação web **ColmeIA QA**, utilizando **Cypress**, **Cucumber com sintaxe Gherkin**, step definitions em JavaScript, fixtures JSON como uma estrutura simplificada de Page Object Model e **Allure** para geração de relatórios de execução.[1] [2] [3]

O projeto valida jornadas críticas do usuário na aplicação, incluindo autenticação, navegação pelo dashboard, acesso ao módulo Campanha, acesso ao Colmeia Forms e operações no módulo Banco de Dados, como criação de itens, busca, acesso à área de arquivados e exclusão permanente.

---

## Visão Geral do Projeto

| Área | Descrição |
|---|---|
| **Aplicação testada** | Ambiente ColmeIA QA |
| **Base URL** | `https://teste-colmeia-qa.colmeia-corp.com/` |
| **Tipo de teste** | Automação web end-to-end |
| **Framework principal** | Cypress |
| **Camada BDD** | Cucumber com arquivos Gherkin |
| **Linguagem** | JavaScript |
| **Estratégia de seletores** | Fixtures JSON utilizadas como estrutura simplificada de POM |
| **Relatórios** | Allure Reports |
| **Automação em CI** | GitHub Actions em eventos de `push` e `pull_request` na branch `main` |

---

## Estrutura do Projeto

```text
.github/
└── workflows/
    └── cypress.yml                    # Workflow do GitHub Actions para Cypress e Allure

cypress/
├── e2e/
│   ├── features/                      # Arquivos Gherkin com os cenários de teste
│   │   ├── bancoDeDados.feature       # Cenários do módulo Banco de Dados
│   │   ├── colmeiaForms.feature       # Cenário de navegação para Colmeia Forms
│   │   ├── dashboard.feature          # Cenário de acesso ao Dashboard e Campanha
│   │   └── login.feature              # Cenários de login
│   │
│   └── step-definitions/              # Implementação dos passos das features
│       ├── bancoDeDadosSteps.js
│       ├── colmeiaForms.js
│       ├── dashboardSteps.js
│       └── loginSteps.js
│
├── fixtures/                          # Arquivos JSON usados como POM e massa de dados
│   ├── bancoDeDadosPOM.json
│   ├── colmeiaFormsPOM.json
│   ├── dashboardPOM.json
│   └── loginPOM.json
│
└── support/                           # Arquivos globais de suporte do Cypress
    ├── commands.js
    └── e2e.js

allure-results/                        # Resultados brutos gerados pelo Allure
allure-report/                         # Relatório HTML gerado pelo Allure
cypress.config.js                      # Configuração do Cypress, Cucumber e Allure
package.json                           # Dependências e scripts do projeto
package-lock.json                      # Lock file das dependências
README.md                              # Documentação do projeto
```

---

## Cobertura dos Testes

A suíte está organizada por fluxo de negócio. Cada arquivo `.feature` descreve o comportamento esperado em formato Gherkin, enquanto os arquivos JavaScript em `step-definitions/` implementam a lógica de automação, ações e validações executadas pelo Cypress.

| Arquivo de feature | Fluxo testado | Principais validações |
|---|---|---|
| `login.feature` | Funcionalidade de login | Login com credenciais inválidas, login com campos vazios, login válido, validação do botão de continuidade e redirecionamento para o dashboard. |
| `dashboard.feature` | Acesso ao dashboard | Acesso autenticado ao dashboard e abertura da aba Campanha. |
| `colmeiaForms.feature` | Acesso ao Colmeia Forms | Navegação da aba Campanha até a página Colmeia Forms. |
| `bancoDeDados.feature` | Gerenciamento de Banco de Dados | Criação de item, busca de item existente, acesso à aba de itens arquivados e exclusão permanente de item. |

---

## Práticas e Padrões Utilizados

### POM com Fixtures JSON

O projeto utiliza a pasta `cypress/fixtures/` como uma implementação simplificada do padrão **Page Object Model**. Cada arquivo JSON centraliza seletores, URLs, credenciais do ambiente de teste, textos esperados e massas de dados relacionadas a um fluxo específico da aplicação.

> Exemplo: o arquivo `bancoDeDadosPOM.json` armazena seletores como `criarButton`, `searchField`, `arquivadosIcon` e `deleteIcon`, além de massas de dados como `itemName1`, `itemName2` e `itemNameDelete`.

Essa abordagem deixa os step definitions mais limpos e reduz o esforço de manutenção quando seletores, URLs ou dados de teste precisam ser atualizados.

### BDD com Cucumber e Gherkin

Os cenários são escritos em **Gherkin**, o que torna a intenção dos testes mais clara para pessoas técnicas e não técnicas. Os arquivos `.feature` descrevem o comportamento esperado, enquanto os step definitions em JavaScript executam as ações e assertions no Cypress.[2]

> Exemplo: o step `When the user tap on "Criar" button` é implementado em `bancoDeDadosSteps.js` e utiliza dados de seleção definidos em `bancoDeDadosPOM.json`.

### Reutilização de Dados e DDT Simples

O projeto aplica uma abordagem simples de **Data-Driven Testing** ao armazenar dados reutilizáveis em fixtures JSON. Credenciais, URLs, nomes de itens, mensagens esperadas e seletores são reutilizados nos steps, evitando duplicação direta nos arquivos de teste.

### Relatórios com Allure

O projeto está configurado com plugins do Allure para Cypress. Após a execução dos testes, os arquivos gerados em `allure-results/` podem ser convertidos em um relatório HTML legível em `allure-report/`, facilitando a análise e o compartilhamento dos resultados.[3]

---

## Boas Práticas Aplicadas

| Prática | Como aparece no projeto |
|---|---|
| **DRY** | Seletores, URLs e dados de teste são centralizados em fixtures JSON, evitando repetição nos steps. |
| **KISS** | Cada step definition mantém foco em uma ação ou validação específica, favorecendo simplicidade e legibilidade. |
| **Clareza com BDD** | Os cenários são escritos em Gherkin, facilitando o entendimento do comportamento esperado. |
| **Responsabilidade única** | Features e step definitions são separados por fluxo da aplicação. |
| **Pronto para CI** | O GitHub Actions instala dependências, executa o Cypress, gera o relatório Allure e publica o relatório em eventos de push. |
| **Rastreabilidade de QA** | Comentários nos step definitions documentam comportamentos encontrados e bugs observados durante a automação. |

---

## Pré-requisitos

Antes de executar o projeto localmente, é necessário ter **Node.js** e **npm** instalados. O workflow de CI utiliza Node.js 20, portanto é recomendado utilizar a mesma versão principal localmente para manter consistência entre ambiente local e pipeline.

| Requisito | Versão ou ferramenta recomendada |
|---|---|
| Node.js | 20.x |
| Gerenciador de pacotes | npm |
| Automação de navegador | Cypress |
| Visualização de relatórios | Allure Commandline |

---

## Como Executar os Testes

Instale as dependências do projeto antes de executar qualquer comando de teste.

```bash
npm install
```

Para abrir o Cypress Test Runner em modo interativo, utilize o comando abaixo.

```bash
npm run cypress:open
```

Para executar todos os testes em modo headless, utilize um dos scripts configurados no `package.json`.

```bash
npm run cy:run
```

ou

```bash
npm run cypress:run
```

Para executar os testes e gerar o relatório Allure, utilize o fluxo completo abaixo.

```bash
npm run cy:run
npm run allure:generate
npm run allure:open
```

O projeto também possui um script combinado para executar o Cypress, gerar o relatório Allure e abrir o relatório em seguida.

```bash
npm run test:allure
```

Caso queira servir o relatório diretamente a partir dos resultados do Allure, utilize o comando abaixo.

```bash
npm run allure:serve
```

---

## Execução de Features Específicas

Como a configuração do Cypress utiliza `specPattern: "**/*.feature"`, a suíte está preparada para executar arquivos Gherkin diretamente.

| Fluxo | Comando de exemplo |
|---|---|
| Login | `npx cypress run --spec "cypress/e2e/features/login.feature"` |
| Dashboard | `npx cypress run --spec "cypress/e2e/features/dashboard.feature"` |
| Colmeia Forms | `npx cypress run --spec "cypress/e2e/features/colmeiaForms.feature"` |
| Banco de Dados | `npx cypress run --spec "cypress/e2e/features/bancoDeDados.feature"` |
| Todas as features | `npx cypress run --spec "cypress/e2e/features/**/*.feature"` |

---

## Integração Contínua

O repositório possui um workflow do GitHub Actions em `.github/workflows/cypress.yml`. Esse workflow é executado automaticamente em eventos de `push` e `pull_request` direcionados à branch `main`, permitindo validação contínua da suíte de testes.[4]

| Etapa do workflow | Finalidade |
|---|---|
| Checkout | Baixa o código do repositório no runner de CI. |
| Setup Node.js | Configura Node.js 20 e cache do npm. |
| Install Dependencies | Instala as dependências com `npm ci`. |
| Run Cypress Tests | Executa a suíte Cypress em modo headless. |
| Generate Allure Report | Gera o relatório HTML a partir de `allure-results`. |
| Post Allure Summary to PR | Publica um resumo do relatório em pull requests. |
| Deploy Allure Report | Publica o relatório gerado no GitHub Pages em eventos de push. |

---

## Ferramentas Utilizadas

| Ferramenta | Finalidade no projeto |
|---|---|
| **Cypress** | Automação de navegador e execução dos testes end-to-end. |
| **Cucumber / Gherkin** | Especificação dos comportamentos esperados por meio de arquivos `.feature`. |
| **JavaScript** | Implementação dos step definitions e da lógica de automação. |
| **JSON Fixtures** | Centralização de seletores, URLs, credenciais e massas de dados. |
| **Allure** | Geração e visualização de relatórios de testes. |
| **GitHub Actions** | Execução automatizada dos testes e publicação de relatórios no pipeline. |

---

## Observações de QA

Durante a automação, alguns comportamentos da aplicação foram documentados diretamente nos arquivos de step definitions como observações de QA. No fluxo de login, há comentários sobre inconsistências nas mensagens exibidas para campos vazios e para login válido. No fluxo de Banco de Dados, a ação de arquivar não foi automatizada porque a funcionalidade foi identificada como não operacional no momento dos testes, sendo registrado um bug report para esse comportamento , podendo ser visualizado na pasta bugReports junto a outras inconsistencias encontradas.

Essas observações indicam que a suíte não apenas valida comportamentos esperados, mas também contribui para identificar, registrar e rastrear defeitos encontrados durante o processo de testes.

---

## Organização dos Seletores

Todos os seletores estão centralizados nos arquivos JSON dentro de `cypress/fixtures/`. Essa organização facilita a manutenção, pois alterações na interface podem ser tratadas, na maior parte dos casos, atualizando apenas os arquivos de fixture correspondentes.

| Fixture | Fluxo relacionado |
|---|---|
| `loginPOM.json` | Seletores da página de login, credenciais e mensagens esperadas. |
| `dashboardPOM.json` | Seletores de dashboard e navegação para Campanha. |
| `colmeiaFormsPOM.json` | Seletores e URLs relacionados à navegação para Colmeia Forms. |
| `bancoDeDadosPOM.json` | Seletores, nomes de itens e textos esperados do fluxo de Banco de Dados. |

---

## Referências

[1]: https://docs.cypress.io "Documentação oficial do Cypress"
[2]: https://cucumber.io/docs/gherkin/ "Documentação oficial do Gherkin"
[3]: https://allurereport.org/docs/ "Documentação oficial do Allure Report"
[4]: https://docs.github.com/actions "Documentação oficial do GitHub Actions"
