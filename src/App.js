import React, {useState} from 'react';
import logo from './assets/investment-calculator-logo.png';
import Header from './components/Header/Header';
import Table from './components/Results/Table/Table';
import Form from './components/Form/Form/Form';

function App() {

  const [yearlyData, setYearlyData] = useState([]);

  const calculateHandler = (userInput) => {

    const yearlyData = []
    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        id:i,
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setYearlyData(yearlyData);

  };

  return (
    <div>
      <Header title="Investment Calculator" logo={logo}/>
      <Form onFormSubmit={calculateHandler}/>
      {yearlyData.length!==0 ? <Table yearlyData={yearlyData}/> : <p style={{textAlign: 'center'}}>No data</p> }
    </div>
  );
}

export default App;
