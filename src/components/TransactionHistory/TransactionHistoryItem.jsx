
import styles from "./TransactionHistory.module.css";

export function TransactionHistoryItem({ amount, type, currency }) {
  return (
    <>
      <tr className={styles.item}>
        <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </>
  );
}
