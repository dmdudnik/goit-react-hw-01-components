import css from './ProfileStats.module.css';

function ProfileStats({ followers, views, likes }) {
    return (
        <ul className={css.list}>
            <li className={css.item}>
                <span className ={css.label}>followers</span>
                <span className ={css.value}>{followers}</span>
            </li>
            <li className={css.item}>
                <span className ={css.label}>views</span>
                <span className ={css.value}>{views}</span>
            </li>
            <li className={css.item}>
                <span className ={css.label}>likes</span>
               <span className ={css.value}>{likes}</span>
                </li>
        </ul>
    )
}

export default ProfileStats
