"use client";
import { toast } from "react-hot-toast";
import axios from "axios";

export default function Home() {
  const handleClick = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/hello");
      toast.success(data.message);
    } catch (error) {
      toast.error("An error occurred");
    }
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <main className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">
          Template
        </h1>
        <button onClick={handleClick}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
          HELLO BUTTON
        </button>
      </main>
    </div>
  );
}
