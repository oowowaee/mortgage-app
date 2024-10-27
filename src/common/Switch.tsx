import { FieldValues } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { default as MuiSwitch } from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { forwardRef } from 'react';

type switchProps = FieldValues

export const Switch = forwardRef(({ name, ...rest }: switchProps, ref) => {
  const { t } = useTranslation();

  return (
    <FormControlLabel
      control={
        <MuiSwitch inputRef={ref} {...rest} />
      }
      label={t(`form.input.${name}.title`)}
    />
  )
});

export default Switch;
