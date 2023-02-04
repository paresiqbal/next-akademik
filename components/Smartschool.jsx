import Link from "next/link";

export default function Smartschool() {
  return (
    <div className="container flex flex-col py-4 items-center justify-center gap-4 lg:flex-row ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="/image/Cardhome/card1.jpg" />
        </figure>
        <div className="card-body">
          <Link href={"/"} className="card-title no-underline hover:underline">
            Computer base test
          </Link>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            labore qui hic enim ab itaque voluptatibus voluptate eveniet aliquid
            nobis.
          </p>
          <div></div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="/image/Cardhome/card2.jpg" />
        </figure>
        <div className="card-body">
          <Link href={"/"} className="card-title no-underline hover:underline">
            Penerimaan Peserta Didik Baru
          </Link>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            labore qui hic enim ab itaque voluptatibus voluptate eveniet aliquid
            nobis.
          </p>
          <div></div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="/image/Cardhome/card3.jpg" />
        </figure>
        <div className="card-body">
          <Link href={"/"} className="card-title no-underline hover:underline">
            Sistem Informasi Data Siswa
          </Link>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            labore qui hic enim ab itaque voluptatibus voluptate eveniet aliquid
            nobis.
          </p>
          <div></div>
        </div>
      </div>
    </div>
  );
}
