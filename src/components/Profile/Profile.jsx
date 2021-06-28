import user from '../../data/user.json'
import css from './Profile.module.css';
import {ProfileDescription} from '../ProfileDescription/ProfileDescription'
import ProfileStats from '../ProfileStats/ProfileStats'
export const Profile = () => {
    return (
        <div className={css.profile}>
            <ProfileDescription
            avatar={user.avatar}
                name={user.name}
                tag={user.tag}
                location={user.location}
            />
            <ProfileStats
                followers={user.stats.followers}
                views={user.stats.views}
                likes={user.stats.likes}
            />
        </div>
    )
}

