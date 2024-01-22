import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import styled from '@emotion/styled';

import { SettlementsPaginationProps } from '@/types/settlements';

const SettlementsPagination: React.FC<SettlementsPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  totalItems
}) => {
  const [internalCurrentPage, setInternalCurrentPage] = useState<number>(currentPage);

  useEffect(() => {
    setInternalCurrentPage(currentPage);
  }, [currentPage]);

  const handlePageClick = (selectedItem: { selected: number }) => {
    const selectedPage = selectedItem.selected + 1;
    setInternalCurrentPage(selectedPage);
    onPageChange(selectedPage);
  };

  return (
    <PaginationContainer>
      {totalItems > 0 && (
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'hidden'}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          forcePage={internalCurrentPage - 1}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
          pageClassName={'pagination-li'}
          pageLinkClassName={'pagination-link'}
          previousClassName={'pagination-previous'}
          nextClassName={'pagination-next'}
        />
      )}
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
    padding: 9.4px 0px;

    border: 1px solid #FFFFFF;
    border-radius: 4px;
    cursor: pointer;

    @media (max-width: 900px) {
      font-size: 12px;
    }
  }

  .pagination-link {
    padding: 8px 12px;

    color: #FFFFFF;
    text-decoration: none;
  }

  .pagination-li.active {
    padding: 9.4px 0px;
    border: 3px solid #FFFFFF;
    border-radius: 4px;

    font-weight: bold;
  }

  .pagination-previous,
  .pagination-next {
    padding: 8px 12px;
    color: #FFFFFF !important;
    text-decoration: none;

    &:hover {
      cursor: pointer;
    }
  }

  .pagination-previous a,
  .pagination-next a {
    color: white !important;
  }
`;
