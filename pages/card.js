import Image from "next/image";

function Card(props) {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
    />
  )
}

export default Card;