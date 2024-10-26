import { FieldValues } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { default as MuiSwitch } from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

type switchProps = FieldValues

export const Switch = ({ name, ...rest }: switchProps) => {
  const { t } = useTranslation();

  return (
    <FormControlLabel
      control={
        <MuiSwitch {...rest} />
      }
      label={t(`form.input.${name}.title`)}
    />
  )
};

export default Switch;
