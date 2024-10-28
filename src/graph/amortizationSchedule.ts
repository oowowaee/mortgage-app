// Can show different payment frequencies
// Table broken down by year/monthly

import { paymentFrequency, paymentDetail, amoritizationInformation } from "./types";

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
  yearlyInterestRate: number,
  loanAmount: number,
  months: number,
  frequency: paymentFrequency,
  payment?: number
): amoritizationInformation => {
  const monthlyInterestRate = yearlyInterestRate / 12;
  const numberOfPayments = months;
  const monthlyPayment = calculateMonthlyPayment(
    loanAmount,
    numberOfPayments,
    monthlyInterestRate
  );
  const paymentDetails: paymentDetail[] = [];
  let remainingPrincipal = loanAmount;
  let principalPaid = 0;
  let interestPaid = 0;

  for (let i = 0; i < numberOfPayments; i++) {
    const interestPayment = calculateInterestPayment(
      remainingPrincipal,
      monthlyInterestRate
    );

    const principalPayment = monthlyPayment - interestPayment;

    interestPaid += interestPayment;
    principalPaid += principalPayment;
    remainingPrincipal -= principalPayment;

    paymentDetails.push({
      monthNumber: i + 1,
      interestPayment: roundNumber(interestPayment),
      principalPayment: roundNumber(principalPayment),
      principalPaid: roundNumber(principalPaid),
      remainingPrincipal: roundNumber(remainingPrincipal),
      interestPaid: roundNumber(interestPaid),
    });
  }

  return {
    totalPaid: roundNumber(interestPaid + loanAmount),
    paymentDetails,
    monthlyPayment: roundNumber(monthlyPayment)
  };
};

export default calculateAmortizationSchedule;
