import { useState, ReactNode } from "react";
import { Mail, Copy, Check, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

interface EmailLinkProps {
  email: string;
  subject?: string;
  body?: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}

export const EmailLink = ({
  email,
  subject,
  body,
  className,
  children,
  ariaLabel,
}: EmailLinkProps) => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const qs = new URLSearchParams();
  if (subject) qs.set("subject", subject);
  if (body) qs.set("body", body);
  const query = qs.toString();

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${encodeURIComponent(
    email
  )}${subject ? `&su=${encodeURIComponent(subject)}` : ""}${
    body ? `&body=${encodeURIComponent(body)}` : ""
  }`;
  const outlookUrl = `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(
    email
  )}${subject ? `&subject=${encodeURIComponent(subject)}` : ""}${
    body ? `&body=${encodeURIComponent(body)}` : ""
  }`;
  const yahooUrl = `https://compose.mail.yahoo.com/?to=${encodeURIComponent(
    email
  )}${subject ? `&subject=${encodeURIComponent(subject)}` : ""}${
    body ? `&body=${encodeURIComponent(body)}` : ""
  }`;
  const mailtoUrl = `mailto:${email}${query ? `?${query}` : ""}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast({ title: "E-mailadres gekopieerd", description: email });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({ title: "Kopiëren mislukt", variant: "destructive" });
    }
  };

  const openMailOption = (url: string) => {
    setOpen(false);
    window.location.href = url;
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(true);
  };

  const externalOptions = [
    { label: "Gmail", desc: "In de browser openen", url: gmailUrl },
    { label: "Outlook", desc: "In de browser openen", url: outlookUrl },
    { label: "Yahoo Mail", desc: "In de browser openen", url: yahooUrl },
  ];

  return (
    <>
      <a
        href={mailtoUrl}
        onClick={handleClick}
        className={className}
        aria-label={ariaLabel}
      >
        {children}
      </a>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              Hoe wilt u uw e-mail versturen?
            </DialogTitle>
            <DialogDescription>
              Kies hieronder uw mailprovider. Het bericht aan{" "}
              <span className="font-medium text-foreground">{email}</span> wordt
              automatisch klaargezet.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-2 mt-2">
            {externalOptions.map((opt) => (
              <a
                key={opt.label}
                href={opt.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-secondary transition-colors group text-left"
              >
                <div>
                  <div className="font-medium text-foreground">{opt.label}</div>
                  <div className="text-sm text-muted-foreground">{opt.desc}</div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              </a>
            ))}

            <button
              type="button"
              onClick={() => openMailOption(mailtoUrl)}
              className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-secondary transition-colors group text-left"
            >
              <div>
                <div className="font-medium text-foreground">Standaard mail-app</div>
                <div className="text-sm text-muted-foreground">Op uw computer of telefoon</div>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
            </button>

            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-secondary transition-colors group text-left"
            >
              <div>
                <div className="font-medium text-foreground">
                  E-mailadres kopiëren
                </div>
                <div className="text-sm text-muted-foreground">{email}</div>
              </div>
              {copied ? (
                <Check className="w-4 h-4 text-primary" />
              ) : (
                <Copy className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
              )}
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
