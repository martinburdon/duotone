const {
  Box,
  Button,
  IconButton,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Stack
} = require('@chakra-ui/core');
import Code from '@/components/Code';

const Download = ({ imageSrc, color1, color2 }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <IconButton
        onClick={onOpen}
        aria-label="Download"
        icon="download"
        ml={4}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Download</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack shouldWrapChildren spacing={8}>
              <Code language="html">
                {`
                  <div class="duo-img">
                    <img src="${imageSrc}" />
                  </div>
                `}
              </Code>
              <Code language="css">
                {`
                .duo-img {
                  background: ${color1};
                  display: inline-flex;
                  position: relative;
                }

                .duo-img img {
                  display: block;
                  filter: grayscale(100%) contrast(1);
                  mix-blend-mode: darken;
                }

                .duo-img img::after {
                  background-color: ${color2};
                  content: '';
                  height: 100%;
                  left: 0;
                  mix-blend-mode: lighten;
                  position: absolute;
                  top: 0;
                  width: 100%;
                }
              `}
              </Code>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Download;
