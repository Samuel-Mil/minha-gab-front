<script setup>

</script>

<template>
  <section class="login-page">
    <div class="left">
      <div class="wrapper">
        <div class="cta">
          <h1>MinhaGAB</h1>
          <p>O gerenciador de <i>Guias Laboratoriais</i> que você precisava.</p>
        </div>
        <img src="../../assets/register_page.svg" alt="login_image">
        <div> </div>
      </div>
    </div>

    <div class="right">
      <div class="login-box">
        <h1>Criar conta</h1>
        <form method="POST">
          <div class="input_single">
            <label for="name">Nome:</label>
            <input type="text" name="name" id="name" placeholder="João da Silva">
          </div>
          <div class="input_single">
            <label for="cpf">CPF:</label>
            <input type="text" name="cpf" id="cpf" placeholder="000.000.000-00">
          </div>
          <div class="input_single">
            <label for="email">Email:</label>
            <input type="email" name="email" id="cpf" placeholder="joao.silva@gmail.com">
          </div>
          <div class="input_single">
            <label for="password">Senha:</label>
            <input type="password" name="password" id="password" placeholder="************">
          </div>
          <div class="input_single">
            <input type="submit" value="Entrar">
          </div>
          <div class="link_box">
            <a href="login.html">Já tenho uma conta</a>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.login-page {
  width: 100%;
  height: 100%;
  display: flex;
}

.left {
  width: 50%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
}

.left .wrapper {
  width: 70%;
  height: 100%;
  background-color: #ccc;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.left .wrapper h1 {
  font-size: 50px;
  font-weight: lighter;
}

.left .wrapper p {
  font-weight: lighter;
  font-style: 18px;
}

.left .wrapper img {
  width: 500px;
}

.right {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.right .login-box {
  width: 350px;
  height: 450px;
  background-color: #ccc;
  border-radius: 20px;
}

.right .login-box h1 {
  text-align: center;
  font-weight: normal;
  font-size: 30px;
  margin-top: 20px;
}

.right .login-box form {
  width: 100%;
  padding: 10px;
}

.right .login-box .input_single {
  width: 100%;
  margin-top: 10px;
}

.right .login-box .input_single label {
  font-size: 15px;
  margin-left: 2px;
  margin-bottom: 3px;
}

.right .login-box .input_single input,
select {
  width: 100%;
  height: 40px;
  padding: 8px;
  border-radius: 10px;
  border: 0;
}

.right .login-box .input_single input[type=submit] {
  background-color: #42A4FF;
  color: white;
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 10px;
}

.link_box {
  width: 100%;
  text-align: center;
}

.right .login-box a {
  color: #00509c;
  font-size: 15px;
  text-align: center;
}
</style>
