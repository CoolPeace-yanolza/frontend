export interface ConcatTitleProps {
  customer_type: string;
  discount_flat_rate: number | null;
  discount_flat_value: number | null;
}

export const concatTitle = ({
  customer_type,
  discount_flat_rate,
  discount_flat_value
}: ConcatTitleProps) => {
  if (discount_flat_rate !== null) {
    return `${customer_type} ${discount_flat_rate}% 할인`;
  } else if (discount_flat_value !== null) {
    const formattedValue = new Intl.NumberFormat().format(discount_flat_value);
    return `${customer_type} ${formattedValue}원 할인`;
  }

  return null;
};

export default concatTitle;
