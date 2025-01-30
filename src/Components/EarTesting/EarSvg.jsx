import "./Ear.css"
import { motion } from "framer-motion"

export default function EarSvg() {
    return (
        <motion.svg
            style={{ overflow: "visible" }}
            width="56" height="57" viewBox="0 0 56 57" fill="none" xmlns="http://www.w3.org/2000/svg"
            whileHover="hover"
        >
            <g id="completed">
                <g id="Frame 97">
                    <rect width="42.7" height="42.7" transform="translate(7 14)" fill="#050505" />
                </g>
                <motion.g 
                    id="earleft"
                    variants={{
                        hover: { x: -5, y: -5, rotate: -3 }
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 5 }}
                >
                    <path id="ear" d="M11 13.5H28.5L18.5 14L7.5 26V34.5L1 20.5V1L11 13.5Z" fill="url(#paint0_linear_203_4814)" stroke="#2A2647" strokeWidth="0.1"/>
                    <g id="inner ear">
                        <g filter="url(#filter0_i_203_4814)">
                            <path d="M2.5 19.8711V7.5L7 13V27.5L2.5 19.8711Z" fill="url(#paint1_radial_203_4814)" />
                        </g>
                        <path d="M2.5 19.8711V7.5L7 13V27.5L2.5 19.8711Z" stroke="#2B2644" strokeWidth="0.1" />
                    </g>
                    <path id="outerar" d="M14.5 12L1 1L11 13.5H20.5L14.5 12Z" fill="url(#paint2_linear_203_4814)" stroke="#2C2947" strokeWidth="0.1" />
                </motion.g>
                <motion.g 
                    id="earright"
                    variants={{
                        hover: { x: 5, y: -5, rotate: 3 }
                    }}
                    transition={{ type: "spring", stiffness: 100, damping: 5 }}
                >
                    <path id="ear_2" d="M45.5 13.5H28L38 14L49 26V34.5L55.5 20.5V1L45.5 13.5Z" fill="url(#paint3_linear_203_4814)" stroke="#2A2647" strokeWidth="0.1"/>
                    <g id="inner ear_2">
                        <g filter="url(#filter1_i_203_4814)">
                            <path d="M54 19.8711V7.5L49.5 13V27.5L54 19.8711Z" fill="url(#paint4_radial_203_4814)" />
                        </g>
                        <path d="M54 19.8711V7.5L49.5 13V27.5L54 19.8711Z" stroke="#2B2644" strokeWidth="0.1" />
                    </g>
                    <path id="outerar_2" d="M42 12L55.5 1L45.5 13.5H36L42 12Z" fill="url(#paint5_linear_203_4814)" stroke="#2C2947" strokeWidth="0.1" />
                </motion.g>
            </g>
            <defs>
                <filter id="filter0_i_203_4814" x="2.44922" y="7.35986" width="5.60156" height="22.1232" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="1" dy="2" />
                    <feGaussianBlur stdDeviation="0.9" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.901961 0 0 0 0 0.0509804 0 0 0 0 0.0235294 0 0 0 1 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_203_4814" />
                </filter>
                <filter id="filter1_i_203_4814" x="49.4492" y="7.35986" width="5.60156" height="22.1232" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="1" dy="2" />
                    <feGaussianBlur stdDeviation="0.9" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.901961 0 0 0 0 0.0509804 0 0 0 0 0.0235294 0 0 0 1 0" />
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_203_4814" />
                </filter>
                <linearGradient id="paint0_linear_203_4814" x1="1" y1="2.5" x2="9.5" y2="26" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#18162B" />
                    <stop offset="1" stopColor="#1C1B2F" />
                </linearGradient>
                <radialGradient id="paint1_radial_203_4814" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(4.75 17.5) rotate(90) scale(10 2.25)">
                    <stop stopColor="#FF5925" />
                    <stop offset="1" stopColor="#FF2F09" />
                </radialGradient>
                <linearGradient id="paint2_linear_203_4814" x1="1.5" y1="2" x2="20" y2="13.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2B1E3C" />
                    <stop offset="1" stopColor="#1F0A3C" />
                </linearGradient>
                <linearGradient id="paint3_linear_203_4814" x1="55.5" y1="2.5" x2="47" y2="26" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#18162B" />
                    <stop offset="1" stopColor="#1C1B2F" />
                </linearGradient>
                <radialGradient id="paint4_radial_203_4814" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(51.75 17.5) rotate(90) scale(10 2.25)">
                    <stop stopColor="#FF5925" />
                    <stop offset="1" stopColor="#FF2F09" />
                </radialGradient>
                <linearGradient id="paint5_linear_203_4814" x1="55" y1="2" x2="36.5" y2="13.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2B1E3C" />
                    <stop offset="1" stopColor="#1F0A3C" />
                </linearGradient>
            </defs>
        </motion.svg>
    )
}
