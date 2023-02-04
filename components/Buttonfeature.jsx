"use client";
import {
  FaBook,
  FaBookOpen,
  FaVoteYea,
  FaBox,
  FaDatabase,
  FaEnvelope,
  FaUserAlt,
  FaGraduationCap,
  FaUserPlus,
} from "react-icons/fa";

export default function Buttonfeature() {
  return (
    <div className="text-white container flex flex-col items-center gap-2 xl:grid xl:grid-cols-3">
      <div className="w-96 bg-gray-800 flex items-center gap-4 py-4 px-5 rounded-lg border hover:border-cyan-600">
        <FaBook />
        <p>SLIMS</p>
      </div>
      <div className="w-96 bg-gray-800 flex items-center gap-4 py-4 px-5 rounded-lg border hover:border-cyan-600">
        <FaBookOpen />
        <p>E-Library</p>
      </div>
      <div className="w-96 bg-gray-800 flex items-center gap-4 py-4 px-5 rounded-lg border hover:border-cyan-600">
        <FaVoteYea />
        <p>PILKASIS</p>
      </div>
      <div className="w-96 bg-gray-800 flex items-center gap-4 py-4 px-5 rounded-lg border hover:border-cyan-600">
        <FaBox />
        <p>E-Sarpas</p>
      </div>
      <div className="w-96 bg-gray-800 flex items-center gap-4 py-4 px-5 rounded-lg border hover:border-cyan-600">
        <FaDatabase />
        <p>SIDADIK</p>
      </div>
      <div className="w-96 bg-gray-800 flex items-center gap-4 py-4 px-5 rounded-lg border hover:border-cyan-600">
        <FaEnvelope />
        <p>E-Arsip Surat</p>
      </div>
      <div className="w-96 bg-gray-800 flex items-center gap-4 py-4 px-5 rounded-lg border hover:border-cyan-600">
        <FaUserAlt />
        <p>SIMPEG</p>
      </div>
      <div className="w-96 bg-gray-800 flex items-center gap-4 py-4 px-5 rounded-lg border hover:border-cyan-600">
        <FaGraduationCap />
        <p>Data Alumi</p>
      </div>
      <div className="w-96 bg-gray-800 flex items-center gap-4 py-4 px-5 rounded-lg border hover:border-cyan-600">
        <FaUserPlus />
        <p>Pendaftaran</p>
      </div>
    </div>
  );
}
