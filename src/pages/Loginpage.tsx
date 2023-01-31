const Loginpage = () => {
  return (
    <>
      <h1 className="text-xl text-mpl_black absolute top-1/4 left-1/2  translate-x-[-50%]">
        로그인
      </h1>

      <a className="text-mpl_black absolute top-1/2 left-1/2  translate-y-[-200%] translate-x-[-50%] pl-7 drop-shadow-md block w-72 h-10 text-sm text-center leading-10 cursor-pointer bg-yellow-300 bg-[url('/src/assets/kakaologo.svg')] bg-no-repeat bg-[length:20px_20px] bg-[center_left_4.5rem]">
        카카오로 로그인하기
      </a>

      <a className="text-mpl_black absolute top-1/2 left-1/2  translate-y-[-50%] translate-x-[-50%] pl-7 drop-shadow-md block w-72 h-10 text-sm text-center leading-10 cursor-pointer bg-white bg-[url('/src/assets/googlelogo.svg')] bg-no-repeat bg-[length:20px_20px] bg-[center_left_5rem]">
        구글로 로그인하기
      </a>
    </>
  );
};

export default Loginpage;
