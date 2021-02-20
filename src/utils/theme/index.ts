import { extendTheme } from '@chakra-ui/react';

// Global style overrides
import styles from './styles';

const overrides = extendTheme({
  ...styles,
});

export default overrides;
