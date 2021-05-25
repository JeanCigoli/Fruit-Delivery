import { format } from 'date-fns';

export const getDateCurrent = () => format(new Date(), 'dd-MM-yyyy');
