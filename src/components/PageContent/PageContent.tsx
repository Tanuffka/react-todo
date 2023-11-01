import { ReactNode } from 'react';

import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import PageTitle from 'src/components/PageTitle';

interface Props {
  children: ReactNode;
  title?: string;
}

export default function PageContent({ children, title }: Props) {
  return (
    <Container maxWidth="md" sx={{ pt: 10, pb: '140px' }}>
      {title && <PageTitle title={title} />}
      <Paper sx={{ p: 4 }}>{children}</Paper>
    </Container>
  );
}
