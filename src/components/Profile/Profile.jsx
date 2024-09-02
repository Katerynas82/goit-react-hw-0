import styles from  './Profile.module.css'

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.frame}>
      <div>
        <img className={styles.profileImg} src={image} alt="User avatar" />
        <h1>{name}</h1>
        <h3>
          {"@"}
          {tag}
        </h3>
        <h2>{location}</h2>
      </div>

      <ul className={styles.list}>
        <li className={styles.item}>
          <h3>Followers</h3>
          <h3>{stats.followers}</h3>
        </li>
        <li className={styles.item}>
          <h3>Views</h3>
          <h3>{stats.views}</h3>
        </li>
        <li className={styles.item}>
          <h3>Likes</h3>
          <h3>{stats.likes}</h3>
        </li>
      </ul>
    </div>
  );
}
