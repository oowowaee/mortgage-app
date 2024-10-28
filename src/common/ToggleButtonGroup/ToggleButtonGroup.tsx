import { default as MuiToggleButtonGroup } from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

import './ToggleButtonGroup.scss';

type toggleId = number;

export type ToggleOption = {
  id: toggleId
  label: string
}

type ToggleButtonGroupProps = {
  toggleOptions: ToggleOption[]
  selectedId: toggleId
  toggleFn: (id: toggleId) => void
}

export const ToggleButtonGroup = ({ toggleFn, selectedId, toggleOptions }: ToggleButtonGroupProps) => {
  return (
    <MuiToggleButtonGroup
      value={selectedId}
      exclusive
      aria-label="highlighted series"
      fullWidth
    >
      {toggleOptions.map(({ id, label }) => (
        <ToggleButton key={id} onChange={() => toggleFn(id)} selected={selectedId === id} value={id} aria-label="left aligned">
          {label}
        </ToggleButton>
      ))}
    </MuiToggleButtonGroup>
  );
}

export default ToggleButtonGroup;
