import React, { ReactNode } from 'react';


interface RowProps {
  children: ReactNode;
}

const Row = ({ children }: RowProps) => <div>{children}</div>;

export default Row;
