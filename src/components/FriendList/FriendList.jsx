
import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from '../FriendList/FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendlist}>
            {friends.map(friend => (
                <FriendListItem
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                    / >
            
            ))}
            
  
</ul>
    )
}