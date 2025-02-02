import React from "react";
import Title from "../../Title/Title";
import { services } from "@/utils/utils";
import { check } from "@/utils/Icons";

function ServicesSection() {
  return (
    <section className="mt-[4rem] lg:pt-[8rem] pb-16 px-[18rem] mq-sections">
      <Title title="Check Out Our Services." label="Our Services" />
      <div className="mt-[5rem] grid grid-cols-1 xl:grid-cols-3 gap-6 md:grid-cols-2">
        {services.map((each, index) => {
          return (
            <div
              key={index}
              className="relative p-10 flex flex-col text-white border border-colour-1 rounded-xl"
            >
              <div className="bg-2 self-start w-[5rem] h-[5rem] flex justify-center items-center rounded-xl border-2 border-colour-2 shadow-sm">
                <span className="text-5xl text-gray-300">{each.icon}</span>
              </div>
              <div>
                <h3 className="py-6 font-semibold text-2xl">{each.title}</h3>
                {/* List */}
                <ul className="pt-6 flex flex-col gap-3">
                  {each.bulletPoints.map((point, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        {check}
                        <span>{point}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <span
                className="absolute top-0 left-0 bg-2 text-3xl font-semibold p-2 rounded-tr-[30px] rounded-bl-[30px] 
                    translate-x-[-50%] translate-y-[-50%]"
              >
                {++index}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ServicesSection;