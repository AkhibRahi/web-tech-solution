import { Feature } from "@/types/feature";
import { MdSupportAgent } from "react-icons/md";
import IconResponsive from "../icons/IconResponsive";
import { MdPriceCheck } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";


const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <IconResponsive  className="text-primary" style={{fontSize:'35px'}}/>
    ),
    title: "Responsive Design",
    paragraph:
      "Our websites work on all device, ensuring a smooth user experience across different platforms effortlessly.",
  },
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20.5914 34.2584C20.2394 34.5172 19.7603 34.5175 19.408 34.2593L4.19163 23.1079C3.8395 22.8498 3.36065 22.85 3.00873 23.1084L1.09802 24.5111C0.553731 24.9107 0.553731 25.7237 1.09802 26.1233L19.4082 39.5655C19.7604 39.824 20.2396 39.824 20.5918 39.5655L38.9029 26.1226C39.4469 25.7232 39.4473 24.9107 38.9036 24.5109L36.9701 23.0889C36.6177 22.8298 36.1378 22.8297 35.7854 23.0888L20.5914 34.2584Z"
        />
        <path d="M19.408 28.931C19.7603 29.1896 20.2396 29.1894 20.5918 28.9306L36.3556 17.3466L38.8979 15.4883C39.4437 15.0894 39.4446 14.275 38.8996 13.8749L20.5918 0.43445C20.2396 0.175911 19.7604 0.175913 19.4082 0.434452L1.09706 13.8774C0.553051 14.2767 0.552712 15.0892 1.09638 15.4891L3.62222 17.3466L19.408 28.931Z" />
      </svg>
    ),
    title: "Custom Web Solutions",
    paragraph:
      "To fit your company's brand, we design customized solutions specifically for you that will make your online presence stand out and be unique.",
  },
  {
    id: 1,
    icon: (
      <CgWebsite size={40} />
    ),
    title: "High-Quality Websites",
    paragraph:
      "Beyond industry standards, our commitment is to deliver websites that exceed expectations, reflecting excellence in every aspect.",
  },
  {
    id: 1,
    icon: (
     <TbWorldWww size={40} />
    ),
    title: "Free Domain and SSL Certificate",
    paragraph:
      "Get a free domain and SSL Certificate for the first year for securing your online identity and boosting your brand presence at no extra cost.",
  },
  {
    id: 1,
    icon: (
      <MdSupportAgent size={40} />
    ),
    title: "End-to-End Support",
    paragraph:
      "We guarantee that your online presence always looks its best with our seamless support, which includes both development and continuing help.",
  },
  {
    id: 1,
    icon: (
     <MdPriceCheck size={40} />
    ),
    title: "Affordable Price",
    paragraph:
      "Get quality services at a budget-friendly price. We ensure top-notch solutions that are reasonably priced and of high quality.",
  },
];
export default featuresData;