import NavBar from "./components/NavBar"
import data from "./components/Data"
import Main from "./components/Main"

export default function App() {
  const cards = data.map(item => {
    return (
      <Main
        key={item.id}
        item={item}
      // title={item.title}
      // location={item.location}
      // img={item.imageUrl}

      />
    )
  })


  return (
    <div >
      <NavBar />
      <div className="cards">
        {cards}
      </div>
    </div>
  )
}

