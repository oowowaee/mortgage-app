import { default as MuiTextField } from '@mui/material/TextField';
import { FieldValues } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type textFieldProps = FieldValues

export const TextField = ({ name, ...rest }: textFieldProps) => {
  const { t } = useTranslation();

  return (
    <MuiTextField label={t(`form.input.${name}.title`)} {...rest} />
  )
};

export default TextField;
