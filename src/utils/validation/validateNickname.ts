export const isValidNickname = (nickname: string) => {
  return /^[가-힣a-zA-Zㄱ-ㅎㅏ-ㅣ]*$/.test(nickname);
};
