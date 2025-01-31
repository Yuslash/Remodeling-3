import './Ear.css'
import { useControls } from 'leva'

export default function Progress() {
    const { wining } = useControls({
        wining: { value: 250, min: 21, max: 640, step: 0.01 }
    })

    const startX = 30.2871
    const endX = startX + wining
    const endL = endX - 20

    return (
        <div className='progress-container'>
        <svg className='progress-svg' width="700" height="140" viewBox="0 0 700 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group 60">
                <path id="progressholder" d="M12 96L37.4964 65H700L656 96H12Z" fill="black" fillOpacity="0.56"/>
                <g id="prgoresbar" filter="url(#filter0_d_135_7170)">
                    <path d={`M30.2871 88L42.0449 73H${endX}L${endL} 88H30.2871Z`} fill="#0AFF9D"/>
                </g>
            </g>
            <defs>
                <filter 
                    id="filter0_d_135_7170" 
                    x="-200" 
                    y="-50" 
                    width="900" 
                    height="240" 
                    filterUnits="userSpaceOnUse" 
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="1"/>
                    <feGaussianBlur stdDeviation="36.65"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.716667 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_135_7170"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_135_7170" result="shape"/>
                </filter>
            </defs>
        </svg>  
        </div>
    )
}