import React from 'react';
import { Box, IBoxProps } from '../../primitives';
import { useThemeProps } from '../../../hooks';

export type IAppBarContentProps = IBoxProps;

const AppBarContent = (props: IAppBarContentProps) => {
  const { color } = useThemeProps('AppBar', props);
  return (
    <Box
      flex={1}
      alignItems="center"
      flexDirection="row"
      color={color}
      {...props}
    />
  );
};

export default React.memo(AppBarContent);