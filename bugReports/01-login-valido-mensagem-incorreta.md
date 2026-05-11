Bug Found - Login válido exibe mensagem incorreta

---

Descrição

Bug report - Ao preencher dados validos e clicar entrar a aplicaçao exibe a mensagem incorreta "Seu login está incorreto, quer continuar?"


---

Resultado esperado

Scenario - Validate Welcome message

Given the user is on the login page
When the user enters valid credentials
And the user clicks the login button
Then the user should see a welcome message
When the user clicks on "Continuar"
Then the user should be redirected to the dashboard


---

Evidência : 

<video src="../evidencias/01-bugEvidencie.mp4" controls width="600"></video>


---

Status : Bug Found, ao clicar no botão "Entrar" dados válidos, o usuário recebe a mensagem incorreta "Seu login está incorreto, quer continuar?" 



---

Ambiente

Chrome

---

Prioridade

Alta
