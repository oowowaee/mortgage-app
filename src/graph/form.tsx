import { useForm, SubmitHandler, Controller } from "react-hook-form";

import Box from '@mui/material/Box';
import TextField from '@/common/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Switch from '@/common/Switch';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { default as MuiTextField } from '@mui/material/TextField';

import './form.scss'
import { termUnit } from "./types";

type FormProps = {
  defaultValues: FormData,
  regenerateGraph: (formData: FormData) => void
};

export type FormData = {
  amount: number
  term: number
  interest: number
  termUnit: termUnit
  overlay?: boolean
};

export const GraphForm = ({ defaultValues, regenerateGraph }: FormProps) => {
  const {
    register,
    handleSubmit,
    getValues,
    control
  } = useForm<FormData>({
    defaultValues
  });
  const { t } = useTranslation();
  const [numGraphs, setNumGraphs] = useState(0);
  const onSubmit: SubmitHandler<FormData> = (data) => {
    regenerateGraph(data);
  }

  console.log(getValues())
  return (
    <Box component="section" className="formWrapper">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" spacing={2}>
        <Controller
            name="amount"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <MuiTextField {...field} label={t(`form.input.${field.name}.title`)} />}
        />
        <Controller
            name="term"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <MuiTextField {...field} label={t(`form.input.${field.name}.title`)} />}
        />
        <Controller
            name="interest"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <MuiTextField {...field} label={t(`form.input.${field.name}.title`)} />}
        />
          <Switch {...register("overlay")} disabled={numGraphs === 0} />

          <Button type="submit" variant="contained">{t('form.button.generate')}</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default GraphForm;
