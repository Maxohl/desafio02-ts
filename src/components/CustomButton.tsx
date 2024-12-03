import { Button } from '@chakra-ui/react';

interface CustomButtonProps {
  onClick?: () => void;
  children?: React.ReactNode; 
  colorScheme?: string;
  size?: string;
}


export const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  children,
  colorScheme = 'blue',
  size = 'md',
}) => {
  return (
    <Button onClick={onClick} colorScheme={colorScheme} size={size}>
      {children}
    </Button>
  );
};
