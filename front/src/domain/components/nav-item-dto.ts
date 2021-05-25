import { ReactElement } from 'react';

export interface NavItemDTO {
  label: string;
  icon: ReactElement;
  active: boolean;
  link: string;
}
