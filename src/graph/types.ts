export type paymentFrequency = "yearly" | "monthly" | "biweekly" | "weekly";
export type termUnit = "years" | "months";
export type paymentDetail = {
  monthNumber: number;
  interestPayment: number;
  principalPayment: number;
  principalPaid: number;
  remainingPrincipal: number;
  interestPaid: number;
};

export type amoritizationInformation = {
  paymentDetails: paymentDetail[];
  totalPaid: number;
  monthlyPayment: number;
};