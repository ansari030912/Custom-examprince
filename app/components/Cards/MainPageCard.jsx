import { Card } from "@mui/material";

const MainPageCard = () => {
  // Define your card data
  const cards = [
    {
      title: "Latest Questions & Answers",
      gradient: "bg-gradient-to-br from-gray-800 to-blue-400",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.8em"
          height="1.8em"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="M13.5 8H12v5l4.28 2.54l.72-1.21l-3.5-2.08zM13 3a9 9 0 0 0-9 9H1l3.96 4.03L9 12H6a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.896 8.896 0 0 0 13 21a9 9 0 0 0 9-9a9 9 0 0 0-9-9"
          />
        </svg>
      ),
    },
    {
      title: "Easy to refund",
      gradient: "bg-gradient-to-bl from-gray-800 to-blue-400",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.8em"
          height="1.8em"
          viewBox="0 0 512 512"
        >
          <path
            fill="white"
            d="M327.027 65.816L229.79 128.23l9.856 5.397l86.51-55.53l146.735 83.116l-84.165 54.023l4.1 2.244v6.848l65.923-42.316l13.836 7.838l-79.76 51.195v11.723l64.633-41.487l15.127 8.57l-79.76 51.195v11.723l64.633-41.487l15.127 8.57l-79.76 51.195v11.723l100.033-64.21l-24.828-14.062l24.827-15.937l-24.828-14.064l24.827-15.937l-23.537-13.333l23.842-15.305zm31.067 44.74c-21.038 10.556-49.06 12.342-68.79 4.383l-38.57 24.757l126.903 69.47l36.582-23.48c-14.41-11.376-13.21-28.35 2.942-41.67z"
          />
        </svg>
      ),
    },
    {
      title: "High success rate (96.6%)",
      gradient: "bg-gradient-to-br from-gray-800 to-blue-400",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.8em"
          height="1.8em"
          viewBox="0 0 512 512"
        >
          <path
            fill="white"
            d="M138.627 162.373c-6.249 6.249-6.249 16.379 0 22.627L345.372 415.372c6.249 6.249 16.379 6.249 22.628 0l34.341-34.343c6.249-6.249 6.249-16.379 0-22.628L195.598 127.029c-6.248-6.249-16.378-6.249-22.627 0l-34.344 34.344zM394.039 209.941c6.249-6.249 6.249-16.379 0-22.628L359.698 153c-6.249-6.249-16.379-6.249-22.628 0L153 359.698c-6.249 6.249-6.249 16.379 0 22.628l34.341 34.343c6.249 6.249 16.379 6.249 22.628 0l158.412-158.412zM306.284 300.903c-6.249 6.249-6.249 16.379 0 22.628l34.341 34.343c6.249 6.249 16.379 6.249 22.628 0l158.413-158.412c6.249-6.249 6.249-16.379 0-22.628L484.66 145.931c-6.249-6.249-16.379-6.249-22.628 0L306.284 300.903z"
          />
        </svg>
      ),
    },
    {
      title: "Quick access availability",
      gradient: "bg-gradient-to-br from-gray-800 to-blue-400",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.8em"
          height="1.8em"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="white"
            d="M256 512c0 141.392 114.616 256 256 256s256-114.608 256-256S653.384 256 512 256s-256 114.608-256 256zm384 0c0 105.872-86.144 192-192 192S256 617.872 256 512S342.144 320 448 320s192 86.128 192 192zM192 320c-7.68 0-14.624 5.088-16.896 12.736L96 704h147.072l48 96H784l48-96H928L819.584 332.736c-2.272-7.648-9.216-12.736-16.896-12.736H192zm64.64 192h108.64l-54.336 108.672L256.64 512zm448 0h108.64l54.336 108.672L704.64 512zM512 384c-88.224 0-160 71.776-160 160s71.776 160 160 160s160-71.776 160-160s-71.776-160-160-160z"
          />
        </svg>
      ),
    },
    {
      title: "Instantly prepared access",
      gradient: "bg-gradient-to-br from-gray-800 to-blue-400",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.8em"
          height="1.8em"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="white"
            d="M256 448h192v64H256zm0 128h192v64H256zm0 128h192v64H256zm384-256h192v64H640zm0 128h192v64H640zm0 128h192v64H640z"
          />
        </svg>
      ),
    },
    {
      title: "Safe, Private, Reliable",
      gradient: "bg-gradient-to-br from-gray-800 to-blue-400",
      icon: () => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.8em"
          height="1.8em"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="white"
            d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2M810 654.3L512 886.5L214 654.3V226.7l298-101.6l298 101.6z"
          />
          <path
            fill="white"
            fill-opacity="0.15"
            d="M214 226.7v427.6l298 232.2l298-232.2V226.7L512 125.1zM632.8 328H688c6.5 0 10.3 7.4 6.5 12.7L481.9 633.4a16.1 16.1 0 0 1-26 0l-126.4-174c-3.8-5.3 0-12.7 6.5-12.7h55.2c5.2 0 10 2.5 13 6.6l64.7 89.1l150.9-207.8c3-4.1 7.9-6.6 13-6.6"
          />
          <path
            fill="white"
            d="M404.2 453.3c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0 0 26 0l212.6-292.7c3.8-5.3 0-12.7-6.5-12.7h-55.2c-5.1 0-10 2.5-13 6.6L468.9 542.4z"
          />
        </svg>
      ),
    },
  ];

  return (
    <Card sx={{ p: "20px", borderRadius: "0px" }}>
      <section className="text-gray-600 body-font">
        <div className="px-5 py-5 mx-auto">
          <div className="mb-5">
            <h1 className="sm:text-3xl text-xl font-medium title-font text-gray-700 mb-4">
              <b>Ace Your Upcoming Certification Exam Quickly!</b>
            </h1>
            <p className="text-gray-500 leading-relaxed">
              <b>
                Prepare, study, and ace your certification exam effortlessly
                with everything you need. Enjoy 90 days of free updates and
                ensure 100% success on your first attempt.
              </b>
            </p>
          </div>
          <div className="flex flex-wrap sm:mx-auto sm:mb-2 -mx-2">
            {cards.map((card, index) => (
              <div className="p-1 sm:w-1/2 w-full" key={index}>
                <div
                  className={`text-white ${card.gradient} focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-tl-4xl flex p-4 h-full items-center`}
                >
                  {card.icon && <card.icon />}
                  <span className="title-font font-medium">
                    <div className="font-bold ml-2 text-white">
                      {card.title}
                    </div>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Card>
  );
};

export default MainPageCard;