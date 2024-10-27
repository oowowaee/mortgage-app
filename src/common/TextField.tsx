import { default as MuiTextField } from '@mui/material/TextField';
import { FieldValues } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { forwardRef } from 'react';

type textFieldProps = FieldValues

export const TextField = forwardRef(({ name, ...rest }: textFieldProps, ref) => {
  const { t } = useTranslation();

  return (
    <MuiTextField inputRef={ref} label={t(`form.input.${name}.title`)} {...rest} />
  )
});

export default TextField;
