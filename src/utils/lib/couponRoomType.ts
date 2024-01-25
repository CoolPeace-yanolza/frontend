export const couponRoomType = (couponRoomTypes: string[]) => {
  if (couponRoomTypes.includes('2박이상')) {
    if (couponRoomTypes.length === 3) {
      return ['대실', '2박이상'];
    } else if (couponRoomTypes.length === 2) {
      return ['2박이상'];
    }
  }
  return couponRoomTypes;
};

export default couponRoomType;
