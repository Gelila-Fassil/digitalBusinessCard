"use client";

import { useState, useEffect } from "react";
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
    // Improved vCard format with better compatibility
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:Samrawit Getachew
N:Getachew;Samrawit;;;
ORG:DID – Design Detailing TM
TITLE:General Manager
TEL:+251913808646
TEL;TYPE=CELL:+251913808646
EMAIL:samrawit@diddesign.com
URL:https://diddesign.com
NOTE:Experts in premium design detailing solutions
END:VCARD`;

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
    const isAndroid = /Android/.test(navigator.userAgent);
    let success = false;
    
    try {
      if (isIOS) {
        // iOS: Use data URL for best compatibility
        const vCardDataUrl = `data:text/vcard;charset=utf-8,${encodeURIComponent(vCard)}`;
        window.location.href = vCardDataUrl;
        success = true;
      } else if (isAndroid) {
        // Android: Try Web Share API first, fallback to download
        if (navigator.share) {
          navigator.share({
            title: 'Samrawit Getachew Contact',
            text: 'Contact information for Samrawit Getachew',
            files: [new File([vCard], 'samrawit-getachew.vcf', { type: 'text/vcard' })]
          }).then(() => {
            success = true;
            toast({
              title: "Contact Shared",
              description: "Contact has been shared. Please save it to your contacts.",
            });
          }).catch(() => {
            // Fallback to download
            downloadVCard(vCard);
            success = true;
          });
        } else {
          downloadVCard(vCard);
          success = true;
        }
      } else {
        // Desktop and others: force download
        downloadVCard(vCard);
        success = true;
      }
    } catch (e) {
      console.error('Error saving contact:', e);
      success = false;
    }
    
    if (success && !isAndroid) {
      toast({
        title: "Contact Saved",
        description: "Contact card has been saved or opened. Please confirm import on your device.",
      });
    } else if (!success) {
      toast({
        title: "Action Required",
        description: "Could not save contact automatically. Please try again or use a different browser/device.",
      });
    }
  };

  const downloadVCard = (vCard: string) => {
    const blob = new Blob([vCard], { type: "text/vcard;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "samrawit-getachew.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-md mx-auto animate-fade-in-up">
      <Card 
        className="relative overflow-hidden bg-gradient-to-br from-card via-card/95 to-card/90 border-border/50 shadow-2xl backdrop-blur-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`,
        }}
      >
        <div className="absolute top-4 right-4 z-10">
          <ThemeToggle />
        </div>

        {/* Static Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Geometric patterns with black/white gradients */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-black/10 to-transparent transform rotate-45 translate-x-16 -translate-y-16 rounded-full blur-sm" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tl from-white/10 to-transparent transform rotate-45 -translate-x-12 translate-y-12 rounded-full blur-sm" />
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-shimmer-slow" />
        </div>

        {/* Header Banner */}
        <div className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 py-4 px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white text-xs font-medium tracking-wider">DID DESIGN DETALING</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
          {/* Banner decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white/30 rounded-full"></div>
            <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-white/20 rounded-full"></div>
            <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-white/10 rounded-full"></div>
          </div>
        </div>

        <div className="relative p-8 space-y-6">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-black via-gray-800 to-black rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl backdrop-blur-sm">
                  <Image
                    src="/professional-headshot-of-samrawit-getachew--busine.jpg"
                    alt="Samrawit Getachew"
                    width={112}
                    height={112}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <h1 className="font-serif text-2xl font-bold text-foreground tracking-wide">
                  DID – Design Detailing
                </h1>
              </div>
              <div className="text-xs text-foreground/70 font-medium tracking-widest">
                TM
              </div>
            </div>

            <div className="relative my-6">
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full" />
            </div>

            <div className="space-y-3">
              <h2 className="font-serif text-xl font-semibold text-foreground">
                Samrawit Getachew
              </h2>
              <div className="flex items-center justify-center gap-2">
                <p className="text-sm text-muted-foreground font-medium">
                  General Manager
                </p>
              </div>
              <p className="text-xs text-muted-foreground italic bg-gradient-to-r from-muted-foreground to-muted-foreground/70 bg-clip-text text-transparent">
                Experts in premium design detailing solutions
              </p>
            </div>
          </div>

          {/* Contact Actions */}
          <div className="grid grid-cols-3 gap-4">
            <Button
              onClick={handleCall}
              variant="outline"
              size="sm"
              className="group flex flex-col items-center gap-2 h-auto py-4 hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-800/20 dark:hover:to-gray-700/20 hover:scale-105 hover:shadow-lg transition-all duration-300 bg-white/50 dark:bg-black/50 backdrop-blur-sm border-white/20"
            >
              <div className="p-2 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 group-hover:from-gray-500 group-hover:to-gray-700 transition-all duration-300">
                <Phone className="h-4 w-4 text-white" />
              </div>
              <span className="text-xs font-medium text-foreground">Call</span>
            </Button>

            <Button
              onClick={handleEmail}
              variant="outline"
              size="sm"
              className="group flex flex-col items-center gap-2 h-auto py-4 hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-800/20 dark:hover:to-gray-700/20 hover:scale-105 hover:shadow-lg transition-all duration-300 bg-white/50 dark:bg-black/50 backdrop-blur-sm border-white/20"
            >
              <div className="p-2 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 group-hover:from-gray-500 group-hover:to-gray-700 transition-all duration-300">
                <Mail className="h-4 w-4 text-white" />
              </div>
              <span className="text-xs font-medium text-foreground">Email</span>
            </Button>

            <Button
              onClick={handleWhatsApp}
              variant="outline"
              size="sm"
              className="group flex flex-col items-center gap-2 h-auto py-4 hover:bg-gradient-to-br hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-800/20 dark:hover:to-gray-700/20 hover:scale-105 hover:shadow-lg transition-all duration-300 bg-white/50 dark:bg-black/50 backdrop-blur-sm border-white/20"
            >
              <div className="p-2 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 group-hover:from-gray-500 group-hover:to-gray-700 transition-all duration-300">
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <span className="text-xs font-medium text-foreground">WhatsApp</span>
            </Button>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <div className="relative">
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={handleWebsite}
                variant="ghost"
                size="sm"
                className="group justify-start hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-800/20 dark:hover:to-gray-700/20 transition-all duration-300 bg-white/30 dark:bg-black/30 backdrop-blur-sm"
              >
                <div className="p-1 rounded bg-gradient-to-r from-gray-600 to-gray-800 group-hover:from-gray-500 group-hover:to-gray-700 transition-all duration-300 mr-3">
                  <Globe className="h-3 w-3 text-white" />
                </div>
                <span className="text-xs font-medium text-foreground">Website</span>
              </Button>

              <Button
                onClick={handleLinkedIn}
                variant="ghost"
                size="sm"
                className="group justify-start hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-800/20 dark:hover:to-gray-700/20 transition-all duration-300 bg-white/30 dark:bg-black/30 backdrop-blur-sm"
              >
                <div className="p-1 rounded bg-gradient-to-r from-gray-600 to-gray-800 group-hover:from-gray-500 group-hover:to-gray-700 transition-all duration-300 mr-3">
                  <Linkedin className="h-3 w-3 text-white" />
                </div>
                <span className="text-xs font-medium text-foreground">LinkedIn</span>
              </Button>
            </div>

            <Button
              onClick={handleInstagram}
              variant="ghost"
              size="sm"
              className="group w-full justify-start hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-800/20 dark:hover:to-gray-700/20 transition-all duration-300 bg-white/30 dark:bg-black/30 backdrop-blur-sm"
            >
              <div className="p-1 rounded bg-gradient-to-r from-gray-600 to-gray-800 group-hover:from-gray-500 group-hover:to-gray-700 transition-all duration-300 mr-3">
                <Instagram className="h-3 w-3 text-white" />
              </div>
              <span className="text-xs font-medium text-foreground">Instagram</span>
            </Button>
          </div>

          {/* QR Code Section */}
          <div className="space-y-4">
            <div className="relative">
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full" />
            </div>
            
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-4">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  <div className="relative bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-lg p-2">
                    <QRCodeGenerator />
                  </div>
                </div>
                <div className="text-center">
                  <Button
                    onClick={saveContact}
                    variant="outline"
                    size="sm"
                    className="group flex items-center gap-2 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-800/20 dark:hover:to-gray-700/20 hover:scale-105 hover:shadow-lg transition-all duration-300 bg-white/50 dark:bg-black/50 backdrop-blur-sm border-white/20"
                  >
                    <div className="p-1 rounded bg-gradient-to-r from-gray-600 to-gray-800 group-hover:from-gray-500 group-hover:to-gray-700 transition-all duration-300">
                      <Download className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-xs font-medium text-foreground">Save Contact</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced shimmer effect */}
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-shimmer" />
        </div>
      </Card>
    </div>
  );
}
