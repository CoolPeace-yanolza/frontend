import styled from '@emotion/styled';
import 'semantic-ui-css/semantic.min.css';
import { Dropdown, DropdownProps } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import XLSX from 'xlsx-js-style';

import SettlementsTable from './SettlementsTable';
import SettlementsPagination from './SettlementsPagination';
import { getSettlements } from 'src/api';
import { useGetSettlements } from 'src/hooks/queries/useGetSettlements';
import { SettlementedItem } from '@/types/settlements';
import { settlementsDateState } from '@recoil/atoms/settlemented';
import headerAccommodationState from '@recoil/atoms/headerAccommodationState';
import { getCurrentYearStartDate, getCurrentYearEndDate } from '@utils/index';
import { convertKeysToKorean } from '@utils/index';
import { SORT_OPTION } from 'src/constants';
import theme from '@styles/theme';
import { currentPageState } from '@recoil/index';

const Settlemented = () => {

  const { startDate, endDate } = useRecoilValue(settlementsDateState);
  const [, setSortOrder] = useState('couponDateDesc');
  const [orderBy, setOrderBy] = useState('COUPON_USE_DATE');
  const [currentData, setCurrentData] = useState<SettlementedItem[]>([]);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);

  const accommodation = useRecoilValue(headerAccommodationState);

  const itemsPerPage = 10;

  const defaultOption = SORT_OPTION.find(option => option.value === 'couponDateDesc');

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

  let adjustedEndDate: string | null = null;
  if (endDate != null) {
    const endDateObj = new Date(endDate);
    adjustedEndDate = endDateObj.toISOString().split('T')[0];
  };

  const { data: settlements } = useGetSettlements(
    accommodation.id,
    adjustedStartDate ? adjustedStartDate : getCurrentYearStartDate(),
    adjustedEndDate ? adjustedEndDate : getCurrentYearEndDate(),
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

      const totalInfo = [
        [''],
        [''],
        ['', '', ''], 
        [''],
        ['', '', ''],
        [''],
        ['', '', '', '', '', '', ''],
        ['', '', '', '', '', '', ''], 
      ];

      
      const allData = response.settlement_responses.map((data: SettlementedItem) => {
        return convertKeysToKorean(data);
      });
  
      const workBook = XLSX.utils.book_new();
      const workSheetSummary = XLSX.utils.json_to_sheet(totalInfo);
      const workSheetData = XLSX.utils.json_to_sheet(allData); 
      
      const totalDiscountPriceKR = response.total_discount_price.toLocaleString('ko-KR');
      const totalCancelPriceKR = response.total_cancel_price.toLocaleString('ko-KR');
      const totalSumPriceKR = response.total_sum_price.toLocaleString('ko-KR');

      workSheetSummary['A3'] = {
        v: '쿠폰 정산',
        s: {
          font: {sz: 16}, 
          fill: { fgColor: { rgb: "809FFF" } },
          alignment: {horizontal: 'right'} 
        }
      };
      
      workSheetSummary['B3'] = {
        v: '내역 리스트',
        s: {
          font: {sz: 16},
          fill: { fgColor: { rgb: "809FFF" } }, 
          alignment: {horizontal: 'left'} 
        }
      };

      workSheetSummary['A6'] = {
        v: '쿠폰 정산 조회 기간: ',
        s: {
          font: {sz: 12}, 
          alignment: {horizontal: 'right'},
          border: {
            top: { style: 'thick' },
            bottom: { style: 'thick' },
            left: { style: 'thick' }
          }
        }
      };
      
      workSheetSummary['B6'] = {
        v: (startDate === null ? getCurrentYearStartDate() : adjustedStartDate) + ' ~ ' + (endDate === null ? getCurrentYearEndDate() : adjustedEndDate),
        s: {
          font: {sz: 12},
          alignment: {horizontal: 'left'},
          border: {
            top: { style: 'thick' },
            bottom: { style: 'thick' },
            right: { style: 'thick' }
          }
        }
      };

      workSheetSummary['A8'] = {
        v: '조회 기간 내 총 합계 내역',
        s: {
          font: {sz: 12}, 
          alignment: {horizontal: 'center', vertical: 'center'},
          border: {
            top: { style: 'thick' },
            left: { style: 'thick' },
          } 
        }
      };

      workSheetSummary['A9'] = {
        v: '조회 기간 내 총 합계 내역',
        s: {
          font: {sz: 12}, 
          alignment: {horizontal: 'center', vertical: 'center'},
          border: {
            bottom: { style: 'thick' },
            left: { style: 'thick' },
          } 
        }
      };

      workSheetSummary['B8'] = {
        v: '조회 기간 내 총 합계 내역',
        s: {
          font: {sz: 12}, 
          alignment: {horizontal: 'center', vertical: 'center'},
          border: {
            top: { style: 'thick' },
          } 
        }
      };

      workSheetSummary['B9'] = {
        v: '조회 기간 내 총 합계 내역',
        s: {
          font: {sz: 12}, 
          alignment: {horizontal: 'center', vertical: 'center'},
          border: {
            bottom: { style: 'thick' },
          } 
        }
      };

      workSheetSummary['C8'] = {
        v: '사용 건수',
        s: {
          font: {sz: 12}, 
          alignment: {horizontal: 'center', vertical: 'center'},
          border: {
            top: { style: 'thick' },
          } 
        }
      };

      workSheetSummary['C9'] = {
        v: response.total_coupon_count,
        s: {
          font: {sz: 12}, 
          alignment: {horizontal: 'center', vertical: 'center'},
          border: {
            bottom: { style: 'thick' },
          } 
        }
      };

      workSheetSummary['D8'] = {
        v: '쿠폰 할인 금액',
        s: {
          font: {sz: 12}, 
          alignment: {horizontal: 'center', vertical: 'center'},
          border: {
            top: { style: 'thick' },
          } 
        }
      };

      workSheetSummary['D9'] = {
        v: totalDiscountPriceKR,
        s: {
          font: {sz: 12}, 
          alignment: {horizontal: 'center', vertical: 'center'},
          border: {
            bottom: { style: 'thick' },
          } 
        }
      };

      workSheetSummary['E8'] = {
        v: '쿠폰 취소 금액',
        s: {
          font: {sz: 12}, 
          alignment: {horizontal: 'center', vertical: 'center'},
          border: {
            top: { style: 'thick' },
          } 
        }
      };

      workSheetSummary['E9'] = {
        v: totalCancelPriceKR,
        s: {
          font: {sz: 12}, 
          alignment: {horizontal: 'center', vertical: 'center'},
          border: {
            bottom: { style: 'thick' },
          } 
        }
      };

      workSheetSummary['F8'] = {
        v: '정산 금액',
        s: {
          font: {sz: 12}, 
          alignment: {horizontal: 'center', vertical: 'center'},
          border: {
            top: { style: 'thick' },
            right: { style: 'thick' }
          } 
        }
      };

      workSheetSummary['F9'] = {
        v: totalSumPriceKR,
        s: {
          font: {sz: 12}, 
          alignment: {horizontal: 'center', vertical: 'center'},
          border: {
            bottom: { style: 'thick' },
            right: { style: 'thick' }
          } 
        }
      };
      
      workSheetSummary["!merges"] = [
        {s: {r: 1, c: 0}, e: {r: 1, c: 1}},  
      ];

      workSheetSummary["!merges"] = [
        {s: {r: 2, c: 1}, e: {r: 2, c: 3}},
      ];

      workSheetSummary["!merges"] = [
        {s: {r: 3, c: 1}, e: {r: 3, c: 2}}, 
      ];

      workSheetSummary["!merges"] = [
        {s: {r: 7, c: 0}, e: {r: 8, c: 1}}, 
      ];
      
      workSheetSummary['!cols'] = [{wch: 22}, {wch:22}, {wch: 22}, {wch: 22}, {wch: 22}, {wch: 22}, {wch: 22}, {wch: 22}]
      
      
      if (workSheetData['!ref']) {
        const range = XLSX.utils.decode_range(workSheetData['!ref']);
        range.s.r++; 
      range.e.r++;
      } else {
      };

    XLSX.utils.sheet_add_json(workSheetSummary, [{}], { origin: -1 });
    XLSX.utils.sheet_add_json(workSheetSummary, allData, { origin: -1 });
    XLSX.utils.book_append_sheet(workBook, workSheetSummary, "정산내역");

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
            options={SORT_OPTION}
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
      position: relative;
      top: -1.5px;
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
