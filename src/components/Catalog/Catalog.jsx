import decor from "../../assets/decor-right-black.svg";
import basseyn from "../../assets/catalog.basseyn.png";
import trenijor from "../../assets/catalog.trenijor.png";
import masajnistol from "../../assets/catalog.masajnistol.png";
import velodarojka from "../../assets/catalog.velodarojka.png";
import { IoMdArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { RiArrowRightUpLine } from "react-icons/ri";

function Catalog() {
  return (
    <section className=" bg-neutral-50 py-16">
      <div className="max-w-7xl px-5 mx-auto max-md:px-3">
        <div className="flex flex-col items-center relative">
          <h1 className="w-[450px] text-4xl max-md:text-2xl max-md:w-full font-one text-center">
            YANGI VA SIFATLI TOVARLARIMIZ
          </h1>
          <p className="text-xl text-center font-one py-5">
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
        <div className="grid lg:grid-cols-4 md:grid-cols-3 lg:gap-7 grid-cols-2 sm:gap-4 gap-3">
          <div className=" bg-white shadow-lg hover:shadow-neutral-400 duration-400 rounded-2xl p-7 max-md:p-3 relative flex flex-col justify-between">
            <img
              src={basseyn}
              alt="basseyn"
              className="transition-transform duration-300 hover:scale-[1.05] "
            />
            <div className="lg:text-xl md:text-lg sm:text-[18px] text-shadow-lg  font-one max-[550px]:text-[12px]">
              <p className="hover:text-green-500 ">
                basseyn karkasniy SPB 34905
              </p>
              <p className="text-neutral-500">
                <span>7 840 000</span> so'm
              </p>
            </div>
            <NavLink>
              <button className="w-[50px] h-[50px] max-md:w-[35px] max-md:h-[35px] rounded-[50%] cursor-pointer absolute bottom-4 right-5 max-md:bottom-1 max-md:right-3 hover:bg-neutral-700 hover:text-white  flex items-center justify-center transform duration-500">
                <IoMdArrowForward className=" rotate-[315deg] text-3xl max-md:text-2xl" />
              </button>
            </NavLink>
            {/* xaridlar button  */}
            <NavLink>
              <button className=" px-3 py-[1px] max-[550px]:px-2 rounded-xl border-2 border-green-500 text-green-500 group overflow-hidden cursor-pointer absolute top-5 left-5 hover:text-white flex items-center justify-center gap-1 transform duration-500">
                <span className=" z-20 max-[550px]:text-[12px]">xaridlar</span>
                <span className=" z-20 text-xl max-[550px]:text-[15px]">
                  <RiArrowRightUpLine />
                </span>
                <span className="w-full h-full z-10 absolute -left-72 bg-green-500  group-hover:left-0 transform duration-500 transition-all"></span>
              </button>
            </NavLink>
          </div>

          <div className=" bg-white shadow-lg hover:shadow-neutral-400 duration-400 rounded-2xl p-7 max-md:p-3 relative flex flex-col justify-between">
            <img
              src={trenijor}
              alt="basseyn"
              className="transition-transform duration-300 hover:scale-[1.05] "
            />
            <div className="lg:text-xl md:text-lg sm:text-[18px] text-shadow-lg  font-one max-[550px]:text-[12px]">
              <p className="hover:text-green-500 ">
                basseyn karkasniy SPB 34905
              </p>
              <p className="text-neutral-500">
                <span>7 840 000</span> so'm
              </p>
            </div>
            <NavLink>
              <button className="w-[50px] h-[50px] max-md:w-[35px] max-md:h-[35px] rounded-[50%] cursor-pointer absolute bottom-4 right-5 max-md:bottom-1 max-md:right-3 hover:bg-neutral-700 hover:text-white  flex items-center justify-center transform duration-500">
                <IoMdArrowForward className=" rotate-[315deg] text-3xl max-md:text-2xl" />
              </button>
            </NavLink>
            {/* xaridlar button  */}
            <NavLink>
              <button className=" px-3 py-[1px] max-[550px]:px-2 rounded-xl border-2 border-green-500 text-green-500 group overflow-hidden cursor-pointer absolute top-5 left-5 hover:text-white flex items-center justify-center gap-1 transform duration-500">
                <span className=" z-20 max-[550px]:text-[12px]">xaridlar</span>
                <span className=" z-20 text-xl max-[550px]:text-[15px]">
                  <RiArrowRightUpLine />
                </span>
                <span className="w-full h-full z-10 absolute -left-72 bg-green-500  group-hover:left-0 transform duration-500 transition-all"></span>
              </button>
            </NavLink>
          </div>
          
          <div className=" bg-white shadow-lg hover:shadow-neutral-400 duration-400 rounded-2xl p-7 max-md:p-3 relative flex flex-col justify-between">
            <img
              src={masajnistol}
              alt="basseyn"
              className="transition-transform duration-300 hover:scale-[1.05] "
            />
            <div className="lg:text-xl md:text-lg sm:text-[18px] text-shadow-lg  font-one max-[550px]:text-[12px]">
              <p className="hover:text-green-500 ">
                basseyn karkasniy SPB 34905
              </p>
              <p className="text-neutral-500">
                <span>7 840 000</span> so'm
              </p>
            </div>
            <NavLink>
              <button className="w-[50px] h-[50px] max-md:w-[35px] max-md:h-[35px] rounded-[50%] cursor-pointer absolute bottom-4 right-5 max-md:bottom-1 max-md:right-3 hover:bg-neutral-700 hover:text-white  flex items-center justify-center transform duration-500">
                <IoMdArrowForward className=" rotate-[315deg] text-3xl max-md:text-2xl" />
              </button>
            </NavLink>
            {/* xaridlar button  */}
            <NavLink>
              <button className=" px-3 py-[1px] max-[550px]:px-2 rounded-xl border-2 border-green-500 text-green-500 group overflow-hidden cursor-pointer absolute top-5 left-5 hover:text-white flex items-center justify-center gap-1 transform duration-500">
                <span className=" z-20 max-[550px]:text-[12px]">xaridlar</span>
                <span className=" z-20 text-xl max-[550px]:text-[15px]">
                  <RiArrowRightUpLine />
                </span>
                <span className="w-full h-full z-10 absolute -left-72 bg-green-500  group-hover:left-0 transform duration-500 transition-all"></span>
              </button>
            </NavLink>
          </div>

          <div className=" bg-white shadow-lg hover:shadow-neutral-400 duration-400 rounded-2xl p-7 max-md:p-3 relative flex flex-col justify-between">
            <img
              src={velodarojka}
              alt="basseyn"
              className="transition-transform duration-300 hover:scale-[1.05] "
            />
            <div className="lg:text-xl md:text-lg sm:text-[18px] text-shadow-lg  font-one max-[550px]:text-[12px]">
              <p className="hover:text-green-500 ">
                basseyn karkasniy SPB 34905
              </p>
              <p className="text-neutral-500">
                <span>7 840 000</span> so'm
              </p>
            </div>
            <NavLink>
              <button className="w-[50px] h-[50px] max-md:w-[35px] max-md:h-[35px] rounded-[50%] cursor-pointer absolute bottom-4 right-5 max-md:bottom-1 max-md:right-3 hover:bg-neutral-700 hover:text-white  flex items-center justify-center transform duration-500">
                <IoMdArrowForward className=" rotate-[315deg] text-3xl max-md:text-2xl" />
              </button>
            </NavLink>
            {/* xaridlar button  */}
            <NavLink>
              <button className=" px-3 py-[1px] max-[550px]:px-2 rounded-xl border-2 border-green-500 text-green-500 group overflow-hidden cursor-pointer absolute top-5 left-5 hover:text-white flex items-center justify-center gap-1 transform duration-500">
                <span className=" z-20 max-[550px]:text-[12px]">xaridlar</span>
                <span className=" z-20 text-xl max-[550px]:text-[15px]">
                  <RiArrowRightUpLine />
                </span>
                <span className="w-full h-full z-10 absolute -left-72 bg-green-500  group-hover:left-0 transform duration-500 transition-all"></span>
              </button>
            </NavLink>
          </div>

          <div className=" bg-white shadow-lg hover:shadow-neutral-400 duration-400 rounded-2xl p-7 max-md:p-3 relative flex flex-col justify-between">
            <img
              src={masajnistol}
              alt="basseyn"
              className="transition-transform duration-300 hover:scale-[1.05] "
            />
            <div className="lg:text-xl md:text-lg sm:text-[18px] text-shadow-lg  font-one max-[550px]:text-[12px]">
              <p className="hover:text-green-500 ">
                basseyn karkasniy SPB 34905
              </p>
              <p className="text-neutral-500">
                <span>7 840 000</span> so'm
              </p>
            </div>
            <NavLink>
              <button className="w-[50px] h-[50px] max-md:w-[35px] max-md:h-[35px] rounded-[50%] cursor-pointer absolute bottom-4 right-5 max-md:bottom-1 max-md:right-3 hover:bg-neutral-700 hover:text-white  flex items-center justify-center transform duration-500">
                <IoMdArrowForward className=" rotate-[315deg] text-3xl max-md:text-2xl" />
              </button>
            </NavLink>
            {/* xaridlar button  */}
            <NavLink>
              <button className=" px-3 py-[1px] max-[550px]:px-2 rounded-xl border-2 border-green-500 text-green-500 group overflow-hidden cursor-pointer absolute top-5 left-5 hover:text-white flex items-center justify-center gap-1 transform duration-500">
                <span className=" z-20 max-[550px]:text-[12px]">xaridlar</span>
                <span className=" z-20 text-xl max-[550px]:text-[15px]">
                  <RiArrowRightUpLine />
                </span>
                <span className="w-full h-full z-10 absolute -left-72 bg-green-500  group-hover:left-0 transform duration-500 transition-all"></span>
              </button>
            </NavLink>
          </div>

          <div className=" bg-white shadow-lg hover:shadow-neutral-400 duration-400 rounded-2xl p-7 max-md:p-3 relative flex flex-col justify-between">
            <img
              src={velodarojka}
              alt="basseyn"
              className="transition-transform duration-300 hover:scale-[1.05] "
            />
            <div className="lg:text-xl md:text-lg sm:text-[18px] text-shadow-lg  font-one max-[550px]:text-[12px]">
              <p className="hover:text-green-500 ">
                basseyn karkasniy SPB 34905
              </p>
              <p className="text-neutral-500">
                <span>7 840 000</span> so'm
              </p>
            </div>
            <NavLink>
              <button className="w-[50px] h-[50px] max-md:w-[35px] max-md:h-[35px] rounded-[50%] cursor-pointer absolute bottom-4 right-5 max-md:bottom-1 max-md:right-3 hover:bg-neutral-700 hover:text-white  flex items-center justify-center transform duration-500">
                <IoMdArrowForward className=" rotate-[315deg] text-3xl max-md:text-2xl" />
              </button>
            </NavLink>
            {/* xaridlar button  */}
            <NavLink>
              <button className=" px-3 py-[1px] max-[550px]:px-2 rounded-xl border-2 border-green-500 text-green-500 group overflow-hidden cursor-pointer absolute top-5 left-5 hover:text-white flex items-center justify-center gap-1 transform duration-500">
                <span className=" z-20 max-[550px]:text-[12px]">xaridlar</span>
                <span className=" z-20 text-xl max-[550px]:text-[15px]">
                  <RiArrowRightUpLine />
                </span>
                <span className="w-full h-full z-10 absolute -left-72 bg-green-500  group-hover:left-0 transform duration-500 transition-all"></span>
              </button>
            </NavLink>
          </div>

          <div className=" bg-white shadow-lg hover:shadow-neutral-400 duration-400 rounded-2xl p-7 max-md:p-3 relative flex flex-col justify-between">
            <img
              src={basseyn}
              alt="basseyn"
              className="transition-transform duration-300 hover:scale-[1.05] "
            />
            <div className="lg:text-xl md:text-lg sm:text-[18px] text-shadow-lg  font-one max-[550px]:text-[12px]">
              <p className="hover:text-green-500 ">
                basseyn karkasniy SPB 34905
              </p>
              <p className="text-neutral-500">
                <span>7 840 000</span> so'm
              </p>
            </div>
            <NavLink>
              <button className="w-[50px] h-[50px] max-md:w-[35px] max-md:h-[35px] rounded-[50%] cursor-pointer absolute bottom-4 right-5 max-md:bottom-1 max-md:right-3 hover:bg-neutral-700 hover:text-white  flex items-center justify-center transform duration-500">
                <IoMdArrowForward className=" rotate-[315deg] text-3xl max-md:text-2xl" />
              </button>
            </NavLink>
            {/* xaridlar button  */}
            <NavLink>
              <button className=" px-3 py-[1px] max-[550px]:px-2 rounded-xl border-2 border-green-500 text-green-500 group overflow-hidden cursor-pointer absolute top-5 left-5 hover:text-white flex items-center justify-center gap-1 transform duration-500">
                <span className=" z-20 max-[550px]:text-[12px]">xaridlar</span>
                <span className=" z-20 text-xl max-[550px]:text-[15px]">
                  <RiArrowRightUpLine />
                </span>
                <span className="w-full h-full z-10 absolute -left-72 bg-green-500  group-hover:left-0 transform duration-500 transition-all"></span>
              </button>
            </NavLink>
          </div>

          <div className=" bg-white shadow-lg hover:shadow-neutral-400 duration-400 rounded-2xl p-7 max-md:p-3 relative flex flex-col justify-between">
            <img
              src={trenijor}
              alt="basseyn"
              className="transition-transform duration-300 hover:scale-[1.05] "
            />
            <div className="lg:text-xl md:text-lg sm:text-[18px] text-shadow-lg  font-one max-[550px]:text-[12px]">
              <p className="hover:text-green-500 ">
                basseyn karkasniy SPB 34905
              </p>
              <p className="text-neutral-500">
                <span>7 840 000</span> so'm
              </p>
            </div>
            <NavLink>
              <button className="w-[50px] h-[50px] max-md:w-[35px] max-md:h-[35px] rounded-[50%] cursor-pointer absolute bottom-4 right-5 max-md:bottom-1 max-md:right-3 hover:bg-neutral-700 hover:text-white  flex items-center justify-center transform duration-500">
                <IoMdArrowForward className=" rotate-[315deg] text-3xl max-md:text-2xl" />
              </button>
            </NavLink>
            {/* xaridlar button  */}
            <NavLink>
              <button className=" px-3 py-[1px] max-[550px]:px-2 rounded-xl border-2 border-green-500 text-green-500 group overflow-hidden cursor-pointer absolute top-5 left-5 hover:text-white flex items-center justify-center gap-1 transform duration-500">
                <span className=" z-20 max-[550px]:text-[12px]">xaridlar</span>
                <span className=" z-20 text-xl max-[550px]:text-[15px]">
                  <RiArrowRightUpLine />
                </span>
                <span className="w-full h-full z-10 absolute -left-72 bg-green-500  group-hover:left-0 transform duration-500 transition-all"></span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Catalog;
