import Image from "next/image";

interface ProfileImageProps {
  className?: string;
}

export default function ProfileImage({
  className = "w-64 h-64 md:w-80 md:h-80",
}: ProfileImageProps) {
  return (
    <div className={`shrink-0 relative select-none ${className}`}>
      <div className="w-full h-full relative rounded-full border border-white/10 p-2 bg-zinc-900/30 backdrop-blur-sm">
        <div className="w-full h-full relative rounded-full overflow-hidden">
          <Image
            src="/img/assets/profile.png"
            alt="Foto de perfil de Mateus Soares"
            fill
            priority
            sizes="(max-width: 768px) 256px, 320px"
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
