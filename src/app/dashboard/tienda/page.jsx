import ListadoProductos from '../../ui/dashboard/listado-productos'

export const metadata = {
    title: "Guitarla-Tienda",
    description: "Generated by create next app",
  };
  


function Tienda() {
  return (
    <main className="contenedor">
      <h1 className="heading">Nuestros Productos</h1>

      <ListadoProductos
      
      />

    </main>
  )
}

export default Tienda