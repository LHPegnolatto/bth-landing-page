import Link from 'next/link';
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
  FlexProps,
  ScaleFade,
} from '@chakra-ui/react';

interface HeroProps extends FlexProps {
  title: string;
  subtitle: string;
  image: string;
  ctaLink: string;
  ctaText: string;
  ctaObsText: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ctaObsText,
  ...rest
}) => {
  return (
    <ScaleFade initialScale={0.9} in={true}>
      <Flex
        align="center"
        justify={{ base: 'center', md: 'space-around', xl: 'space-between' }}
        direction={{ base: 'column-reverse', md: 'row' }}
        wrap="nowrap"
        minH="70vh"
        px={8}
        mb={16}
        {...rest}
      >
        <Stack
          spacing={4}
          w={{ base: '80%', md: '40%' }}
          align={['center', 'center', 'flex-start', 'flex-start']}
        >
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color="primary.800"
            textAlign={['center', 'center', 'left', 'left']}
          >
            {title}
          </Heading>
          <Heading
            as="h2"
            size="md"
            color="primary.800"
            opacity="0.8"
            fontWeight="normal"
            lineHeight={1.5}
            textAlign={['center', 'center', 'left', 'left']}
          >
            {subtitle}
          </Heading>
          <Link href={ctaLink}>
            <Button
              colorScheme="primary"
              borderRadius="8px"
              py="4"
              px="4"
              lineHeight="1"
              size="md"
            >
              {ctaText}
            </Button>
          </Link>
          <Text
            fontSize="sm"
            mt={2}
            textAlign="center"
            color="primary.800"
            opacity="0.6"
          >
            {ctaObsText}
          </Text>
        </Stack>
        <Box w={{ base: '80%', sm: '60%', md: '50%' }} mb={{ base: 12, md: 0 }}>
          <Image src={image} size="100%" />
        </Box>
      </Flex>
    </ScaleFade>
  );
};

export default Hero;
