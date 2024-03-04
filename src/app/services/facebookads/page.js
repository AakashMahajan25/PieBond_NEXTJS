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
      question: "Audience Targeting and Segmentation",
      answer:
        "Harnessing Facebook's robust targeting capabilities, we pinpoint your ideal audience with precision. Our team meticulously segments audiences based on demographics, interests, behaviors, and more, guaranteeing that your ads reach individuals most inclined to engage with your brand.",
    },
    {
      question: "Creative Ad Development",
      answer:
        "Our creative team excels in crafting ads that go beyond mere visual appeal, resonating emotionally with your audience. We weave narratives that forge connections, resulting in heightened engagement and conversion rates.",
    },
    {
      question: "Performance Monitoring and Analytics",
      answer:
        "Data serves as the cornerstone of our approach. We continually monitor ad performance, delving deep into analytics to comprehend audience responses and campaign effectiveness. This data-driven methodology empowers us to refine and optimize your campaigns, driving even better results.",
    },
    {
      question: "ROI-Focused Campaigns",
      answer:
        "Our primary objective is to maximize your Return on Investment (ROI). We strategically allocate and manage your ad spend, prioritizing campaigns that offer the highest returns. Whether the goal is to boost brand awareness, generate leads, or drive sales, our campaigns are meticulously crafted to deliver tangible and impactful results.",
    },

    {
      question: "Ongoing Optimisation and Adaptation",
      answer:
        "In the dynamic realm of digital marketing, our strategies evolve alongside the ever-changing landscape. We stay ahead of trends and platform updates to ensure that your Facebook Ads remain relevant and impactful. Our team's proactive approach guarantees that your advertising efforts consistently align with the best practices and latest innovations, driving ongoing success in your campaigns.",
    },
  ];
  return (
    <div ClassName="flex flex-col ">
      <Navbar />
      <Banner />
      <Proven
        desc1="Discover our curated selection of data-backed digital marketing strategies, meticulously crafted to propel your business to online success."
        desc2="Embark on a transformative journey with our commitment to delivering remarkable results, merging expertise, innovation, and customized digital marketing strategies."
        desc3="Embark on a transformative journey with our commitment to delivering impressive results, blending expertise, innovation, and bespoke digital marketing strategies."
      />
      <ServiceCard
        title="Professional Facebook Ads Agency"
        desc="In the dynamic landscape of digital marketing, Facebook Ads serve as a crucial tool for bridging brands with their target audience. At Mr. Digital, we specialize in unlocking the complete potential of Facebook's advertising platform to elevate your brand's presence. Our approach transcends mere ad creation; we focus on crafting a compelling narrative that strikes a chord with your audience and seamlessly aligns with your marketing objectives."
        cardTitle1="Brand Awareness Campaigns"
        desc1="We conceptualize campaigns designed to magnify your brand's presence, extending their reach to a diverse audience to enhance recognition and recall. These initiatives are particularly effective for laying a robust brand foundation on Facebook."
        cardTitle2="Consideration Campaigns"
        desc2="Centered on captivating users intrigued by exploring your products or services further, our consideration campaigns comprise traffic-driving ads, engagement-focused strategies, and video views to deepen audience interest and foster engagement."
        cardTitle3="Lead Genration Campaigns"
        desc3="We craft targeted campaigns aimed at capturing leads directly within Facebook. These initiatives are ideal for businesses seeking to broaden their customer base or promote specific products effectively."
        cardTitle4="Conversion Campaigns"
        desc4="Customized for prompting actions, our conversion campaigns are meticulously optimized for sales, sign-ups, or any specific business objectives. We harness Facebook's robust targeting tools to connect with potential customers who are highly likely to convert."
        cardTitle5="Retargeting Campaigns"
        desc5="For re-engaging users who have previously interacted with your brand, we devise retargeting campaigns. These initiatives serve as gentle reminders and encouragements for users to finalize their purchase or engagement with your brand."
      />
      <Faq1 faqData={faqData} />
      <Drawer
        title="Understanding Facebook Ads"
        button="Understand Our Seo Service"
        desc1="Visualize a Facebook Ads campaign that consistently transforms social media users into bona fide customers for your business every month, all while adhering to your current marketing budget. Are you weary of allocating your Facebook Ads budget to ineffectual marketing agencies and campaigns? It’s time to implement our proven, revenue-focused strategies. Our Facebook Ads methodologies have empowered businesses across various industries to outperform their competitors and command authority on Facebook, resulting in a continuous influx of leads into their pipeline."
        Img1={seoimg}
        title2="Our 5-stage process for effective SEO services:"
        submenu1="1. Research & Plan"
        subdesc1="Just as you would study the guest list and topics before a networking event, we start by understanding your business landscape and competitors. Knowing who and what you're up against enables us to position you strategically, so you're not just a face in the crowd but a key player in your field."
        submenu2="2. Track & Measure"
        subdesc2="At a networking event, you'd take note of who you spoke with, who showed interest and who you connected with. Our SEO analytics are the digital equivalent, providing real-time data on who's visiting your site, what they're interested in, and how they found you in the first place. To pair with these analytic tools we also set certain goals that we can measure the success of our SEO efforts against so that we know that we are on the right path"
        submenu3="3. Execute"
        subdesc3="Now, it's time to enter the room, or in your case, to make your presence felt on search engines. Our team takes care of everything from keyword optimisation to high-quality content creation, just like you'd prepare your elevator pitch and choose your conversations carefully at a networking event."
        submenu4="4. Optimise"
        subdesc4="After the initial interactions, you'd think about what went well and where you could improve. We do the same with your SEO, continuously fine-tuning based on performance data to make sure you're not just in the room but drawing a crowd."
        submenu5="5. Scale"
        subdesc5="Once you've made a name for yourself at one event, you'd look to attend others and expand your network. Similarly, once your SEO starts yielding results, we explore opportunities to target new keywords, and audiences and even break into different markets"
        lastdesc="    Much like how you become a well-known figure in a networking room by being at the right place, saying the right things and connecting with the right people, our Infinity-5 Framework ensures your website gains the reputation and visibility it deserves in the digital world."
      />
      <Section2
        title="Generate Better Roi with Proven Marketing Strategies"
        desc1="Learn The Proven Strategies Your Competitors Are Using To Dominate The Market."
        desc2="Are you tired of spending money on marketing strategies or digital channels that you're unsure will be effective and provide a return on investment? Have you invested in marketing campaigns and hoped for positive results, but have been disappointed? We have the solutions for all of your concerns. Our strategies have generated over 2,480 page 1 Google rankings, grown organic traffic by more than 140% and delivered more than 8,000+ high-quality leads, helping businesses like yours to steal market share from their competitors and dominate the online space in just a matter of months!"
      />
      <Section3 />
      {/* <Price/> */}
      <Faq />
      <Footer />
    </div>
  );
}
