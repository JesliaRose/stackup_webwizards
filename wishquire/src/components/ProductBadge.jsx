const ProductBadge = ({ badge }) => {
    if (badge === "choice") {
      return (
        <span className="text-xs xl:text-sm bg-wishquire-darkblue text-white p-2 rounded-2xl">
          Wishquire's <span className="text-wishquire-yellow">Choice</span>
        </span>
      );
    } else if (badge === "seller") {
      return (
        <span className="text-xs xl:text-sm bg-wishquire-orange rounded-2xl text-white p-2">
          #1 Best Seller
        </span>
      );
    } else if (badge === "limited") {
      return (
        <span className="text-xs xl:text-sm bg-wishquire-orange text-white p-2 rounded-2xl">
          Limited Time Deal
        </span>
      );
    }
  
    return <div></div>;
  };
  
  export default ProductBadge;