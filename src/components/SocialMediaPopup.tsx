import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react"; // Added MessageCircle for WhatsApp

interface SocialMediaPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/jeevanchetnafoundation/", color: "bg-blue-600 hover:bg-blue-700" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/jeevanchetnafoundation/", color: "bg-pink-600 hover:bg-pink-700" },
  { name: "YouTube", icon: Youtube, url: "https://www.youtube.com/@JEEVANCHETNAFOUNDATION", color: "bg-red-600 hover:bg-red-700" },
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/jeevanchetnafoundation/", color: "bg-blue-800 hover:bg-blue-900" },
  { name: "WhatsApp", icon: MessageCircle, url: "https://wa.me/8958521254", color: "bg-green-500 hover:bg-green-600" }, // Added WhatsApp link
];

const SocialMediaPopup: React.FC<SocialMediaPopupProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] p-6">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-bold text-primary">Connect With Us!</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Follow us on social media to stay updated on our latest initiatives and impact.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 py-4">
          {socialLinks.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 p-3 rounded-md text-white transition-colors ${platform.color}`}
            >
              <platform.icon className="h-5 w-5" />
              <span className="font-medium">{platform.name}</span>
            </a>
          ))}
        </div>
        <Button onClick={onClose} variant="outline" className="w-full mt-4">
          No Thanks
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SocialMediaPopup;