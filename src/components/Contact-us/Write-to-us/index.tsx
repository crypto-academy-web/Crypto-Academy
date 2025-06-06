import React from "react";

import Text from "@/components/ui/Text";

const WriteUs = () => {
  
  return (
    <div className="w-full flex justify-center items-center">
      <div className=" w-full max-w-[1242px] px-5">
        <Text className="text-black text-[21px] font-bold mb-[23px]">
          Write to us:
        </Text>
        <div className="flex justify-between items-center mb-[18px] mob:flex-col mob:gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-[#202630]/10 w-full max-w-[590px] h-[80px] px-[30px] focus:outline-none mob:max-w-full"
          />
          <input
            type="email"
            placeholder="Your E-mail"
            className="bg-[#202630]/10 w-full max-w-[590px] h-[80px] px-[30px] focus:outline-none mob:max-w-full"
          />
        </div>
        <textarea
          className="bg-[#202630]/10 w-full h-[260px] p-[30px] focus:outline-none mb-[73px]"
          placeholder="Your Message"
        />
      </div>
    </div>
  );
};

export default WriteUs;
