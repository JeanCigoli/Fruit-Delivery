import { ReactElement } from 'react';

export interface NavItemDTO {
  label: string;
  icon: ReactElement<any, any>;
  active: boolean;
}
