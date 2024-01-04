// @mui
import { Container, Typography, Skeleton } from '@mui/material';
// hooks
import useSettings from '../hooks/useSettings';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

export default function ProfActive() {
  const { themeStretch } = useSettings();

  return (
    <Page title="Professeurs">
      <Container maxWidth={themeStretch ? false : 'xl'}>


        <Typography variant="h5" component="h1" paragraph style={{ color: 'green' }}>
          Prof <span > Active </span>
        </Typography>

        <Skeleton width="80%" height={88} sx={{ bgcolor: 'grey.250' }} />
        <Skeleton width="80%" height={88} sx={{ bgcolor: 'grey.250' }} />
        <Skeleton width="80%" height={88} sx={{ bgcolor: 'grey.250' }} />



        <Typography variant="h5" component="h1" paragraph style={{ color: 'red' }}>
          Prof <span > non Active </span>
        </Typography>

        <Skeleton width="80%" height={88} sx={{ bgcolor: 'grey.250' }} />
        <Skeleton width="80%" height={88} sx={{ bgcolor: 'grey.250' }} />
        <Skeleton width="80%" height={88} sx={{ bgcolor: 'grey.250' }} />


      </Container>
    </Page>
  );
}
