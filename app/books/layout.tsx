import { Metadata } from "next";
import { ReactNode } from "react";
import Sidebar from "./components/sidebar";

export const metadata: Metadata = {
  title: "free books for toefl | download material for no Cost",
  description:
    "Join our community to receive free TOEFL Books and material. Maximize your exam results and streamline your university application process with free material. Get your TOEFL books instantly by downloading today.",
};

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <main className="">
        <div className="p-4 sm:ml-64">
          <div className="border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <Sidebar />
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export default layout;

