import Sumatera from "../assets/img/sumatera.svg";
import Jawa from "../assets/img/jawa.svg";
import Kalimantan from "../assets/img/kalimantan.svg";
import Nusa from "../assets/img/nusa.svg";
import Sulawesi from "../assets/img/sulawesi.svg";
import Maluku from "../assets/img/maluku.svg";
import Papua from "../assets/img/papua.svg";
import Dot from "../components/Dot";

export const data = [
  {
    id: 1,
    name: "Sumatera",
    img: Sumatera,
    className: "w-[300px] absolute left-0 top-0 ",
    dot: {
      element: (value) => {
        return (
          <>
            <Dot
              number={"1"}
              text={"Ciptakan pendidikan gratis ilmiah dan demokratis."}
              className={"absolute top-10 left-14"}
              value={value}
            />
            <Dot
              number={"2"}
              text={
                "Cabut proyek strategis nasional bermasalah, wujudkan reforma agraria sejati."
              }
              className={"absolute top-60 left-56"}
              value={value}
            />
          </>
        );
      },
    },
  },
  {
    id: 2,
    name: "Jawa",
    img: Jawa,
    className: "w-[267.57px] absolute left-[275px] top-[320px] ",
    dot: {
      element: (value) => (
        <>
          <Dot
            number={"3"}
            text={"Menolak revisi Undang-Undang Minerba."}
            className={"absolute top-5 left-14"}
            value={value}
          />
          <Dot
            number={"4"}
            text={"Hapuskan multi fungsi ABRI."}
            className={"absolute top-10 left-44"}
            value={value}
          />
        </>
      ),
    },
  },
  {
    id: 3,
    name: "Kalimantan",
    img: Kalimantan,
    className: "w-[283.55px] absolute left-[380px] top-[45px] ",
    dot: {
      element: (value) => (
        <>
          <Dot
            number={"5"}
            text={"Sahkan rancangan undang-undang masyarakat adat."}
            className={"absolute top-32 left-20"}
            value={value}
          />
          <Dot
            number={"6"}
            text={"Cabut Instruksi Presiden Nomor 1 tahun 2025."}
            className={"absolute top-20 left-50"}
            value={value}
          />
        </>
      ),
    },
  },
  {
    id: 4,
    name: "Nusa",
    img: Nusa,
    className: "w-[293.4px] absolute left-[590px] top-[375px] ",
    dot: {
      element: (value) => (
        <>
          <Dot
            number={"7"}
            text={"Evaluasi total program makan bergizi gratis."}
            className={"absolute top-4 left-20"}
            value={value}
          />
          <Dot
            number={"8"}
            text={"Realisasikan anggaran tunjangan kinerja dosen."}
            className={"absolute top-10 left-48"}
            value={value}
          />
        </>
      ),
    },
  },
  {
    id: 5,
    name: "Sulawesi",
    img: Sulawesi,
    className: "w-[188.3px] absolute left-[645px] top-[120px] ",
    dot: {
      element: (value) => (
        <>
          <Dot
            number={"9"}
            text={
              "Mendesak Presiden Prabowo Subianto untuk mengeluarkan peraturan pemerintah pengganti undang-undang perampasan aset."
            }
            className={"absolute top-32 left-5"}
            value={value}
          />
          <Dot
            number={"10"}
            text={"Menolak revisi Undang-Undang TNI, Polri, dan Kejaksaan."}
            className={"absolute top-6 left-36"}
            value={value}
          />
        </>
      ),
    },
  },
  {
    id: 6,
    name: "Maluku",
    img: Maluku,
    className: "w-[135.32px] absolute left-[850px] top-[115px] ",
    dot: {
      element: (value) => (
        <>
          <Dot
            number={"11"}
            text={"Efisiensi dan rombak Kabinet Merah Putih."}
            className={"absolute top-10 left-10"}
            value={value}
          />
        </>
      ),
    },
  },
  {
    id: 7,
    name: "Papua",
    img: Papua,
    className: "w-[271.07px] absolute lg:right-0 left-[1000px] top-[170px]",
    dot: {
      element: (value) => (
        <>
          <Dot
            number={"12"}
            text={
              "Menolak revisi peraturan Dewan Perwakilan Rakyat tentang Tata Tertib."
            }
            className={"absolute top-5 left-10"}
            value={value}
          />
          <Dot
            number={"13"}
            text={"Reformasi Kepolisian Republik Indonesia."}
            className={"absolute top-28 left-50"}
            value={value}
          />
        </>
      ),
    },
  },
];
