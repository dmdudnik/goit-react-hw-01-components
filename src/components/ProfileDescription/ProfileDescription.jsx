import css from './ProfileDescription.module.css'
export const ProfileDescription = ({ name, tag, location, avatar }) => {
    return (
        <div className ='description'>
            <img src={avatar} alt="Аватар" className={ css.avatar}/>
            <p className={ css.name}>{name} </p>
            <p className={ css.text}>@{tag}</p>
            <p className={ css.text}>{location}</p>
        </div>
    )
}


