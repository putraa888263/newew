export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
  image: string;
  description: string;
}

export const certificatesData: Certificate[] = [
  {
    id: 1,
    title: "TAPCHA 5",
    issuer: "SILAT",
    year: "2023",
    image: "/images/certificates/TAPCHA5.jpg",
    description: "Sertifikasi Juara 1 Tanding Pra Remaja (smp) Putra Kelas Bebas."
  },
  {
    id: 2,
    title: "BNN4n",
    issuer: "SILAT",
    year: "2024",
    image: "/images/certificates/BNN4.jpg",
    description: "Juara 1 BNN CUP 4 Kelas Open Putra Pra Remaja ."
  },
  {
    id: 3,
    title: "BUMI PADJAJARAN CHAMPIONSHIP",
    issuer: "SILAT",
    year: "2024",
    image: "/images/certificates/BPC.jpg",
    description: "Juara 2 Tanding Remaja Putra Kelas Open 2."
  },
  {
    id: 4,
    title: "TAPCHA4",
    issuer: "SILAT",
    year: "2022",
    image: "/images/certificates/TAPCHA4.jpg",
    description: "Sertifikasi Juara 2 TAPCHA4 kelas Open Putra Praa Remaja."
  }
];
