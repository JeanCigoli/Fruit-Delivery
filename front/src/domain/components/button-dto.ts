import React from 'react';

export interface ButtonDTO {
  color: 'white' | 'black';
  label: string;
  backgroundColor: 'gray' | 'pink' | 'orange';
  type: 'button' | 'submit' | 'reset' | undefined;
  icon?: React.FC;
  [propName: string]: any;
}
