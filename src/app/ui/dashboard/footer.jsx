import Link from 'next/link'
import React from 'react'
import styles from '../../../../styles/Footer.module.css'





function Footer() {
 

  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
      <nav className={styles.navegacion}>
          <Link href="/" >
            Inicio
          </Link>
          <Link
            href="/dashboard/nosotros"
            
          >
            Nosotros
          </Link>

          <Link
            href="/dashboard/blog"
            
          >
            Blog
          </Link>
          <Link
            href="/dashboard/tienda"
          >
            Tienda
          </Link>
        </nav>

        <p className={styles.copyright}>Todos los derechos reservados {new Date().getFullYear()}</p>

      </div>
    </footer>
  )
}

export default Footer
