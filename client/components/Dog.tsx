interface Props {
  name: string
  breed: string
  superpower: string
  imageSrc: string
}

function Dog({name, breed, superpower, imageSrc}: Props) {
  return (
    <>
      <div className="dog-wrapper">
        <div className="dog">
          <div className="dog-name-plate">
            <h3 className="dog-name">{name}</h3>
            <span className="dog-breed">{breed}</span>
          </div>
          <span className="dog-superpower">{superpower}</span>
        </div>
        <img src={imageSrc} alt="A dog" />
      </div>
      
    </>
  )
}

export default Dog