import { Flex, Slide } from '@chakra-ui/react';

import Header from '../sections/Header';
// import Footer from '../sections/Footer';

const LandingLayout: React.FC = ({ children }) => {
  return (
    <Flex direction="column" align="center" maxW={{ xl: '1200px' }} m="0 auto">
      <Header />
      {children}
      {/* <Footer /> */}
    </Flex>
  );
};

export default LandingLayout;
