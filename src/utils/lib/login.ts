const emailRegex =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/g;

export const fieldOptions = (fieldName: string) => {
  switch (fieldName) {
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
          message:
            '영문, 숫자, 특수문자를 포함한 8-20자의 비밀번호를 입력해주세요.'
        }
      };
  }
};
