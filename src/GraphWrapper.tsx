import Grid from '@mui/material/Grid2';
import GraphForm from './graph/form';
import Graph from './graph/graph';
import { useState } from "react";
import { FormData } from './graph/form';

import './i18n';
import './App.css'
import { termUnit } from './graph/types';

const defaultValues = {
  amount: 200000,
  term: 30,
  interest: 7.25,
  termUnit: "years" as termUnit
};

export const GraphWrapper = () => {
  const [graphParameters, setGraphParameters] = useState({
    ...defaultValues,
    term: defaultValues.term,
    interest: defaultValues.interest / 100
  });

  const regenerateGraph = (newParams: FormData) => {
    setGraphParameters({
      ...newParams,
      interest: newParams.interest / 100
    })
  }
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 3, lg: 2 }} sx={{ paddingTop: '30px' }}>
        <GraphForm defaultValues={defaultValues} regenerateGraph={regenerateGraph} />
      </Grid>
      <Grid size={{ xs: 12, md: 3, lg: 2 }} sx={{flexBasis: 1}}>
        <Graph {...graphParameters} />
      </Grid>
    </Grid>
  )
}

export default GraphWrapper;
