import FooterSection from "@/app/Components/Sections/FooterSection/FooterSection";
import Title from "@/app/Components/Title/Title";
import portfolios from "@/utils/portfolios";
import Image from "next/image";
import React from "react";


function page({ params }: any) {
  const { id } = params;

  const portfolio = portfolios.find((portfolio) => portfolio.link === id);
  const imagesLength = portfolio?.details?.images?.length || 0;

  if (!portfolio) {
    return (
      <div className="text-4xl font-bold text-center mt-20">
        Portfolio not found
      </div>
    );
  }
  return (
    <section>
      <div className="py-[5rem] mq-sections">
        <Title title={portfolio.title} label={portfolio.category} />
        <div className="mt-[5rem]">
          <Image
            src={portfolio.previewImage}
            alt={portfolio.title}
            className="rounded-md object-cover"
          />
        </div>

        <div className="mt-[5rem]">
          <div className="flex flex-col gap-8">
            <p className="uppercase text-gray-300 font-medium">
              {portfolio.date}
            </p>
            <p className="text-5xl font-bold text-gray-200">
              {portfolio.subtitle}
            </p>

            <div className="py-6 grid grid-cols-1 md:grid-cols-[320px_1fr] border-b-2">
              <div>
                <h3>Client:</h3>
                <p className="text-gray-300">{portfolio.client}</p>
              </div>
              <div className="mt-8 md:pl-16 md:border-l-2">
                <h3 className="text-gray-300 font-medium">Project Details</h3>
                <div className="mt-2 md:mt-8 flex flex-col gap-4">
                  {portfolio.details.paragraphs.map((detail, index) => (
                    <p key={index} className="text-gray-300">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="py-6 grid grid-cols-1 md:grid-cols-[320px_1fr] border-b-2">
                <div>
                  <h3>Challenges:</h3>
                  <ul className="text-gray-300 list-disc list-inside">
                    {portfolio.challenges?.map((challenge, index) => (
                      <li key={index}>{challenge}</li>
                    ))}
                  </ul>
                </div>
                <div className="md:pl-16 md:border-l-2">
                  <h3 className="text-gray-300 font-medium">
                    Project Features
                  </h3>
                  <ul className="mt-8 flex flex-col gap-4">
                    {portfolio.details.bulletPoints.map((bullet, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-4 text-gray-300"
                      >
                        <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex gap-8">
                {portfolio.details.images
                  .slice(0, imagesLength - 1)
                  .map((image, index) => {
                    return (
                      <div>
                        <Image
                          src={image}
                          alt={portfolio.title}
                          className="rounded-md object-cover"
                        />
                      </div>
                    );
                  })}
              </div>
              <div className="mt-8">
                <Image
                  src={portfolio.details.images[imagesLength - 1]}
                  alt={portfolio.title}
                  className="rounded-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </section>
  );
}

export default page;