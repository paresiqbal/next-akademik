import Buttonfeature from "@/components/Buttonfeature";
import Carousel from "@/components/Carousel";
import Jurusan from "@/components/Jurusan";
import Smartschool from "@/components/Smartschool";

export default function Home() {
  return (
    <div>
      <Carousel />
      <h1 className="text-4xl font-bold text-gray-800 text-center py-5">
        SMARTSCHOOL
      </h1>
      <Smartschool />
      <Buttonfeature />
      <h1 className="text-4xl font-bold text-gray-800 text-center py-5">
        JURUSAN
      </h1>
      <Jurusan />
    </div>
  );
}
