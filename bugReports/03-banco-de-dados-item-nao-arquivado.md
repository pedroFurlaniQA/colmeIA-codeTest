Bug Found - Item não é enviado para a aba Arquivados

---

Descrição

Bug report - Ao clicar no botão de arquivar um item no Banco de Dados, o item não é movido para Arquivados.

---

Resultado esperado

Scenario - Validate that is possible to archive an item on database

Given the user is on "Banco de dados"
When the user tap on "arquivar" button on an item
Then the item should be moved to the "Arquivados tab

---

Evidência : 

<video src="../evidencias/03-bugEvidencie.mp4" controls width="600"></video>


---

Status : Bug Found, ao arquivar um item, ela não é redirecionado para a aba de Arquivados.

---

Ambiente

Chrome

---

Prioridade

Média
