import { ReactNode } from "react";
import NavBar from "./_components/shared/navBar/NavBar";
import Footer from "./_components/shared/footer/Footer";

// export const metadata: Metadata = {
//   title: "Toefl Voucher",
//   description:
//     "Get TOEFL voucher code and save ₹ 2005 on your TOEFL registration fee. The TOEFL voucher is completly FREE of cost for everyone.",
// };

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      {/* <NavBar /> */}
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default layout;

