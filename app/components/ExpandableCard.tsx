import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCompress,
    faExpand,
    IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faTwitter,
    faTwitch,
    faYoutube,
    faSnapchatGhost,
    faWhatsapp,
    faInstagram,
    faPinterest,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./ExpandableCard.css"; // Custom CSS for animations

interface Icon {
    icon: IconDefinition;
    bgColor: string;
    title: string;
}

const ICONS: Icon[] = [
    { icon: faCompress, bgColor: "#CD201F", title: "Collapse" },
    { icon: faFacebook, bgColor: "#1877F2", title: "Facebook" },
    { icon: faTwitter, bgColor: "#1DA1F2", title: "Twitter" },
    { icon: faTwitch, bgColor: "#8D45F7", title: "Twitch" },
    { icon: faYoutube, bgColor: "#CD201F", title: "YouTube" },
    { icon: faSnapchatGhost, bgColor: "#ffc107", title: "Snapchat" },
    { icon: faWhatsapp, bgColor: "#25D366", title: "WhatsApp" },
    { icon: faInstagram, bgColor: "#E4405F", title: "Instagram" },
    { icon: faPinterest, bgColor: "#BD081C", title: "Pinterest" },
    { icon: faLinkedin, bgColor: "#0A66C2", title: "LinkedIn" },
];

const Card: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const cardRef = useRef<HTMLDivElement | null>(null);
    const avatarRef = useRef<HTMLImageElement | null>(null);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const expand = () => {
        setIsExpanded(true);
    };

    const collapse = () => {
        setIsExpanded(false);
    };

    useEffect(() => {
        // Dynamically inject styles for circle items based on card and avatar dimensions
        const injectStyles = () => {
            if (!document.head.querySelector(".expand-style")) {
                const card = cardRef.current;
                const avatar = avatarRef.current;
                if (!card || !avatar) return;

                const { height: heightCard } = card.getBoundingClientRect();
                const { height: heightAvatar } = avatar.getBoundingClientRect();
                const avatarCenterY = heightCard / 2 - heightAvatar / 2;

                let styleContent = [
                    `<style class="expand-style">`,
                    `.card--expand .card__avatar { transform: translateY(${avatarCenterY}px); transition-delay: 0ms; }`,
                ];

                let rotate = 0,
                    delay = 50;
                const incrementRotate = 360 / ICONS.length;
                const halfLengthIcons = Math.ceil(ICONS.length / 2);
                const translateY = card.getBoundingClientRect().width / 2;

                for (let index = 0; index <= halfLengthIcons; index++) {
                    styleContent.push(`
            .circle__item-${index} { transition-delay: ${delay}ms }
            .card--expand .circle__item-${index} {
              transform: rotate(${rotate}deg) translateY(${translateY}px);
            }
            .card--expand .circle__link-${index} { transform: rotate(${-rotate}deg) }
          `);
                    if (index < ICONS.length - index) {
                        styleContent.push(`
              .circle__item-${ICONS.length - index} { transition-delay: ${delay}ms }
              .card--expand .circle__item-${ICONS.length - index} {
                transform: rotate(${-rotate}deg) translateY(${translateY}px);
              }
              .card--expand .circle__link-${ICONS.length - index} { transform: rotate(${rotate}deg) }
            `);
                    }
                    rotate += incrementRotate;
                    delay += 50;
                }
                styleContent.push("</style>");
                document.head.insertAdjacentHTML("beforeend", styleContent.join(""));
            }
        };

        injectStyles();
    }, []);

    return (
        <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4 sm:p-15">

            <div
                ref={cardRef}
                className={`card text-center text-gray-800 w-[300px] relative ${isExpanded ? "card--expand" : ""
                    }`}
            >
                <ul
                    className="circle m-0 p-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    style={{ height: "300px", width: "300px" }}
                >
                    {ICONS.map((icon, index) => (
                        <li
                            key={index}
                            className={`circle__item circle__item-${index} absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform`}
                        >
                            <a
                                className={`circle__link circle__link-${index} rounded-full relative flex items-center justify-center w-10 h-10 text-white text-xl cursor-pointer will-change-transform transition-transform duration-300 ease-linear shadow-lg hover:shadow-xl`}
                                style={{ backgroundColor: icon.bgColor }}
                                data-title={icon.title}
                                onClick={icon.icon === faCompress ? collapse : undefined}
                            >
                                <FontAwesomeIcon icon={icon.icon} />
                            </a>
                        </li>
                    ))}
                </ul>
                <img
                    ref={avatarRef}
                    className="card__avatar rounded-full relative z-10 border-[10px] border-white shadow-2xl w-[170px] mx-auto will-change-transform"
                    src="https://assets.codepen.io/5618835/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1625229645&width=512"
                    alt="Anas Boumediene"
                />
                <div className="card__content bg-gradient-to-b from-blue-500 to-purple-600 p-6 rounded-[40px_40px_50%_50%] max-w-[300px] mt-[-60px] pt-[70px] will-change-transform-opacity shadow-xl">
                    <div className="card__content-inner will-change-transform-opacity">
                        <h2 className="card__heading m-0 text-xl text-white">Anas Boumediene</h2>
                        <h3 className="card__sub-heading m-0 text-sm text-yellow-200">
                            Mobile Web Specialist
                        </h3>
                        <p className="card__description text-sm m-0 text-white/90">
                            Performant animation without triggering (<b>Layout</b> &{" "}
                            <b>Paint</b>) created by Ane'x Bm{" "}
                            <i className="fa fa-heart text-red-300"></i>
                        </p>
                        <button
                            className="card__expand-btn w-12 h-12 rounded-full border-none text-2xl text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg cursor-pointer transform hover:scale-110 transition-transform duration-150 ease-linear will-change-transform"
                            onClick={expand}
                        >
                            <FontAwesomeIcon icon={faExpand} />
                        </button>
                    </div>
                </div>
            </div>

        </section >
    );
};

export default Card;