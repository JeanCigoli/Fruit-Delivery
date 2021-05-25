import React from 'react';

export interface CardDetailsDTO {
  icon: React.ReactElement;
  total: number;
  description: string;
  [propName: string]: any;
}
