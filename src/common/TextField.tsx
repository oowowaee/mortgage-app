import { default as MuiTextField } from '@mui/material/TextField';
import { Control } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Controller } from "react-hook-form"

type TextFieldProps = {
  control: Control<any, object>
  name: string
}

export const TextField = ({ control, name }: TextFieldProps) => {
  const { t } = useTranslation();
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field }) => <MuiTextField {...field} label={t(`form.input.${name}.title`)} />}
    />
  )
};

export default TextField;
