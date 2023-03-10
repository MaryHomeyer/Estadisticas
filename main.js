const income = document.querySelector('#income');
const expense = document.querySelector('#expense');
const result = document.querySelector('#result');
const calculeButton = document.querySelector('#calcule');
const totalIncome = document.querySelector('#total--income')
const totalExpense = document.querySelector('#total--expense')




const borrowingCapacity = () => {
  const incomeValue = Number(income.value);
  const expenseValue = Number(expense.value);
  if (!incomeValue || !expenseValue) {
    result.innerText = 'Rellene los campos correspondientes.'
    totalIncome.innerText = '-';
    totalExpense.innerText = '-';
  } else if (!(incomeValue > 0) || !(incomeValue > expenseValue)) {
    result.innerText = 'Ingrese un valor valido.'
    totalIncome.innerText = '-';
    totalExpense.innerText = '-';
  } else {
    const borrowingCapacityValue = (incomeValue - expenseValue) * 0.40
    result.innerText = borrowingCapacityValue
    totalIncome.innerText = incomeValue
    totalExpense.innerText = expenseValue
  }
};

calculeButton.addEventListener('click', borrowingCapacity);