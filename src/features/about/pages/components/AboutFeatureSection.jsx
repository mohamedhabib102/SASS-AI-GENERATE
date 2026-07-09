import React from "react";
import { Button } from "@/components/ui/button";
import CustomContainer from "@/components/shared/CustomContainer";
import Animate from "@/animations/Animate";

const AboutFeatureSection = ({
  title,
  description,
  btnText,
  imgSrc,
  dirc = "left", // "left" | "right"
  onBtnClick,
}) => {
  const imageOrderClass = dirc === "left" ? "lg:order-1" : "lg:order-2";
  const textOrderClass = dirc === "left" ? "lg:order-2" : "lg:order-1";

  // Dynamic alignment classes for text container
  const textAlignmentClass =
    dirc === "left"
      ? "lg:text-start lg:items-start"
      : "lg:text-start lg:items-start";
  // We keep it start-aligned for proper Arabic reading flow, but centered on mobile

  // Blob offset position based on image direction
  const blobPositionClass = dirc === "left" ? "" : "";

  return (
    <section className="py-16 md:py-20 overflow-hidden">
      <CustomContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div
            className={`col-span-1 lg:col-span-5 flex justify-center items-center order-1 ${imageOrderClass}`}
          >
            <Animate
              direction={dirc === "left" ? "right" : "left"}
              triggerOn="scroll"
              duration={0.7}
              className="relative"
            >
              {/* Decorative Organic Blob Shape */}
              <div
                className={`relative md:w-110 md:h-117 h-90 w-90 z-0 transition-all duration-500 ${blobPositionClass}`}
              >
                {/* SVG Shapes Around the Image */}
                {/* Star shape positioned top-left */}
                <span className="absolute top-4 left-8 z-20 md:w-16 md:h-20 animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 84" fill="none" className="w-full h-full">
                    <g clipPath="url(#clipStar)">
                      <path d="M38.466 33.0882C45.2446 30.0062 52.0232 26.9242 58.8018 23.8276C59.1941 24.7435 59.6001 25.6448 59.9924 26.5607C53.728 34.1786 42.6063 33.1609 35.3947 41.3312C44.8928 47.3063 54.1068 53.0923 63.3208 58.8929C62.9826 59.6053 62.6308 60.3177 62.2925 61.0155C52.2803 59.2564 44.6764 51.4641 34.2041 46.1142C36.9371 58.9802 39.359 70.4506 41.7944 81.9209C41.2532 82.4734 40.6985 83.0258 40.1573 83.5637C38.5878 81.8919 36.0442 80.4526 35.6112 78.49C34.0146 71.3083 33.1487 63.9376 31.9445 56.6541C31.5657 54.3862 30.9839 52.1619 30.4968 49.9231C29.8203 49.7632 29.1438 49.6032 28.4673 49.4433C25.1254 58.8057 21.7834 68.1827 18.3739 77.7777C14.3419 73.4599 15.979 66.9033 25.9507 45.9542C17.0073 48.8764 8.86221 51.5513 0.703565 54.2263C0.460023 53.5139 0.230012 52.787 0 52.0747C8.6322 48.2658 17.2779 44.4568 27.5608 39.921C20.3763 34.6292 14.3554 30.1806 8.33454 25.7466C8.67279 25.136 9.01104 24.5254 9.34929 23.9148C15.1266 27.0841 20.904 30.2533 27.5473 33.9023C26.0725 22.3156 24.6789 11.4122 23.2988 0.494288C24.1377 0.334371 24.9901 0.174455 25.8289 0C27.7232 10.0893 29.6038 20.1786 31.4981 30.2679C31.9581 30.5295 32.4046 30.7767 32.8646 31.0384C36.8966 22.2575 40.9285 13.4766 44.974 4.6812C45.7182 5.05918 46.4623 5.42263 47.2065 5.80061C43.8916 14.4361 40.5767 23.0716 37.2619 31.7071C37.1672 32.2741 37.0724 32.8265 36.9777 33.379C37.4648 33.2772 37.9654 33.1754 38.466 33.0882Z" fill="#F56E14"/>
                    </g>
                    <defs>
                      <clipPath id="clipStar">
                        <rect width="63.3208" height="83.5637" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </span>

                {/* Triangle shape- positioned top-right */}
                <span className="absolute top-5 right-24 z-20 w-8 h-8 md:w-9 md:h-9">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 37" fill="none" className="w-full h-full">
                    <g clipPath="url(#clipTri)">
                      <path d="M11.4802 36.5587C7.5326 28.941 3.37013 21.6407 0.0938676 13.9076C-0.523789 12.4504 1.85285 8.13663 3.77295 7.08342C9.07674 4.15465 14.8102 1.97611 20.5302 0.100543C21.9535 -0.361135 24.7867 0.922906 25.6729 2.35122C28.7477 7.31426 31.2318 12.6957 33.971 17.904C35.9985 21.7561 35.542 24.6849 31.5138 26.6326C25.1089 29.7201 18.7444 32.9518 11.4802 36.5587ZM13.4943 31.033C19.3486 27.5415 24.4376 24.5118 29.4191 21.5541C22.8129 5.179 18.1805 3.76511 5.16939 13.6912C7.74743 19.0438 10.3523 24.4829 13.4943 31.033Z" fill="#F56E14"/>
                    </g>
                    <defs>
                      <clipPath id="clipTri">
                        <rect width="35.1527" height="36.5591" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </span>

                {/* Wavy shape - positioned bottom-center */}
                <span className="absolute bottom-4 left-10/12 -translate-x-1/2 z-20 w-44 h-16 md:w-52 md:h-18">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 208 71" fill="none" className="w-full h-full">
                    <g clipPath="url(#clipWavy)">
                      <path d="M16.7105 20.0138C25.4984 11.0934 35.2098 4.09492 47.7888 3.54131C53.8548 3.26973 58.9681 5.9751 63.7314 9.89215C65.0146 10.9471 67.4157 11.3127 69.0197 10.8636C77.234 8.54469 85.2733 5.46328 93.5557 3.49953C96.8123 2.72656 100.516 4.1367 104.025 4.54407C108.371 10.3309 112.56 11.3963 119.346 7.33301C128.561 1.80736 138.992 -0.365295 149.821 2.44454C155.382 3.88601 159.416 7.06143 161.866 12.1275C169.438 9.3281 176.865 5.94377 184.603 3.88601C192.079 1.89093 199.865 1.25375 207.526 0.0107422C207.642 0.731479 207.759 1.46266 207.876 2.1834C205.358 2.65345 202.801 2.9877 200.322 3.63532C190.174 6.25713 180.005 8.82672 169.915 11.6992C165.171 13.0571 163.266 16.2117 163.761 22.0716C164.578 31.6396 162.439 40.6541 155.576 47.6316C152.184 51.0891 146.944 52.4261 144.543 50.5041C141.821 48.321 140.684 42.0433 143.201 37.9905C147.284 31.4307 151.785 25.1112 156.597 19.1364C159.863 15.0835 160.262 12.514 156.237 8.95206C148.509 2.11028 139.575 2.91458 130.846 5.46328C124.673 7.2599 118.84 10.404 112.492 13.0989C113.396 16.3057 114.3 18.8439 114.816 21.4657C117.363 34.3763 112.279 44.4249 104.045 53.0633C101.41 55.8209 98.4065 58.3069 95.2569 60.3333C88.1508 64.9084 83.8249 62.203 83.7957 53.2931C83.7666 43.5057 86.8287 34.8359 93.0794 27.7539C97.6774 22.5416 102.742 17.7994 108.264 12.1693C107.194 11.5112 105.736 10.6129 104.288 9.70413C102.12 8.39845 100.049 6.22579 97.7649 5.92288C87.5383 4.56497 78.6824 9.56834 69.7877 13.945C69.3696 14.1539 69.7877 16.2952 69.8168 17.5382C72.9373 39.2439 64.9757 55.6328 48.5665 67.6556C42.4909 72.1053 35.793 71.2593 32.8864 65.4411C31.2241 62.109 30.8256 57.3668 31.438 53.5438C33.3725 41.4166 40.6341 32.6319 48.7901 24.6203C49.8594 23.5653 50.9774 22.5729 52.0758 21.5493C55.7407 18.9902 59.3958 16.431 63.2454 13.7361C57.6169 7.42702 51.2204 4.4814 44.0365 6.19446C32.2837 9.00429 22.5432 15.6894 15.5343 26.49C7.89352 34.7001 4.21895 45.1352 1.34151 56.0089C0.89434 55.894 0.44717 55.7791 0 55.6642C0.505496 52.4783 0.515217 49.0731 1.62342 46.1484C3.42182 41.427 6.01735 37.0504 8.1171 32.4544C8.78786 30.992 8.98228 29.2789 9.40029 27.6808C9.89606 26.8556 10.3821 26.02 10.8779 25.1948C12.8221 23.4713 14.7663 21.7373 16.7105 20.0138ZM64.4897 15.0522C57.5682 21.1837 50.5205 26.2289 44.9308 32.7155C39.0982 39.4946 33.8294 47.2347 34.0043 57.4295C34.1696 66.6946 39.2926 69.8491 46.8265 65.1905C57.5682 58.5576 63.0315 47.5794 66.6477 35.6193C68.5142 29.4878 68.8058 22.7087 64.4897 15.0522ZM110.062 15.6372C101.508 21.027 94.8486 27.6599 90.6297 36.9459C87.9952 42.7536 86.1094 48.6762 86.8676 55.309C87.3342 59.4037 89.2007 60.3751 92.4281 58.5785C104.152 52.0605 118.072 35.7133 110.062 15.6372ZM160.952 18.6246C152.971 25.1008 148.178 33.0498 145.029 42.1164C144.475 43.7041 145.709 47.5481 146.808 47.9032C148.499 48.4568 151.25 47.4854 152.757 46.1379C160.544 39.1604 161.477 29.6236 160.952 18.6246Z" fill="#F56E14"/>
                    </g>
                    <defs>
                      <clipPath id="clipWavy">
                        <rect width="207.866" height="70.486" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </span>

                {/* SVG Blob as Background */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 442 471"
                  fill="none"
                  className="absolute top-0 left-0 w-full h-full blur-[1px]"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M229.39 0.00311421C298.809 -0.263545 372.637 16.5275 414.16 76.3041C454.55 134.449 441.589 212.258 425.842 282.814C410.39 352.044 388.989 426.658 329.145 457.213C269.551 487.642 202.334 458.398 143.094 427.183C84.5647 396.343 27.8095 355.766 9.2093 288.633C-10.7796 216.488 1.85885 135.934 46.2689 77.7173C90.0408 20.3377 160.343 0.268347 229.39 0.00311421Z"
                    fill="#C8C6F7"
                  />
                </svg>

                {/* Hexagonal Clipped Image Container with Shadow */}
                <div className="absolute flex justify-center items-center -rotate-12 w-full h-full top-[43%] left-1/2 -translate-1/2 z-10 transition-transform duration-300">
                  <img
                    src={imgSrc}
                    alt={title}
                    className="w-96 h-96 object-cover"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 30%, 85% 95%, 20% 100%, 0% 30%)",
                    }}
                    loading="lazy"
                  />
                </div>
              </div>
            </Animate>
          </div>

          {/* Text Content Column */}
          <div
            className={`col-span-1 lg:col-span-7 flex flex-col items-center text-center ${textAlignmentClass} order-2 ${textOrderClass}`}
          >
            <Animate direction="up" triggerOn="scroll" duration={0.6}>
              <h2 className="text-3xl font-medium text-main border-b-2 border-[#FFA121] pb-3 leading-tight mb-6 text-start w-full">
                {title}
              </h2>
            </Animate>

            <Animate
              direction="up"
              triggerOn="scroll"
              duration={0.6}
              delay={0.15}
            >
              <p className="text-desc text-base md:text-lg leading-relaxed mb-8 text-start whitespace-pre-line w-full">
                {description}
              </p>
            </Animate>

            {btnText && (
              <Animate
                direction="up"
                triggerOn="scroll"
                duration={0.6}
                delay={0.3}
                className="w-full text-start"
              >
                <Button
                  onClick={onBtnClick}
                  className="bg-primary hover:bg-primary-dark text-white font-semibold text-base px-8 py-3 h-auto rounded-xl shadow-md transition-all duration-200 cursor-pointer"
                >
                  {btnText}
                </Button>
              </Animate>
            )}
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default AboutFeatureSection;
