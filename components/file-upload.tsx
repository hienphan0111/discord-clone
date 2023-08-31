'use client';

import { UploadDropzone } from "@/lib/uploadthing";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
}

const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
  return (
    <UploadDropzone 
      endpoint={endpoint}
      onClientUploadComplete={(res) => onChange(res?.[0].fileUrl)}
      onUploadError={(err) => console.log(err)}
    />
  )
}

export default FileUpload;