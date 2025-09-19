"use client";

import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MessageCircle,
  Globe,
  Linkedin,
  Instagram,
  QrCode,
  Download,
} from "lucide-react";
import { QRCodeGenerator } from "@/components/qr-code-generator";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

export function BusinessCard() {
  const [showQR, setShowQR] = useState(false);

  const handleCall = () => {
    window.location.href = "tel:+251913808646";
  };

  const handleEmail = () => {
    window.location.href = "mailto:samrawit@diddesign.com";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/+251913808646", "_blank");
  };

  const handleWebsite = () => {
    window.open("https://diddesign.com", "_blank");
  };

  const handleLinkedIn = () => {
    window.open("https://linkedin.com/in/samrawit-getachew", "_blank");
  };

  const handleInstagram = () => {
    window.open("https://instagram.com/diddesign", "_blank");
  };

  const saveContact = () => {
    const vCard = `BEGIN:VCARD\nVERSION:3.0\nFN:Samrawit Getachew\nORG:DID – Design Detailing TM\nTITLE:General Manager\nTEL;TYPE=CELL:+251913808646\nEMAIL:samrawit@diddesign.com\nURL:https://diddesign.com\nEND:VCARD`;

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
    let success = false;
    try {
      if (isIOS) {
        // iOS: Use data URL for best compatibility
        const vCardDataUrl = `data:text/vcard;charset=utf-8,${encodeURIComponent(vCard)}`;
        window.location.href = vCardDataUrl;
        success = true;
      } else {
        // Android and others: force download
        const blob = new Blob([vCard], { type: "text/vcard" });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "samrawit-getachew.vcf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        success = true;
      }
    } catch (e) {
      success = false;
    }
    toast({
      title: success ? "Contact Saved" : "Action Required",
      description: success
        ? "Contact card has been saved or opened. Please confirm import on your device."
        : "Could not save contact automatically. Please try again or use a different browser/device.",
    });
  };

  return (
    <div className="w-full max-w-md mx-auto animate-fade-in-up">
      <Card className="relative overflow-hidden bg-card border-border shadow-2xl">
        <div className="absolute top-4 right-4 z-10">
          <ThemeToggle />
        </div>

        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-secondary transform rotate-45 translate-x-16 -translate-y-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 border-l border-b border-secondary transform rotate-45 -translate-x-12 translate-y-12" />
        </div>

        <div className="relative p-8 space-y-6">
          {/* Header Section */}
          <div className="text-center space-y-3">
            <div className="flex justify-center mb-4">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-border shadow-lg">
                <Image
                  src="/professional-headshot-of-samrawit-getachew--busine.jpg"
                  alt="Samrawit Getachew"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="space-y-1">
              <h1 className="font-serif text-2xl font-bold text-foreground tracking-wide">
                DID – Design Detailing
              </h1>
              <div className="text-xs text-muted-foreground font-medium tracking-widest">
                TM
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-4" />

            <div className="space-y-2">
              <h2 className="font-serif text-xl text-foreground">
                Samrawit Getachew
              </h2>
              <p className="text-sm text-muted-foreground font-medium">
                General Manager
              </p>
              <p className="text-xs text-muted-foreground italic">
                Experts in premium design detailing solutions
              </p>
            </div>
          </div>

          {/* Contact Actions */}
          <div className="grid grid-cols-3 gap-3">
            <Button
              onClick={handleCall}
              variant="outline"
              size="sm"
              className="flex flex-col items-center gap-1 h-auto py-3 hover:bg-accent hover:scale-105 transition-all duration-200 bg-transparent"
            >
              <Phone className="h-4 w-4" />
              <span className="text-xs">Call</span>
            </Button>

            <Button
              onClick={handleEmail}
              variant="outline"
              size="sm"
              className="flex flex-col items-center gap-1 h-auto py-3 hover:bg-accent hover:scale-105 transition-all duration-200 bg-transparent"
            >
              <Mail className="h-4 w-4" />
              <span className="text-xs">Email</span>
            </Button>

            <Button
              onClick={handleWhatsApp}
              variant="outline"
              size="sm"
              className="flex flex-col items-center gap-1 h-auto py-3 hover:bg-accent hover:scale-105 transition-all duration-200 bg-transparent"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="text-xs">WhatsApp</span>
            </Button>
          </div>

          {/* Links Section */}
          <div className="space-y-3">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={handleWebsite}
                variant="ghost"
                size="sm"
                className="justify-start hover:bg-accent transition-all duration-200"
              >
                <Globe className="h-4 w-4 mr-2" />
                <span className="text-xs">Website</span>
              </Button>

              <Button
                onClick={handleLinkedIn}
                variant="ghost"
                size="sm"
                className="justify-start hover:bg-accent transition-all duration-200"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                <span className="text-xs">LinkedIn</span>
              </Button>
            </div>

            <Button
              onClick={handleInstagram}
              variant="ghost"
              size="sm"
              className="w-full justify-start hover:bg-accent transition-all duration-200"
            >
              <Instagram className="h-4 w-4 mr-2" />
              <span className="text-xs">Instagram</span>
            </Button>
          </div>

          {/* Action Button: Save Contact Centered */}
          <div className="space-y-3">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="flex justify-center">
              <Button
                onClick={saveContact}
                variant="default"
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-200"
              >
                <Download className="h-4 w-4 mr-2" />
                <span className="text-xs">Save Contact</span>
              </Button>
            </div>
          </div>

          {/* QR Code Section Removed */}
        </div>

        {/* Subtle shimmer effect on hover */}
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 animate-shimmer pointer-events-none" />
      </Card>
    </div>
  );
}
