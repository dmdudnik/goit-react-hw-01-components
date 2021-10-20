import styles from '../TransactionHistory/TransactionHistory.module.css';


export default function TransactionHistory({items}) {
    return (
        <table className={styles.transaction_history}>
            <thead className={styles.headTable}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

            <tbody >
                {items.map((item) =>
                    <tr className={styles.trItem} key={item.id}>
                        <td>{item.type}</td>
                        <td>{ item.amount}</td>
      <td>{ item.currency}</td>
    </tr>
                
                )}
  </tbody>
</table>

    )
}