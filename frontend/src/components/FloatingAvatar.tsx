import { Send } from "lucide-react";

interface FloatingAvatarProps {
  imgSrc: string; // avatar image
  alt?: string;   // accessibility text
  size?: number;  // circle size in px
  gradient?: string; // tailwind gradient classes
  sendPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  sendRotation?: number; // rotation in degrees (e.g. 270)
}

export default function FloatingAvatar({
  imgSrc,
  alt = "Avatar",
  size = 80,
  gradient = "from-purple-300 to-purple-400",
  sendPosition = "bottom-right",
  sendRotation = 0,
}: FloatingAvatarProps) {
  // mapping position of the send icon
  const sendClasses: Record<string, string> = {
    "top-left": "absolute -top-2 -left-2",
    "top-right": "absolute -top-2 -right-2",
    "bottom-left": "absolute -bottom-2 -left-2",
    "bottom-right": "absolute -bottom-2 -right-2",
  };

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Send icon */}
      <div
        className={`${sendClasses[sendPosition]}    rounded-full p-1    `}
        style={{ transform: `rotate(${sendRotation}deg)` }}
      >
        <Send className="w-4 h-4  text-gray-900 " />
      </div>

      {/* Avatar circle with gradient */}
      <div className="w-full h-full rounded-full bg-white p-1  shadow-lg">
        <div
          className={`w-full h-full rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}
        >
          <img
            src={imgSrc}
            alt={alt}
            className="w-3/4 h-3/4 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
