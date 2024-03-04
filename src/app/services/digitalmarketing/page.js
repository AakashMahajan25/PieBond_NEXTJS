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
  <Faq
  q1="Digital Marketing Strategies: How do you ensure effective digital marketing campaigns?"
  a1="Our team of experts follows best practices in digital marketing, utilizing proven strategies, data-driven decisions, and compelling content. We tailor campaigns to your target audience, ensuring maximum engagement and results."
  q2="Audience Segmentation: How do you handle and segment target audiences?"
  a2="We employ advanced audience segmentation techniques, considering factors such as user behavior, demographics, and engagement levels. This ensures personalized and targeted communication, leading to higher engagement and conversion rates."
  q3="Online Presence: How do you ensure a strong online presence for brands?"
  a3="We prioritize brand visibility and engagement through strategic online presence management. This includes leveraging various digital channels, optimizing content, and adhering to industry standards to enhance brand reputation."
  q4="Analytics and Reporting: What insights do you provide for campaign performance?"
  a4="Our analytics cover a range of metrics, including engagement rates, conversion rates, website traffic, and more. We present comprehensive reports with actionable insights, allowing you to refine and improve your future digital marketing strategies."
  q5="Automation: How can automation benefit my digital marketing efforts?"
  a5="Automation streamlines your digital marketing efforts by automating repetitive tasks, segmenting audiences, and delivering personalized content. It enhances efficiency, increases relevance, and improves overall campaign performance."
/>

  return (
    <div ClassName="flex flex-col ">
      <Navbar />
      <Banner />
      <Proven
  title1="Proven Digital Marketing Strategies"
  desc1="Explore a collection of proven digital marketing tactics meticulously designed and backed by data. Our strategies are tailored to fortify your online presence and drive tangible results for your business."
  title2="Certified Digital Marketing Experts"
  desc2="Tap into the knowledge and skills of our certified professionals who are dedicated to optimizing your digital marketing endeavors. Stay ahead of industry trends with a team committed to delivering top-notch solutions for your business."
  title3="Guaranteed Digital Marketing Results"
  desc3="Experience the impact of our unwavering commitment to results. We blend expertise, innovation, and personalized digital marketing strategies to ensure your success in the dynamic digital landscape."
/>

<ServiceCard
  title="Professional Digital Marketing Agency in India"
  desc="In the ever-evolving digital marketing landscape, social media stands as a dynamic powerhouse for brand engagement and expansion. At Pie-Bond, we understand the profound significance of digital marketing and present specialized management services, meticulously crafted for your brand's unprecedented growth. Experience a strategic methodology in digital marketing that guarantees your brand seizes the boundless opportunities across various platforms, resulting in substantial outcomes."
  cardTitle1="Strategic Email Campaign Management"
  desc1="Elevate your brand with precisely crafted digital campaigns, leveraging our expertise in audience segmentation and tailored content creation for optimal engagement."
  cardTitle2="Personalized Automation Initiatives"
  desc2="Harness the potential of automated workflows to streamline your campaigns. Our experts design personalized customer journeys, enhancing relevance and driving conversions."
  cardTitle3="Data Analytics for Informed Decision-Making"
  desc3="Dive into data-centric decision-making with our robust analytics. Gain insights into campaign performance, user behavior, and effectiveness for continuous improvement."
  cardTitle4="List Management and Segmentation"
  desc4="Optimize your lists with advanced segmentation techniques. Deliver targeted messages that resonate with specific audience segments, ensuring higher open and conversion rates."
  cardTitle5="Responsive Design and Testing"
  desc5="Ensure your content looks stunning across devices. Our team prioritizes responsive design and A/B testing to maximize the impact of your campaigns."
  cardTitle6="Compelling Content Creation"
  desc6="Engage your audience with captivating content. Our creative team blends persuasive copywriting with visually appealing designs to drive meaningful interactions and strengthen your brand presence."
/>

      <Faq1 faqData={faqData} />
      <Drawer
  title="Understanding Digital Marketing"
  button="Explore Our Digital Marketing Services"
  desc1="Discover Pie-Bond's Digital Marketing, your intelligent online strategy for dynamic brand engagement. Unlike static approaches, we convert passersby into customers. If we don't enhance your profitability, our service is free."
  Img1={seoimg}
  title2="Our 5-stage process for effective Digital Marketing services:"
  submenu1="1. Research & Plan"
  subdesc1="Scout optimal strategies by analyzing competitors and crafting distinctive plans for your online presence."
  submenu2="2. Track & Measure"
  subdesc2="Utilize tracking tools to assess engagement rates and gather valuable data."
  submenu3="3. Execute"
  subdesc3="Construct and implement attention-grabbing strategies, content, and elements for your online presence."
  submenu4="4. Optimize"
  subdesc4="Experiment with various messages, platforms, and CTAs to refine and enhance engagement."
  submenu5="5. Scale"
  subdesc5="Grow your online presence by doing more of what works, similar to expanding your strategies on multiple channels."
  lastdesc="Gain the reputation and visibility your website deserves in the digital world. Ready to amplify your brand's online presence? Explore Pie-Bond's Digital Marketing now!"
/>

<Section2
  title="Generate Better ROI with Proven Digital Marketing Strategies"
  desc1="Discover the proven strategies your competitors are using to dominate the market and achieve outstanding ROI. Are you tired of uncertain marketing channels? Our solutions have generated over 2,480 page 1 Google rankings, increased organic traffic by 140%, and delivered 8,000+ high-quality leads. Steal market share and dominate online space in just months!"
  desc2="Key Highlights:"
  highlights={[
    "Proven strategies for guaranteed results",
    "Over 2,480 page 1 Google rankings",
    "140% growth in organic traffic",
    "8,000+ high-quality leads delivered",
  ]}
  lastdesc="Ready to elevate your marketing game? Learn more about our proven strategies now!"
/>

<Section3
  maintitle="With our tried-and-tested framework, we confidently assure success in digital marketing"
  title="Research & Plan"
  desc="Uncover proven engagement tactics from your competitors. Analyze your business, set targets, and craft a tailored digital marketing strategy with at least five themes."
  title2="Track & Measure"
  desc2="Uncover proven engagement tactics from your competitors. Analyze your business, set targets, and craft a tailored digital marketing strategy with at least five themes."
  title3="Execute"
  desc3="Leverage our team of digital marketing experts to develop assets needed to execute your strategy and expand your following."
  title4="Optimise"
  desc4="Conduct extensive testing to determine what resonates best, gaining invaluable insights into what drives success for your brand."
  title5="Scale"
  desc5="Enhance your online presence by scaling up successful strategies once desired results are achieved."
/>

      {/* <Price/> */}
      <Faq
  q1="What digital marketing channels offer effective marketing opportunities?"
  a1="The efficacy depends on your business, sector, and audience. We adeptly utilize channels where your target demographic engages."
  q2="Which digital marketing channels do you work with?"
  a2="Our team excels in various digital marketing channels, including but not limited to search engine optimization (SEO), social media marketing (SMM), email marketing, and content marketing. We adapt to evolving platforms, ensuring exceptional outcomes."
  q3="How do your digital marketing services work?"
  a3="From strategy consultation to comprehensive campaign management, we specialize in crafting strategies, content creation, audience engagement, and insightful reporting, adapting to diverse requirements."
  q4="Which industries have you worked with in digital marketing?"
  a4="We collaborate across diverse sectors, from e-commerce and technology to healthcare and finance. Explore our case studies for insights into our expertise across different industries."
  q5="When should I use digital marketing?"
  a5="Digital marketing is essential for establishing a strong online presence, increasing brand visibility, and reaching your target audience. It's particularly effective for generating leads, driving sales, and building credibility. We can guide you in cultivating a successful digital strategy tailored to your business goals and target audience."
/>

      <Footer />
    </div>
  );
}
