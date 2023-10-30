import { useState } from "react";

export default function SVGPaginaProjetos() {
    const [primary, setPrimary] = useState("#EF4996");
    const [secondary, setSecondary] = useState("#FE7A08");
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100vw" height="100vh" viewBox="0 0 1147 928" fill="none"  className='fixed z-[998] right-0'>
            <path d="M53.7547 0L1147 40.1058V1200.09L0 1215L207.161 1130.97C248.205 1114.32 275.057 1074.45 275.057 1030.16C275.057 1003.49 284.848 977.758 302.572 957.839L327.062 930.315C397.083 851.622 396.309 732.74 325.271 654.965L295.302 622.154L215.352 547.002C155.196 490.455 135.223 403.138 164.813 326.062C188.033 265.579 181.027 197.648 145.951 143.177L53.7547 0Z" fill="url(#paint0_linear_1020_10304)" />
            <defs>
                <linearGradient id="paint0_linear_1020_10304" x1="1062.97" y1="37.9687" x2="-325.584" y2="1574.25" gradientUnits="userSpaceOnUse">
                    <stop offset="0.0208333" stopColor={primary} />
                    <stop offset="0.304639" stopColor="#F04FB0" />
                    <stop offset="0.947917" stopColor= {secondary} />
                </linearGradient>
            </defs>
        </svg>
    )
}