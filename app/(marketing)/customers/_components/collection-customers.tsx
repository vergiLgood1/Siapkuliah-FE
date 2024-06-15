import MaxWidthWrapper from "@/components/max-width-wrapper";
import { BentoGrid } from "@/components/ui/bento-grid";

import { FaAtlassian, FaGithub, FaGoogle, FaMicrosoft, FaApple, FaFacebook, FaAmazon, FaSlack, FaTrello, FaDropbox, FaSpotify, FaSalesforce, FaShopify, FaTwitter, FaLinkedin, FaUber, FaAirbnb, FaPaypal, FaAndroid, FaAmazonPay } from "react-icons/fa";

const CollectionCustomers = () => {
  return (
    <MaxWidthWrapper>
      <div className="max-w-7xl mx-auto auto-rows-auto py-12 md:py-28 gap-4 border-b-4 border-[#f5f5f5] ">
        <div className="flex flex-col col-span-4 items-center justify-center mb-8">
          <span className="col-span-4 text-center text-4xl lg:text-5xl font-medium text-[#2d2d2d] mb-6 md:mb-12 max-w-xs md:max-w-sm">
            Knowing our customers
          </span>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-x-clamp-x gap-y-clamp-y">
          {Customer.slice(0, 20).map((item, i) => (
            <li key={i} className="flex items-center justify-center space-x-2">
              {item.logo}
              {/* <span className="text-2xl font-bold hidden md:block">{item.brandname}</span> */}
            </li>
          ))}
        </ul>
      </div>
    </MaxWidthWrapper>
  );
};

export default CollectionCustomers;

const Customer = [
  {
    brandname: "Atlassian",
    logo: <FaAtlassian className="w-12 h-auto" />,
    description:
      "Atlassian develops products for software developers, project managers, and content management.",
  },
  {
    brandname: "GitHub",
    logo: <FaGithub className="w-12 h-auto" />,
    description:
      "GitHub is a provider of Internet hosting for software development and version control using Git.",
  },
  {
    brandname: "Google",
    logo: <FaGoogle className="w-12 h-auto" />,
    description:
      "Google LLC is an American multinational technology company specializing in Internet-related services and products.",
  },
  {
    brandname: "Microsoft",
    logo: <FaMicrosoft className="w-12 h-auto" />,
    description:
      "Microsoft Corporation is an American multinational technology company producing computer software, consumer electronics, personal computers, and related services.",
  },
  {
    brandname: "Apple",
    logo: <FaApple className="w-12 h-auto" />,
    description:
      "Apple Inc. is an American multinational technology company that designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories.",
  },
  {
    brandname: "Facebook",
    logo: <FaFacebook className="w-12 h-auto" />,
    description:
      "Facebook, Inc. is an American social media conglomerate corporation.",
  },
  {
    brandname: "Amazon",
    logo: <FaAmazon className="w-12 h-auto" />,
    description:
      "Amazon.com, Inc. is an American multinational conglomerate that focuses on e-commerce, cloud computing, and artificial intelligence.",
  },
  {
    brandname: "Slack",
    logo: <FaSlack className="w-12 h-auto" />,
    description:
      "Slack is a proprietary business communication platform developed by American software company Slack Technologies.",
  },
  {
    brandname: "Trello",
    logo: <FaTrello className="w-12 h-auto" />,
    description:
      "Trello is a web-based, Kanban-style, list-making application and is a subsidiary of Atlassian.",
  },
  {
    brandname: "Dropbox",
    logo: <FaDropbox className="w-12 h-auto" />,
    description:
      "Dropbox is a file hosting service operated by the American company Dropbox, Inc.",
  },
  {
    brandname: "Spotify",
    logo: <FaSpotify className="w-12 h-auto" />,
    description:
      "Spotify is a Swedish audio streaming and media services provider.",
  },
  {
    brandname: "Netflix",
    logo: <FaAndroid className="w-12 h-auto" />,
    description:
      "Netflix, Inc. is an American over-the-top content platform and production company.",
  },
  {
    brandname: "Adobe",
    logo: <FaAmazonPay className="w-12 h-auto" />,
    description:
      "Adobe Inc. is an American multinational computer software company.",
  },
  {
    brandname: "Salesforce",
    logo: <FaSalesforce className="w-12 h-auto" />,
    description:
      "Salesforce is an American cloud-based software company headquartered in San Francisco, California.",
  },
  {
    brandname: "Shopify",
    logo: <FaShopify className="w-12 h-auto" />,
    description:
      "Shopify Inc. is a Canadian multinational e-commerce company headquartered in Ottawa, Ontario.",
  },
  {
    brandname: "Twitter",
    logo: <FaTwitter className="w-12 h-auto" />,
    description: "Twitter, Inc. is an American social media company.",
  },
  {
    brandname: "LinkedIn",
    logo: <FaLinkedin className="w-12 h-auto" />,
    description:
      "LinkedIn is an American business and employment-oriented online service that operates via websites and mobile apps.",
  },
  {
    brandname: "Uber",
    logo: <FaUber className="w-12 h-auto" />,
    description: "Uber Technologies, Inc. is an American technology company.",
  },
  {
    brandname: "Airbnb",
    logo: <FaAirbnb className="w-12 h-auto" />,
    description:
      "Airbnb, Inc. is an American company that operates an online marketplace for lodging, primarily homestays for vacation rentals, and tourism activities.",
  },
  {
    brandname: "PayPal",
    logo: <FaPaypal className="w-12 h-auto" />,
    description:
      "PayPal Holdings, Inc. is an American company operating an online payments system in the majority of countries that support online money transfers.",
  },
];
