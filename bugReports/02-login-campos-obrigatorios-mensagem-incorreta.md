Bug Found - Mensagem de campo obrigatório não aparece corretamente

---

Descrição

Bug report - Ao clicar em Entrar com os campos de login vazios, a aplicação não exibe a mensagem correta de campo obrigatório. A mensagem "Este campo é obrigatório" só aparece quando o usuário digita algo no campo e depois apaga.

---

Resultado esperado

Scenario - Validate null state message on login

Given the user is on the login page
When the user clicks the login button with empty fields
Then "Este campo é obrigatório" warning should be shown attached to the respective field

---

Evidência : <video src="../evidencias/02-bugEvidencie.mp4" controls width="600"></video>


---

Status : Bug Found, ao clicar em Entrar com os campos vazios, a aplicação apresenta uma mensagem incorreta em vez de mostrar "Este campo é obrigatório" nos campos correspondentes.

---

Ambiente

Chrome

---

Prioridade

Média
