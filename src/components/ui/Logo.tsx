import { Box, BoxProps } from '@chakra-ui/react';

import LogoSvg from '../../utils/assets/logo.svg';

const Logo: React.FC<BoxProps> = (props) => {
  return (
    <Box {...props}>
      <LogoSvg />
    </Box>
  );
};

export default Logo;
