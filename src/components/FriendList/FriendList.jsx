import styles from '../FriendList/FriendList.module.css';

export default function FriendList({ friends }) {
    return (
        <ul className={styles.friend_list}>
            {friends.map((friend) => 
                <li className={styles.item} key={friend.id}>
                    <span className={styles.status}>
                        {friend.isOnline
                            ? <img src ="https://t4.ftcdn.net/jpg/03/44/66/61/240_F_344666162_HEdv3C3wBPzSGMDpuc0yTQttqgtEs6C0.jpg" width="20px" alt="online"/>
                            : <img src ="https://t4.ftcdn.net/jpg/02/60/98/83/240_F_260988365_ZxmxlouAN5kDlXDMKawFxcvnICV91ZMQ.jpg" width="40px" alt="offline"/>}
                    </span>
                    <img className={styles.avatar} src={friend.avatar} alt="" width="48" />
                    <p className={styles.name}>{friend.name}</p></li>
                
            )}
  
</ul>
    )
}

