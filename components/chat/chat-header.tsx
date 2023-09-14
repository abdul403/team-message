import { Hash } from "lucide-react";
import { MobileToggle } from "../mobile-toggle";
import { SocketIndicator } from "../socket-indicator";
import { UserAvatar } from "../user-avatar";
import { ChatVideoButton } from "./chat-video-button";

interface ChatHeaderProps {
  name: string;
  serverId: string;
  type: "conversation" | "channel";
  imageUrl?: string;
}

export const ChatHeader = ({
  name,
  serverId,
  type,
  imageUrl,
}: ChatHeaderProps) => {
  return (
    <div className="text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2">
      <MobileToggle serverId={serverId} />
      {type === "channel" && (
        <Hash className="w-5 h-5 text-zinc-500 dark:text-zinc-400 mr-2" />
      )}
      <div className=" flex gap-x-4 items-center justify-center">
        {type === "conversation" && (
          <UserAvatar
            src={imageUrl}
            className="h-8 w-8 md:w-10 md:h-10 mr-2 rounded-full"
          />
        )}
        <p className="font-semibold text-md text-black dark:text-white">
          {name}
        </p>
      </div>
      <div className="flex ml-auto items-center ">
        {type === "conversation" && <ChatVideoButton />}
        <SocketIndicator />
      </div>
    </div>
  );
};
