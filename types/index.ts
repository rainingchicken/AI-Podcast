import { Id } from "@/convex/_generated/dataModel";
import { Dispatch, SetStateAction } from "react";

export interface GeneratePodcastProps {
  setAudioStorageId: Dispatch<SetStateAction<Id<"_storage"> | null>>;
  setAudio: Dispatch<SetStateAction<string>>;
  voiceType: string;
  audio: string;
  voicePrompt: string;
  setVoicePrompt: Dispatch<SetStateAction<string>>;
  setAudioDuration: Dispatch<SetStateAction<number>>;
}
