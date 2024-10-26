// Can show different payment frequencies
// Table broken down by year/monthly

type paymentFrequency = 'monthly';
type paymentDetail = {
  monthNumber: number
  interestPayment: number
  principalPayment: number
  balancePaid: number
  remainingBalance: number
  interestPaid: number
}

type amoritizationInformation = {
  paymentDetails: paymentDetail[]
  totalPaid: number
}

const roundNumber = (number: number) => {
  return Math.round(number * 100) / 100;
}

export const calculateMonthlyPayment = (
  loanAmount: number,
  numberOfPayments: number,
  monthlyInterestRate: number
) => {
  const interestTerm = (1 + monthlyInterestRate) ** numberOfPayments;
  const numerator = monthlyInterestRate * interestTerm;
  const denominator = interestTerm - 1;

  return loanAmount * numerator / denominator;
};

const calculateInterestPayment = (balance: number, monthlyInterestRate: number) => {
  return balance * monthlyInterestRate;
}

export const calculateAmortizationSchedule = (
  interestRate: number,
  loanAmount: number,
  months: number,
  frequency: paymentFrequency,
  payment?: number
): amoritizationInformation => {
  const monthlyInterestRate = interestRate / 12;
  const numberOfPayments = months;
  const monthlyPayment = calculateMonthlyPayment(
    loanAmount,
    numberOfPayments,
    monthlyInterestRate
  );
  const paymentDetails: paymentDetail[] = [];
  let remainingBalance = loanAmount;
  let balancePaid = 0;
  let interestPaid = 0;

  for (let i = 0; i < numberOfPayments; i++) {
    const interestPayment = calculateInterestPayment(
      remainingBalance,
      monthlyInterestRate
    );

    const principalPayment = monthlyPayment - interestPayment;

    interestPaid += interestPayment;
    balancePaid += principalPayment;
    remainingBalance -= principalPayment;

    paymentDetails.push({
      monthNumber: i + 1,
      interestPayment: roundNumber(interestPayment),
      principalPayment: roundNumber(principalPayment),
      balancePaid: roundNumber(balancePaid),
      remainingBalance: roundNumber(remainingBalance),
      interestPaid: roundNumber(interestPaid),
    });
  }

  return {
    totalPaid: roundNumber(interestPaid + loanAmount),
    paymentDetails,
  };
};

export default calculateAmortizationSchedule;
