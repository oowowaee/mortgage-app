import { useForm, Controller } from "react-hook-form";
import Box from '@mui/material/Box';
import TextField from '@/common/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';

import './form.scss'

type FormData = {
  term: number
  interest: number
  overlay: boolean
};

export const GraphForm = () => {
  const {
    control,
    handleSubmit,
    getValues
  } = useForm<FormData>({
    defaultValues: {
      term: 36,
      interest: 7.25
    }
  });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Box component="section" className="formWrapper">
      <form onSubmit={onSubmit}>
        <Stack direction="column" spacing={2}>
          <Controller
            name="term"
            control={control}
            render={({ field }) => <TextField field={field} />}
          />
          <Controller
            name="interest"
            control={control}
            render={({ field }) => <TextField field={field} />}
          />
          <Controller
            name="overlay"
            control={control}
            render={({ field }) => <Switch {...field} defaultChecked />}
          />
          <Button variant="contained">Submit</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default GraphForm;
