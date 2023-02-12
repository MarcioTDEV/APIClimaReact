import "./App.css"
import React from "react"
import Form from "./Componentes/Form"
import Display from "./Componentes/Display"
import DisplayErro from "./Componentes/DisplayErro"

export default function App() {

  const [input, setInput] = React.useState()
  const [dados, setDados] = React.useState()
  const [erro, setErro] = React.useState()
  const [load, setLoad] = React.useState()


  

  function buscarDados(input) {
    if (input === "") {
      alert("Digite um nome de cidade para pesquisar")
    }
    else {
      setLoad(true)
      console.log(input)
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=3039ec260645b328d799b6f611da778a`)
        .then(data => data.json())
        .then(data => {
          console.log(data)
          if (data.cod === "404") {
            setErro(true)
            setLoad(false)
            setDados(false)
          } else {
            localStorage.setItem("cidade", data.name)
            setErro(false)
            setDados(data)
            setLoad(false)

          }
        })
    }
  }

  function request(e) {
    e.preventDefault()
    buscarDados(input)

  }
  React.useEffect(()=>{
    const cidade = localStorage.getItem("cidade")
    buscarDados(cidade)
  },[])
  return (
    <>
      <Form request={request} setInput={setInput} />

      {load && <p>Carregando...</p>}
      {!load && erro && <DisplayErro />}
      {!load && dados && <Display data={dados} />}
    </>
  )
}