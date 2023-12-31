import { useState } from "react";

export default function SVGPaginaInicial(){
    const [primary, setPrimary] = useState("#EF4996");
    const [secondary, setSecondary] = useState("#FE7A08");
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100vw" height="100vh" viewBox="0 0 1900 930" fill="none" className='fixed z-[998]'>
        <path d="M1279.23 -532.274L1899.12 51.0295L1844.44 316.431C1834.84 363.028 1820.63 408.557 1802.03 452.347L1734.52 
        611.264C1709.8 669.473 1664.73 716.69 1607.73 744.099C1547.17 773.223 1500.21 824.639 1476.69 887.59L1440.49 984.467C1414.26 
        1054.66 1364.36 1113.51 1299.4 1150.87C1260.33 1173.34 1226.41 1203.76 1199.84 1240.17L811.38 1772.47L434.952 1597.72C258.302 
        1515.71 109.444 1383.9 6.6538 1218.48L-108.14 1033.74L98.4043 1054.87C181.924 1063.42 264.253 1030.04 318.246 965.751C344.915 
        933.997 378.97 909.272 417.422 893.746L471.486 871.917C623.399 810.579 734.331 677.018 766.744 516.427L780.65 447.53L795.943 
        332.823C815.241 188.066 891.691 57.0618 1008.23 -30.9492C1094.98 -96.4621 1160.21 -186.364 1195.58 -289.155L1279.23 -532.274Z" fill="url(#paint0_linear_1020_10332)" />
        <defs>
          <linearGradient id="paint0_linear_1020_10332" x1="2038.26" y1="197.085" x2="-662.773" y2="-191.676" gradientUnits="userSpaceOnUse">
            <stop offset="0.0208333" stopColor={primary} />
            <stop offset="0.304639" stopColor="#F04FB0" />
            <stop offset="0.947917" stopColor={secondary} />
          </linearGradient>
        </defs>
      </svg>
    )
}