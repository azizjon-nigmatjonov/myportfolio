"use client";
import { memo } from "react";
import Link from "next/link";
import { Contact } from "@/types/experience";
import ContactCard from "./ContactCard";

interface ContactsSectionProps {
  contacts: Contact[];
}

const ContactsSection = memo(function ContactsSection({ 
  contacts 
}: ContactsSectionProps) {
  return (
    <section className="scroll-mt-20" id="contacts">
      <div className="grid sm:grid-cols-4 gap-8 sm:gap-12">
        <div className="sm:col-span-1">
          <h2 className="text-2xl sm:text-3xl font-semibold">Contacts</h2>
        </div>
        
        <div className="sm:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactsSection;
