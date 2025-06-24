// components/Accordion.jsx
import React from "react";
import { useState } from "react";

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const accordionItems = [
        {
            question: "Why do I need a link in bio tool?",
            answer: "Right now, every time you’ve got something new to share, you have to go to every single one of your channels to change the link in each of your bios. It’s time-consuming and complicated – making it so much harder to keep everything up to date. A link in bio tool means you never have to compromise, or remove one link from your bio so you can add another. You can keep everything you want to share online in one link. When you’ve got a change, you only ever have to make it once.",
        },
        {
            question: "Is Linktree the original link in bio tool?",
            answer:
                "The short answer? Yes! Back in 2016, we created Linktree as an easy way to link out to all socials and unify digital ecosystems, pioneering the link-in-bio category. Linktree remains the leading, biggest and most popular link-in-bio solution – but that’s just the beginning.  You can use your Linktree URL or QR code anywhere your audience is, including on your business cards, in your email signature, on paper-based posters and brochures, and even on your resumé. If you don’t have a website, that’s fine. If you have a Linktree, you don’t need one!",
        },
        {
            question: "Can you get paid and sell things from a Linktree?",
            answer:
                "Yes, you can! We offer plenty of ways to sell products and monetize your audience. You can collect tips, request payments for services, collect revenue from affiliate links, and sell your products right in your Linktree. A lot of Linktree creators see incredible results with online sales on Linktree, because it removes the extra steps involved in a purchase. With Paypal or Square right in your Linktree, your customers won’t even need to leave your social media to go to another site and pay! “We love how Linktree has helped us manage our business by having all social media and ways to pay in one location. The QR code has made it easy for customers to access it all!” – Tiffany",
        },
        {
            question: "Is Linktree safe to use on all of my social media profiles?",
            answer:
                "Linktree is trusted by all social platforms, and is even used on many of Facebook, Instagram and TikTok’s own social media accounts! Because Linktree is the original and most popular link-in-bio tool, the linktr.ee URL is a trusted, identifiable and familiar link that audiences feel comfy and safe clicking on.",
        },
        {
            question: "What makes Linktree better than the other link in bio options?",
            answer: "We have our own opinions here, of course, but the stories of the people who use Linktree matter more. Let’s hear what they have to say: Four months into creating, someone messaged me like: You need a Linktree. I can’t remember what I was using at the time, but it was one of those ones that were supposed to be easy. Once I got Linktree set up, I was like, oh my god – why did I spend $100 on a website? I don’t need all of that! Now, I can see the monetization of my following becoming a full-time thing.” – David Coleman",
        },
        {
            question: "How can I drive more traffic to and through my Linktree?",
            answer: "Sharing your Linktree on every social platform you have makes it easy for your most important content to be seen and engaged with by all of your followers. You can even use QR codes to generate online traffic in offline places, and drive people to your links. Once visitors arrive on your Linktree, easy-to-understand analytics help you quickly and easily discover where they’re coming from, and what they’re clicking on. You can immediately see what’s working and what’s not and improve your Linktree on the fly with different link placement, prioritized links, subheadings, animation and more to make sure your traffic is landing exactly where you want it!",
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="w-full max-w-2xl mx-auto mt-10 mb-10">
            {accordionItems.map((item, index) => (
                <div
                    key={index}
                    className="border-b border-[#e9c0e960] bg-black/40 backdrop-blur-md shadow-md rounded-xl mb-4 overflow-hidden"
                >
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full text-[#e9c0e9] text-[24px] font-bold text-left p-6 rounded-xl text-xl  transition-all duration-300"
                    >
                        {item.question}
                    </button>


                    <div
                        className={`text-[#e9c0e9] px-6 transition-all duration-300 ease-in-out ${activeIndex === index ? "max-h-auto py-4 opacity-100" : "max-h-0 opacity-0"
                            } overflow-hidden`}
                    >
                        <p className="text-base h-auto text-[18px] leading-relaxed">{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default Accordion;
