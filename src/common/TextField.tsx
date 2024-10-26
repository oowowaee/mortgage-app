import { default as MuiTextField } from '@mui/material/TextField';
import { FieldValues } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type textFieldProps = {
  field: FieldValues
}

export const TextField = ({ field }: textFieldProps) => {
  const { t } = useTranslation();

  return (
    <MuiTextField label={t(`form.${field.name}.title`)} {...field} />
  )
};

export default TextField;
