import { useState } from "react";
import { AlbaButton, type AlbaButtonProps } from "./AlbaButton";
import { DownloadModal } from "./DownloadModal";

export function DownloadButton(props: AlbaButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AlbaButton {...props} onClick={() => setOpen(true)} />
      <DownloadModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
