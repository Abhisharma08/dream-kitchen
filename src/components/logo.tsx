import Image from 'next/image';

export default function Logo() {
  return (
    <a href="#" className="flex items-center justify-center">
      <Image
        src="https://res.cloudinary.com/ddqqlfsjp/image/upload/v1752230081/Alu_Empire_Logo-removebg-preview_nrlo91.png"
        alt="AluEmpire Logo"
        width={225}
        height={50}
        priority
        className="h-12 w-auto"
      />
    </a>
  );
}
