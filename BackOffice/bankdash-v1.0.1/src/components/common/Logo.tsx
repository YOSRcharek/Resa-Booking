import { Typography } from '@mui/material';
import Image from 'components/base/Image';
import { Fragment } from 'react/jsx-runtime';

const Logo = () => {
  return (
    <Fragment>
      <Image src="/bankdash/resa.png" alt="Logo" sx={{ width: 200 }} />
      <Typography variant="h2"></Typography>
    </Fragment>
  );
};

export default Logo;
