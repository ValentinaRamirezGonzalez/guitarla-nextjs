"use client";

import Image from "next/image";
import logo from "../../../../public/img/logo.svg";
import Link from "next/link";
import styles from "../../../../styles/Header.module.css";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Image src={logo} width={300} height={40} alt="logo" />
        <nav className={styles.navegacion}>
          <Link href="/" className={pathname === "/" ? styles.active : ""}>
            Inicio
          </Link>
          <Link
            href="/dashboard/nosotros"
            className={pathname === "/dashboard/nosotros" ? styles.active : ""}
          >
            Nosotros
          </Link>

          <Link
            href="/dashboard/blog"
            className={pathname === "/dashboard/blog" ? styles.active : ""}
          >
            Blog
          </Link>
          <Link
            href="/dashboard/tienda"
            className={pathname === "/dashboard/tienda" ? styles.active : ""}
          >
            Tienda
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
