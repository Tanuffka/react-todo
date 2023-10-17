import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

interface Props {
  title?: string;
}

export default function PageTitle({ title }: Props) {
  return (
    <Paper sx={{ mb: 4, px: 4, py: 2 }}>
      <Typography variant="h6">{title}</Typography>
    </Paper>
  );
}
