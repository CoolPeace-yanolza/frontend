const nameRegex = /^[가-힣]{2,20}$/i;
const emailRegex =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/g;

export const fieldOptions = (fieldName: string, password?: string) => {
  switch (fieldName) {
    case 'user_name':
      return {
        required: '이름을 입력해주세요.',
        minLength: { value: 2, message: '이름은 최소 2자 이상 입력해주세요.' },
        maxLength: { value: 20, message: '이름은 최대 20자까지 입력해주세요.' },
        pattern: {
          value: nameRegex,
          message: '2-20자의 한글로 입력해주세요.'
        }
      };
    case 'user_email':
      return {
        required: '이메일을 입력해주세요.',
        pattern: {
          value: emailRegex,
          message: '이메일 형식에 맞게 입력해주세요.'
        }
      };
    case 'user_password':
      return {
        required: '비밀번호를 입력해주세요.',
        minLength: 8,
        maxLength: 20,
        pattern: {
          value: passwordRegex,
          message: '8~20자의 영문, 숫자, 특수문자를 모두 포함하여 입력해주세요.'
        }
      };
    case 'user_password_confirm':
      return {
        required: '비밀번호를 입력해주세요.',
        validate: {
          matchPassword: (value: string) => {
            return password !== value ? '비밀번호가 일치하지 않습니다.' : true;
          }
        }
      };
  }
};
