

import Footer from '@/components/footer/footer';
import Banner from "../../../components/hero/hero2"
import Navbar from "@/components/navbar/mainnav"
import Faq from "../../../components/faq/faq"
import When from "../../../components/when/page"
import ServiceCard from "../../../components/servicesslider/sslider"
import Proven from "../../../components/Sections/proven"
import Drawer from "../../../components/drawer/drawer"
import Faq1 from "../../../components/faq/faq2"
import seoimg from "../../../assets/unds.jpg"
import Section2 from '@/components/services/sections/section2';
import Section3 from '@/components/services/sections/section3';
import Price from "../../../components/services/price/price"
export default function Home() {
  const faqData = [
    { question: 'Audience Targeting', answer: "Employing Instagram&apos;s advanced targeting capabilities, we guarantee that your ads reach the appropriate audience, thereby maximizing engagement and conversion potential." },
    { question: 'Creative Contentr Creation', answer: "Our team designs visually compelling content that stands out in Instagram's crowded feed, capturing your audience's imagination and interest." },
    { question: 'Performance Analytics', answer: "We consistently monitor and analyze ad performance, leveraging insights to refine and optimize your campaigns for enhanced engagement and return on investment (ROI)." },
    { question: "Strategic Campaign Management", answer: 'From conceptualization to execution, we oversee every facet of your Instagram Ads campaign, ensuring seamless alignment with your overarching marketing strategy.' }
  ];
  return (
    <div ClassName="flex flex-col ">
      <Navbar />
      <Banner />
      <Proven
      desc1 = "Discover our array of proven digital marketing tactics, supported by data-driven insights, designed to propel your business to success in the online realm."
      desc2 = "Leverage the expertise of our certified professionals, who possess the knowledge and skills required to optimize your digital marketing endeavors effectively."

      desc3 = "Witness the distinction with our commitment to delivering remarkable outcomes, merging proficiency, innovation, and customized digital marketing approaches."
      />
      <ServiceCard
      title = "Professional Instagram Ad Agency"
      desc = "Instagram&apos;s visually-driven platform presents a distinctive chance for brands to connect with audiences. At Mr Digital, we excel in crafting Instagram Ads that are not only visually captivating but also strategically targeted. Our methodology blends artistic creativity with data-driven insights, guaranteeing that your brand captivates attention and fosters engagement on one of the globe&apos;s most renowned social platforms."

      cardTitle1 = "Brand Awareness Campaigns"
      desc1 = "We provide a wide range of Instagram Ads that are not only visually captivating but also strategically targeted. Our methodology blends artistic creativity with data-driven insights, guaranteeing that your brand captivates attention and fosters engagement on one of the globe&apos;s most renowned social platforms."

      cardTilte2 = "Engagement Campaigns"
      desc2 = "Centered on eliciting likes, comments, and shares, our engagement campaigns cultivate a robust bond between your brand and your Instagram community."

      cardTitle3 = "Traffic and Conversion Campaigns"
      desc3 = "Our ad designs are crafted not only to captivate viewers but also to prompt clicks, guiding traffic to your website or online store to enhance conversions and sales."

      cardTilte4 = "Story Ads"
      desc4 = "Harnessing Instagram's Stories feature, we produce immersive, full-screen ads designed to seize attention in a dynamic and engaging format."

      cardTilte5 = "Influencer Collaborations"
      desc5 = "Through strategic partnerships with pertinent Instagram influencers, we amplify your brand's reach, tapping into established audiences to bolster credibility and maximize impact."
      />
      <Faq1 faqData={faqData}/>
      <Drawer title="Why You Need an Instagram Ads Agency"
        button="Understand the full potential of professional Instagram Ad services"
        desc1="Envision an Instagram Ads campaign that consistently transforms social media users into tangible sales for your business each month, all while staying within your established marketing budget. Are you weary of squandering your Instagram Ads budget on unproductive ad agencies and campaigns? It's time to implement our tried-and-tested, revenue-centric Instagram Ads strategies."
        Img1={seoimg}
        title2="Our 5-stage process for effective SEO services:"
        submenu1="1. Research & Plan"
        subdesc1="Just like strategically placing billboards at high-traffic junctions, our goal is to maximize visibility. We conduct thorough research to comprehend your business, competitors, and target audience. This empowers us to position your Instagram 'billboards' where they will generate the most impact."
        submenu2="2. Track & Measure"
        subdesc2="In traditional marketing, gauging the number of individuals who notice your billboard is challenging. However, with Instagram Ads, you benefit from real-time tracking. Our specialized dashboard monitors key metrics, ensuring your message isn't merely cast into the wind but precisely targeted. Additionally, we establish specific, tangible targets before initiating any actions, providing a benchmark against which to measure success once the work begins."
        submenu3="3. Execute"
        subdesc3="Crafting an effective billboard entails striking a balance between captivating visuals and a clear message. Our team of Instagram Ads specialists is dedicated to creating eye-catching and engaging ads, ensuring that your digital billboard' receives the attention it deserves."
        submenu4="4. Optimise"
        subdesc4="Similar to how billboard designs are adjusted based on customer feedback and performance, we consistently test and refine your Instagram Ads. By analyzing campaign data, we fine-tune your ads to ensure they resonate effectively with your target audience."
        submenu5="5. Scale"
        subdesc5="Just as a successful billboard campaign might prompt consideration of additional locations or larger displays, when your Instagram Ads yield promising results, we explore opportunities to expand your reach. By tapping into new audiences, we aim to bolster your sales and revenue, further amplifying your success."
        lastdesc="   Through the implementation of our Infinity-5 Framework for Instagram Ads, your digital 'billboard' will not only seize attention but also prompt action, transitioning casual viewers into devoted customers."
      />
      <Section2 title="Generate Better Roi with Proven Marketing Strategies"
        desc1="Learn The Proven Strategies Your Competitors Are Using To Dominate The Market."
        desc2="Are you tired of spending money on marketing strategies or digital channels that you&apos;re unsure will be effective and provide a return on investment? Have you invested in marketing campaigns and hoped for positive results, but have been disappointed? We have the solutions for all of your concerns. Our strategies have generated over 2,480 page 1 Google rankings, grown organic traffic by more than 140% and delivered more than 8,000+ high-quality leads, helping businesses like yours to steal market share from their competitors and dominate the online space in just a matter of months!"
      />
      <Section3 />
      {/* <Price/> */}
      <Faq/>
    <Footer/>
    </div>
  );
}
