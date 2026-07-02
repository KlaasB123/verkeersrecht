import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const STORAGE_KEY = "cookie-consent-v1";

export type CookieConsent = {
  necessary: true;
  functional: boolean;
  analytical: boolean;
  marketing: boolean;
  timestamp: string;
};

const CONSENT_UPDATED_EVENT = "cookie-consent-updated";
const OPEN_PREFS_EVENT = "cookie-consent-open";

export const getConsent = (): CookieConsent | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const saveConsent = (c: CookieConsent) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
  window.dispatchEvent(new CustomEvent(CONSENT_UPDATED_EVENT, { detail: c }));
};

export const openCookiePreferences = () => {
  window.dispatchEvent(new Event(OPEN_PREFS_EVENT));
};

const defaultConsent = (all: boolean): CookieConsent => ({
  necessary: true,
  functional: all,
  analytical: all,
  marketing: all,
  timestamp: new Date().toISOString(),
});

export const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [prefs, setPrefs] = useState<CookieConsent>(defaultConsent(false));

  useEffect(() => {
    const existing = getConsent();
    if (!existing) setShowBanner(true);
    else setPrefs(existing);

    const open = () => {
      const e = getConsent();
      if (e) setPrefs(e);
      setShowPrefs(true);
    };
    window.addEventListener(OPEN_PREFS_EVENT, open);
    return () => window.removeEventListener(OPEN_PREFS_EVENT, open);
  }, []);

  const acceptAll = () => {
    saveConsent(defaultConsent(true));
    setShowBanner(false);
    setShowPrefs(false);
  };
  const rejectAll = () => {
    saveConsent(defaultConsent(false));
    setShowBanner(false);
    setShowPrefs(false);
  };
  const savePrefs = () => {
    saveConsent({ ...prefs, necessary: true, timestamp: new Date().toISOString() });
    setShowBanner(false);
    setShowPrefs(false);
  };

  return (
    <>
      {showBanner && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookiemelding"
          className="fixed inset-x-0 bottom-0 z-[60] border-t bg-background shadow-2xl"
        >
          <div className="container mx-auto px-4 py-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-foreground/80 max-w-3xl leading-relaxed">
              Wij gebruiken cookies om onze website te laten werken en, met uw toestemming, om de werking te verbeteren.
              Strikt noodzakelijke cookies worden altijd geplaatst. Voor andere categorieën vragen wij uw toestemming.
              Meer informatie in ons <a href="/privacybeleid" className="underline hover:no-underline">privacy- en cookiebeleid</a>.
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:flex md:flex-row md:gap-2 shrink-0">
              <Button variant="outline" onClick={rejectAll} className="w-full md:w-auto">Alles weigeren</Button>
              <Button
                variant="outline"
                onClick={() => setShowPrefs(true)}
                className="w-full md:w-auto"
              >
                Voorkeuren beheren
              </Button>
              <Button onClick={acceptAll} className="w-full md:w-auto">Alles aanvaarden</Button>
            </div>
          </div>
        </div>
      )}

      <Dialog open={showPrefs} onOpenChange={setShowPrefs}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Cookievoorkeuren</DialogTitle>
            <DialogDescription>
              Kies per categorie welke cookies u toestaat. U kunt uw keuze later steeds aanpassen via de link "Cookievoorkeuren" in de footer.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div className="flex items-start justify-between gap-4 rounded-md border p-3">
              <div>
                <Label className="font-semibold">Strikt noodzakelijk</Label>
                <p className="text-xs text-muted-foreground mt-1">
                  Nodig voor de basisfunctionaliteit van de website en voor uw formulier­inzendingen. Altijd actief.
                </p>
              </div>
              <Switch checked disabled aria-label="Strikt noodzakelijk (altijd actief)" />
            </div>

            <div className="flex items-start justify-between gap-4 rounded-md border p-3">
              <div>
                <Label htmlFor="c-functional" className="font-semibold">Functioneel</Label>
                <p className="text-xs text-muted-foreground mt-1">
                  Onthouden van voorkeuren (bv. taal, ingevulde velden). Momenteel niet in gebruik.
                </p>
              </div>
              <Switch
                id="c-functional"
                checked={prefs.functional}
                onCheckedChange={(v) => setPrefs((p) => ({ ...p, functional: v }))}
              />
            </div>

            <div className="flex items-start justify-between gap-4 rounded-md border p-3">
              <div>
                <Label htmlFor="c-analytical" className="font-semibold">Analytisch</Label>
                <p className="text-xs text-muted-foreground mt-1">
                  Anoniem meten hoe de website gebruikt wordt. Momenteel niet in gebruik.
                </p>
              </div>
              <Switch
                id="c-analytical"
                checked={prefs.analytical}
                onCheckedChange={(v) => setPrefs((p) => ({ ...p, analytical: v }))}
              />
            </div>

            <div className="flex items-start justify-between gap-4 rounded-md border p-3">
              <div>
                <Label htmlFor="c-marketing" className="font-semibold">Marketing</Label>
                <p className="text-xs text-muted-foreground mt-1">
                  Voor gerichte advertenties en tracking op externe platformen. Momenteel niet in gebruik.
                </p>
              </div>
              <Switch
                id="c-marketing"
                checked={prefs.marketing}
                onCheckedChange={(v) => setPrefs((p) => ({ ...p, marketing: v }))}
              />
            </div>
          </div>

          <DialogFooter className="gap-2 sm:gap-2">
            <Button variant="outline" onClick={rejectAll}>Alles weigeren</Button>
            <Button variant="outline" onClick={acceptAll}>Alles aanvaarden</Button>
            <Button onClick={savePrefs}>Voorkeuren opslaan</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
