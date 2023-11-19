import './App.css'
import Footer from './assets/components/Footer'
import Header from './assets/components/Header'
import MyCard from './assets/components/Mycard'

function App() {
  return <>
    <Header titulo="Adopta un gato, son más bacanes que los perros" />
    <div className='contenedor-cards'>
      
      <MyCard urlImg="https://images.pexels.com/photos/17006168/pexels-photo-17006168/free-photo-of-animal-mascota-gato-maine-coon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" nombre="Simba" descripcion="Simba, un majestuoso Maine Coon atigrado, posee una personalidad vivaz y curiosa. Sus ojos verdes exploran el mundo con asombro, y ama las alturas.
" colorBadge="success" textBadge="Maine Coon" />

      <MyCard urlImg="https://images.pexels.com/photos/2361952/pexels-photo-2361952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" nombre="Luna" descripcion="Luna, con su esponjoso pelaje persa blanco, es la definición de serenidad. Ama los rayos del sol y las siestas en las tardes perezosas.
" colorBadge="primary" textBadge="Persa" />

      <MyCard urlImg="https://images.pexels.com/photos/17910746/pexels-photo-17910746/free-photo-of-animal-mascota-mono-tarde.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" nombre="Oliver" descripcion="Oliver es un Siamés con una elegante capa de negro azabache y ojos azules. Es astuto, cariñoso y siempre encuentra un nuevo rincón para jugar." colorBadge="danger" textBadge="Siamés" />

      <MyCard urlImg="https://images.pexels.com/photos/2646483/pexels-photo-2646483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" nombre="Mía" descripcion="Mía es una gata Bengalí con un patrón de rosetas que enamora. Su espíritu aventurero la lleva a cazar mariposas en el jardín cada mañana." colorBadge="warning" textBadge="Bengalí" />
      
    </div>
    
    <Footer descripcionFooter="Explora nuestra galería de adopción de gatos para encontrar a tu compañero perfecto. Aunque no soy afín a los perros, tengo una gran variedad de gatos con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. " />
  </>
}

export default App

