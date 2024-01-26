import styled from '@emotion/styled';
import 'semantic-ui-css/semantic.min.css';
import { Dropdown, DropdownProps } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import * as XLSX from 'xlsx';

import SettlementsTable from './SettlementsTable';
import SettlementsPagination from './SettlementsPagination';
import { getSettlements } from 'src/api';
import { useGetSettlements } from 'src/hooks/queries/useGetSettlements';
import { SettlementedItem } from '@/types/settlements';
import { settlementsDateState } from '@recoil/atoms/settlemented';
import headerAccommodationState from '@recoil/atoms/headerAccommodationState';
import { getCurrentYearStartDate, getCurrentYearEndDate } from '@utils/index';
import { convertKeysToKorean } from '@utils/index';
import theme from '@styles/theme';

const Settlemented = () => {

  const { startDate, endDate } = useRecoilValue(settlementsDateState);
  const [, setSortOrder] = useState('couponDateDesc');
  const [orderBy, setOrderBy] = useState('COUPON_USE_DATE');
  const [currentData, setCurrentData] = useState<SettlementedItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const accommodation = useRecoilValue(headerAccommodationState);

  const itemsPerPage = 10;

  const sortOptions = [
    { key: 'couponDateDesc', text: '쿠폰 사용일 최근 순', value: 'couponDateDesc' },
    { key: 'dateDesc', text: '정산 완료일 최근 순', value: 'dateDesc' },
    { key: 'amountDesc', text: '정산금액 많은 순', value: 'amountDesc' },
    { key: 'usageCountDesc', text: '사용건 많은 순', value: 'usageCountDesc' },
  ];

  const defaultOption = sortOptions.find(option => option.value === 'couponDateDesc');

  const handleSortChange = (_e: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => {
    setSortOrder(data.value as string);
    switch (data.value) {
      case 'amountDesc':
        setOrderBy('SUM_PRICE');
        break;
      case 'dateDesc':
        setOrderBy('COMPLETE_AT');
        break;
      case 'couponDateDesc':
        setOrderBy('COUPON_USE_DATE');
        break;
      case 'usageCountDesc':
        setOrderBy('COUPON_COUNT');
        break;
      default:
        break;
    }
  };
  
  let adjustedStartDate: string | null = null;
  if (startDate !== null) {
    const startDateObj = new Date(startDate);
    startDateObj.setDate(startDateObj.getDate() + 1);
    adjustedStartDate = startDateObj.toISOString().split('T')[0];
  }

  const { data: settlements } = useGetSettlements(
    accommodation.id,
    adjustedStartDate ? adjustedStartDate : getCurrentYearStartDate(),
    endDate ? endDate.toISOString().split('T')[0] : getCurrentYearEndDate(),
    orderBy,
    currentPage - 1,
    itemsPerPage
  );

  useEffect(() => {
    if (settlements) {
      const newSettlementData = settlements.settlement_responses.map((data: SettlementedItem, index: number) => ({
        ...data,
        NO: (currentPage - 1) * itemsPerPage + index + 1,
      }));
      setCurrentData(newSettlementData);
      setTotalItems(settlements.total_settlement_count);
      setTotalPages(settlements.total_page_count);
    }
  }, [settlements]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const [totalItems, setTotalItems] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);

  const calculatePageStartNumber = (currentPage: number) => {
    return totalItems - (currentPage - 1) * itemsPerPage;
  };

const handleDownloadExcel = async () => {
  try {
    const response = await getSettlements(
      accommodation.id,
      startDate ? startDate.toISOString().split('T')[0] : getCurrentYearStartDate(),
      endDate ? endDate.toISOString().split('T')[0] : getCurrentYearEndDate(),
      orderBy,
      0,
      totalItems
    );

    const allData = response.settlement_responses.map((data: SettlementedItem) => {
      return convertKeysToKorean(data);
    });

    const workBook = XLSX.utils.book_new();
    const workSheet = XLSX.utils.json_to_sheet(allData);
    
    XLSX.utils.book_append_sheet(workBook, workSheet, "Sheet1");
    XLSX.writeFile(workBook, "SettlementedDownload.xlsx");
  } catch (error) {
    console.error('Error fetching all settlements data for download:', error);
  }
};

  useEffect(() => {
    setCurrentPage(1);
  }, [accommodation]);
  
  return (
    <Container>
      <SettlementedHeader>
        <TotalData>
          전체 내역 {totalItems}개
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
          totalItems={totalItems}
        />
      </DataLow>
  </Container>
  );
}

export default Settlemented;

const Container = styled.nav`
  margin-right: 43px;
  margin-left: 43px;

  ${theme.response.tablet} {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const SettlementedHeader = styled.div`
  width: 100%;

  margin-top: 20px;

  display: flex;
  justify-content: space-between;

  @media (max-width: 498px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TotalData = styled.div`
  margin-top: auto;
  margin-bottom: auto;

  font-size: 14px;
  font-weight: bold;
  color: white;

  @media (max-width: 498px) {
    order: 2;
    margin-top: 10px;
  }
`;

const OptionContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 498px) {
    order: 1;
    margin-bottom: 10px;
    justify-content: space-between; 
  }
`;

const StyledDropdown = styled(Dropdown)`
  ${theme.response.tablet} {
    border: none;
  }

  &.ui.dropdown {
    min-width: 160px;
    backdrop-filter: blur(50px);
    border-radius: 14px;
    font-color: white !important;
    background-color: rgba(255, 255, 255, 0.1);

    @media (max-width: 498px) {
      max-width: 160px;
    }

    .text {
      max-height: 30px;

      font-size: 11px;
      color: black;
    }

    & > .text {
      color: white !important;
    }

    .icon {
      color: white;
    }

    .menu .item.selected {
      background-color: rgba(255, 255, 255, 0.1);
      color: #fff;
    }

    .menu {
      margin-bottom: 2px;

      border: 1px solid rgba(255, 255, 255, 0.2) !important;
      border-radius: 0px 0px 5px 5px;

      font-size: 11px;
      // background-color: rgba(255, 255, 255, 0.1) !important;

      .item {
        border-bottom: none !important;
        border-top: none !important;

        white-space: nowrap;
      }
    }
  }

  &.ui.selection.dropdown {
    min-height: 20px;
  }

  &.ui.selection.active.dropdown {
    border: 1px solid rgba(255, 255, 255, 0.2) !important;

    color: white;
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15) !important;
  }

  &.ui.selection.visible.dropdown>.text:not(.default) {
    font-weight: 400;
    color: white;
}
`;

const ExcelDownload = styled.div`
  margin-left: 10px;

  width: 100%;

  white-space: nowrap;

  button {
    border: none;

    font-size: 12px;
    font-weight: bold;
    color: white;
    font-family: 'Noto Sans KR';

    text-decoration: underline;
    cursor: pointer;
    background: none;
    text-underline-offset : 8px;
  }
`;

const DataLow = styled.div`
  width: 100%;
`;
