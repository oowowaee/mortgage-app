import { useForm } from "react-hook-form";

import Box from '@mui/material/Box';
import TextField from '@/common/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Switch from '@/common/Switch';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import './form.scss'
import { termUnit } from "./types";

type FormProps = {
  defaultValues: FormData
};

type FormData = {
  amount: number
  term: number
  interest: number
  termUnit: termUnit
  overlay?: boolean
};

export const GraphForm = ({ defaultValues }: FormProps) => {
  const {
    register,
    handleSubmit
  } = useForm<FormData>({
    defaultValues
  });
  const { t } = useTranslation();
  const [numGraphs, setNumGraphs] = useState(0);

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Box component="section" className="formWrapper">
      <form onSubmit={onSubmit}>
        <Stack direction="column" spacing={2}>
          <TextField {...register("amount")} />
          <TextField {...register("term")} />
          <TextField {...register("interest")} />
          <Switch {...register("overlay")} disabled={numGraphs === 0} />

          <Button variant="contained">{t('form.button.generate')}</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default GraphForm;
