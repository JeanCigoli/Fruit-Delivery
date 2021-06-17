import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from '@chakra-ui/react';
import { props } from '../../../../main/style/theme';

const Graphic: React.FC = () => {
  const { styles } = props;

  const options: { series: any; table: ApexOptions } = {
    table: {
      chart: {
        type: 'area',
        toolbar: {
          autoSelected: 'pan',
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100],
        },
      },
      colors: [
        styles.colors.pink.medium,
        styles.colors.orange.medium,
        styles.colors.purple.light,
      ],
    },
    series: [
      {
        name: 'Despesas',
        data: [45, 52, 38, 45, 19, 23, 2],
      },
      {
        name: 'Compras',
        data: [65, 60, 37, 44, 80, 67, 40],
      },
      {
        name: 'Vendas',
        data: [50, 68, 57, 48, 15, 13, 24],
      },
    ],
  };

  return (
    <>
      <Stat>
        <StatLabel>Lucros / Perdas</StatLabel>
        <StatNumber>R$ 500,00</StatNumber>
        <StatHelpText>
          <StatArrow type="increase" />
          56%
        </StatHelpText>
      </Stat>

      <Chart
        type="area"
        width="100%"
        height="80%"
        options={options.table}
        series={options.series}
      />
    </>
  );
};

export default Graphic;
