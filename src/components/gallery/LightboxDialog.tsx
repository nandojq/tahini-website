"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import type { GalleryImage } from "@/types";

interface LightboxDialogProps {
  image: GalleryImage | null;
  onClose: () => void;
}

export default function LightboxDialog({ image, onClose }: LightboxDialogProps) {
  return (
    <Dialog open={image !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[95vw] max-w-[95vw] sm:max-w-[95vw] h-[90vh] p-2 bg-foreground border-none flex items-center justify-center">
        <DialogTitle className="sr-only">{image?.alt ?? "Gallery image"}</DialogTitle>
        {image && (
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
              sizes="95vw"
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
