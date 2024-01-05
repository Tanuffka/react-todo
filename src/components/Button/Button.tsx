import MuiButton, { ButtonProps } from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

interface Props extends ButtonProps {
  loading?: boolean;
}

export default function Button({ loading, children, ...restProps }: Props) {
  return (
    <MuiButton {...restProps}>
      {loading && (
        <CircularProgress
          size={25}
          sx={{
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        />
      )}
      {!loading && <Typography>{children}</Typography>}
    </MuiButton>
  );
}
