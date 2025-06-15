import decor from "../../assets/decor-right-black.svg";
import basseyn from "../../assets/catalog.basseyn.png";
import trenijor from "../../assets/catalog.trenijor.png";
import masajnistol from "../../assets/catalog.masajnistol.png";
import velodarojka from "../../assets/catalog.velodarojka.png";
import { IoMdArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Catalog() {
  return (
    <section className=" bg-neutral-50 py-16">
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
        <div className="grid grid-cols-4 gap-7 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          <div className=" bg-white shadow-lg hover:shadow-neutral-400 duration-400 rounded-2xl p-7 max-md:p-3 relative">
            <img
              src={basseyn}
              alt="basseyn"
              className="transition-transform duration-300 hover:scale-[1.05] "
            />
            <p className="text-xl max-md:text-[17px] max-lg:text-lg  hover:text-green-600 font-medium">
              basseyn karkasniy SPB 34905
            </p>
            <p className="text-xl max-md:text-md max-lg:text-lg  font-medium text-neutral-500">
              <span>7 840 000</span> so'm
            </p>
            <NavLink>
              <button className="w-[50px] h-[50px] rounded-[50%] cursor-pointer absolute bottom-4 right-5 max-md:bottom-1 max-md:right-3 hover:bg-neutral-700 hover:text-white  flex items-center justify-center transform duration-500">
                <IoMdArrowForward className=" rotate-[315deg] text-3xl" />
              </button>
            </NavLink>
            {/* xaridlar button  */}
            <NavLink>
              <button className=" px-3 py-1 rounded-xl cursor-pointer absolute top-5 left-5 bg-neutral-400 hover:bg-neutral-700 hover:text-white  flex items-center justify-center transform duration-500">
                xaridlar
              </button>
            </NavLink>
          </div>

          <div className=" bg-white shadow-lg hover:shadow-neutral-400 duration-400 rounded-2xl p-7 max-md:p-3 relative">
            <img
              src={trenijor}
              alt="basseyn"
              className="transition-transform duration-300 hover:scale-[1.05] "
            />
            <p className="text-xl max-md:text-[17px] max-lg:text-lg  hover:text-green-600 font-medium">
              basseyn karkasniy SPB 34905
            </p>
            <p className="text-xl max-md:text-md max-lg:text-lg  font-medium text-neutral-500">
              <span>7 840 000</span> so'm
            </p>
            <NavLink>
              <button className="w-[50px] h-[50px] rounded-[50%] cursor-pointer absolute bottom-4 right-5 max-md:bottom-1 max-md:right-3 hover:bg-neutral-700 hover:text-white  flex items-center justify-center transform duration-500">
                <IoMdArrowForward className=" rotate-[315deg] text-3xl" />
              </button>
            </NavLink>
            {/* xaridlar button  */}
            <NavLink>
              <button className=" px-3 py-1 rounded-xl cursor-pointer absolute top-5 left-5 bg-neutral-400 hover:bg-neutral-700 hover:text-white  flex items-center justify-center transform duration-500">
                xaridlar
              </button>
            </NavLink>
          </div>

          <div className=" bg-white shadow-lg hover:shadow-neutral-400 duration-400 rounded-2xl p-7 max-md:p-3 relative">
            <img
              src={masajnistol}
              alt="basseyn"
              className="transition-transform duration-300 hover:scale-[1.05] "
            />
            <p className="text-xl max-md:text-[17px] max-lg:text-lg  hover:text-green-600 font-medium">
              basseyn karkasniy SPB 34905
            </p>
            <p className="text-xl max-md:text-md max-lg:text-lg  font-medium text-neutral-500">
              <span>7 840 000</span> so'm
            </p>
            <NavLink>
              <button className="w-[50px] h-[50px] rounded-[50%] cursor-pointer absolute bottom-4 right-5 max-md:bottom-1 max-md:right-3 hover:bg-neutral-700 hover:text-white  flex items-center justify-center transform duration-500">
                <IoMdArrowForward className=" rotate-[315deg] text-3xl" />
              </button>
            </NavLink>
            {/* xaridlar button  */}
            <NavLink>
              <button className=" px-3 py-1 rounded-xl cursor-pointer absolute top-5 left-5 bg-neutral-400 hover:bg-neutral-700 hover:text-white  flex items-center justify-center transform duration-500">
                xaridlar
              </button>
            </NavLink>
          </div>

          <div className=" bg-white shadow-lg hover:shadow-neutral-400 duration-400 rounded-2xl p-7 max-md:p-3 relative">
            <img
              src={velodarojka}
              alt="basseyn"
              className="transition-transform duration-300 hover:scale-[1.05] "
            />
            <p className="text-xl max-md:text-[17px] max-lg:text-lg  hover:text-green-600 font-medium">
              basseyn karkasniy SPB 34905
            </p>
            <p className="text-xl max-md:text-md max-lg:text-lg  font-medium text-neutral-500">
              <span>7 840 000</span> so'm
            </p>
            <NavLink>
              <button className="w-[50px] h-[50px] rounded-[50%] cursor-pointer absolute bottom-4 right-5 max-md:bottom-1 max-md:right-3 hover:bg-neutral-700 hover:text-white  flex items-center justify-center transform duration-500">
                <IoMdArrowForward className=" rotate-[315deg] text-3xl" />
              </button>
            </NavLink>
            {/* xaridlar button  */}
            <NavLink>
              <button className=" px-3 py-1 rounded-xl cursor-pointer absolute top-5 left-5 bg-neutral-400 hover:bg-neutral-700 hover:text-white  flex items-center justify-center transform duration-500">
                xaridlar
              </button>
            </NavLink>
          </div>

          <div className=" bg-white shadow-lg hover:shadow-neutral-400 duration-400 rounded-2xl p-7 max-md:p-3 relative">
            <img
              src={masajnistol}
              alt="basseyn"
              className="transition-transform duration-300 hover:scale-[1.05] "
            />
            <p className="text-xl max-md:text-[17px] max-lg:text-lg  hover:text-green-600 font-medium">
              basseyn karkasniy SPB 34905
            </p>
            <p className="text-xl max-md:text-md max-lg:text-lg  font-medium text-neutral-500">
              <span>7 840 000</span> so'm
            </p>
            <NavLink>
              <button className="w-[50px] h-[50px] rounded-[50%] cursor-pointer absolute bottom-4 right-5 max-md:bottom-1 max-md:right-3 hover:bg-neutral-700 hover:text-white  flex items-center justify-center transform duration-500">
                <IoMdArrowForward className=" rotate-[315deg] text-3xl" />
              </button>
            </NavLink>
            {/* xaridlar button  */}
            <NavLink>
              <button className=" px-3 py-1 rounded-xl cursor-pointer absolute top-5 left-5 bg-neutral-400 hover:bg-neutral-700 hover:text-white  flex items-center justify-center transform duration-500">
                xaridlar
              </button>
            </NavLink>
          </div>

          <div className=" bg-white shadow-lg hover:shadow-neutral-400 duration-400 rounded-2xl p-7 max-md:p-3 relative">
            <img
              src={velodarojka}
              alt="basseyn"
              className="transition-transform duration-300 hover:scale-[1.05] "
            />
            <p className="text-xl max-md:text-[17px] max-lg:text-lg  hover:text-green-600 font-medium">
              basseyn karkasniy SPB 34905
            </p>
            <p className="text-xl max-md:text-md max-lg:text-lg  font-medium text-neutral-500">
              <span>7 840 000</span> so'm
            </p>
            <NavLink>
              <button className="w-[50px] h-[50px] rounded-[50%] cursor-pointer absolute bottom-4 right-5 max-md:bottom-1 max-md:right-3 hover:bg-neutral-700 hover:text-white  flex items-center justify-center transform duration-500">
                <IoMdArrowForward className=" rotate-[315deg] text-3xl" />
              </button>
            </NavLink>
            {/* xaridlar button  */}
            <NavLink>
              <button className=" px-3 py-1 rounded-xl cursor-pointer absolute top-5 left-5 bg-neutral-400 hover:bg-neutral-700 hover:text-white  flex items-center justify-center transform duration-500">
                xaridlar
              </button>
            </NavLink>
          </div>

          <div className=" bg-white shadow-lg hover:shadow-neutral-400 duration-400 rounded-2xl p-7 max-md:p-3 relative">
            <img
              src={trenijor}
              alt="basseyn"
              className="transition-transform duration-300 hover:scale-[1.05] "
            />
            <p className="text-xl max-md:text-[17px] max-lg:text-lg  hover:text-green-600 font-medium">
              basseyn karkasniy SPB 34905
            </p>
            <p className="text-xl max-md:text-md max-lg:text-lg  font-medium text-neutral-500">
              <span>7 840 000</span> so'm
            </p>
            <NavLink>
              <button className="w-[50px] h-[50px] rounded-[50%] cursor-pointer absolute bottom-4 right-5 max-md:bottom-1 max-md:right-3 hover:bg-neutral-700 hover:text-white  flex items-center justify-center transform duration-500">
                <IoMdArrowForward className=" rotate-[315deg] text-3xl" />
              </button>
            </NavLink>
            {/* xaridlar button  */}
            <NavLink>
              <button className=" px-3 py-1 rounded-xl cursor-pointer absolute top-5 left-5 bg-neutral-400 hover:bg-neutral-700 hover:text-white  flex items-center justify-center transform duration-500">
                xaridlar
              </button>
            </NavLink>
          </div>

          <div className=" bg-white shadow-lg hover:shadow-neutral-400 duration-400 rounded-2xl p-7 max-md:p-3 relative">
            <img
              src={basseyn}
              alt="basseyn"
              className="transition-transform duration-300 hover:scale-[1.05] "
            />
            <p className="text-xl max-md:text-[17px] max-lg:text-lg  hover:text-green-600 font-medium">
              basseyn karkasniy SPB 34905
            </p>
            <p className="text-xl max-md:text-md max-lg:text-lg  font-medium text-neutral-500">
              <span>7 840 000</span> so'm
            </p>
            <NavLink>
              <button className="w-[50px] h-[50px] rounded-[50%] cursor-pointer absolute bottom-4 right-5 max-md:bottom-1 max-md:right-3 hover:bg-neutral-700 hover:text-white  flex items-center justify-center transform duration-500">
                <IoMdArrowForward className=" rotate-[315deg] text-3xl" />
              </button>
            </NavLink>
            {/* xaridlar button  */}
            <NavLink>
              <button className=" px-3 py-1 rounded-xl cursor-pointer absolute top-5 left-5 bg-neutral-400 hover:bg-neutral-700 hover:text-white  flex items-center justify-center transform duration-500">
                xaridlar
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Catalog;
