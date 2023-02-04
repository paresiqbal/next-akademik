import Image from "next/image";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

export default function Topbar() {
  return (
    <div className="flex justify-between lg:container">
      <div>
        <Image src="/image/logo.png" alt="me" width="200" height="80" />
      </div>
      <div className="flex flex-col justify-start lg:flex-row lg:gap-4">
        <p className="flex items-center gap-2">
          <BsFillTelephoneFill />
          0857
        </p>
        <p className="flex justify-center items-center gap-2">
          <FiMail />
          komkaadf@gmail.com
        </p>
      </div>
    </div>
  );
}
