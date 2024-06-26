import React from "react";
import Cards from "@/app/components/PostCard/Card/card";
import Deletrea from "@/app/components/texto_animado/page";
import ParticlesBackground2 from "@/app/components/config2/particlesBackground";


async function page() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div className="principal">
      <h1 className="subtitulo text-center ">
        <Deletrea escribe="Proyectos" />
      </h1>
      <section className="proyecto">
      <div>
          <Cards
            nombre="Turnos Taller Mecanico"
            descripcion="
            App para gestionar turnos en un taller mecánico: registra vehículos, dueños, reparaciones y horas de ingreso."
            direccion="https://taller-frontend-beta.vercel.app/"
            imagen="/imagenes/taller_preview.png"
            ancho= "100"
            alto ="100"
          />
        </div>
      <div>
          <Cards
            nombre="Caja de comentarios"
            descripcion="Creada con django conectada a una base de datos postgres y desplegada en railway "
            direccion="https://comentariosrender-production.up.railway.app/"
            imagen="/imagenes/coment.png"
            ancho= "100"
            alto ="100"
          />
        </div>
        <div>
          <Cards
            nombre="Ojos de Cielo Arte"
            descripcion="Pagina creada para una artista plastica y dibujante,desplegada en Netlify "
            direccion="https://ojosdecieloarte.netlify.app/"
            imagen="/imagenes/vistaprev-ojos.png"
            ancho= "100"
            alto ="100"
          />
        </div>
        <div>
          <Cards
            nombre="Marvel Api"
            descripcion="Pagina creada para consumir una api de marvel usando nextjs y axios "
            direccion="https://marvel-api-ale.netlify.app/"
            imagen="/imagenes/marvel.png"
            ancho= "100"
            alto ="100"
          />
        </div>
        <div>
          <Cards
            nombre="ArteSana Mosaicos"
            descripcion="Pagina creada para una artista de mosaiquismo desplegada en github pages "
            direccion="https://alejandroponce00.github.io/ArteSanaMosaicos/"
            imagen="/imagenes/elefante.png"
            ancho= "100"
            alto ="100"
          />
        </div>
        
       
        <div>
          <Cards
            nombre="Portfolio HTML"
            descripcion="Portfolio hecho en Html"
            direccion="https://alejandroponce00.github.io/PORTFOLIO/#"
            imagen="/imagenes/html.png"
            ancho= "100"
            alto ="100"
          />
        </div>
        
        <div>
          <Cards
            nombre="Api externa"
            descripcion="Consulta a una api externa "
            direccion="/posts/Api"
            imagen="/imagenes/api.png"
            ancho= "100"
            alto ="100"
          />
        </div>
        <div>
          <Cards
            nombre="Contador"
            descripcion="Creado con Useeffect "
            direccion="/posts/contador"
            imagen="/imagenes/progra.png"
            ancho= "100"
            alto ="100"
          />
        </div>
        <div>
          <Cards
            nombre="Contador Automatico"
            descripcion="Creado con Useeffect "
            direccion="/posts/contador_automatico"
            imagen="/imagenes/progra.png"
            ancho= "100"
            alto ="100"
          />
        </div>
       
      </section>

      <ParticlesBackground2 />
    </div>
  );
}

export default page;
