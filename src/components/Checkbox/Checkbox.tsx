import Box from '@mui/material/Box';
import MuiCheckbox, { CheckboxProps } from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';

interface Props extends CheckboxProps {
  loading?: boolean;
  tooltipTitle: TooltipProps['title'];
  tooltipPlacement: TooltipProps['placement'];
}

export default function Checkbox({
  loading,
  tooltipTitle,
  tooltipPlacement,
  ...restProps
}: Props) {
  return (
    <Box
      sx={{
        height: 42,
        width: 42,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Tooltip title={tooltipTitle} placement={tooltipPlacement}>
        <>
          {loading && <CircularProgress size={20} thickness={5} />}
          {!loading && <MuiCheckbox {...restProps} />}
        </>
      </Tooltip>
    </Box>
  );
}
