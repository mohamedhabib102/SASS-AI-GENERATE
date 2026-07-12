import { useEffect, useState } from "react";
import { Sparkles, Clock3, Link2 } from "lucide-react";
import { useLang } from "@/hooks/useLang";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const GenerateLinkDialog = ({
  open,
  onOpenChange,
  text = "سيتم تجهيز الرابط الخاص بك",
  link,
  seconds = 60,
}) => {
  const { lang, t } = useLang();
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!open) {
      setTimeLeft(seconds);
      setReady(false);
      return;
    }

    if (timeLeft === 0) {
      setReady(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [open, timeLeft, seconds]);

  const handleOpenLink = () => {
    window.open(link, "_blank");
    onOpenChange(false);
  };

  const title = lang === "ar" ? "تجهيز الرابط" : "Preparing link";
  const waitingText =
    lang === "ar"
      ? "يرجى الانتظار حتى انتهاء التجهيز"
      : "Please wait until the link is ready";
  const openLinkText = lang === "ar" ? "فتح الرابط" : "Open link";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md rounded-3xl border border-[#E6E6E6] bg-white p-0 overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.18)]">
        <div className="bg-[#F7F7F9] px-6 py-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>

          <DialogHeader className="gap-2">
            <DialogTitle className="text-xl font-semibold text-main">
              {title}
            </DialogTitle>

            <DialogDescription className="text-center text-sm text-[#6B7280]">
              {text || t("common.pleaseWait")}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="flex flex-col items-center gap-5 px-6 py-7">
          {!ready ? (
            <>
              <div className="flex items-center justify-center rounded-full border border-[#E9E9EC] bg-[#F8F8FA] px-5 py-4 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)]">
                <Clock3 className="ml-2 h-5 w-5 text-primary" />
                <span className="text-3xl font-bold text-main">{timeLeft}</span>
              </div>

              <p className="text-sm text-[#6B7280] text-center">
                {waitingText}
              </p>
            </>
          ) : (
            <div className="flex flex-col items-center gap-3 w-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F2F2F5] shadow-sm">
                <Link2 className="h-6 w-6 text-primary" />
              </div>
              <Button
                onClick={handleOpenLink}
                className="w-full rounded-xl bg-secondary hover:bg-secondary/90 text-white shadow-sm"
              >
                {openLinkText}
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GenerateLinkDialog;