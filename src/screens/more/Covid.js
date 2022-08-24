import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/header/Header";
import { covidEmployees } from "../../constants/coviddata";

function Covid() {
  return (
    <>
      <Header />
      <Helmet>
        <title>
          Covid-19 Warriors Insurance Scheme | Saboo RKS | RKS Motor
        </title>
        <meta
          name="title"
          content="Covid-19 Warriors Insurance Scheme | Saboo RKS | RKS Motor"
        />
        <meta
          name="description"
          content="Saboo RKS provides insurance coverage for its employees who affected with Corona Virus. Covid warrior’s insurance scheme in RKS Motor. Precautionary measures to combat Covid-19."
        />
        <meta
          name="keywords"
          content="covid-19 warriors,maruti s19 warriors saboomaruti, s19 warriors insurance"
        />
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.saboomaruti.in/covid-19" />
        <meta
          property="og:title"
          content="Covid-19 Warriors Insurance Scheme | Saboo RKS | RKS Motor"
        />
        <meta
          property="og:description"
          content="Saboo RKS provides insurance coverage for its employees who affected with Corona Virus. Covid warrior’s insurance scheme in RKS Motor. Precautionary measures to combat Covid-19."
        />
        <meta property="og:image" content="" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.saboomaruti.in/covid-19"
        />
        <meta
          property="twitter:title"
          content="Covid-19 Warriors Insurance Scheme | Saboo RKS | RKS Motor"
        />
        <meta
          property="twitter:description"
          content="Saboo RKS provides insurance coverage for its employees who affected with Corona Virus. Covid warrior’s insurance scheme in RKS Motor. Precautionary measures to combat Covid-19."
        />
        <meta property="twitter:image" content="" />
      </Helmet>
      <img
        src={require("../../assets/Coronavirus-Web-Banner.webp")}
        alt="covid"
        className="max-w-full w-full lg:mt-16"
      />
      <CovidData />
      <div className="grid md:grid-cols-2 mx-auto max-w-6xl">
        <img src={require("../../assets/about-covid-19.webp")} alt="covid-19" />
        <div className="p-10 my-auto">
          <p className="uppercase text-blue-800">About covid-19</p>
          <p className="text-3xl my-3">About Coronavirus (COVID-19)</p>
          <p className="text-gray-700">
            <span className="text-blue-600">
              Coronavirus disease (COVID-19)
            </span>{" "}
            is an infectious disease caused by a newly discovered coronavirus.
            Most people infected with the COVID-19 virus will experience mild to
            moder ate respiratory illness and recover without requiring special
            treatment.
          </p>
          <p className="font-bold my-2">
            There are several measures you can take to protect yourself from
            #COVID19.
          </p>
          <ul className="list-disc ml-4">
            <li>Wash your hand properly for 20 seconds</li>
            <li>Do not touch your face</li>
            <li>Wear mask</li>
            <li>Avoid Social gatherings</li>
            <li>Rubbing your hand with an alcohol-based sanitizer</li>
            <li>
              Avoid shaking hands to help protect yourself and others from
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

const CovidData = () => {
  return (
    <>
      <div className="lg:relative max-w-7xl w-full bg-white mx-auto rounded shadow-md p-5 lg:-mt-20 z-10">
        <p className="uppercase text-xs">RKS covid-19 warriors</p>
        <p className="rounded-full max-w-max px-3 py-2 bg-blue-800 text-white uppercase text-xs mt-3 text-center">
          company news
        </p>
        <p className="text-3xl font-semibold my-3">
          RKS’s{" "}
          <span className="text-red-600">
            <i>COVID-19</i>
          </span>{" "}
          updates on how we're responding to the crisis
        </p>
        <p>How we support our employees, customers and communities</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-7">
          {covidEmployees.map((employee) => (
            <div
              className="flex flex-col bg-white border shadow-md rounded-lg overflow-hidden"
              key={employee.id}
            >
              <img src={employee.img} alt="1" />
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <div className="h-10 w-10 rounded-full object-fill shadow overflow-hidden">
                    <img src={employee.img} alt={employee.name} />
                  </div>

                  <p className="bg-red-100 text-red-700 uppercase rounded-full text-sm ml-2 px-4 py-1.5">
                    {employee.name}
                  </p>
                </div>
                <p className="mb-3">
                  {employee.name} thanks the Management of Saboo RKS for the
                  assistance and support provided during stressful times of
                  uncertainty. He especially conveys his heartfelt thanks to the
                  management for providing him with the financial aid of
                  Rs.50,000 as Covid insurance.
                </p>
                <a
                  href={employee.href}
                  rel="noreferrer noopener"
                  target="_blank"
                  className="border-2 border-blue-800 text-blue-800 px-4 py-1.5 rounded-full hover:bg-blue-800 hover:text-white duration-500"
                >
                  Watch video
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="font-semibold mt-7 mb-1">Started from March 2020</p>
        <p className="text-gray-600 text-sm">
          The COVID-19 pandemic has had a profound effect on the lives of
          millions around the world, the threat of the disease and increased
          casualties have destabilized our communities. Whilst this crisis has
          crept up with unprecedented challenges, both for people and society,
          compassionate brands across the globe have stepped up to provide the
          much needed financial aid to its employees. One such example to look
          up to is SABOO RKS, whose financial assistance and support can be
          remembered for years to come. The group has provided monetary aid to
          all the affected personnel of the company since March 2020 and has
          been balancing the physical and mental wellbeing of its employees.
        </p>
        <p className="font-semibold mt-7 mb-1">What we do for our Employees</p>
        <p className="text-gray-600 text-sm">
          Providing financial aid at this time of crisis & promoting health and
          safety are considered utmost important. Also, enhanced cleaning,
          sanitization at every touch point, safety and hygiene, distributing
          personal protective gear such as masks to our employees, social
          distancing measures to new efforts like disinfectant spraying and
          temperature checks across our operations are highly maintained.With
          the lens of care and support, SABOO RKS has gone above and beyond to
          show incredible support to its employees and their families during
          these stressful and uncertain times.
        </p>
      </div>
    </>
  );
};

export default Covid;
