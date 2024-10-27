import Grid from '@mui/material/Grid2';
import GraphForm from './graph/form';
import Graph from './graph/graph';
import { useState } from "react";

import './i18n';
import './App.css'

const defaultValues = {
  amount: 200000,
  term: 30,
  interest: 7.25
};

export const GraphWrapper = () => {
  const [formData, setFormData] = useState({
    ...defaultValues,
    term: defaultValues.term,
    termUnit: 'years',
    interest: defaultValues.interest / 100
  });

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 3, lg: 2 }} sx={{ paddingTop: '30px' }}>
        <GraphForm defaultValues={defaultValues} />
      </Grid>
      <Grid size={{ xs: 12, md: 3, lg: 2 }} sx={{flexBasis: 1}}>
        <Graph {...formData} term={formData.term} />
      </Grid>
    </Grid>
  )
}

export default GraphWrapper;
