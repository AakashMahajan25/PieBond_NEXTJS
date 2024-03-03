import Footer from "@/components/footer/footer";
import Banner from "../../../components/hero/hero2";
import Navbar from "@/components/navbar/mainnav";
import Faq from "../../../components/faq/faq";
import When from "../../../components/when/page";
import ServiceCard from "../../../components/servicesslider/sslider";
import Proven from "../../../components/Sections/proven";
import Drawer from "../../../components/drawer/drawer";
import Faq1 from "../../../components/faq/faq2";
import seoimg from "../../../assets/unds.jpg";
import Section2 from "@/components/services/sections/section2";
import Section3 from "@/components/services/sections/section3";
import Price from "../../../components/services/price/price";
export default function Home() {
  const faqData = [
    {
      question:
        "Email Campaign Creation: How do you ensure effective email campaigns?",
      answer:
        "Our team of experts follows best practices in email marketing, crafting engaging content and using compelling visuals. We also perform A/B testing to optimize subject lines, content, and calls-to-action for maximum effectiveness.",
    },
    {
      question: "List Management: How do you handle and segment email lists?",
      answer:
        "We employ advanced list management techniques, including segmentation based on user behavior, demographics, and engagement levels. This ensures targeted and personalized communication, leading to higher open and conversion rates.",
    },
    {
      question:
        "Email Deliverability: How do you ensure emails reach the inbox?",
      answer:
        "We prioritize email deliverability through authentication protocols, monitoring sender reputation, and adhering to industry standards. Our dedicated team actively works to prevent spam triggers and optimize deliverability rates.",
    },
    {
      question:
        "Analytics and Reporting: What insights do you provide for email performance?",
      answer:
        "Our analytics cover a range of metrics, including open rates, click-through rates, conversion rates, and more. We present comprehensive reports with actionable insights, allowing you to refine and improve your future email marketing strategies.",
    },
    {
      question: "Automation: How can automation benefit my email campaigns?",
      answer:
        "Automation streamlines your campaigns by sending targeted emails based on user behavior, preferences, and triggers. It saves time, increases relevance, and enhances overall campaign efficiency, leading to improved results.",
    },
  ];

  return (
    <div ClassName="flex flex-col ">
      <Navbar />
      <Banner />
      <Proven
        title1="Proven Strategies"
        desc1="Explore a collection of proven digital marketing tactics, meticulously designed and backed by data. These strategies are tailored to fortify your online presence and drive tangible results for your business."
        title2="Certified Experts"
        desc2="Tap into the knowledge and skills of our certified professionals who are dedicated to optimizing your digital marketing endeavors. Stay ahead of industry trends with a team committed to delivering top-notch solutions for your business."
        title3="Guaranteed Results"
        desc3="Experience the impact of our unwavering commitment to results. We blend expertise, innovation, and personalized digital marketing strategies to ensure your success in the dynamic digital landscape."
      />
      <ServiceCard
        title="Professional E-Mail Marketing Agency in India"
        desc="In the ever-evolving digital marketing landscape, social media stands as a dynamic powerhouse for brand engagement and expansion. At Pie-Bond, we understand the profound significance of social media and present specialized management services, meticulously crafted for your brand's unprecedented growth. Experience a strategic methodology in social media marketing that guarantees your brand seizes the boundless opportunities across various platforms, resulting in substantial outcomes."
        cardTitle1="Strategic Email Campaign Management"
        desc1="Elevate your brand with precisely crafted email campaigns, leveraging our expertise in audience segmentation and tailored content creation for optimal engagement."
        cardTitle2="Personalized Automation Initiatives
     "
        desc2="Harness the potential of automated workflows to streamline your campaigns. Our experts design personalized customer journeys, enhancing relevance and driving conversions.
     "
        cardTitle3="Data Analytics for Informed Decision-Making
     "
        desc3="Dive into data-centric decision-making with our robust analytics. Gain insights into email performance, user behavior, and campaign effectiveness for continuous improvement.
     "
        cardTitle4="List Management and Segmentation     "
        desc4="OOptimize your email lists with advanced segmentation techniques. Deliver targeted messages that resonate with specific audience segments, ensuring higher open and conversion rates."
        cardTitle5="Responsive Design and Testing
     "
        desc5="Ensure your emails look stunning across devices. Our team prioritizes responsive design and A/B testing to maximize the impact of your email campaigns.
     "
        cardTitle6="Compelling Content Creation
     "
        desc6="Engage your audience with captivating email content. Our creative team blends persuasive copywriting with visually appealing designs to drive meaningful interactions and strengthen your brand presence.
     "
      />
      <Faq1 faqData={faqData} />
      <Drawer
        title="Understanding E-Mail Marketing"
        button="Understand Our E-Mail Marketing"
        desc1="Discover Pie-Bond's Social Media Marketing, your intelligent online billboard for dynamic brand engagement. Unlike static ads, we convert passersby into customers. If we don't enhance your profitability, our service is free."
        Img1={seoimg}
        title2="Our 5-stage process for effective E-Mail Marketing services:"
        submenu1="1. Research & Plan"
        subdesc1="Scout optimal locations by analyzing competitors and crafting distinctive designs for your online presence."
        submenu2="2. Track & Measure"
        subdesc2="Utilize tracking tools to assess engagement rates and gather valuable data."
        submenu3="3. Execute"
        subdesc3="Construct and install attention-grabbing visuals, text, and elements for your online presence.

        "
        submenu4="4. Optimise"
        subdesc4="Experiment with various messages, lighting schemes, and CTAs to refine and enhance engagement."
        submenu5="5. Scale"
        subdesc5="Grow your following by doing more of what works, similar to installing billboards on multiple highways."
        lastdesc="Gain the reputation and visibility your website deserves in the digital world.

        Ready to amplify your brand's online presence? Explore Pie-Bond's Social Media Marketing now!"
      />
      <Section2
        title="Generate Better Roi with Proven Marketing Strategies"
        desc1="Discover the proven strategies your competitors are using to dominate the market and achieve outstanding ROI. Are you tired of uncertain marketing channels? Our solutions have generated over 2,480 page 1 Google rankings, increased organic traffic by 140%, and delivered 8,000+ high-quality leads. Steal market share and dominate online space in just months!"
        desc2="Key Highlights:

        -Proven strategies for guaranteed results
        -Over 2,480 page 1 Google rankings
        -140% growth in organic traffic
        -8,000+ high-quality leads delivered
        -Ready to elevate your marketing game? Learn more about our proven strategies now!"
      />
      <Section3
        maintitle="With our tried-and-tested framework, we confidently assure success in social media marketing"
        title="Research & Plan"
        desc="Uncover proven engagement tactics from your competitors. Analyze your business, set targets, and craft a tailored social media strategy with at least five themes."
        title2="Track & Measure"
        desc2="Uncover proven engagement tactics from your competitors. Analyze your business, set targets, and craft a tailored social media strategy with at least five themes."
        title3="Execute"
        desc3="Leverage our team of social media experts to develop assets needed to execute your strategy and expand your following."
        title4="Optimise"
        desc4="Conduct extensive testing to determine what resonates best, gaining invaluable insights into what drives success for your brand."
        title5="Scale"
        desc5="Enhance your social media following by scaling up successful strategies once desired results are achieved."
      />
      {/* <Price/> */}
      <Faq
        q1="What social media platforms offer effective marketing opportunities?"
        a1="The efficacy depends on your business, sector, and audience. We adeptly utilize platforms where your target demographic engages."
        q2="
        What social media channels do you work with?
      "
        a2="Our team excels in Facebook, Instagram, and LinkedIn, with adaptability for evolving platforms, ensuring exceptional outcomes."
        q3="
        How do your social media marketing services work?
      "
        a3="From strategy consultation to comprehensive channel management, we specialize in crafting strategies, content curation, community management, and insightful reporting, adapting to diverse requirements."
        q4="
        Which industries have you worked with in social media marketing?
      "
        a4="We collaborate across diverse sectors, from global manufacturers to local service enterprises. Explore our case studies for insights into our expertise."
        q5="
        When should I use social media marketing?
      "
        a5="In the realm of social media marketing, transparency regarding achievable outcomes is paramount. Typically, the primary objective revolves around augmenting brand visibility and cultivating credibility and trust. Without leveraging social media advertising or amassing a considerable following, generating leads or sales may pose challenges. Nevertheless, we can aid you in cultivating a dedicated following and transforming it into a lucrative channel once you've established a loyal fan base, mirroring our success with other clients."
      />
      <Footer />
    </div>
  );
}
