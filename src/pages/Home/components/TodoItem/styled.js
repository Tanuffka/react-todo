import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const StyledBox = styled(Box)`
  display: flex;
  height: 50px;
  align-items: center;
  background-color: #fdfdfd;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  margin-top: 16px;
`;

export const StyledDescription = styled(Typography)`
  flex: 1;
  line-height: 17px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;




