import styled from '@emotion/styled';

import user from '@assets/icons/ic-header-user.svg';
import { toRem } from '@utils/index';
import { useRecoilState } from 'recoil';
import { headerAccomodationState } from '@recoil/index';

const Buttons = () => {
  /* HACK: 예시 데이터, 리액트 쿼리를 활용하여 넘겨 selectList 배열을 받음

    const { data: selectList } = useFetchAccommodation();

  */

  const selectList = [
    {
      accomodationId: 1,
      accomodationName: '영덕 아이스 풀빌라'
    },
    {
      accomodationId: 2,
      accomodationName: '영덕 아이스 풀빌라2'
    },
    {
      accomodationId: 3,
      accomodationName: '영덕 아이스 풀빌라3'
    },
    {
      accomodationId: 4,
      accomodationName: '영덕 아이스 풀빌라4'
    }
  ];

  const [headerAccomodation, setHeaderAccomodation] = useRecoilState(
    headerAccomodationState
  );

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const accomodationId = Number(e.target.value);

    setHeaderAccomodation({
      accomodationId,
      accomodationName: `${e.target.children[accomodationId - 1].textContent}`
    });
  };

  return (
    <Container>
      <Accommodations
        name="Accommodations"
        onChange={handleSelect}
        value={headerAccomodation.accomodationId}
      >
        {selectList.map(item => (
          <option
            value={item.accomodationId}
            key={item.accomodationId}
          >
            {item.accomodationName}
          </option>
        ))}
      </Accommodations>

      <UserIcon
        src={user}
        alt="사용자 프로필"
      />
    </Container>
  );
};

export default Buttons;

const Container = styled.div`
  display: flex;
`;

const Accommodations = styled.select`
  margin-right: ${toRem(32)};
`;

const UserIcon = styled.img`
  width: ${toRem(40)};
  height: ${toRem(40)};

  border-radius: 50%;
`;
