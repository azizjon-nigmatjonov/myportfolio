"use client";
import { memo } from "react";
import Link from "next/link";
import { Contact } from "@/types/experience";

interface ContactCardProps {
  contact: Contact;
}

const getContactIcon = (type: Contact["type"]) => {
  const icons: Record<Contact["type"], string> = {
    email: "✉️",
    phone: "📞",
    github: "💻",
    linkedin: "💼",
    website: "🌐",
    other: "🔗",
  };
  return icons[type] || icons.other;
};

const ContactCard = memo(function ContactCard({ contact }: ContactCardProps) {
  const icon = contact.icon || getContactIcon(contact.type);
  const content = (
    <div className="p-4 rounded-lg border border-foreground/20 bg-background/50 hover:bg-foreground/5 hover:border-foreground/40 transition-all duration-200 group">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-foreground/60 mb-1">{contact.label}</p>
          <p className="text-sm font-medium text-foreground/90 truncate group-hover:text-foreground transition-colors">
            {contact.value}
          </p>
        </div>
      </div>
    </div>
  );

  if (contact.url) {
    return (
      <Link 
        href={contact.url} 
        target={contact.type === "email" || contact.type === "phone" ? "_self" : "_blank"}
        rel={contact.type === "email" || contact.type === "phone" ? undefined : "noopener noreferrer"}
        className="block"
      >
        {content}
      </Link>
    );
  }

  return content;
});

export default ContactCard;
