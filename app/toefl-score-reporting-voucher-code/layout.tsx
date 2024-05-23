import { Metadata } from "next";
import { ReactNode } from "react";
import NavBar from "../(base-layout)/_components/shared/navBar/NavBar";
import Footer from "../(base-layout)/_components/shared/footer/Footer";


export const metadata: Metadata = {
  title: "TOEFL Score reporting voucher code",
  description:
    "Join our community to receive free TOEFL score reporting vouchers and application guidance. Maximize your exam results and streamline your university application process with expert support. Get your TOEFL discount codes instantly by joining our WhatsApp group today.",
};

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <main className="">
        <NavBar/> 
        {children}
        <Footer/>
      </main>
    </div>
  );
};

export default layout;

