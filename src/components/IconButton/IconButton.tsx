import MuiIconButton, { IconButtonProps } from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

interface Props extends IconButtonProps {
  loading?: boolean;
  tooltipTitle: TooltipProps['title'];
  tooltipPlacement: TooltipProps['placement'];
}

export default function IconButton({
  loading,
  children,
  tooltipTitle,
  tooltipPlacement,
  ...restProps
}: Props) {
  return (
    <>
      <Box
        sx={{
          height: 42,
          width: 42,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {loading && <CircularProgress size={20} thickness={5} />}
        {!loading && (
          <Tooltip title={tooltipTitle} placement={tooltipPlacement}>
            <MuiIconButton {...restProps}>{children}</MuiIconButton>
          </Tooltip>
        )}
      </Box>
    </>
  );
}
