import React from 'react';
import styles from './table.module.css'

const Table = (props) => {

    let totalInterestgained = 0;
    let totalInvestedCapital = 0;

  return (
    <table className={styles.result}>
        <thead>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            { props.yearlyData.map((data)=>(
                <tr key={data.id}>
                    <td>{data.year}</td>
                    <td>{data.savingsEndOfYear}</td>
                    <td>{data.yearlyInterest}</td>
                    <td>{totalInterestgained += data.yearlyInterest}</td>
                    <td>{totalInvestedCapital += data.yearlyContribution}</td>
                </tr>
            )) }
        </tbody>
    </table>
  )
}

export default Table