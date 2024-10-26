import {
  calculateAmortizationSchedule,
  calculateMonthlyPayment,
} from "./amortizationSchedule.js";

describe('monthly payment calculator', () => {
  test("calculates monthly payment", () => {
    const monthlyInterest = 0.12/12;
    const payment = calculateMonthlyPayment(100, 12, monthlyInterest);

    expect(payment).toBe(8.884878867834168);
  });

  test("calculates monthly payment", () => {
    const monthlyInterest = 0.12 / 12;
    const payment = calculateMonthlyPayment(1000, 3, monthlyInterest);

    expect(payment).toBe(340.0221114814678);
  });
});

describe('monthly amortization schedule', () => {
  test("calculates monthly amortization", () => {
    const schedule = calculateAmortizationSchedule(
      0.12,
      1000,
      3,
      'monthly'
    );

    const payments = schedule.paymentDetails;
    expect(schedule.totalPaid).toBe(1020.07);

    expect(payments[0]).toStrictEqual({
      monthNumber: 1,
      interestPayment: 10.0,
      principalPayment: 330.02,
      principalPaid: 330.02,
      remainingPrincipal: 669.98,
      interestPaid: 10.0,
    });

    expect(payments[1]).toStrictEqual({
      monthNumber: 2,
      interestPayment: 6.7,
      principalPayment: 333.32,
      principalPaid: 663.34,
      remainingPrincipal: 336.66,
      interestPaid: 16.7,
    });

    expect(payments[2]).toStrictEqual({
      monthNumber: 3,
      interestPayment: 3.37,
      principalPayment: 336.66,
      principalPaid: 1000.0,
      remainingPrincipal: 0,
      interestPaid: 20.07,
    });
  });
});
