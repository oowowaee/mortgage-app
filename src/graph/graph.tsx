import { calculateAmortizationSchedule } from "./amortizationSchedule.js";
import { useMemo } from "react";
import { paymentDetail } from './amortizationSchedule';
import { LineChart } from '@mui/x-charts/LineChart';
import { useTranslation } from 'react-i18next';
import { blueberryTwilightPalette } from '@mui/x-charts/colorPalettes';

import './form.scss'
import { termUnit } from "./types.js";

type GraphProps = {
  amount: number
  term: number
  interest: number
  termUnit: termUnit
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

export const Graph = ({ amount, term, interest }: GraphProps) => {
  const { t } = useTranslation();
  console.log(amount, term, interest)
  const schedule = calculateAmortizationSchedule(interest, amount, term * 12, 'monthly');

  return (
    <LineChart
      xAxis={[{ data: schedule.paymentDetails.map(d => d.monthNumber) }]}
      series={[
        {
          label: t('graph.label.principalPaid'),
          data: schedule.paymentDetails.map(d => d.principalPaid),
          showMark: false,
        },
        {
          label: t('graph.label.interestPaid'),
          data: schedule.paymentDetails.map(d => d.interestPaid),
          showMark: false,
        },
        {
          label: t('graph.label.principalRemaining'),
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
