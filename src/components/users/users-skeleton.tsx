const UsersSkeleton = () => {
  return (
    <div className="animate-pulse w-[328px] py-[20px] px-[20px] bg-[#FFFFFF] rounded-[10px] md:w-[344px] lg:w-[282px]">
      <div
        className="rounded-full mx-auto bg-gray-200"
        style={{ width: "70px", height: "70px" }}
      ></div>
      <div className="text-center mt-[20px] h-4 bg-gray-200 rounded"></div>
      <div className="text-center mt-[20px] h-4 bg-gray-200 rounded"></div>
      <div className="text-center mt-[20px] h-4 bg-gray-200 rounded"></div>
      <div className="text-center mt-[20px] h-4 bg-gray-200 rounded"></div>
    </div>
  );
};

export default UsersSkeleton;
