

type Props = {
    name: string
    description?: string;
    image: string;
}

const Class = ({ name, description, image }: Props) => {
    return (
        <li className="relative mx-5 inline-block h-[380px] w-[450px]">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>{description}</p>
      </li>
  )
}

export default Class