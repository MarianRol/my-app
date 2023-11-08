import Button from "./Button"

const Cards = ({data}) => {

  const {img, title, text} = data;

  return (
    <>
        <figure className="estiloCards">
            <img className="estiloImagen" src={img} alt={title} />
            <figcaption>
                <h5>
                    {title}
                </h5>
            </figcaption>
            <p>
            {text}
            </p>

           <Button/>

        </figure>

      

    </>
  )
}

export default Cards