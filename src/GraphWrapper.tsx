import Grid from '@mui/material/Grid2';
import GraphForm from './graph/form';
import Graph from './graph/graph';
import { useTranslation } from 'react-i18next';
import './i18n';

import './App.css'

export const GraphWrapper = () => {
  const { t } = useTranslation();

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 3, lg: 2 }} sx={{ paddingTop: '30px' }}>
        <GraphForm />
      </Grid>
      <Grid size={{ xs: 12, md: 3, lg: 2 }} sx={{flexBasis: 1}}>
        <Graph />
      </Grid>
    </Grid>
  )
}

export default GraphWrapper;
