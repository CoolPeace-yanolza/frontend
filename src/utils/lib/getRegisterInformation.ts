import { registerInputAtom } from '@/types/register';
import { HeaderAccommodation } from '@/types/layout';

export const getRegisterInformation = (
  input: registerInputAtom,
  header: HeaderAccommodation
) => {
  const registerInfo = {
    title: input.title,
    customer_type: input.customerType,
    discount_type: input.discountType.slice(0, 2),
    discount_flat_value: Number(input.discountFlat),
    discount_flat_rate: Number(input.discountFlatRate),
    maximum_discount_price: Number(input.maximumDiscount),
    coupon_room_types: input.roomType,
    accommodation_id: header.id,
    register_all_room: input.toAllRooms === 'true' ? true : false,
    register_rooms: input.selectedRooms.map(room => {
      return room.roomNumber;
    }),
    minimum_reservation_price: Number(input.minimumPrice),
    coupon_use_condition_days: input.whenToUse,
    coupon_use_condition_day_of_week: input.day,
    exposure_start_date: input.startDate.replace(/\./g, '-'),
    exposure_end_date: input.endDate.replace(/\./g, '-')
  };

  return registerInfo;
};
