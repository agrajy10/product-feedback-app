import styled from 'styled-components';

import { ToastContainer } from 'react-toastify';

const StyledToastcontainer = styled(ToastContainer)`
  .Toastify__toast {
    font-family: Jost, sans-serif;
    color: ${({ theme }) => theme.color};
    font-size: 0.875rem;
    min-height: 48px;
  }
`;

export default StyledToastcontainer;
