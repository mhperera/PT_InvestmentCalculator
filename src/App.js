import logo from './assets/investment-calculator-logo.png';
import Header from './components/Header/Header';
import Table from './components/Results/Table/Table';
import Form from './components/Form/Form/Form';

function App() {

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
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

  };

  return (
    <div>

      <Header title="Investment Calculator" logo={logo}/>

      <Form onFormSubmit={calculateHandler}/>

      <Table />

    </div>
  );
}

export default App;
