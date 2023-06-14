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
                    <td>{data.year}</td> {/* YEAR NUMBER */}
                    <td>{data.savingsEndOfYear}</td> {/* TOTAL SAVINGS END OF YEAR */}
                    <td>{data.yearlyInterest}</td> {/* INTEREST GAINED IN YEAR */}
                    <td>{totalInterestgained += data.yearlyInterest}</td> {/* TOTAL INTEREST GAINED */}
                    <td>{totalInvestedCapital += data.yearlyContribution}</td> {/* TOTAL INVESTED CAPITAL */}
                </tr>
            )) }
        </tbody>
    </table>
  )
}

export default Table