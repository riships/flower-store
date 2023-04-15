const FormatPrice = ({ price }) => {
    return Intl.NumberFormat("en_IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(price / 100);

};
export default FormatPrice;
