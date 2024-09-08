"use client";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//import React, { useState } from 'react';

//   const [result, setResult] = useState("");
//   const [prompt, setPrompt] = useState("");

//   const [promtValue, setPromptValue] = useState(["Qestion"]);
//   const [resultValue, setResultValue] = useState(["Answer"]);
//   useEffect(() => {
//     // Check if the window object is available (only in browser)
//     if (
//       sessionStorage.getItem("chatbotresult") !== null ||
//       sessionStorage.getItem("chatbotprompt") !== null
//     ) {
//       if (typeof window !== "undefined") {
//         // Retrieve item from sessionStorage
//         const rvalue = sessionStorage.getItem("chatbotresult");
//         const pvalue = sessionStorage.getItem("chatbotprompt");

//         const splitResult = rvalue.split(",");
//         const splitPrompt = pvalue.split(",");
//         setPromptValue(splitPrompt);
//         setResultValue(splitResult);

//         // Set the retrieved value in state
//       }
//     } else {
//       console.log("Item does not exist in sessionStorage");
//     }
//   }, []);

//   const router = useRouter();

//   function getResponse() {
//     sessionStorage.setItem("chatbotprompt", prompt + " , " + promtValue);
//     fetch("/api/jobportal-chatbot", {
//       method: "POST",
//       body: JSON.stringify({ prompt }),
//     }).then((res) =>
//       res.json().then((res) => {
//         alert();
//         setResult(res.message);
//         sessionStorage.setItem(
//           "chatbotresult",
//           resultValue + " , " + res.message
//         );
//         //router.refresh("/chatbot");
//         // window.location.reload();
//         console.log(resultValue);
//       })
//     );
//   }
//   return (
//     <>
//       <div className="p-5 lg:p-10 flex flex-col ">
//         <h1 className="text-3xl  font-semibold">Chatbot For Candidate</h1>
//         <hr className="mt-5" />
//         <div className="text-xl font-semibold block  mt-10 p-10 gap-5 grid-col-gap-6 ">
//           {/* inside all chat */}
//           {resultValue !== "," && resultValue.length > 0
//             ? resultValue.map((d, i) => {
//                 return (
//                   <div className="mt-5 block ">
//                     <p className="text-[16px] w-[200px] absolute border rounded p-2 bg-gray-300  right-5 ">
//                       {promtValue[i]}
//                     </p>
//                     <div className="mt-10 w-[300px] flex">
//                       <div className="w-[30px]">
//                         <img
//                           src="gemini.jpg"
//                           className="border rounded  "
//                           width={50}
//                           height={30}
//                           alt="gemini"
//                         ></img>
//                       </div>
//                       <p className="text-[16px] border rounded p-2 bg-gray-300  mx-0 ml-1 ">
//                         {d}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })
//             : null}
//         </div>
//         <form
//           action={getResponse}
//           className="w-full flex ml-0 flex-row bottom-14 lg:flex-row fixed lg:bottom-5 lg:ml-auto"
//         >
//           <Textarea
//             onChange={(e) => setPrompt(e.target.value)}
//             className=" w-[300px] ml-0 bg-gray-300 text-white-300 lg:w-2/3 lg:p-5 "
//           ></Textarea>
//           <Button type="submit" className=" mt-3 lg:mt-10 ml-5 ">
//             Submit
//           </Button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default function ChatbotCard() {
//   const [messages, setMessages] = useState([]);
//   const [userInput, setUserInput] = useState("");
//   const [userPrompt, setUserPrompt] = useState([]);
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (userInput.trim() === "") return;
//     setUserPrompt((userPrompts) => [...userPrompts, userInput]);
//     // Add user message to the chat
//     // const userMessage = { sender: 'user', text: userInput };
//     fetch("/api/jobportal-chatbot", {
//       method: "POST",
//       body: JSON.stringify({ prompt: userInput }),
//     }).then((res) =>
//       res.json().then((res) => {
//         alert();
//         setMessages((prevMessages) => [...prevMessages, res.message]);
//         console.log(messages);
//       })
//     );

//     // Simulate a chatbot response
//     // const botMessage = {
//     //   sender: "bot",
//     //   text: `You said: "${userInput}"! I'm a chatbot. How can I assist you?`,
//     // };

//     // Clear the input field
//     setUserInput("");
//   };

//   return (
//     <div className="p-24 border w-auto">
//       <h1 className="text-3xl  font-semibold">Chatbot For Candidate</h1>
//       <hr />
//       <div className="flex flex-col justify-between ">
//         <div className="chat-box">
//           {messages.map((message, index) => (
//             <>
//               <div key={index} className="message user-message">
//                 <span className="border right-5">
//                   Your Qestion Is :{userPrompt[index]}
//                 </span>
//                 <br />
//                 <span className="border flex flex-row left-5 font-semibold  mt-6 ">
//                   <img
//                     src="gemini.jpg"
//                     className="border rounded h-[30px] w-[50px]  "
//                     width={40}
//                     height={30}
//                     alt="gemini"
//                   ></img>
//                   {message}
//                 </span>
//               </div>
//             </>
//           ))}
//         </div>
//         <form onSubmit={handleSubmit} className="flex w-full  fixed bottom-2">
//           <Input
//             value={userInput}
//             onChange={(e) => setUserInput(e.target.value)}
//             className=" overscroll-y-contain w-full ml-0 bg-gray-300 text-white-300 lg:w-2/3 lg:p-5 "
//           ></Input>
//           <Button type="submit" className="border rounded">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="34"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               stroke-width="2"
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               class="lucide lucide-square-arrow-up"
//             >
//               <rect width="18" height="18" x="3" y="3" rx="2" />
//               <path d="m16 12-4-4-4 4" />
//               <path d="M12 16V8" />
//             </svg>
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// }

export default function ChatbotCard() {
  const [messages, setMessages] = useState([
    { sender: "user", text: "hi" },
    { sender: "bot", text: "hello" },
  ]);
  const [userInput, setUserInput] = useState("");
  const [botMessage, setBotmessage] = useState({ sender: "bot", text: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInput.trim() === "") return;

    // Add user message to the chat
    const userMessage = { sender: "user", text: userInput };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    fetch("/api/jobportal-chatbot", {
      method: "POST",
      body: JSON.stringify({ prompt: userInput }),
    }).then((res) =>
      res.json().then((res) => {
        toast.success("wait !");
        const botMessages = { sender: "bot", text: res.message };
        setMessages((prevMessages) => [...prevMessages, botMessages]);
      })
    );

    // Clear the input field
    setUserInput("");
  };

  return (
    <div className="w-full p-auto lg:p-20  mx-0">
      <h1 className="text-3xl mt-5 font-semibold">Chatbot For Candidate</h1>
      <hr />
      <div className="h-[500px] lg:h-[400px] overflow-y-auto bg-white flex flex-col gap-2 p-10 lg:p-0">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.sender === "user" ? "user-message" : "bot-message"
            }`}
          >
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex w-full lg:flex  lg:w-3/3 mx-auto fixed bottom-3 bg-white"
      >
        <Input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="  border-current lg:w-2/3 lg:p-5 "
        ></Input>
        <Button type="submit" className="border rounded ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-square-arrow-up"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="m16 12-4-4-4 4" />
            <path d="M12 16V8" />
          </svg>
        </Button>
        <p className="mt-4 hidden">Ask job Regarding Qestions</p>
      </form>
      <ToastContainer />
    </div>
  );
}
