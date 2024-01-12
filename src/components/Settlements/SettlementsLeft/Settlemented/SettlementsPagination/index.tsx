import styled from '@emotion/styled';

interface PageNumberProps {
    isActive: boolean;
  }

interface SettlementsPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }
  
  const SettlementsPagination: React.FC<SettlementsPaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <PaginationContainer>
      {pages.map((page) => (
        <PageNumber
          key={page}
          onClick={() => onPageChange(page)}
          isActive={page === currentPage}
        >
          {page}
        </PageNumber>
      ))}
    </PaginationContainer>
  );
};

const PaginationContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const PageNumber = styled.div<PageNumberProps>`
  cursor: pointer;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 'normal')};
  color: ${({ isActive }) => (isActive ? 'blue' : 'black')};
`;

export default SettlementsPagination;
