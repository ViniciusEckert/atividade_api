import s from './card.module.css'

export const Card = (props) => {
    return(
        <>
        <img src={props.image} alt={props.name}/>
        <h2>{props.name}</h2>
        <p>{props.species}</p>
        </>
    )
                
}

