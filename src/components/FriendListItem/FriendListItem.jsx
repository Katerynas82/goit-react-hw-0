import styles from "./FriendListItem.module.css";

export function FriendListItem({ name, avatar, isOnline }) {
  return (
    <li className={styles.item}>
      <img src={avatar} alt="Avatar" width="68" />
      <p>{name}</p>

      <p>
        <span className={isOnline ? styles.online : styles.offline}>
          {isOnline ? "Online" : "Offline"}
        </span>
      </p>
    </li>
  );
}
