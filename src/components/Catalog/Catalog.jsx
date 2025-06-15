import basseyn from "../../assets/catalog.basseyn.png";
import trenijor from "../../assets/catalog.trenijor.png";
import masajnistol from "../../assets/catalog.masajnistol.png";
import velodarojka from "../../assets/catalog.velodarojka.png";
import decor from "../../assets/decor-right-black.svg";
import { IoMdArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Catalog() {
  return (
    <section className=" bg-neutral-50 py-16">
      <div className="max-w-7xl px-5">
        <div className="flex flex-col items-center relative">
          <h1 className="w-[450px] text-4xl max-md:text-2xl max-md:w-full font-bold text-center">
            YANGI VA SIFATLI TOVARLARIMIZ
          </h1>
          <p className="text-xl max-md:text-md max-lg:text-lg  text-center py-5">
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
        <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-2">
          {/* card - 1 */}
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
          {/* card -2  */}
          <div className=" bg-white shadow-lg rounded-2xl p-7 max-md:p-3 relative">
            <img
              src={trenijor}
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
          {/* card - 3 video */}
          <div className=" col-span-2 bg-white shadow-lg rounded-2xl p-7 max-md:p-3">
            <div className="w-full h-[240px]">
              <img src={basseyn} alt="basseyn" className="w-full h-full" />
            </div>
          </div>
          {/* card - 4 */}
          <div className=" bg-white shadow-lg rounded-2xl p-7 max-md:p-3 relative">
            <img
              src={masajnistol}
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
          {/* card - 5 video */}
          <div className=" max-lg:hidden col-span-2 bg-white shadow-lg rounded-2xl p-7 max-md:p-3">
            <div className="w-full h-[240px]">
              <img src={basseyn} alt="basseyn" className="w-full h-full" />
            </div>
          </div>
          {/* card - 6 */}
          <div className=" bg-white shadow-lg rounded-2xl p-7 max-md:p-3 relative">
            <img
              src={velodarojka}
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
          {/* card - 7  */}
          <div className=" min-lg:hidden col-span-2 bg-white shadow-lg rounded-2xl p-7 max-md:p-3">
            <div className="w-full h-[240px]">
              <img src={basseyn} alt="basseyn" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Catalog;
