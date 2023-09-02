'use client';

import { X } from "lucide-react";
import Image from "next/image";
import { UploadDropzone } from "@/lib/uploadthing";
import '@uploadthing/react/styles.css';
import { split } from "postcss/lib/list";
interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
}

const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
  const fileType = value?.split('.').pop();

  if (value && fileType !== 'pdf') {
    return (
      <div className="relative h-20 w-20">
        <Image
          fill
          src={value}
          alt="upload"
          className="rounded-full"
        />
      </div>
    )
  }

  return (
    <UploadDropzone 
      endpoint={endpoint}
      onClientUploadComplete={(res) => onChange(res?.[0].url)}
      onUploadError={(err) => console.log(err)}
    />
  )
}

export default FileUpload;
