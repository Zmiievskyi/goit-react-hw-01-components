import PropTypes from "prop-types";
import Style from "./TransactionHistory.module.scss";

export default function TransactionHistory({ transactions }) {
  return (
    <table className={Style.table__general}>
      <thead>
        <tr>
          <th className={Style.table__head}>Type</th>
          <th className={Style.table__head}>Amount</th>
          <th className={Style.table__head}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={Style.tableRow}>
              <td className={Style.table__common}>{type}</td>
              <td className={Style.table__common}>{amount}</td>
              <td className={Style.table__common}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
