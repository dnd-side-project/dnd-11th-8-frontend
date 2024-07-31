import {
  Card as CardContainer,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ReactNode } from 'react';
import { cn } from '@/utils.ts';

interface CardProps {
  children: ReactNode;
  verticalPaddingSize?: 'small' | 'large';
}

const paddingMap = {
  small: 'py-5',
  large: 'py-9',
};

const Container = ({ children, verticalPaddingSize = 'small' }: CardProps) => {
  return (
    <CardContainer
      className={cn('rounded-xl border border-gray-100', paddingMap[verticalPaddingSize])}
    >
      {children}
    </CardContainer>
  );
};

const Card = {
  Container,
  Header: CardHeader,
  Content: CardContent,
  Title: CardTitle,
  Description: CardDescription,
  Footer: CardFooter,
};

export default Card;
