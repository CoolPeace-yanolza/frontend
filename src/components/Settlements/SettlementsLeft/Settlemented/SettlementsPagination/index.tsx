import React, { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import styled from '@emotion/styled';

interface SettlementsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const SettlementsPagination: React.FC<SettlementsPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  return (
    <PaginationContainer>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'...'}
        breakClassName={'hidden'}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={(selectedItem) => onPageChange(selectedItem.selected + 1)}
        containerClassName={'pagination'}
        activeClassName={'active'}
        pageClassName={'pagination-li'}
        pageLinkClassName={'pagination-link'}
        previousClassName={'pagination-previous'}
        nextClassName={'pagination-next'}
      />
    </PaginationContainer>
  );
};

export default SettlementsPagination;

const PaginationContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  .pagination {
    display: flex;
    align-items: center;
  }

  .pagination-li {
    margin: 5px;
    cursor: pointer;
  }

  .pagination-link {
    padding: 8px 12px;
    border: 1px solid #FFFFFF;
    border-radius: 4px;
    color: #FFFFFF;
    text-decoration: none;

    &:hover {
      background-color: #f0f0f0;
    }

    &.active {
      font-weight: bold;
      background-color: #e0e0e0;
    }
  }

  .pagination-previous,
  .pagination-next {
    padding: 8px 12px;

    border: 1px solid #ccc;
    border-radius: 4px;
    
    color: #FFFFFF;
    text-decoration: none;

    &:hover {
      background-color: #f0f0f0;
    }

    &.active {
      font-weight: bold;
      background-color: #e0e0e0;
    }
  }
`;
