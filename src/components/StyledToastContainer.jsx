import styled from 'styled-components';

import { ToastContainer } from 'react-toastify';

const StyledToastcontainer = styled(ToastContainer)`
  .Toastify__toast {
    font-family: Jost, sans-serif;
    color: ${({ theme }) => theme.color};
    font-size: 14px;
    min-height: 48px;
  }
`;

export default StyledToastcontainer;
