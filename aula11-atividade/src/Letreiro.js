function Letreiro({texto, indice}) {
    return (
      <div>
        <h2>{texto.substring(0, indice)}</h2>
      </div>
    )
}

export default Letreiro