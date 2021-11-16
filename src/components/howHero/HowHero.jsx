import "./howHero.scss"
import { NavLink } from "react-router-dom";

export default function HowHero() {
    return (
        <div className="howHero">
            <div className="left">
                <div className="container">
                    <h1>How Observer works.</h1>
                    <p>All the info on how Observer works to help grow and develop your business. From project management to all things finance, observer has it all.</p>
                    <div className="wrapper">
                        <NavLink className="signUp" exact to="/sign-up"><div className="button" id="signUpButton">Sign up</div></NavLink>
                        <NavLink className="pricing" exact to="/pricing"><div className="button" id="pricing">Pricing</div></NavLink>
                    </div>
                    <p id="lowerText">Already using Observer? <NavLink exact to="/sign-in">Sign in now.</NavLink></p>
                </div>
            </div>
            <div className="right">
            <svg xmlns="http://www.w3.org/2000/svg" width="993.317" height="737.272" viewBox="0 0 993.317 737.272">
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectangle_263" data-name="Rectangle 263" width="993.317" height="737.272" fill="none"/>
    </clipPath>
    <clipPath id="clip-path-3">
      <rect id="Rectangle_253" data-name="Rectangle 253" width="220.432" height="220.433" transform="translate(669.861 56.254)" fill="none"/>
    </clipPath>
    <clipPath id="clip-path-4">
      <rect id="Rectangle_255" data-name="Rectangle 255" width="220.432" height="120.677" transform="translate(741.925 211.634)" fill="none"/>
    </clipPath>
    <clipPath id="clip-path-5">
      <rect id="Rectangle_256" data-name="Rectangle 256" width="428.973" height="428.973" fill="none"/>
    </clipPath>
    <clipPath id="clip-path-6">
      <rect id="Rectangle_257" data-name="Rectangle 257" width="306.854" height="306.854" transform="translate(686.463 430.418)" fill="none"/>
    </clipPath>
  </defs>
  <g id="howItWorks" clip-path="url(#clip-path)">
    <g id="bg">
      <g id="Group_284" data-name="Group 284" clip-path="url(#clip-path)">
        <g id="Group_274" data-name="Group 274" opacity="0.25">
          <g id="Group_273" data-name="Group 273">
            <g id="Group_272" data-name="Group 272" clip-path="url(#clip-path-3)">
              <rect id="Rectangle_252" data-name="Rectangle 252" width="220.432" height="220.432" transform="translate(669.861 56.255)" fill="#feae34"/>
            </g>
          </g>
        </g>
        <g id="Group_277" data-name="Group 277" opacity="0.25">
          <g id="Group_276" data-name="Group 276">
            <g id="Group_275" data-name="Group 275" clip-path="url(#clip-path-4)">
              <rect id="Rectangle_254" data-name="Rectangle 254" width="220.432" height="120.677" transform="translate(741.925 211.634)" fill="#e43b44"/>
            </g>
          </g>
        </g>
        <g id="Group_280" data-name="Group 280" opacity="0.25">
          <g id="Group_279" data-name="Group 279">
            <g id="Group_278" data-name="Group 278" clip-path="url(#clip-path-5)">
              <path id="Path_663" data-name="Path 663" d="M428.973,214.486c0,118.458-96.029,214.487-214.487,214.487S0,332.944,0,214.486,96.029,0,214.486,0,428.973,96.028,428.973,214.486" fill="#f6757a"/>
            </g>
          </g>
        </g>
        <g id="Group_283" data-name="Group 283" opacity="0.25">
          <g id="Group_282" data-name="Group 282">
            <g id="Group_281" data-name="Group 281" clip-path="url(#clip-path-6)">
              <path id="Path_664" data-name="Path 664" d="M993.317,583.845A153.427,153.427,0,1,1,839.89,430.418,153.427,153.427,0,0,1,993.317,583.845" fill="#63c74d"/>
            </g>
          </g>
        </g>
        <path id="Path_665" data-name="Path 665" d="M823.057,597.748H178.724a16.834,16.834,0,0,1-16.834-16.833V183.248a16.833,16.833,0,0,1,16.834-16.833H823.057a16.833,16.833,0,0,1,16.833,16.833V580.915a16.833,16.833,0,0,1-16.833,16.833" fill="#fff"/>
        <path id="Path_666" data-name="Path 666" d="M343.684,597.8H178.019a16.833,16.833,0,0,1-16.833-16.833V183.3a16.833,16.833,0,0,1,16.833-16.833H343.684Z" fill="#b55088"/>
        <path id="Path_667" data-name="Path 667" d="M828.834,183.806a8,8,0,1,1-8-8,8,8,0,0,1,8,8" fill="#ebedf2"/>
        <line id="Line_71" data-name="Line 71" x2="5.657" y2="5.657" transform="translate(818.006 180.978)" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <line id="Line_72" data-name="Line 72" x1="5.657" y2="5.657" transform="translate(818.006 181.064)" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2.067"/>
        <path id="Path_668" data-name="Path 668" d="M805.779,183.806a8,8,0,1,1-8-8,8,8,0,0,1,8,8" fill="#ebedf2"/>
        <path id="Path_669" data-name="Path 669" d="M800.3,187.14h-5.042a1.52,1.52,0,0,1-1.52-1.521v-3.625a1.52,1.52,0,0,1,1.52-1.521H800.3a1.521,1.521,0,0,1,1.521,1.521v3.625a1.521,1.521,0,0,1-1.521,1.521" fill="#fff"/>
        <path id="Path_670" data-name="Path 670" d="M782.723,183.806a8,8,0,1,1-8-8,8,8,0,0,1,8,8" fill="#ebedf2"/>
        <line id="Line_73" data-name="Line 73" x2="7.5" transform="translate(770.973 186.723)" fill="none" stroke="#fff" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/>
        <path id="Path_671" data-name="Path 671" d="M234.573,208.7a30.16,30.16,0,1,1-30.16-30.16,30.16,30.16,0,0,1,30.16,30.16" fill="#fff"/>
        <path id="Path_672" data-name="Path 672" d="M231.24,228.79a7.57,7.57,0,1,1-7.57-7.57,7.57,7.57,0,0,1,7.57,7.57" fill="#63c74d"/>
        <circle id="Ellipse_67" data-name="Ellipse 67" cx="7.57" cy="7.57" r="7.57" transform="translate(213.779 224.693) rotate(-22.5)" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2.558"/>
        <path id="Path_673" data-name="Path 673" d="M214.486,225H194.339v-6.943a8.9,8.9,0,0,1,8.9-8.9h2.342a8.9,8.9,0,0,1,8.9,8.9Z" fill="#f6757a"/>
        <path id="Path_674" data-name="Path 674" d="M211.27,200.049a6.857,6.857,0,1,1-6.857-6.856,6.857,6.857,0,0,1,6.857,6.856" fill="#f6757a"/>
      </g>
    </g>
    <text id="Help" transform="translate(250.52 214.691)" fill="#fff" font-size="24" font-family="Poppins-SemiBold, Poppins" font-weight="600"><tspan x="0" y="0">Help</tspan></text>
    <g id="Boards">
      <g id="Group_286" data-name="Group 286" clip-path="url(#clip-path)">
        <g id="Right">
          <path id="Path_675" data-name="Path 675" d="M789.454,479.306H654.793a10.8,10.8,0,0,1-10.8-10.8V217.492a10.8,10.8,0,0,1,10.8-10.8H789.454a10.8,10.8,0,0,1,10.8,10.8V468.506a10.8,10.8,0,0,1-10.8,10.8" fill="#ebedf2"/>
          <path id="Path_676" data-name="Path 676" d="M715.565,275.321H667.031a10.8,10.8,0,0,1-10.8-10.8V228.5a10.8,10.8,0,0,1,10.8-10.8h48.534a10.8,10.8,0,0,1,10.8,10.8v36.021a10.8,10.8,0,0,1-10.8,10.8" fill="#c0cbdc"/>
          <path id="Path_677" data-name="Path 677" d="M749.67,301.351H659.441a3.212,3.212,0,0,1-3.211-3.211v-7.849a3.212,3.212,0,0,1,3.211-3.211H749.67a3.211,3.211,0,0,1,3.211,3.211v7.849a3.211,3.211,0,0,1-3.211,3.211" fill="#c0cbdc"/>
          <path id="Path_678" data-name="Path 678" d="M717.448,319.573H659.441a3.212,3.212,0,0,1-3.211-3.211v-4.216a3.211,3.211,0,0,1,3.211-3.211h58.007a3.211,3.211,0,0,1,3.211,3.211v4.216a3.211,3.211,0,0,1-3.211,3.211" fill="#c0cbdc"/>
          <path id="Path_679" data-name="Path 679" d="M763,319.573h-34.57a3.211,3.211,0,0,1-3.211-3.211v-4.216a3.21,3.21,0,0,1,3.211-3.211H763a3.211,3.211,0,0,1,3.211,3.211v4.216A3.211,3.211,0,0,1,763,319.573" fill="#c0cbdc"/>
          <path id="Path_680" data-name="Path 680" d="M787.114,319.573H773.04a3.211,3.211,0,0,1-3.211-3.211v-4.216a3.21,3.21,0,0,1,3.211-3.211h14.074a3.211,3.211,0,0,1,3.211,3.211v4.216a3.211,3.211,0,0,1-3.211,3.211" fill="#c0cbdc"/>
          <path id="Path_681" data-name="Path 681" d="M701.344,334.4h-41.9a3.211,3.211,0,0,1-3.211-3.211v-4.217a3.211,3.211,0,0,1,3.211-3.211h41.9a3.211,3.211,0,0,1,3.211,3.211v4.217a3.211,3.211,0,0,1-3.211,3.211" fill="#c0cbdc"/>
        </g>
        <g id="Middle">
          <path id="Path_682" data-name="Path 682" d="M601.518,422.213H411.682a10.8,10.8,0,0,1-10.8-10.8V266.126a10.8,10.8,0,0,1,10.8-10.8H601.518a10.8,10.8,0,0,1,10.8,10.8V411.413a10.8,10.8,0,0,1-10.8,10.8" fill="#ebedf2"/>
          <path id="Path_683" data-name="Path 683" d="M498.578,345.72H427.8a10.8,10.8,0,0,1-10.8-10.8v-54.3a10.8,10.8,0,0,1,10.8-10.8h70.778a10.8,10.8,0,0,1,10.8,10.8v54.3a10.8,10.8,0,0,1-10.8,10.8" fill="#c0cbdc"/>
          <path id="Path_684" data-name="Path 684" d="M479.513,380.006h-59.3A3.212,3.212,0,0,1,417,376.8V364.42a3.212,3.212,0,0,1,3.211-3.211h59.3a3.212,3.212,0,0,1,3.211,3.211V376.8a3.212,3.212,0,0,1-3.211,3.211" fill="#c0cbdc"/>
          <path id="Path_685" data-name="Path 685" d="M498.652,404.007h-78.44A3.211,3.211,0,0,1,417,400.8v-7.59a3.21,3.21,0,0,1,3.211-3.211h78.44a3.211,3.211,0,0,1,3.211,3.211v7.59a3.211,3.211,0,0,1-3.211,3.211" fill="#c0cbdc"/>
          <path id="Path_686" data-name="Path 686" d="M558.655,404.007H511.084a3.212,3.212,0,0,1-3.211-3.211v-7.59a3.211,3.211,0,0,1,3.211-3.211h47.571a3.211,3.211,0,0,1,3.211,3.211v7.59a3.212,3.212,0,0,1-3.211,3.211" fill="#c0cbdc"/>
        </g>
        <g id="Bottom">
          <path id="Path_687" data-name="Path 687" d="M731.125,635.918H525.719a10.8,10.8,0,0,1-10.8-10.8v-164.9a10.8,10.8,0,0,1,10.8-10.8H731.125a10.8,10.8,0,0,1,10.8,10.8v164.9a10.8,10.8,0,0,1-10.8,10.8" fill="#c0cbdc"/>
          <path id="Path_688" data-name="Path 688" d="M607.068,535.186H541.014a10.8,10.8,0,0,1-10.8-10.8V473.971a10.8,10.8,0,0,1,10.8-10.8h66.054a10.8,10.8,0,0,1,10.8,10.8v50.415a10.8,10.8,0,0,1-10.8,10.8" fill="#8b9bb4"/>
          <path id="Path_689" data-name="Path 689" d="M625.211,567.719H533.425a3.211,3.211,0,0,1-3.211-3.211V553.094a3.211,3.211,0,0,1,3.211-3.211h91.786a3.211,3.211,0,0,1,3.211,3.211v11.414a3.211,3.211,0,0,1-3.211,3.211" fill="#8b9bb4"/>
          <path id="Path_690" data-name="Path 690" d="M607.525,590.493h-74.1a3.211,3.211,0,0,1-3.21-3.211v-6.874a3.21,3.21,0,0,1,3.21-3.211h74.1a3.211,3.211,0,0,1,3.211,3.211v6.874a3.212,3.212,0,0,1-3.211,3.211" fill="#8b9bb4"/>
          <path id="Path_691" data-name="Path 691" d="M664.46,590.493H619.65a3.211,3.211,0,0,1-3.211-3.211v-6.874a3.211,3.211,0,0,1,3.211-3.211h44.81a3.211,3.211,0,0,1,3.211,3.211v6.874a3.212,3.212,0,0,1-3.211,3.211" fill="#8b9bb4"/>
          <path id="Path_692" data-name="Path 692" d="M710.048,590.493H675.4a3.211,3.211,0,0,1-3.211-3.211v-6.874A3.211,3.211,0,0,1,675.4,577.2h34.648a3.211,3.211,0,0,1,3.211,3.211v6.874a3.211,3.211,0,0,1-3.211,3.211" fill="#8b9bb4"/>
          <path id="Path_693" data-name="Path 693" d="M628.4,609.023h-94.97a3.211,3.211,0,0,1-3.211-3.211v-6.874a3.21,3.21,0,0,1,3.211-3.211H628.4a3.211,3.211,0,0,1,3.211,3.211v6.874a3.211,3.211,0,0,1-3.211,3.211" fill="#8b9bb4"/>
        </g>
        <g id="Top">
          <path id="Path_694" data-name="Path 694" d="M552.7,232.691H335.062a10.8,10.8,0,0,1-10.8-10.8V76.6a10.8,10.8,0,0,1,10.8-10.8H552.7a10.8,10.8,0,0,1,10.8,10.8V221.891a10.8,10.8,0,0,1-10.8,10.8" fill="#c0cbdc"/>
          <path id="Path_695" data-name="Path 695" d="M421.959,156.2H351.181a10.8,10.8,0,0,1-10.8-10.8V91.1a10.8,10.8,0,0,1,10.8-10.8h70.778a10.8,10.8,0,0,1,10.8,10.8v54.3a10.8,10.8,0,0,1-10.8,10.8" fill="#8b9bb4"/>
          <path id="Path_696" data-name="Path 696" d="M464.474,190.485H343.592a3.211,3.211,0,0,1-3.211-3.211V174.9a3.211,3.211,0,0,1,3.211-3.211H464.474a3.211,3.211,0,0,1,3.211,3.211v12.375a3.211,3.211,0,0,1-3.211,3.211" fill="#8b9bb4"/>
          <path id="Path_697" data-name="Path 697" d="M422.033,214.486h-78.44a3.211,3.211,0,0,1-3.211-3.211v-7.591a3.211,3.211,0,0,1,3.211-3.211h78.44a3.211,3.211,0,0,1,3.211,3.211v7.591a3.211,3.211,0,0,1-3.211,3.211" fill="#8b9bb4"/>
          <path id="Path_698" data-name="Path 698" d="M482.036,214.486H434.465a3.211,3.211,0,0,1-3.211-3.211v-7.591a3.211,3.211,0,0,1,3.211-3.211h47.571a3.211,3.211,0,0,1,3.211,3.211v7.591a3.211,3.211,0,0,1-3.211,3.211" fill="#8b9bb4"/>
          <path id="Path_699" data-name="Path 699" d="M513.794,214.486H493.22a3.211,3.211,0,0,1-3.211-3.211v-7.591a3.211,3.211,0,0,1,3.211-3.211h20.574a3.211,3.211,0,0,1,3.211,3.211v7.591a3.211,3.211,0,0,1-3.211,3.211" fill="#8b9bb4"/>
        </g>
      </g>
    </g>
    <g id="Girl">
      <g id="Group_288" data-name="Group 288" clip-path="url(#clip-path)">
        <path id="Path_700" data-name="Path 700" d="M351.209,434.568s-5.05-4.758-4.745-27.28-23.169-10.15-26.658-3.489,6.344,23.7-4.124,35.164Z" fill="#e8b796"/>
        <path id="Path_701" data-name="Path 701" d="M384.609,355.6c3.078,33.395-2.548,58.725-41.83,59.433-25.159.453-47.1-22.369-49.108-53.576s22.742-43.585,41.83-59.433c31.406-26.074,46.238,22.437,49.108,53.576" fill="#e8b796"/>
        <path id="Path_702" data-name="Path 702" d="M392.128,357.677c.327,5.07-4.707,11.24-9.985,11.58a9.206,9.206,0,1,1-1.182-18.36c5.277-.34,10.84,1.71,11.167,6.78" fill="#e8b796"/>
        <path id="Path_703" data-name="Path 703" d="M291.67,627.762S241.133,603.435,229.8,558.1s56.336-104.446,56.336-104.446Z" fill="#265c42"/>
        <path id="Path_704" data-name="Path 704" d="M452.963,406.971s-8.222-12.037-12.5-22.2a30.105,30.105,0,0,1-1.111-19.556s3.365-2.061-2.475-10.244,7.458-5.663,7.458-5.663l-2.688-28.14s2.431-9.494,7.23-.335,5.252,25.792,5.252,25.792,4.065-.517,7.779,6.841c0,0,4.158-1.321,8.788,5.3s13.032,30.537,8.043,50.783Z" fill="#e8b796"/>
        <path id="Path_705" data-name="Path 705" d="M274.81,717.787s15.735-31.967,54.183-18.574S282,614.93,274.81,717.787" fill="#5a6988"/>
        <line id="Line_74" data-name="Line 74" x1="6.667" y2="32" transform="translate(270.466 683.435)" fill="none" stroke="#5a6988" stroke-linecap="round" stroke-miterlimit="10" stroke-width="10"/>
        <path id="Path_706" data-name="Path 706" d="M363.225,436.665s26.606,1.437,33.257,19.659,25.762,27.112,37.762,25.334,27.556-10.222,5.778-76.889l52.444-3.111s5.334-.445,0,3.222S481.8,416.755,488.911,448.1s6.222,92.674-78.222,92.9c0,0,17.555,54.889,16,147.333,0,0-69.334,52-165.778-11.111,0,0,32.444-48.444,24.444-118.666s-35.722-90.778,22.111-119.111Z" fill="#3e8948"/>
        <path id="Path_707" data-name="Path 707" d="M307.466,425.234s12.833,8.618,55.167-2.049l1.512,15.562s-40.679,18.021-56.679,3.021Z" fill="#c0cbdc"/>
        <path id="Path_708" data-name="Path 708" d="M330.25,331.247s39.639.7,53.958-13.826c0,0-.7-20.049-13.693-33.429-24.331-25.044-58.993-3.178-58.993-3.178Z" fill="#d77643"/>
        <path id="Path_709" data-name="Path 709" d="M346.565,414.612a32.807,32.807,0,0,1-13.767-.286s12.938,4.62,14.792,10.218Z" fill="#c28569"/>
        <path id="Path_710" data-name="Path 710" d="M390.066,390.476s-35.613,1.156-42.476-34.893c0,0-4.472-20.142,6.815-24.609s22.914-29.12,10.938-47.677c-12.517-19.393-73.4-20.342-95.657,11.3s-7.331,68.285-7.331,68.285,7.264,36.129-34.223,65.979c0,0,57.732,44.885,102.141,4.758,0,0,14.788-12.02,14.433-36,0,0,30.032,9.535,45.36-7.137" fill="#d77643"/>
        <path id="Path_711" data-name="Path 711" d="M374.576,343.7c.523,3.048,0,5.671-1.178,5.858s-2.55-2.133-3.073-5.182,0-5.671,1.178-5.858,2.55,2.133,3.073,5.182" fill="#3e2731"/>
        <path id="Path_712" data-name="Path 712" d="M364.736,338.15c.158-.526,1.629-6.646,7.183-7.482" fill="none" stroke="#d77643" stroke-linecap="round" stroke-miterlimit="10" stroke-width="4"/>
        <path id="Path_713" data-name="Path 713" d="M341.34,335.838s2.655,28.427,24.75,31.9c0,0-13.151-6.816-12.569-35.835.706-35.272-12.181,3.937-12.181,3.937" fill="#d77643"/>
        <path id="Path_714" data-name="Path 714" d="M366.089,326.857s-1.51-44.766-19.029-54.307c-16.153-8.8-22.372-2.94-22.372-2.94a46.731,46.731,0,0,1,11.717,1.6c5.32,1.31,16.072,26.407,17.152,65.66a22.427,22.427,0,0,0,12.532-10.01" fill="#a22633"/>
        <path id="Path_715" data-name="Path 715" d="M444.338,349.306l1.334,13.463s-2.141-10.875-4.283-13.8a10.343,10.343,0,0,1,2.949.337" fill="#c28569"/>
        <path id="Path_716" data-name="Path 716" d="M454.132,346.622,454.8,352s.613-5.357,1.491-4.876-1.3-.832-2.158-.5" fill="#c28569"/>
        <path id="Path_717" data-name="Path 717" d="M410.688,540.991S391.8,537.769,380.466,527.1c0,0,11.493,26.038,34.747,31.686,0,0-2.136-11.908-4.525-17.8" fill="#265c42"/>
      </g>
    </g>
    <text id="QuestionMark" data-name="?" transform="translate(520.317 350.604)" fill="#e43b44" font-size="200" font-family="Poppins-Black, Poppins" font-weight="800"><tspan x="0" y="0">?</tspan></text>
  </g>
</svg>

            </div>
        </div>
    )
}
