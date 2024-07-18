import React from "react";

const Conversation = ({ conversations }) => {
  return (
    <>
      <ul id="scroll-bottom" className="mt-16 space-y-5">
        {/* Chat Bubble --> */}
        <li className="w-full py-2 px-4 mx-auto flex gap-x-2 sm:gap-x-4 sm:py-4 sm:px-10">
          <img
            className="flex-shrink-0 w-[2.375rem] h-[2.375rem] rounded-full"
            src="/images/logo/logo.png"
            alt="avatar"
          />
          {/* Card --> */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700">
            <h2 className="font-medium text-gray-800 dark:text-white">
              How can we help?
            </h2>
            <div className="space-y-1.5">
              <p className="mb-1.5 text-sm text-gray-800 dark:text-white">
                You can ask questions like:
              </p>
              <ul className="list-disc list-outside space-y-1.5 ps-3.5">
                <li className="text-sm text-gray-800 dark:text-white">
                  What's Barokah AI?
                </li>

                <li className="text-sm text-gray-800 dark:text-white">
                  How to use Barokah AI?
                </li>
              </ul>
            </div>
          </div>
          {/* End Card */}
        </li>
        {/* End Chat Bubble */}

        {conversations.map((conv, index) => (
          <React.Fragment key={index}>
            {/* Question */}
            <li className="w-full py-2 px-4 ms-auto flex justify-end gap-x-2 sm:gap-x-4 sm:py-4 sm:px-10">
              <div className="grow text-end space-y-3">
                {/* Card */}
                <div className="inline-block bg-blue-600 rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-white">{conv.question}</p>
                </div>
                {/* End Card */}
              </div>

              <span className="flex-shrink-0 inline-flex items-center justify-center size-[38px] rounded-full bg-gray-600">
                <span className="text-sm font-medium text-white leading-none">
                  B
                </span>
              </span>
            </li>
            {/* Question */}

            {/* Answer */}
            <li className="w-full py-2 px-4 mx-auto gap-x-5 sm:gap-x-4 sm:py-4 sm:px-10">
              <div className="flex space-x-5">
                <img
                  className="flex-shrink-0 w-[2.375rem] h-[2.375rem] rounded-full"
                  src="https://github.com/Barokah-AI/BackEnd/assets/94734096/0bf32c79-e402-4565-9868-8a21c84d8b33"
                  // alt="avatar"
                />
                {/* Card */}
                <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 dark:bg-neutral-900 dark:border-neutral-700">
                  <h2 className="font-medium text-gray-800 dark:text-white">
                    Here the Answer...
                  </h2>
                  <div className="grow text-start space-y-1.5">
                    {conv.answer ? (
                      <p className="mb-1.5 text-sm text-gray-800 dark:text-white">
                        {conv.answer}
                      </p>
                    ) : (
                      <span className="loading loading-dots loading-lg"></span>
                    )}
                  </div>
                </div>
                {/* End Card */}
              </div>

              {/* Button Group */}
              <div className="w-full ml-5 py-2 px-4 mx-auto gap-x-2 sm:gap-x-4 sm:py-4 sm:px-10">
                <div className="sm:flex sm:justify-between">
                  <div>
                    <div className="inline-flex border border-gray-200 rounded-full p-0.5 dark:border-neutral-700">
                      <button
                        type="button"
                        className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-neutral-500 dark:hover:bg-blue-900 dark:hover:text-blue-200"
                      >
                        <svg
                          className="flex-shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path d="M7 10v12" />
                          <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-full text-gray-500 hover:bg-blue-100 hover:text-blue-800 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-neutral-500 dark:hover:bg-blue-900 dark:hover:text-blue-200"
                      >
                        <svg
                          className="flex-shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path d="M17 14V2" />
                          <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
                        </svg>
                      </button>
                    </div>
                    <button
                      type="button"
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="lucide lucide-clipboard flex-shrink-0 size-4"
                      >
                        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                      </svg>
                      Copy
                    </button>
                    <button
                      type="button"
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800"
                    >
                      <svg
                        className="flex-shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <circle cx="18" cy="5" r="3" />
                        <circle cx="6" cy="12" r="3" />
                        <circle cx="18" cy="19" r="3" />
                        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                      </svg>
                      Share
                    </button>
                  </div>
                </div>
              </div>
              {/* End Button Group */}
            </li>
            {/* Answer */}
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};

export default Conversation;
