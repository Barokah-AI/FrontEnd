import React from "react";
import { Link } from "react-router-dom";
import Conversation from "./Conversation";
import useConversations from "./ConversationConfig";

const ChatPage = () => {
  const {
    input,
    isLoading,
    setInput,
    conversations,
    handleKeyPress,
    handleSubmit,
  } = useConversations();
  return (
    <>
      {/* sidebar */}
      {/* <!-- Sidebar Toggle --> */}
      <div className="drawer sticky top-0 inset-x-0 z-30 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-dark dark:border-y-neutral-700">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex items-center py-3 space-x-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex gap-2">
              <img
                src="/images/logo/logo.png"
                alt="Image Description"
                className="w-10 h-auto"
              />
              <div>
                <h1 className="mt-1 text-2xl font-bold text-blue-600">
                  Barokah-AI
                </h1>
              </div>
            </div>
            {/* <!--Logo */}
          </div>

          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="mt-1 text-gray-500 hover:text-gray-600 drawer-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M3 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 18a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="drawer-side z-[90]">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <nav className="menu fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 overflow-y-auto">
            {/* Sidebar content here */}
            <div className="flex items-center justify-between pt-4 pe-4 ps-7">
              {/* Logo */}
              <div className="flex gap-2">
                <img
                  src="/images/logo/logo.png"
                  alt="Image Description"
                  className="w-10 h-auto"
                />
                <div>
                  <h1 className="mt-1 text-2xl font-bold text-blue-600">
                    Barokah-AI
                  </h1>
                </div>
              </div>
              {/* <!--Logo */}
            </div>
            {/* List */}
            <ul className="space-y-1.5 p-4">
              <li>
                <a
                  className="flex items-center gap-x-3 py-2 px-3 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                  href="#"
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
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  New chat
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-x-3 py-2 px-3 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                  href="#"
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
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  Save conversation
                </a>
              </li>
            </ul>
            {/* <!--List */}
            {/* Footer */}
            <div className="mt-auto">
              <div className="p-4 border-t border-gray-200 dark:border-neutral-700">
                <a
                  className="flex justify-between items-center gap-x-3 py-2 px-3 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                  href="#"
                >
                  Sign in
                  <svg
                    className="flex-shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                    <polyline points="10 17 15 12 10 7" />
                    <line x1="15" x2="3" y1="12" y2="12" />
                  </svg>
                </a>
              </div>
            </div>
            {/* End Footer */}
          </nav>
        </div>
      </div>
      {/* End Sidebar Toggle */}

      <div
        id="application-sidebar"
        className="hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:bg-dark dark:border-neutral-700 dark:shadow-lg dark:translate-x-0 dark:end-auto dark:bottom-0 dark:[&::-webkit-scrollbar]:w-2 dark:[&::-webkit-scrollbar-thumb]:rounded-full dark:[&::-webkit-scrollbar-track]:bg-neutral-800 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-700"
      >
        <nav className="hs-accordion-group size-full flex flex-col">
          <div className="flex items-center justify-between pt-4 pe-4 ps-7">
            {/* Logo */}
            <div className="flex gap-2">
              <img
                src="/images/logo/logo.png"
                alt="Image Description"
                className="w-10 h-auto"
              />
              <div>
                <h1 className="mt-1 text-2xl font-bold text-blue-600">
                  Barokah-AI
                </h1>
              </div>
            </div>
            {/* <!--Logo */}
          </div>

          <div className="h-full">
            {/* List */}
            <ul className="space-y-1.5 p-4">
              <li>
                <a
                  className="flex items-center gap-x-3 py-2 px-3 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                  href="#"
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
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  New chat
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-x-3 py-2 px-3 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                  href="#"
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
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                  Save conversation
                </a>
              </li>
            </ul>
            {/* <!--List */}
          </div>

          {/* Footer */}
          <div className="mt-auto">
            <div className="p-4 border-t border-gray-200 dark:border-neutral-700">
              <Link
                className="flex justify-between items-center gap-x-3 py-2 px-3 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300"
                to="/signin"
                >
                Sign in
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <polyline points="10 17 15 12 10 7" />
                  <line x1="15" x2="3" y1="12" y2="12" />
                </svg>
              </Link>
            </div>
          </div>
          {/* End Footer */}
        </nav>
      </div>
      {/* End sideebar */}

      {/* content */}
      <div className="relative w-full lg:ps-64">
        <div className="pt-10 pb-24 sm:pb-0 sm:min-h-screen sm:pt-14">
          {/* title */}
          <div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
              Welcome to Barokah AI
            </h1>
            <p className="mt-3 text-gray-600 dark:text-neutral-400">
              Your AI-powered copilot for the web
            </p>
          </div>
          {/* End Title */}

          {/* Conversation */}
          <Conversation conversations={conversations} />
          {/* End Conversation */}

          {/* Chat */}
        </div>

        {/* Input area */}
        <footer className="fixed bottom-0 w-full px-4 mx-auto z-10 p-3 sm:sticky sm:py-6 sm:px-10">
          {/* Input */}
          <div className="relative">
            <input
              className="p-4 pb-12 block w-full bg-gray-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              disabled={isLoading}
            ></input>

            {/*  Toolbar */}
            <div className="absolute bottom-px inset-x-px p-2 rounded-b-lg bg-gray-100 dark:bg-neutral-800">
              <div className="flex justify-between items-center">
                {/*  Button Group */}
                <div className="flex items-center">
                  {/*  Attach Button */}
                  <button
                    type="button"
                    className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-neutral-500 dark:hover:text-blue-500"
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
                      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                    </svg>
                  </button>
                  {/*  End Attach Button  */}
                </div>
                {/*  End Button Group */}

                {/*  Button Group */}
                <div className="flex items-center gap-x-1">
                  {/*  Send Button */}
                  <button
                    onClick={() => handleSubmit(input)}
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <svg
                      className="flex-shrink-0 size-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                    </svg>
                  </button>
                  {/*  End Send Button */}
                </div>
                {/*  End Button Group */}
              </div>
            </div>
            {/*  End Toolbar */}
          </div>
          {/*  Input */}
        </footer>
        {/*  End Input area */}
      </div>
      {/*  End Content */}
    </>
  );
};

export default ChatPage;
