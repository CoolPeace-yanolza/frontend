import { RefObject, useEffect } from 'react';

const useOutsideClick = <T extends HTMLElement>(
  ref: RefObject<T>,
  setter: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setter(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, setter]);
};

export default useOutsideClick;

/* 

사용 시기 : 모달 밖 영역 클릭 시 모달 창이 닫히는 기능 구현 시
사용법 : 아래 예시 코드 참고

import { useState, useRef } from 'react';
import { useOutsideClick } from '@hooks';

const YourComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  useOutsideClick(modalRef, setIsOpen);

  // ...

  return (
    <div ref={modalRef}></div>
  );
};

*/
