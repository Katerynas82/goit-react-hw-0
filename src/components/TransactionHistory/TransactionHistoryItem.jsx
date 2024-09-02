import styles from "./FriendList.module.css";

export function TransactionHistoryItem({ amount, type, currency }) {
  return (
    <>
      <tr className={styles.item}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </>
  );
}
