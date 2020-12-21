<template>
    <div id="pagina" >
        <!-- Inicia Header -->
        <header>
            <nav id="nav" class="nav1">
                <div class="contenedor-nav">
                    <div class="logo">
                        <img src="../../assets/presto.png">
                    </div>
                    <div class="enlaces" id="enlaces">
                        <a href="/inicio"  id="enlace-nosotros" class="btn-header" >Inicio</a>
                        <a href="/servicios" id="ctn-icon-search" class="btn-header Ibuca">Servicios</a>	
                    </div>
                    <div class="nav-icon" id="nav-icon" >
                        <span  class="cta3">
                            <i class="far fa-edit"></i>
                            <h1 class="tex_icon_menu">Registrarse</h1>
                        </span>
                        <span   class="cta2">
                            <i class="fas fa-sign-in-alt"></i>
                            <p class="tex_icon_menu" @click.prevent="iniciar_sesion">Inicar Sesión</p>
                        </span>
                    </div>
                    <div class="icono" id="open">
                        <span>&#9776;</span>
                    </div>
                </div>
            </nav>
	    </header>
        <!-- Finaliza Header -->

        <!-- Inicia Iniciar Sesion -->
        <!-- Finaliza Iniciar Sesio -->

        <!-- Inicia Carousel -->
        <div id="demo" class="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators" style="background:  #FF0038;">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
                <li data-target="#demo" data-slide-to="3"></li>
                <li data-target="#demo" data-slide-to="4"></li>
                <li data-target="#demo" data-slide-to="5"></li>
            </ul>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../../assets/14.jpeg" alt="Los Angeles" width="1100" height="300">
                    <div class="carousel-caption">
                        <p class="txt_c">En la logistica, el espacio es una sustitucion de la inteligencia.</p>
                    </div>   
                </div>
                <div class="carousel-item">
                    <img src="../../assets/15.jpg" alt="Chicago" width="1100" height="300">
                    <div class="carousel-caption">
                        <p class="txt_c">En la logistica, el espacio es una sustitucion de la inteligencia.</p>
                    </div>   
                </div>
                <div class="carousel-item">
                    <img src="../../assets/16.jpg" alt="New York" width="1100" height="300">
                    <div class="carousel-caption">
                        <p class="txt_c">En la logistica, el espacio es una sustitucion de la inteligencia.</p>
                    </div>   
                </div>
                <div class="carousel-item">
                    <img src="../../assets/17.png" alt="New York" width="1100" height="300">
                    <div class="carousel-caption">
                        <p class="txt_c">En la logistica, el espacio es una sustitucion de la inteligencia.</p>
                    </div>   
                </div>
                <div class="carousel-item">
                    <img src="../../assets/18.jpg" alt="New York" width="1100" height="300">
                    <div class="carousel-caption">
                        <p class="txt_c">En la logistica, el espacio es una sustitucion de la inteligencia.</p>
                    </div>   
                </div>
                <div class="carousel-item">
                    <img src="../../assets/19.jpg" alt="New York" width="1100" height="300">
                    <div class="carousel-caption">
                        <p class="txt_c">En la logistica, el espacio es una sustitucion de la inteligencia.</p>
                    </div>   
                </div>
            </div>
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
        </div> 
        <!-- Finaliza Carousel -->
        <!-- Inicia Beneficios -->
        <section class="contenedor">
            <p class="principal">Presto te brinda grandes beneficios en logistica</p>
            <div class="contenedor-2">
                <div class="beneficios">
                    <div class="imagen1">
                        <img class="img1" src="../../assets/7.png">
                    </div>
                    <div class="texto">
                        <br><h1 class="azul">Tiempo<br>y Costo</h1><br>
                        <p class="text">Reducir los costes de transporte, realizando agrupación de cargas y minimizando etapas y distancias en el recorrido.</p>
                    </div>
                </div>
                <div class="beneficios">
                    <div class="imagen1">
                        <img class="img1" src="../../assets/10.png">
                    </div>
                    <div class="texto">
                        <br><h1 class="amarillo">El medio<br>ambiente</h1><br>
                        <p class="text">El cuidado del medio ambiente es uno de los objetivos de la logística cada vez más presente.</p>
                    </div>
                </div>
                <div class="beneficios">
                    <div class="imagen1">
                        <img class="img1" src="../../assets/1.png">
                    </div>
                    <div class="texto">
                        <br><h1 class="azul">Clientes<br>Felices </h1><br>
                        <p class="text">Lograr tener una buena relación logística entre la relación con los clientes y los proveedores.</p>
                    </div>
                </div>
            </div>	
	    </section>
        <!-- Termina Beneficios -->
        <!-- Inicia Equipo -->
        <section class="contenedor">
            <div class="contenedor-2">
                <div class="herramienta">
                    <div class="imagen">
                        <img class="img" src="../../assets/alex.jpeg">
                    </div>
                </div>
                <div class="herramienta2">
                    <div class="imagen">
                        <img class="img" src="../../assets/richard.jpg">
                    </div>
                </div>
                <div class="herramienta1">
                    <div class="imagen">
                        <a href="herramientas.html" target="_blank">
                            <img class="img" src="../../assets/12.png">
                        </a>
                    </div>
                </div>
                <div class="herramienta">
                    <div class="imagen">
                        <img class="img" src="../../assets/nayis.jpeg">
                    </div>
                </div>
                <div class="herramienta2">
                    <div class="imagen">
                        <img class="img" src="../../assets/will.png">
                    </div>
                </div>
            </div>
            <!--nombres -->
            <div class="contenedor-22">
                <div class="nombre">
                    <div >
                        <h1 class="imagen">ALEXANDER</h1>
                    </div>
                </div>
                <div class="nombre2">
                    <div>
                        <h1 class="imagen">RICHARDD</h1>
                    </div>
                </div>
                <div class="herramienta1">
                    <div class="imagen">
                        <p class="principal"> EQUIPO</p>
                    </div>
                </div>
                <div class="nombre">
                    <div >
                        <h1 class="imagen">NAYIBE</h1>
                    </div>	
                </div>
                <div class="nombre2">
                    <div >
                        <h1 class="imagen">WILL</h1>
                    </div>
                </div>
            </div>
	    </section>
        <!-- Finaliza Equipo -->
        <!-- Inicia Footer -->
        <footer>
            <div class="fazul">
                <div class="contAzul">
                    <img class="final" src="../../assets/6.png">
                    <div>
                        <h1 class="tFinal">SERVICIOS</h1><br>
                        <ul class="flis">
                            <li>GPS</li>
                            <li>Bodegas</li>
                            <li>Transporte</li>
                        </ul>
                    </div>
                    <div>
                        <h1 class="tFinal">COMUNICARSE</h1><br>
                        <ul class="flis">
                            <li>Póngase  en contacto</li>
                            <li>Comentarios</li>
                            <li>Redes sociales</li>
                        </ul>
                    </div>
                    <div>
                        <h1 class="tFinal">POLITICAS</h1><br>
                        <ul class="flis">
                            <li>Privacidad</li>
                            <li>Agradecimientos</li>
                            <li>Licencias</li>
                        </ul>
                    </div>
                        <div class="famarilo">
                        <div class="cont-text">
                        <h1 class="tFinal">ACERCA DE </h1><br>
                        <p class="pFinal">Toda actividad  convive con diversos factores que influyen en su rendimiento y competitividad. Entender los objetivos de la logística es la clave para marcar la diferencia.</p>
                        <div class="redes">
                            <a href="https://github.com/paflorezh/semana-4.git" title=""><i class="fab fa-github"></i></a>
                        
                        </div>
                        </div>
                        
                        <div class="imaF">
                        <img class="final2" src="../../assets/4.png">
                        </div>
                    </div>
                </div>
                <p class="linea"></p>
            </div>
	    </footer>
    <!-- <router-view/> -->
    </div>
</template>

<script>
export default {
    name: 'ThePrueba',
}
var vm= new Vue({
    data: {
        iniciar_sesion: false
    },
    mounted: {
        
    }
})
</script>

<style scoped>

/* Estilos Iniciar Sesion */

.modal-container {
    opacity: 0;
    visibility: hidden;
    position: fixed;
    z-index: 9;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgb(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background-size: cover;
    width: 40%;
    height: 90%;
    /* background-image: url("../inicio/fondo.gif"); */
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    position: relative;
    transition: transform 1s;
    transform: translateY(0%);
    border-radius: 10px;
    /*overflow: hidden;*/
}

/* Estilos Header */
header{
  width: 100%;
  height:90px;

}

.logo,.logo img{
	height: 60px;
	text-align:center;
	margin-top: 5px;

}

nav{
	width: 100%;
	position:fixed;
	box-shadow: 0 0 10px rgb(0,0,0,.4);
	z-index: 25;
	padding: 0px;
}
.nav1{
	background:#F8FBFD;
	height: 80px;
	color: #000;
}

.contenedor-nav{
	display: flex;
	margin: auto;
	width: 60%;
    height: 80px;
	justify-content: space-between;
	align-items: center;
}

nav .enlaces a{
	display: inline-block;
	padding: 5px 0;
	margin-right: 40px;
	font-size: 20px;
	font-family: 'Open Sans', sans-serif;
	font-weight: 700;
	text-decoration: none;
	border-bottom: 3px solid transparent;
	color:inherit;
}

nav .enlaces a:hover{
	border-bottom: 2px solid #000;
	transition: 0.6s;

}

.nav-icon{
	width: 30%;
	display: flex;
	margin-right: 30px;
	justify-content: space-between;
	color: #000;
	font-size: 20px;
	text-align: center;
	cursor: pointer;
}

.tex_icon_menu{
	font-family: 'Open Sans', sans-serif;
	font-weight: 700;
	font-size:15px;
}

/* Estilos Carousel */
.carousel{
	width: 800px;
	height: 400px;
	margin-left: 20%;
	margin-top: 50px;
}

.carousel-inner img {
    width: 800px;
    height: 400px;
    -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0))) 
}

.txt_c{
  	font-size: 40px;
  	text-align: center;
  background: rgb(200,199,199,.6);
  color:#243755;
}


/* Estilos Beneficios */

.contenedor{
  margin:auto;
  padding: 60px 0;
  text-align: center;
  overflow: hidden;  
}

.contenedor-2{
  margin-top: 20px;
  display: flex;
  justify-content: space-around; 
  flex-wrap: wrap;
}

.principal{
	font-family: 'Open Sans', sans-serif;
	font-size: 30px;
	font-weight: 300;
    color: #000
}

.beneficios{
  margin-top: 20px;
  padding: 10px;
  background:#F8FBFD; 
  width: 30%;
  box-shadow: 0 0 6px 0 rgba(0,0,0,.5);
  overflow: hidden;
  height:500px;
  margin-bottom: 20px;
}

.texto{
  padding: 5px 20px;
  width: 90%;
  height: 210px;
  text-align: justify;
  background: #fff;
  margin-top: -40px;
  margin-left: 20px;
  margin-right: 5px;
}

.imagen1{
	text-align:right;	
}

.img1{
	height: 300px;
	width: 300px;
}

.azul{
	font-family: 'Open Sans', sans-serif;
	color: #046EC2;
	font-size: 22px;
}

.amarillo{
	font-family: 'Open Sans', sans-serif;
	color:#FF0038;
	font-size: 22px;
}


/* Estilos Herramientas */

.herramienta{
  margin-top: 20px;
  padding: 10px;
  width: 250px;
  overflow: hidden;
  height:300px;
 display: flex;
 align-items: center;
 justify-content: center;
  background: #FF0038;
  text-align: center;
}

.herramienta2{
  margin-top: 20px;
  padding: 10px;
  width: 250px;
  overflow: hidden;
  height:300px;
 display: flex;
 align-items: center;
 justify-content: center;
  background: #046EC2;
  text-align: center;
}

.herramienta1{
  margin-top: 20px;
  padding: 10px;
  width: 250px;
  overflow: hidden;
  height:300px;
  text-align: center;
}

.img{
	width: 250px;
	height: 250px;
}

.nombre{
  margin-top: 20px;
  padding: 10px;
  width: 250px;
  overflow: hidden;
  height:50px;
  background: #FF0038;
  text-align: center;
}

.nombre2{
  margin-top: 20px;
  padding: 10px;
  width: 250px;
  overflow: hidden;
  height:50px;
  background:#046EC2;
  text-align: center;
}

.contenedor-22{
  margin-top:-5px; 
  display: flex;
  justify-content: space-around; 
  flex-wrap: wrap;
  margin-bottom: 10px;
  height:  90px;
  color: #fff;
}

.imagen{
	font-family: 'Open Sans', sans-serif;
	font-size: 20px;
}


/* Estilos Footer */

.final{
	height: 300px;
}

.fazul{
	
	background: #046EC2;
	height: 350px;
}

.contAzul{

	display: flex;
	justify-content: space-between;
	align-items: center;

}

.famarilo{
	width: 40%;
	background: #FF0038;
	height: 350px;
	display: flex;
	justify-content: space-between;
}

.flis{
	font-family: 'Open Sans', sans-serif;
	font-size: 18px;
	font-weight: 300;
}

.final2 {
    margin-top: 40px;
    margin-left: 60px;
    height: 270px;
    width: 200px;
}

.linea {
    content: '';
    margin: auto;
    width: 100%;
    height: 12px;
    background: #fff;
    margin-bottom: 5px;
    margin-top: -35px;
    position: absolute;
}

.imaF {
    text-align: left;
}

.cont-text {
    padding: 20px 20px;
    width: 100%;
}

.tFinal {
    font-family: 'Open Sans', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    text-align: center;
    width: 90%;
}

.pFinal {
    font-family: 'Open Sans', sans-serif;
    font-size: 19px;
    text-align: justify;
    width: 90%;
    font-weight: 300;
}

.redes {
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-top: 20px;
    font-size: 40px;
}
</style>