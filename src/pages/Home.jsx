import { useState } from 'react';
import { HiMiniWifi } from "react-icons/hi2";
import { RiStackFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { GiGreekTemple } from "react-icons/gi";
import NotARobot from "../component/NotARobot";
import { Link } from "react-router-dom";
import BackgroundVideo from "../component/BackgroundVideo";
import Logo from "../assets/faucet.png";
import { submitTokenAndAmount } from '../utils/axios';
import { RxCross2 } from 'react-icons/rx';

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [isShowModal, setIsShowModal] = useState(false);
  const [hash, setHash] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const validateInput = () => {
    if (inputValue.trim() === "") {
      setError("This field is required.");
    } else {
      setError("");
    }
  };

  const handleSubmit=async()=>{
    const apiData = await submitTokenAndAmount(inputValue);
    setHash(apiData);
    setInputValue("");
    if(apiData){
      setIsShowModal(!isShowModal);
    }
  }

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center py-12 px-4 md:px-6 lg:px-0">
      <BackgroundVideo />

      <div className="relative z-10 bg-[#0C0C0C] bg-opacity-50 w-full max-w-4xl h-auto p-8 rounded-3xl border-[1px] border-white border-opacity-15">
        <div className='flex flex-row justify-center items-center space-x-2'>
        <img src={Logo} alt="faucet-pollux" className='h-8 img-yellow-filter -mt-3' />
        <p className="text-[#D89B24] text-3xl font-bold mb-4 text-center">
          Pox Chain Faucet
        </p>
        </div>
        <div className="w-full">
          <input
            id="inputField"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={validateInput}
            className={`shadow appearance-none border rounded-md p-2 mt-2 w-full py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              error ? "border-red-500" : ""
            }`}
            placeholder="Input your POX Chain Address"
          />
          {error && <p className="text-red-500 text-xs italic mt-2">{error}</p>}
        </div>

        <div className="mt-6 w-full">
        <p className="bg-white text-gray-700 font-medium w-full py-2 px-4 rounded-md flex justify-between items-center border border-gray-700">
        Give me 5 POX
      </p>
        </div>

        <div className="bg-white mt-8 w-full max-w-4xl py-3 rounded-md flex flex-wrap justify-around p-4">
          <div className="flex flex-col items-center space-y-2">
            <HiMiniWifi size={24} />
            <p className="text-[#B5AFB8] text-lg">peers</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <RiStackFill size={24} />
            <p className="text-[#B5AFB8] text-lg">blocks</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <FaHeart size={24} />
            <p className="text-[#B5AFB8] text-lg">poxs</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <GiGreekTemple size={24} />
            <p className="text-[#B5AFB8] text-lg">funded</p>
          </div>
        </div>

        {/* <div className="mt-6">
          <NotARobot />
        </div> */}

        <div className="mt-6 text-center">
          <button
          onClick={handleSubmit}
            type="button"
            className="px-6 py-2 bg-[#4AA5F0] text-white rounded-md font-semibold"
          >
            Submit
          </button>
        </div>

        <div className="mt-7 text-center">
          <p className="text-white text-2xl font-bold">How does this work?</p>
          <p className="text-white mt-2">
            <span className="text-[#4AA5F0]">
              POX,PUSD,XRP,USDP,USDTP,USDC,DAI
            </span>{" "}
            are issued as PRC20 tokens.
          </p>
          <p className="text-white mt-2">
            Click to get detail about{" "}
            <span className="text-[#4AA5F0]">PRC20</span>
          </p>
          <p className="text-white mt-2">
            Support Telegram{" "}
            <Link to="https://t.me/polluxcoin">
              <span className="text-[#4AA5F0]">https://t.me/polluxcoin</span>
            </Link>
          </p>
          <p className="text-white mt-2">
            The faucet is running reCaptcha protection against bots.
          </p>
        </div>
      </div>

        {isShowModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
              <button
              onClick={()=>setIsShowModal(!isShowModal)}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              >
                <RxCross2 size={24} />
              </button>
              <p className="text-2xl font-bold mb-4 text-center">Congratulations!</p>
              <p className="text-lg mb-4 text-center">Wow 😱! You got 5 POX</p>
              <a
                href={`https://testnet.poxscan.io/transactions-detail/${hash}`}
                className="block text-center text-blue-500 hover:underline"
              >
                Click here for more details.
              </a>
            </div>
          </div>
        )}
    </div>
  );
};

export default Home;
