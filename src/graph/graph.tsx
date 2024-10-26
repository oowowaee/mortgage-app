import { calculateAmortizationSchedule } from "./amortizationSchedule.js";
import { useMemo } from "react";
import { paymentDetail } from './amortizationSchedule';
import { LineChart } from '@mui/x-charts/LineChart';

import './form.scss'

type GraphParams = {
  term: number
  interest: number
};

export const Graph = ({ term = 30, interest = 0.0725 }: GraphParams) => {
  const schedule = calculateAmortizationSchedule(interest, 100000, term * 12, 'monthly');

  return (
    <>
      <LineChart
        xAxis={[{ data: schedule.paymentDetails.map(d => d.monthNumber) }]}
        series={[
          {
            data: schedule.paymentDetails.map(d => d.balancePaid),
            showMark: false,
          },
        ]}
        width={1000}
        height={500}
      />
    </>
  );
}

export default Graph;
