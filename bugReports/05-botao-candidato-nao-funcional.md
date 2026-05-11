Bug Found - Botão Candidato não está funcional

---

Descrição

Bug report - O botão Candidato aparece na tela, mas ao clicar nele nada acontece e o usuário não consegue visualizar as opções da conta.

---

Resultado esperado

Scenario - Validate that Candidato button is active

Given the user is logged on teste-colmeia page
When the user click on "Candidato"
Then the user should be able to see account options

---

Evidência : 

<video src="../evidencias/05-bugEvidencie.mp4" controls width="600"></video>


---

Status : Bug Found, o botão "Candidato" existe mas não está funcional.

---

Ambiente

Chrome

---

Prioridade

Média
