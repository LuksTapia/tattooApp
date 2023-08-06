

<template>
    <div>
        <Header />
        <div class="containerAbout">
            <h4>NOSOTROS</h4>
            <div class="containerText">
                <div class="row">
                    <p>
                        Bienvenido a nuestro estudio de tatuajes, donde el arte y la pasión se unen para crear piezas únicas y significativas en la piel. Con más de una década de experiencia en la industria de los tatuajes, nos enorgullece ofrecerte un servicio de alta calidad y un ambiente acogedor para satisfacer todas tus necesidades artísticas.
                        <br /><br />
                        En nuestro estudio, trabajamos con un equipo de artistas altamente capacitados y creativos que se esfuerzan por brindar resultados excepcionales en cada diseño. Nuestro enfoque principal es entender tus ideas y transformarlas en tatuajes personalizados que reflejen tu estilo y personalidad.
                    </p>
                    <img class="ml" src="https://media.gq-magazine.co.uk/photos/5d13aced7fcc8e84b28213ca/master/pass/artist-gq-12sep18_alamy_b.jpg" />
                </div>

                <div class="row">
                    <img class="mr" src="https://filesedc.com/uploads/363/img/2022/07/1200/persona-tatuando-en-blanco-y-negro-62d8ff2fbe3bb.jpg" />
                    <p>
                        Nos apasiona el arte del tatuaje y nos dedicamos por completo a nuestro oficio. Cada diseño es tratado con el mayor cuidado y respeto, ya sea que estés buscando un tatuaje pequeño y delicado o una obra de arte en toda la espalda. Nos aseguramos de que cada cliente se sienta cómodo y confiado durante todo el proceso, desde la consulta inicial hasta la sesión de tatuaje y el cuidado posterior.
                        <br /><br />
                        A lo largo de los años, hemos adquirido una amplia experiencia en una variedad de estilos de tatuaje, desde el tradicional hasta el realismo, el puntillismo y el geométrico. Nuestros artistas están actualizados con las últimas tendencias y técnicas en el mundo del tatuaje, lo que nos permite ofrecerte diseños frescos y vanguardistas.
                    </p>
                </div>

                <div class="row">
                    <p>
                        Además de la experiencia en la creación de tatuajes, nos enorgullece mantener altos estándares de higiene y seguridad. Utilizamos equipos y materiales esterilizados de alta calidad para garantizar la seguridad de nuestros clientes. La limpieza y la esterilización son aspectos fundamentales en nuestro estudio, y seguimos todas las normas y regulaciones de salud establecidas.
                        <br /><br />
                        Sabemos que un tatuaje es una decisión importante y personal, y estamos aquí para guiarte en cada paso del camino. Nuestro objetivo es crear una experiencia inolvidable para ti, donde puedas confiar en nuestros artistas y sentirte seguro de que obtendrás un tatuaje de calidad excepcional.
                    </p>
                    <img class="ml" src="https://th.bing.com/th/id/R.a69a0054e591851532499c30a58d26ef?rik=MQ4OcbJ%2bFMRDhA&pid=ImgRaw&r=0" />
                </div>

                <div class="row">
                    <img class="mr" src="https://i.pinimg.com/originals/8c/47/ca/8c47ca6bd8374a3b953768f5a14968f8.jpg" />
                    <p>
                        En resumen, somos un estudio de tatuajes con más de una década de experiencia en la industria. Nos dedicamos por completo a nuestro oficio y nos enorgullece brindar diseños personalizados y de alta calidad. Nuestro equipo de artistas altamente capacitados trabaja en estrecha colaboración contigo para crear tatuajes que representen tu estilo y personalidad. Mantenemos altos estándares de higiene y seguridad, y nos esforzamos por ofrecerte una experiencia única y satisfactoria.
                        <br /><br />
                        Esperamos poder ser parte de tu viaje artístico y ayudarte a crear un tatuaje que te acompañe de por vida. ¡Visítanos en nuestro estudio y déjanos hacer realidad tu visión artística!
                    </p>
                </div>
                
            </div>
            
        </div>
        <Footer />
    </div>
</template>

<script>

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
    components: { Header, Footer },
}
</script>

<style>

    .containerAbout h4 {
        color: black;
        font-size: 2em;
    }

    .row {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
    }

    .mr {
        margin-right: 40px;
    }

    .ml {
        margin-left: 40px;
    }

    .row p, .row img {
        flex: 1;
    }

    .row img {
        width: 200px;
        height: 250px;
        border-radius: 30px;
    }

    .containerAbout {
        padding-top: 120px;
        width: 100%;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        padding-bottom: 30px;
    }

    .containerText {
        width: 80%;
    }

    .containerText p {
        color: black;
        text-align: justify;
    }

</style>