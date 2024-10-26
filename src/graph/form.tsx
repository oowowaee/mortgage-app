import { useForm, Controller } from "react-hook-form";
import Box from '@mui/material/Box';
import TextField from '@/common/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Switch from '@/common/Switch';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import './form.scss'

type FormData = {
  amount: number
  term: number
  interest: number
  overlay: boolean
};

export const GraphForm = () => {
  const {
    control,
    handleSubmit,
    getValues
  } = useForm<FormData>({
    defaultValues: {
      amount: 200000,
      term: 36,
      interest: 7.25
    }
  });
  const { t } = useTranslation();
  const [numGraphs, setNumGraphs] = useState(0);

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Box component="section" className="formWrapper">
      <form onSubmit={onSubmit}>
        <Stack direction="column" spacing={2}>
          <Controller
            name="amount"
            control={control}
            render={({ field }) => <TextField {...field} />}
          />
          <Controller
            name="term"
            control={control}
            render={({ field }) => <TextField {...field} />}
          />
          <Controller
            name="interest"
            control={control}
            render={({ field }) => <TextField {...field} />}
          />
          <Controller
            name="overlay"
            control={control}
            render={({ field }) => <Switch {...field} disabled={numGraphs === 0} />}
          />
          <Button variant="contained">{t('form.button.generate')}</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default GraphForm;
