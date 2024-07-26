import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Conversation from "./Conversation";
import useConversations from "./ConversationConfig";
import { useLogout } from "./Logout";
import { Link } from "react-router-dom";

const ChatPage = () => {
  const logout = useLogout();
  const navigate = useNavigate();
  const [responseCount, setResponseCount] = useState(0);
  const isUserLoggedIn = !!Cookies.get("authToken");
  const { input, isLoading, setInput, conversations, handleSubmit } = useConversations();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSend();
    }
  };

  const handleSend = () => {
    if (responseCount < 3 || isUserLoggedIn) {
      handleSubmit(input);
      setResponseCount(responseCount + 1);
    } else {
      alert("Must be logged in to continue the conversation.");
      navigate("/signin");
    }
  };

  return (
    <>
      {/* sidebar */}
      {/* <!-- Sidebar Toggle --> */}
      <div className="drawer sticky top-0 inset-x-0 z-30 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-dark dark:border-y-neutral-700">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex items-center py-3 space-x-5 drawer-content flex items-center py-3 space-x-5 justify-between">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex gap-2">
              <img src="/images/logo/logo.png" alt="Image Description" className="w-10 h-auto" />
              <div>
                <h1 className="mt-1 text-2xl font-bold text-blue-600">BAROKAH - AI</h1>
              </div>
            </div>
            {/* <!--Logo */}
          </div>

          {/* Page content here */}
          <label htmlFor="my-drawer" className="mt-1 text-gray-500 hover:text-gray-600 drawer-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M3 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 18a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </label>
        </div>
        <div className="drawer-side z-[90]">
          <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <nav className="menu fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 overflow-y-auto dark:bg-gray-800 dark:border-gray-600">
            {/* Sidebar content here */}
            <div className="flex items-center justify-between pt-4 pe-4 ps-7">
              {/* Logo */}
              <div className="flex gap-2">
                <img src="/images/logo/logo.png" alt="Image Description" className="w-10 h-auto" />
                <div>
                  <Link to="/" className="mt-1 text-2xl font-bold text-blue-600">
                    BarokahAI
                  </Link>
                </div>
              </div>
              {/* <!--Logo */}
            </div>
            {/* List */}
            <ul className="space-y-1.5 p-4">
              <li>
                <a className="flex items-center gap-x-3 py-2 px-3 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300" href="#">
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  New chat
                </a>
              </li>
              <li>
                <a className="flex items-center gap-x-3 py-2 px-3 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300" href="#">
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
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
                <label className="flex justify-between items-center gap-x-3 py-2 px-3 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300" htmlFor="my_modal_6">
                  Sign out
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                    <polyline points="10 17 15 12 10 7" />
                    <line x1="15" x2="3" y1="12" y2="12" />
                  </svg>
                </label>
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
              <img src="/images/logo/logo.png" alt="Image Description" className="w-10 h-auto" />
              <div>
                <Link to="/" className="mt-1 text-2xl font-bold text-blue-600">
                  BarokahAI
                </Link>
              </div>
            </div>
            {/* <!--Logo */}
          </div>

          <div className="h-full">
            {/* List */}
            <ul className="space-y-1.5 p-4">
              <li>
                <a className="flex items-center gap-x-3 py-2 px-3 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300" href="#">
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  New chat
                </a>
              </li>
              <li>
                <a className="flex items-center gap-x-3 py-2 px-3 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300" href="#">
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
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
              <label className="flex justify-between items-center gap-x-3 py-2 px-3 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300" htmlFor="my_modal_6">
                Sign out
                <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <polyline points="10 17 15 12 10 7" />
                  <line x1="15" x2="3" y1="12" y2="12" />
                </svg>
              </label>
            </div>
          </div>
          {/* End Footer */}
        </nav>
      </div>
      {/* End sideebar */}

      {/* Modal Logout */}
      <input type="checkbox" id="my_modal_6" className="modal-toggle absolute opacity-0 w-0 h-0" />
      <div className="modal" role="dialog">
        <div className="modal-box text-center">
          <span className="mb-4 inline-flex justify-center items-center size-[62px] rounded-full border-4 border-red-50 bg-red-100 text-red-500 dark:bg-red-700 dark:border-red-600 dark:text-red-100">
            <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </span>
          <h3 className="mb-2 text-2xl font-bold text-gray-800 dark:text-neutral-200">Sign out</h3>
          <p className="text-gray-500 dark:text-neutral-500">Are you sure you want to sign out?</p>
          <div className="modal-action flex justify-center">
            <button onClick={logout} className="btn bg-red-500 hover:bg-red-600 text-white" htmlFor="my_modal_6">
              Sign out
            </button>
            <label htmlFor="my_modal_6" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
      {/* End Modal Logout */}

      {/* Content */}
      <div className="relative w-full lg:ps-64">
        <div className="pt-10 pb-24 sm:pb-0 sm:min-h-screen sm:pt-14">
          {/* Title */}
          <div className="max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">Welcome to Barokah AI</h1>
            <p className="text-sm mt-3 text-gray-600 dark:text-neutral-400">There is nothing hidden in this world</p>
            <p className="text-sm mt-3 text-gray-600 dark:text-neutral-400">BarokahAi is here to help you know everything</p>
          </div>
          {/* End Title */}

          {/* Conversation */}
          <Conversation conversations={conversations} />
          {/* End Conversation */}

          {/* Chat */}
        </div>

        {/* Input area */}
        <footer className="fixed bottom-0 w-full px-4 mx-auto z-10 p-3 sm:sticky sm:py-6 sm:px-10">
          {/* Alert Modal */}
          {!isUserLoggedIn && responseCount >= 3 && (
            <div role="alert" className="alert mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info h-6 w-6 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <h3 className="font-bold">You Have Reached the Limit of 3 Chats!!!</h3>
                <div className="text-xs"> You have reached the limit of 3 questions. Please login to continue the conversation.</div>
              </div>
              <div>
                <button className="btn btn-sm btn-primary" onClick={() => navigate("/signin")}>
                  Login
                </button>
              </div>
            </div>
          )}
          {/* End Alert Modal */}
          <div className="relative">
            <input
              className="p-4 pb-12 block w-full bg-gray-100 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-200 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Ask me anything you want..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              disabled={responseCount >= 3 && !isUserLoggedIn}
            />

            {/* Toolbar */}
            <div className="absolute bottom-px inset-x-px p-2 rounded-b-lg bg-gray-100 dark:bg-neutral-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <button
                    type="button"
                    className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-neutral-500 dark:hover:text-blue-500"
                  >
                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center gap-x-1">
                  <button
                    onClick={handleSend}
                    type="submit"
                    disabled={isLoading || (responseCount >= 3 && !isUserLoggedIn)}
                    className="inline-flex flex-shrink-0 justify-center items-center size-8 rounded-lg text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <svg className="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      {/* End Chat */}
    </>
  );
};

export default ChatPage;
