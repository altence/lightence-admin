import React from 'react';
import { EChartsOption } from 'echarts-for-react';
import { useResponsive } from 'hooks/useResponsive';
import * as S from './Chart.styles';

interface ChartProps extends S.ChartProps {
  option: EChartsOption;
}

export const Chart: React.FC<ChartProps> = ({ option, width, height }) => {
  const { isMobile, isTablet, isBigScreen } = useResponsive();

  const chartHeight = height || isBigScreen ? 320 : isTablet ? 250 : isMobile ? 200 : 200;

  return <S.Chart option={option} width={width} height={chartHeight} />;
};
