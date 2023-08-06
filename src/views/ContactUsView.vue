<template>
  <div>
    <Header />
    <div class="bg">
      <div class="row-contacto"> 
        <div class="left">
          <p class="title-contact">CONTACTECNOS</p>
          <ol>
            <li>Domicilio: Av.Corrientes 1234</li>
            <li>Whatsapp: + 54 9 115 9634478</li>
          </ol>
        </div>

        <div class="right">
          <p class="title-contact">REDES SOCIALES</p>
          <ol>
            <li>Facebook: Miami Ink</li>
            <li>Instagram: @Miami_Ink_Tatto</li>
            <li>Twitter: @MiamiInkTatto</li>
          </ol>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  components: { Header, Footer },
};
</script>

<style>
.bg {
  background-image: url("https://images.pexels.com/photos/10613958/pexels-photo-10613958.jpeg?cs=srgb&dl=pexels-bar%C4%B1%C5%9F-erkin-10613958.jpg&fm=jpg");
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /*opacity: 0.5; /* Opacidad de la imagen de fondo */
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
}

.row-contacto {
  padding-top: 150px;
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.left {
  align-items: flex-start;
  margin-left: 80px;
  
}

.right {
  margin-right: 130px;
  align-items: flex-end;

  
}

.title-contact {
  font-size: 35px;
  color: white;
  font-style: bold;
  margin-top: 10px;
}

ol {
  font-size: 18px;
  padding-left: 10px;
  color: white;
}

ol li {
  margin-top: 5px;
}
</style>
