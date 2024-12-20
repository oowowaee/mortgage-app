import { calculateAmortizationSchedule } from "./amortizationSchedule.js";
import { useMemo } from "react";
import { amoritizationInformation, paymentDetail } from './types';
import { LineChart } from '@mui/x-charts/LineChart';
import { useTranslation } from 'react-i18next';
import { blueberryTwilightPalette } from '@mui/x-charts/colorPalettes';
import { useState } from "react";
import ToggleButtonGroup from '@/common/ToggleButtonGroup';

import './form.scss'
import { termUnit } from "./types.js";

type GraphParameters = {
  amount: number
  term: number
  interest: number
  termUnit: termUnit
};

type GraphProps = {
  graphParameters: GraphParameters[]
  numberOfGraphs: number
}

type SeriesInfo = {
  label: string
  data: number[]
  showMark: boolean
}

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

function getColors(schedules: amoritizationInformation[], index: number): string[] {
  // If there's only one schedule, use the default
  if (schedules.length === 1) {
    return [
      "#02B2AF",
      "#2E96FF",
      "#B800D8"
    ]
  } else {
    if (index === 0) {
      return [
        "#02B2AF40",
        "#2E96FF40",
        "#B800D840",
        "#02B2AF",
        "#2E96FF",
        "#B800D8"
      ];
    }

    return [
      "#02B2AF",
      "#2E96FF",
      "#B800D8",
      "#02B2AF40",
      "#2E96FF40",
      "#B800D840"
    ];
  }
};

const toggleOptions = [
  { id: 0, label: 'Option 1' },
  { id: 1, label: 'Option 2' }
];

export const Graph = ({ graphParameters, numberOfGraphs }: GraphProps) => {
  const { t } = useTranslation();
  const [highlightedToggleId, setHighlightedToggleId] = useState(toggleOptions[0].id);

  const schedules = graphParameters.map(({interest, amount, term }) => {
    return calculateAmortizationSchedule(interest, amount, term * 12, 'monthly');
  });

  const series: SeriesInfo[] = [];

  schedules.forEach((schedule) => {
    series.push(
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
      }
    );
  });

  const colors = getColors(schedules, highlightedToggleId);
  return (
    <>
      Monthly Payment {schedules[0].monthlyPayment}
      <ToggleButtonGroup
        toggleOptions={toggleOptions}
        selectedId={highlightedToggleId}
        toggleFn={(id: number) => setHighlightedToggleId(id)}
      />
      <LineChart
        xAxis={[{ data: schedules[0].paymentDetails.map(d => d.monthNumber) }]}
        series={series}
        height={500}
        width={1000}
        colors={colors}
        margin={{ left: 80, right: 30, top: 30, bottom: 80 }}
        grid={{ vertical: true, horizontal: true }}
        {...legendPlacement}
      />
    </>
  );
}

export default Graph;
