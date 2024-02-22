import styles from '../../../../styles/Nosotros.module.css'
import Image from "next/image";
import imagen from '../../../../public/img/nosotros.jpg'

export const metadata = {
    title: "Guitarla-Nosotros",
    description: "Generated by create next app",
  };
  


function Nosotros() {
  return (
    <main className="contenedor">
      <h2 className="heading">Nosotros</h2>

      <div className={styles.contenido}>
        <Image src={imagen} width={600} height={400} alt="imagen sobre nosotros"/>
        
        

        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam velit incidunt, obcaecati optio mollitia praesentium! Nostrum, ipsam eaque! Alias accusantium optio illo consectetur id dolores magnam aliquid corrupti, quibusdam ab. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt similique fuga ex, deleniti nulla, ratione, amet alias dignissimos dolores blanditiis reprehenderit inventore laboriosam. Cumque sapiente earum, accusantium optio dolor distinctio.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quis quas doloribus enim soluta labore in odit non, vitae aspernatur. Blanditiis magni repellat ea? Reiciendis dolore dolorum libero eius molestiae.</p>
        </div>

      </div>
    </main>
  )
}

export default Nosotros
