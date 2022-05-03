import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => (
  <div className={"container mx-auto"}>{children}</div>
);

export default Container;
