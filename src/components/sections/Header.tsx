import { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Flex,
  Text,
  Button,
  Slide,
  TextProps,
  Icon,
} from '@chakra-ui/react';
import { FiX, FiMenu } from 'react-icons/fi';

import Logo from '../ui/Logo';

interface MenuItemsProps extends TextProps {
  isLast?: boolean;
  to?: string;
}

const MenuItems: React.FC<MenuItemsProps> = ({
  children,
  isLast,
  to = '/',
  ...rest
}) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link href={to}>{children}</Link>
    </Text>
  );
};

const Header: React.FC = () => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  return (
    <Slide
      direction="top"
      in={true}
      style={{ position: 'relative', width: '100%' }}
    >
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={8}
        p={8}
        bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
        color={['white', 'white', 'primary.700', 'primary.700']}
      >
        <Flex align="center">
          <Logo
            w="100px"
            color={['white', 'white', 'primary.500', 'primary.500']}
          />
        </Flex>

        <Box
          display={{ base: 'block', md: 'none' }}
          fontSize="4xl"
          onClick={toggleMenu}
        >
          {show ? <Icon as={FiX} /> : <Icon as={FiMenu} />}
        </Box>

        <Box
          display={{ base: show ? 'block' : 'none', md: 'block' }}
          flexBasis={{ base: '100%', md: 'auto' }}
        >
          <Flex
            align={['center', 'center', 'center', 'center']}
            justify={['center', 'space-between', 'flex-end', 'flex-end']}
            direction={['column', 'row', 'row', 'row']}
            pt={[4, 4, 0, 0]}
          >
            <MenuItems to="/">Início</MenuItems>
            <MenuItems to="/blog">Blog</MenuItems>
            <MenuItems to="/heroes">Heróis</MenuItems>
            <MenuItems to="/our-team">Nosso time</MenuItems>
            <MenuItems to="/signup" isLast>
              <Button
                size="sm"
                rounded="md"
                color={['primary.500', 'primary.500', 'white', 'white']}
                bg={['white', 'white', 'primary.500', 'primary.500']}
                _hover={{
                  bg: [
                    'primary.100',
                    'primary.100',
                    'primary.600',
                    'primary.600',
                  ],
                }}
              >
                Seja um herói
              </Button>
            </MenuItems>
          </Flex>
        </Box>
      </Flex>
    </Slide>
  );
};

export default Header;
