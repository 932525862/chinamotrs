import decor from "../../assets/decor-right-black.svg";
import basseyn from "../../assets/catalog.basseyn.png";
import { IoMdArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Calatog_cards() {
  return (
    <section className=" bg-neutral-50 pb-16">
      <div className="max-x-7xl px-5">
        <div className="flex flex-col items-center relative">
          <h1 className="w-[450px] text-4xl max-md:text-2xl max-md:w-full font-bold text-center">
            YANGI VA SIFATLI TOVARLARIMIZ
          </h1>
          <p className="text-xl text-center py-5">
            Sening asosiy dushmaning - harakatsiliging bo'ladi
          </p>
          <img
            src={decor}
            alt=""
            className=" inline-block max-md:hidden rotate-[180deg] absolute top-1/2 left-16 max-lg:left-0"
          />
          <img
            src={decor}
            alt=""
            className=" inline-block max-md:hidden absolute top-1/2 right-16 max-lg:right-0"
          />
        </div>
        <div className="grid grid-cols-4 gap-7">
          <div className=" bg-white shadow-lg rounded-2xl p-7 max-md:p-3 relative">
            <img
              src={basseyn}
              alt="basseyn"
              className="transition-transform duration-300 hover:scale-[1.05] "
            />
            <p className="text-xl max-md:text-md max-lg:text-lg  hover:text-green-500 font-medium">
              basseyn karkasniy SPB 34905
            </p>
            <p className="text-xl max-md:text-md max-lg:text-lg  font-medium text-neutral-500">
              <span>7 840 000</span> so'm
            </p>
            <NavLink>
              <button className="w-[50px] h-[50px] rounded-[50%] cursor-pointer absolute bottom-4 hover:bg-neutral-700 hover:text-white right-5 flex items-center justify-center transform duration-500">
                <IoMdArrowForward className=" rotate-[315deg] text-3xl" />
              </button>
            </NavLink>
          </div>
          <div className=" bg-white shadow-lg rounded-2xl p-7 max-md:p-3 relative">
            <img
              src={basseyn}
              alt="basseyn"
              className="transition-transform duration-300 hover:scale-[1.05] "
            />
            <p className="text-xl max-md:text-md max-lg:text-lg  hover:text-green-500 font-medium">
              basseyn karkasniy SPB 34905
            </p>
            <p className="text-xl max-md:text-md max-lg:text-lg  font-medium text-neutral-500">
              <span>7 840 000</span> so'm
            </p>
            <NavLink>
              <button className="w-[50px] h-[50px] rounded-[50%] cursor-pointer absolute bottom-4 hover:bg-neutral-700 hover:text-white right-5 flex items-center justify-center transform duration-500">
                <IoMdArrowForward className=" rotate-[315deg] text-3xl" />
              </button>
            </NavLink>
          </div>
          <div className=" bg-white shadow-lg rounded-2xl p-7 max-md:p-3 relative">
            <img
              src={basseyn}
              alt="basseyn"
              className="transition-transform duration-300 hover:scale-[1.05] "
            />
            <p className="text-xl max-md:text-md max-lg:text-lg  hover:text-green-500 font-medium">
              basseyn karkasniy SPB 34905
            </p>
            <p className="text-xl max-md:text-md max-lg:text-lg  font-medium text-neutral-500">
              <span>7 840 000</span> so'm
            </p>
            <NavLink>
              <button className="w-[50px] h-[50px] rounded-[50%] cursor-pointer absolute bottom-4 hover:bg-neutral-700 hover:text-white right-5 flex items-center justify-center transform duration-500">
                <IoMdArrowForward className=" rotate-[315deg] text-3xl" />
              </button>
            </NavLink>
          </div>
          <div className=" bg-white shadow-lg rounded-2xl p-7 max-md:p-3 relative">
            <img
              src={basseyn}
              alt="basseyn"
              className="transition-transform duration-300 hover:scale-[1.05] "
            />
            <p className="text-xl max-md:text-md max-lg:text-lg  hover:text-green-500 font-medium">
              basseyn karkasniy SPB 34905
            </p>
            <p className="text-xl max-md:text-md max-lg:text-lg  font-medium text-neutral-500">
              <span>7 840 000</span> so'm
            </p>
            <NavLink>
              <button className="w-[50px] h-[50px] rounded-[50%] cursor-pointer absolute bottom-4 hover:bg-neutral-700 hover:text-white right-5 flex items-center justify-center transform duration-500">
                <IoMdArrowForward className=" rotate-[315deg] text-3xl" />
              </button>
            </NavLink>
          </div>
          <div className=" bg-white shadow-lg rounded-2xl p-7 max-md:p-3 relative">
            <img
              src={basseyn}
              alt="basseyn"
              className="transition-transform duration-300 hover:scale-[1.05] "
            />
            <p className="text-xl max-md:text-md max-lg:text-lg  hover:text-green-500 font-medium">
              basseyn karkasniy SPB 34905
            </p>
            <p className="text-xl max-md:text-md max-lg:text-lg  font-medium text-neutral-500">
              <span>7 840 000</span> so'm
            </p>
            <NavLink>
              <button className="w-[50px] h-[50px] rounded-[50%] cursor-pointer absolute bottom-4 hover:bg-neutral-700 hover:text-white right-5 flex items-center justify-center transform duration-500">
                <IoMdArrowForward className=" rotate-[315deg] text-3xl" />
              </button>
            </NavLink>
          </div>
          <div className=" bg-white shadow-lg rounded-2xl p-7 max-md:p-3 relative">
            <img
              src={basseyn}
              alt="basseyn"
              className="transition-transform duration-300 hover:scale-[1.05] "
            />
            <p className="text-xl max-md:text-md max-lg:text-lg  hover:text-green-500 font-medium">
              basseyn karkasniy SPB 34905
            </p>
            <p className="text-xl max-md:text-md max-lg:text-lg  font-medium text-neutral-500">
              <span>7 840 000</span> so'm
            </p>
            <NavLink>
              <button className="w-[50px] h-[50px] rounded-[50%] cursor-pointer absolute bottom-4 hover:bg-neutral-700 hover:text-white right-5 flex items-center justify-center transform duration-500">
                <IoMdArrowForward className=" rotate-[315deg] text-3xl" />
              </button>
            </NavLink>
          </div>
          <div className=" bg-white shadow-lg rounded-2xl p-7 max-md:p-3 relative">
            <img
              src={basseyn}
              alt="basseyn"
              className="transition-transform duration-300 hover:scale-[1.05] "
            />
            <p className="text-xl max-md:text-md max-lg:text-lg  hover:text-green-500 font-medium">
              basseyn karkasniy SPB 34905
            </p>
            <p className="text-xl max-md:text-md max-lg:text-lg  font-medium text-neutral-500">
              <span>7 840 000</span> so'm
            </p>
            <NavLink>
              <button className="w-[50px] h-[50px] rounded-[50%] cursor-pointer absolute bottom-4 hover:bg-neutral-700 hover:text-white right-5 flex items-center justify-center transform duration-500">
                <IoMdArrowForward className=" rotate-[315deg] text-3xl" />
              </button>
            </NavLink>
          </div>
          <div className=" bg-white shadow-lg rounded-2xl p-7 max-md:p-3 relative">
            <img
              src={basseyn}
              alt="basseyn"
              className="transition-transform duration-300 hover:scale-[1.05] "
            />
            <p className="text-xl max-md:text-md max-lg:text-lg  hover:text-green-500 font-medium">
              basseyn karkasniy SPB 34905
            </p>
            <p className="text-xl max-md:text-md max-lg:text-lg  font-medium text-neutral-500">
              <span>7 840 000</span> so'm
            </p>
            <NavLink>
              <button className="w-[50px] h-[50px] rounded-[50%] cursor-pointer absolute bottom-4 hover:bg-neutral-700 hover:text-white right-5 flex items-center justify-center transform duration-500">
                <IoMdArrowForward className=" rotate-[315deg] text-3xl" />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calatog_cards;
