import { useForm, SubmitHandler, Controller } from "react-hook-form";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useTranslation } from 'react-i18next';
import { default as MuiTextField } from '@mui/material/TextField';

import { default as MuiSwitch } from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

import './form.scss'
import { termUnit } from "./types";

type FormProps = {
  defaultValues: FormData
  regenerateGraph: (formData: FormData) => void
  numberOfGraphs: number
};

export type FormData = {
  amount: number
  term: number
  interest: number
  termUnit: termUnit
  overlay?: boolean
  sideBySide?: boolean
};

export const GraphForm = ({ defaultValues, numberOfGraphs, regenerateGraph }: FormProps) => {
  const {
    handleSubmit,
    getValues,
    control,
    reset
  } = useForm<FormData>({
    defaultValues
  });
  const { t } = useTranslation();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    regenerateGraph(data);
  }

  const onReset = () => {
    reset();
    regenerateGraph(defaultValues);
  }

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
          <Controller
              name="overlay"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  control={
                    <MuiSwitch disabled={numberOfGraphs > 1} {...field} />
                  }
                  label={t(`form.input.${field.name}.title`)}
                />
              )}
          />
          <Controller
              name="sideBySide"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  control={
                    <MuiSwitch disabled {...field} />
                  }
                  label={t(`form.input.${field.name}.title`)}
                />
              )}
          />
          <Button type="submit" variant="contained">{t('form.button.generate')}</Button>
          <Button type="reset" onClick={onReset} variant="contained">{t('form.button.reset')}</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default GraphForm;
