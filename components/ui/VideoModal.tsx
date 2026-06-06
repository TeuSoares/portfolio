"use client";

interface VideoModalProps {
  isOpen: boolean;
  videoUrl: string;
  onClose: () => void;
}

export default function VideoModal({
  isOpen,
  videoUrl,
  onClose,
}: VideoModalProps) {
  if (!isOpen) return null;

  const autoplayUrl = `${videoUrl}?autoplay=1`;

  return (
    <div
      className="fixed inset-0 z-999 pt-15 bg-black/70 flex items-center justify-center p-4 overflow-auto"
      onClick={onClose}
    >
      <div
        className="bg-bg-secondary w-full max-w-175 h-62.5 sm:h-100 rounded-lg p-4 relative shadow-2xl"
        onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar dentro do modal
      >
        <button
          className="absolute top-2 right-4 text-zinc-400 hover:text-white text-2xl font-bold cursor-pointer transition-colors"
          onClick={onClose}
        >
          &times;
        </button>

        <iframe
          id="youtubeVideo"
          src={autoplayUrl}
          width="100%"
          height="100%"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="rounded"
        ></iframe>
      </div>
    </div>
  );
}
