import React, { useRef, useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { GenerateThumbnailProps } from "@/types";
import { Loader } from "lucide-react";
import { Input } from "./ui/input";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";

const GenerateThumbnail = ({
  setImage,
  setImageStorageId,
  image,
  imagePrompt,
  setImagePrompt,
}: GenerateThumbnailProps) => {
  const [isAiThumbnail, setIsAiThumbnail] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const { toast } = useToast();
  const imageRef = useRef<HTMLInputElement>(null);
  const handleImage = async (blob: Blob, fileName: string) => {};
  const generateImage = async () => {};
  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsImageLoading(true);
    setImage("");

    try {
    } catch (error) {
      console.log(error);
      toast({
        title: "Error generating thumbnail",
        variant: "destructive",
      });
    }
  };
  return (
    <>
      <div className="generate_thumbnail">
        <Button
          type="button"
          variant={"plain"}
          onClick={() => setIsAiThumbnail(true)}
          className={cn("", { "bg-black-6": isAiThumbnail })}
        >
          Use AI to generate Thumbnail
        </Button>
        <Button
          type="button"
          variant={"plain"}
          onClick={() => setIsAiThumbnail(false)}
          className={cn("", { "bg-black-6": !isAiThumbnail })}
        >
          Upload custom image
        </Button>
      </div>
      {isAiThumbnail ? (
        <div className="flex flex-col gap-5">
          <div className="mt-5 flex flex-col gap-2.5">
            <Label className="text-16 font-bold text-white-1">
              AI Prompt to generate thumbnail
            </Label>
            <Textarea
              className="input-class font-light focus-visible:ring-offset-orange-1"
              placeholder="Provide text to genereate thumbnail"
              rows={5}
              value={imagePrompt}
              onChange={(e) => setImagePrompt(e.target.value)}
            />
          </div>
          <div className="w-full max-w-[200px]">
            <Button
              className="text-16  bg-orange-1 py-4 font-bold text-white-1 "
              type="submit"
              onClick={generateImage}
            >
              {isImageLoading ? (
                <>
                  Submitting
                  <Loader size={20} className="animate-spin ml-2" />
                </>
              ) : (
                "Generate"
              )}
            </Button>
          </div>
        </div>
      ) : (
        <div
          className="image_div"
          onClick={() => {
            imageRef?.current?.click();
          }}
        >
          <Input
            type="file"
            className="hidden"
            ref={imageRef}
            onChange={(e) => uploadImage(e)}
          />
          {!isImageLoading ? (
            <Image
              src="/icons/upload-image.svg"
              width={40}
              height={40}
              alt="upload"
            />
          ) : (
            <div className="text-16 flex-center font-medium text-white-1">
              Uploading
              <Loader size={20} className="animate-spin ml-2" />{" "}
              <div className="flex flex-col items-center gap-1">
                <h2 className="text-12 font-bold text-orange-1">
                  Click to upload
                </h2>
                <p className="text-12 font-normal text-gray-1">
                  SVG, PNG, JPG, or GIF (max. 1080x1080px)
                </p>
              </div>
            </div>
          )}
        </div>
      )}
      {image && (
        <div className="flex-center w-full">
          <Image
            src={image}
            width={200}
            height={200}
            className="mt-5"
            alt="thumbnail"
          />
        </div>
      )}
    </>
  );
};

export default GenerateThumbnail;
