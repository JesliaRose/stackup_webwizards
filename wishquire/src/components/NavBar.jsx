import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Search } from "./";

const NavBar = () => {
  const cart = useSelector((state) => state.cart.productsNumber);
  return (
    <header className="min-w-[500px]">
      <div className="flex bg-wishquire-blue text-white h-[60px]">
        {/* Left */}
        <div className="flex items-center m-4">
          <Link to={"/"}>
            <img
              className="h-[25px] w-[100px] m-2"
              src={"../images/Wishquirelogo.png"}
              alt="logo"
            />
          </Link>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Deliver to</div>
            <div className="text-sm xl:text-base font-bold">India</div>
          </div>
        </div>
        {/* Middle */}
        <div className="flex grow relative items-center">
          <Search />
        </div>
        {/* Right */}
        <div className="flex items-center m-4">
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Hello, sign in</div>
            <div className="text-sm xl:text-base font-bold">
              Accounts & Lists
            </div>
          </div>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="text-sm xl:text-base font-bold">& Orders</div>
          </div>
          <Link to={"/checkout"}>
          <div className="flex pr-3 pl-3">
            <ShoppingCartIcon className="h-[48px]" />
            <div className="relative">
              <div className="absolute right-[9px] font-bold m-2 text-wishquire-orange">
                {cart}
              </div>
            </div>
            <div className="mt-7 text-xs xl:text-sm font-bold">Cart</div>
          </div>
          </Link>
        </div>
      </div>
      <div className="flex bg-wishquire-yellow text-wishquire-darkblue space-x-3 text-xs xl:text-sm p-2 pl-6 border-b-4">
        <div>Today's Deals</div>
        <div>Customer Service</div>
        <div>Registry</div>
        <div>Gift Cards</div>
        <div>Sell</div>
      </div>
    </header>
  );
};

export default NavBar;
