export default function ButtonSub({ children }) {
  return (
    <div className="w-[100px] lg:w-[140px] lg:h-[45px] cursor-pointer inline-block bg-dark-gray bg-opacity-50 rounded-2xl transition ease-in-out duration-300 shadow-[-4px_4px_5px_0_rgba(24,31,34,0.6)] hover:shadow-[-4px_4px_5px_0_rgba(24,31,34,0.6),inset_-4px_5px_10px_0_rgba(181,220,238,0.4)] backdrop-blur-[10px]">
      <h1 className="text-center align-text-bottom text-light hover:text-dark-orange transition ease-in-out delay-100 text-[20px] lg:text-[26px] font-normal mt-1">
        {children}
      </h1>
    </div>
  );
}
