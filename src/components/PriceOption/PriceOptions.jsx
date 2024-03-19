import PriceOption from "./PriceOption/PriceOption";

const PriceOptions = () => {
  const price_options = [
    {
      id: 1,
      name: "Basic Membership",
      price: 29.99,
      features: [
        "Access to cardio area",
        "Access to weightlifting area",
        "Group fitness classes",
        "Locker room access",
        "Free Wi-Fi",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: 49.99,
      features: [
        "Access to all equipment and areas",
        "Personal training session (1/month)",
        "Nutritional guidance",
        "Sauna access",
        "Discounts on merchandise",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: 79.99,
      features: [
        "Unlimited personal training sessions",
        "Access to premium fitness classes",
        "Towel service",
        "Smoothie bar access",
        "Guest passes (2/month)",
        "Priority booking for classes",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-3xl">Best Prices in the town</h2>
      <div className="grid grid-cols-3 gap-6 ">
        {price_options.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
