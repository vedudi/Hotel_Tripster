const Price = ({price}) => {
  return (
    <div className="mx-auto ">
      <p className="text-xl font-semibold">
        ${price}
        <span className="text-xs text-gray-500">/gece</span>
      </p>
    </div>
  );
};

export default Price;
