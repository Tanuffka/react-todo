import { useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import PageContent from '../../components/PageContent';

export default function ErrorPage() {
  const navigate = useNavigate();

  const handleReturnBack = () => {
    navigate(-1);
  };

  return (
    <PageContent title="Page Not Found">
      <Typography>
        There is no such page, do you want to{' '}
        <Button variant="text" onClick={handleReturnBack}>
          return back
        </Button>
      </Typography>
    </PageContent>
  );
}
