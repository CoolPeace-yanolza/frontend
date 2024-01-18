import styled from '@emotion/styled';
import 'semantic-ui-css/semantic.min.css';
import { Dropdown, DropdownProps } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import * as XLSX from 'xlsx';

import SettlementsTable from './SettlementsTable';
import SettlementsPagination from './SettlementsPagination';
import { settlementsDateState, settlementDataState, fakeData } from '@recoil/atoms/settlemented';

const Settlemented = () => {

  const { startDate, endDate } = useRecoilValue(settlementsDateState);
  const setSettlementData = useSetRecoilState(settlementDataState);

  const [sortedData, setSortedData] = useRecoilState(settlementDataState);
  const [sortOrder, setSortOrder] = useState('couponDateDesc');

  const sortOptions = [
    { key: 'amountDesc', text: '정산금액 많은 순', value: 'amountDesc' },
    { key: 'dateDesc', text: '정산 완료일 최근 순', value: 'dateDesc' },
    { key: 'couponDateDesc', text: '쿠폰 사용일 최근 순', value: 'couponDateDesc' },
    { key: 'usageCountDesc', text: '사용건 많은 순', value: 'usageCountDesc' },
  ];

  const handleSortChange = (_e: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => {
    setSortOrder(data.value as string);
  };

  const defaultOption = sortOptions.find(option => option.value === 'couponDateDesc');

  const sortedAndNumberedData = fakeData.map((data, index) => ({
    ...data,
    NO: index + 1,
  })).sort((a, b) => new Date(a['쿠폰 적용일']).getTime() - new Date(b['쿠폰 적용일']).getTime());

  const itemsPerPage = 10;
  const totalItems = sortedData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const calculatePageStartNumber = (currentPage: number) => {
    return totalItems - (currentPage - 1) * itemsPerPage;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = sortedData.slice(startIndex, endIndex);

  const sortData = (sortType: string, data: any[]) => {
    return [...data].sort((a, b) => {
      switch (sortType) {
        case 'amountDesc':
          return parseFloat(b['정산 금액']) - parseFloat(a['정산 금액']);
        case 'dateDesc':
          return new Date(b['정산 완료일']).getTime() - new Date(a['정산 완료일']).getTime();
        case 'couponDateDesc':
          return new Date(b['쿠폰 적용일']).getTime() - new Date(a['쿠폰 적용일']).getTime();
        case 'usageCountDesc':
          return parseInt(b['사용 건수']) - parseInt(a['사용 건수']);
        default:
          return 0;
      }
    });
  };

  useEffect(() => {
    const sorted = sortData(sortOrder, sortedAndNumberedData);
    setSettlementData(sorted);
  }, []);

  useEffect(() => {
    if (startDate && endDate) {
      const filteredData = sortedAndNumberedData.filter((data) => {
        const couponDate = new Date(data['쿠폰 적용일']);
        return couponDate >= startDate && couponDate <= endDate;
      });

      const sorted = sortData(sortOrder, filteredData);
      setSettlementData(sorted);
      setCurrentPage(1);
    } else {
      const sorted = sortData(sortOrder, sortedAndNumberedData);
      setSettlementData(sorted);
    }
  }, [startDate, endDate, sortOrder]);

  useEffect(() => {
    const sorted = sortData(sortOrder, sortedData);
    setSortedData(sorted);
  }, [sortOrder]);

  const handleDownloadExcel = () => {
    const workBook = XLSX.utils.book_new();
    const workSheet = XLSX.utils.json_to_sheet(sortedData);

    XLSX.utils.book_append_sheet(workBook, workSheet, "Sheet1");
  
    XLSX.writeFile(workBook, "download.xlsx");
  };
  

  return (
    <Container>
      <SettlementedHeader>
        <TotalData>
          전체 내역 {sortedData.length}개
        </TotalData>
        <OptionContainer>
        <StyledDropdown
          fluid
          selection
          defaultValue={defaultOption?.value}
          options={sortOptions}
          onChange={handleSortChange}
        />
          <ExcelDownload>
            <button onClick={handleDownloadExcel}>엑셀 다운로드</button>
          </ExcelDownload>
        </OptionContainer>
      </SettlementedHeader>
      <DataLow>
        <SettlementsTable
          data={currentData}
          pageStartNumber={calculatePageStartNumber(currentPage)}
        />
        <SettlementsPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </DataLow>
    </Container>
  );
}

export default Settlemented;

const Container = styled.nav`
  margin-right: 43px;
  margin-left: 43px;
`;

const SettlementedHeader = styled.div`
  width: 100%;

  margin-top: 20px;

  display: flex;
  justify-content: space-between;
`;

const TotalData = styled.div`
  font-size: 14px;
  font-weight: bold;

  color: white;
`;

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledDropdown = styled(Dropdown)`
  &.ui.dropdown {
    min-width: 160px;
    backdrop-filter: blur(50px);
    border-radius: 14px;
    font-color: white !important;
    background-color: rgba(255, 255, 255, 0.1);
    .text {
      color: white;
      font-size: 11px;
      max-height: 30px;
    }
    .icon {
      color: white;
    }
    .menu .item.selected {
      background-color: rgba(255, 255, 255, 0.1);
      color: #fff;
    }
    .menu {
      font-size: 11px;
      background-color: rgba(255, 255, 255, 0.1) !important;
      border: 1px solid rgba(255, 255, 255, 0.2) !important;
      border-radius: 0px 0px 5px 5px;
      margin-bottom: 2px;
      .item {
        white-space: nowrap;
        border-bottom: none !important;
        border-top: none !important;
      }
    }
  }

  &.ui.selection.dropdown {
    min-height: 20px;
    // max-height: 30px;
  }

  &.ui.selection.active.dropdown {
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15) !important;
  }

  &.ui.selection.visible.dropdown>.text:not(.default) {
    font-weight: 400;
    color: white;
}
`;



const ExcelDownload = styled.div`
  width: 100%;

  margin-left: 10px;

  white-space: nowrap;

  button {
    font-size: 14px;
    font-weight: bold;
    color: white;
    border: none;
    text-decoration: underline;
    cursor: pointer;
    background: none;
    text-underline-offset : 8px;
  }
`;

const DataLow = styled.div`
  width: 100%;
`;
