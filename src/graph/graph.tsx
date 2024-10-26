import { calculateAmortizationSchedule } from "./amortizationSchedule.js";
import { useMemo } from "react";
import { paymentDetail } from './amortizationSchedule';
import { LineChart } from '@mui/x-charts/LineChart';
import { useTranslation } from 'react-i18next';
import { blueberryTwilightPalette } from '@mui/x-charts/colorPalettes';

console.log(blueberryTwilightPalette())
import './form.scss'

type GraphParams = {
  term: number
  interest: number
};

const legendPlacement = {
  slotProps: {
    legend: {
      position: {
        vertical: 'bottom',
        horizontal: 'middle',
      },
      direction: 'row',
      itemGap: 22,
      padding: 12,
    },
  }
} as const;

export const Graph = ({ term = 30, interest = 0.0725 }: GraphParams) => {
  const { t } = useTranslation();

  const schedule = calculateAmortizationSchedule(interest, 100000, term * 12, 'monthly');

  return (
    <LineChart
      xAxis={[{ data: schedule.paymentDetails.map(d => d.monthNumber) }]}
      series={[
        {
          label: "Principal Paid",
          data: schedule.paymentDetails.map(d => d.principalPaid),
          showMark: false,
        },
        {
          label: "Interest Paid",
          data: schedule.paymentDetails.map(d => d.interestPaid),
          showMark: false,
        },
        {
          label: "Principal Remaining",
          data: schedule.paymentDetails.map(d => d.remainingPrincipal),
          showMark: false,
        },
      ]}
      height={500}
      width={1000}
      margin={{ left: 80, right: 30, top: 30, bottom: 80 }}
      grid={{ vertical: true, horizontal: true }}
      {...legendPlacement}
    />
  );
}

export default Graph;
