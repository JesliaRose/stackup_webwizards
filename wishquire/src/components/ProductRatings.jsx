import { StarIcon } from "@heroicons/react/24/outline";

const ProductRatings = (props) => {
  const starNumber = props.avgRating;
  const ratingNumber = props.ratings;

  return (
    <div className="flex">
      {Array.from({ length: starNumber }, (_, i) => (
        <StarIcon
          key={i}
          className="stroke-wishquire-yellow fill-wishquire-yellow h-[20px]"
        />
      ))}
      {Array.from({ length: 5 - starNumber }, (_, i) => (
        <StarIcon key={i} className="stroke-[#F1B61F] h-[20px]" />
      ))}
      <span className="ml-3 text-wishquire-blue">{ratingNumber} ratings</span>
    </div>
  );
};

export default ProductRatings;