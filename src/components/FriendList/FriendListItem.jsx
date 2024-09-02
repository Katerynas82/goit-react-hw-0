import styles from "./FriendList.module.css";

export function FriendListItem({ name, avatar, isOnline }) {
  return (
    <li className={styles.item}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      {/* <p className='isOnline'>{isOnline}</p> */}
      <span className={isOnline ? styles.online : styles.offline}></span>
    </li>
  );
}
