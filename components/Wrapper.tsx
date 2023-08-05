const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* CIRCLES */}
      <div className="absolute inset-x-0 -top-8 mx-auto h-[280px] w-[280px] rounded-full bg-footer 2xs:h-[310px] 2xs:w-[310px] xs:h-[330px] xs:w-[330px]">
        <div className="absolute -left-14 -top-8 mx-auto h-[210px] w-[210px] rounded-full bg-[#f0f5f9ab] xs:-left-16 xs:h-[230px] xs:w-[230px]" />
      </div>
      <section className="relative p-4">{children}</section>
    </>
  );
};

export default Wrapper;
