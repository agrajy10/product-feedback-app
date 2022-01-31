import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2px;
`;

const Label = styled.label`
  flex: 0 0 auto;
  font-size: 13px;
  color: #f2f4fe;
  white-space: nowrap;
`;

const Select = styled.select`
  flex: 1 1 0%;
  font-size: 14px;
  font-weight: 700;
  color: #f2f4fe;
  background: transparent;
  border: none;
`;

function SortBy() {
  return (
    <Wrapper>
      <Label htmlFor="sortby">Sort By :</Label>
      <Select id="sortby">
        <option value="">Most upvotes</option>
        <option value="">Least upvotes</option>
        <option value="">Most comments</option>
        <option value="">Least comments</option>
      </Select>
    </Wrapper>
  );
}

export default SortBy;
