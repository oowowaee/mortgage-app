import { useTranslation } from 'react-i18next';
import { default as MuiSwitch } from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Control } from 'react-hook-form';
import { Controller } from "react-hook-form"

type SwitchProps = {
  control: Control<any, object>
  name: string,
  disabled?: boolean
}

export const Switch = ({ control, disabled, name }: SwitchProps) => {
  const { t } = useTranslation();

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <FormControlLabel
          control={
            <MuiSwitch {...field} disabled={disabled} />
          }
          label={t(`form.input.${name}.title`)}
        />
      )}
    />
  )
};

export default Switch;
