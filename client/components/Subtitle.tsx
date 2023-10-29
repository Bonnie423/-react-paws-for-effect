interface Props{
  text: string
}

function Subtitle({text}:Props){
  return(
    <h2>{text}</h2>
  )
}

export default Subtitle