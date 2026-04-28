import React from "react";
import { Link } from "react-router-dom";
import person from "../assets/person.svg";
import AmrutamLogo from "../assets/AmrutamLogo.svg";
import GroupDoctor from "../assets/GroupDoctor.svg";
import TimesOfIndia from "../assets/TimesOfIndia.svg";
import YourStory from "../assets/YourStory.svg";
import Traveler from "../assets/Traveler.svg";
import Livingetc from "../assets/Livingetc.svg";
import Fashion from "../assets/Fashion.svg";
import GQ from "../assets/GQ.svg";
import LifeStyleAsia from "../assets/LifeStyleAsia.svg";
import Vogue from "../assets/Vogue.svg";
import Forbes from "../assets/Forbes.svg";
import InstantCall from "../assets/InstantCall.svg";
import Connection from "../assets/Connection.svg";
import Session from "../assets/Session.svg";
import SmartWallet from "../assets/SmartWallet.svg";
import FlexibleWorkTiming from "../assets/FlexibleSchedule.svg";
import Call from "../assets/call.svg";
import Ellipse from "../assets/Ellipse.svg";
import VIPLogo from "../assets/VIP-Logo.svg";
import Message from "../assets/Message.svg";
import CloudBackground from "../assets/cloud-background.svg";
import form from "../assets/Form.svg";
import Iphone from "../assets/iphone 15-1.svg";
import IphoneSec from "../assets/iphone 15-2.svg";
import IphoneThird from "../assets/iphone 15-3.svg";
import TestimonialFirst from "../assets/Testimonial 1.svg";
import TestimonialSecond from "../assets/Testimonial 2.svg";
import TestimonialThird from "../assets/Testimonial 3.svg";
import PlusSign from "../assets/Plus Sign.svg";
import Leaves from "../assets/leaves.svg";
import Coins from "../assets/coins.svg";
import Phone from "../assets/phone.svg";
import Wallet from "../assets/wallet.svg";
import GooglePlay from "../assets/GooglePlay.svg";
import AppStore from "../assets/AppStore.svg";
import GroupConnection from "../assets/GroupConnection.svg";
import Recipe from "../assets/Recipe.svg";
import FooterLogo from "../assets/AMRUTAM-Footer-Logo.svg";
import facebook from "../assets/facebook.svg";
import Instagram from "../assets/Insta.svg";
import YouTube from "../assets/YouTube.svg";
import Twitter from "../assets/Twitter.svg";
import Linkdin from "../assets/Linkdin.svg";
import PI from "../assets/pin.svg";

const Home = () => {
  return (
    <>
      <header>
        <div className="w-full bg-[#373636] flex items-center justify-center relative h-[67px]">
          <p className="text-[#D9D9D9] text-[20px] font-medium leading-[140%] tracking-normal">
            Register Yourself As An Amrutam Doctor
          </p>
          <button className="flex items-center justify-center gap-[10px] font-bold text-[16px] leading-[100%] tracking-normal text-white capitalize w-[355px] h-[51px] absolute top-[12.5%] left-[68.4%] rounded-[16px] bg-[#3A643B]">
            <img src={person} alt="person" className="w-[21px] h-[20px]" />
            <span>Join Now</span>
          </button>
        </div>
      </header>
      <main>
        <section className="banner">
          <nav className="relative z-[12] w-full bg-[#FFF7E2] shadow-[0px_12px_25px_0px_#0000000A,0px_104px_62px_0px_#00000005] flex items-center justify-center h-[112px]">
            <div className="flex flex-col items-center justify-between gap-[28px] h-[93px]">
              <img
                src={AmrutamLogo}
                alt="AmrutamLogo"
                className="w-[208px] h-[150px]"
              />
              <div className="flex items-center gap-10">
                <Link
                  to="#about"
                  className="font-[Poppins] font-normal text-[20px] leading-[140%] tracking-normal capitalize text-[#474747] hover:text-[#3A643B] transition-colors"
                >
                  About Us
                </Link>
                <Link
                  to="#onboarding"
                  className="font-[Poppins] font-normal text-[20px] leading-[140%] tracking-normal capitalize text-[#474747] hover:text-[#3A643B] transition-colors"
                >
                  Onboarding
                </Link>
                <Link
                  to="#faq"
                  className="font-[Poppins] font-normal text-[20px] leading-[140%] tracking-normal capitalize text-[#474747] hover:text-[#3A643B] transition-colors"
                >
                  FAQ
                </Link>
                <Link
                  to="#testimonials"
                  className="font-[Poppins] font-normal text-[20px] leading-[140%] tracking-normal capitalize text-[#474747] hover:text-[#3A643B] transition-colors"
                >
                  Testimonials
                </Link>
              </div>
            </div>
          </nav>
          <div className="h-[577px] flex justify-center bg-[#FFF6DD]">
            <div className="w-[1275px] h-[488px] mt-[14px] relative flex flex-col justify-center">
              <div className="flex flex-col items-start gap-12 w-[715px]">
                <div className="flex flex-col items-start gap-3">
                  <p className="font-medium text-[16px] leading-[100%] tracking-normal align-middle text-[#666666]">
                    Namaste, Welcome to Amrutam
                  </p>
                  <h1 className="font-extrabold text-[40px] leading-[100%] tracking-normal align-middle">
                    Join Amrutam -{" "}
                    <span className="text-[#3A643C]">Grow Your Practice</span>
                  </h1>
                  <p className="font-medium text-[20px] leading-[100%] tracking-normal align-middle text-[#666666]">
                    Connect with more patients, set your own schedule,
                    <br /> and grow your Ayurvedic practice effortlessly.
                  </p>
                </div>
                <button className="bg-[#3A643C] text-white font-bold text-[20px] leading-[100%] tracking-normal text-center align-middle pt-[20px] pr-[56px] pb-[20px] pl-[56px] rounded-[12px]">
                  Join Now
                </button>
              </div>
              <div className="absolute left-0 bottom-[10px] flex justify-between w-[251px] h-[71px] items-center">
                <div className="flex flex-col gap-[10px]">
                  <h2 className="font-semibold text-[24px] leading-[100%] tracking-normal text-center align-middle">
                    500+
                  </h2>
                  <p className="font-medium text-[14px] leading-[100%] tracking-normal text-center align-middle">
                    Average Active <br /> Users
                  </p>
                </div>
                <div className="w-[1.4176px] h-[43px] rounded-[30px] bg-[#83A78580]"></div>
                <div className="flex flex-col gap-[10px]">
                  <h2 className="font-semibold text-[24px] leading-[100%] tracking-normal text-center align-middle">
                    40+
                  </h2>
                  <p className="font-medium text-[14px] leading-[100%] tracking-normal text-center align-middle">
                    Average daily <br /> free calls
                  </p>
                </div>
              </div>
              <div className="inline-block absolute top-[30px] right-[14px]">
                <img
                  src={GroupDoctor}
                  alt="Amrutam Doctors"
                  className="max-w-[100%] h-auto object-contain max-h-[500px]"
                />
              </div>
              {/* <div className="w-[660px] h-[660px] absolute top-7 -left-11 bg-[radial-gradient(circle,#FFE6A5_0%,#FFE6A5_100%)] backdrop-blur-3xl">

            </div> */}
            </div>
          </div>
        </section>
        <section className="featured">
          <div className="bg-[#FFF8E7] flex flex-col items-center justify-center w-full gap-12 h-[294px]">
            <div className="flex flex-col items-center justify-center gap-1 h-[86px]">
              <h2 className="font-bold text-[40px] leading-[100%] tracking-normal text-center text-[#33643F]">
                Featured
              </h2>
              <p className="font-normal text-[20px] leading-[150%] tracking-normal text-center text-[#4C4C4C]">
                Recognized and celebrated by leading publications – Amrutam in
                the spotlight!
              </p>
            </div>
            <div className="flex">
              <img src={TimesOfIndia} alt="TimesOfIndia" />
              <img src={YourStory} alt="YourStory" />
              <img src={Traveler} alt="Traveler" />
              <img src={Livingetc} alt="Livingetc" />
              <img src={Fashion} alt="Fashion" />
              <img src={GQ} alt="GQ" />
              <img src={LifeStyleAsia} alt="LifeStyleAsia" />
              <img src={Vogue} alt="Vogue" />
              <img src={Forbes} alt="Forbes" />
            </div>
          </div>
        </section>
        <section className="Why-Doctors-Choose-Us">
          <div className="bg-[#FFF7E2] flex flex-col items-center w-full">
            <div className="flex flex-col items-center justify-center gap-2 mt-[32px]">
              <h2 className="font-bold text-[40px] leading-[100%] tracking-[0.01em] text-[#3A643C]">
                Why Doctors Choose Us?
              </h2>
              <p className="font-medium text-[18px] md:text-[20px] leading-[150%] tracking-normal text-center text-[#4C4C4C] font-[Poppins]">
                Unlock the Benefits of Smarter Healthcare Management and Patient
                Care
              </p>
            </div>
            <div className="flex flex-col gap-[129.56px] w-full px-[108px] pb-[111px] mt-[118px]">
              <div class="flex flex-col md:flex-row mt-[11px] mx-[14px] items-center justify-between w-full">
                <div class="w-full md:w-1/2 flex items-center justify-start relative">
                  <img src={InstantCall} alt="InstantCall" />
                  <img
                    src={Call}
                    alt="Call"
                    className="absolute top-0 left-[67px]"
                  />
                </div>
                <div class="w-full md:w-1/2 flex flex-col items-start gap-3">
                  <h3 class="font-medium text-[28px] leading-[100%] tracking-normal text-[#3A643C]">
                    Instant{" "}
                    <span className="font-semibold text-[28px] leading-[100%] tracking-normal">
                      {" "}
                      FREE{" "}
                    </span>{" "}
                    5-Mins Call
                  </h3>
                  <p class="font-medium text-[18px] leading-[131%] tracking-normal text-[#666666]">
                    We understand the importance of building trust with your
                    patients. That's why Amrutam offers a{" "}
                    <span className="font-bold text-[18px] leading-[131%] tracking-normal">
                      free 5-minute call
                    </span>
                    , helping you connect instantly and foster lasting patient
                    relationships with ease.
                  </p>
                </div>
              </div>
              <div class="flex flex-col md:flex-row items-center justify-between w-full">
                <div class="w-full md:w-1/2 flex flex-col items-start gap-3">
                  <h3 class="font-bold text-[28px] leading-[100%] tracking-normal text-[#3A643C]">
                    Forum for Meaningful Connections
                  </h3>
                  <p class="font-medium text-[18px] leading-[131%] tracking-normal text-[#666666]">
                    We value your journey in Ayurveda .The Amrutam Forum helps
                    you engage with patients, answer questions, while the
                    "Thoughts" section allows you to share deeper Ayurvedic
                    wisdom.
                  </p>
                </div>
                <div class="w-full md:w-1/2 flex items-center justify-end">
                  <img src={Connection} alt="InstantCall" />
                </div>
              </div>
              <div class="flex flex-col md:flex-row items-center justify-between w-full">
                <div class="w-full md:w-1/2 flex items-center justify-start relative">
                  <img src={Session} alt="InstantCall" />
                  <div className="bg-[#DBDCC4] absolute top-[48px] left-[323px] w-[84px] h-[84px] rounded-full flex items-center justify-center">
                    <img src={Ellipse} alt="Ellipse" />
                  </div>
                </div>
                <div class="w-full md:w-1/2 flex flex-col items-start gap-3">
                  <h3 class="font-bold text-[28px] leading-[100%] tracking-normal text-[#3A643C]">
                    Choose Your Session Mode
                  </h3>
                  <p class="font-medium text-[18px] leading-[131%] tracking-normal text-[#666666]">
                    Amrutam offers you to connect with patients via Instant
                    Chat, Instant Call, or Schedule Video call. Each option
                    offers flexibility and personalized care to suit individual
                    needs.
                  </p>
                </div>
              </div>
              <div class="flex flex-col md:flex-row items-center justify-between w-full">
                <div class="w-full md:w-1/2 flex flex-col items-start gap-3">
                  <h3 class="font-bold text-[28px] leading-[100%] tracking-normal text-[#3A643C]">
                    Smart Wallet
                  </h3>
                  <p class="font-medium text-[18px] leading-[131%] tracking-normal text-[#666666]">
                    We understand the need for seamless transactions. With
                    Amrutam Wallet, you can easily withdraw payments, and for
                    your security, a one-time password is sent to your
                    registered mobile number during withdrawals.
                  </p>
                </div>
                <div class="w-full md:w-1/2 flex items-center justify-end">
                  <img src={SmartWallet} alt="InstantCall" />
                </div>
              </div>
              <div class="flex flex-col md:flex-row items-center justify-between w-full">
                <div class="w-full md:w-1/2 flex items-center justify-start relative">
                  <img src={FlexibleWorkTiming} alt="InstantCall" />
                  <div className="bg-[#DBDCC4] absolute top-0 left-[275px] w-[84px] h-[84px] rounded-full flex items-center justify-center">
                    <img src={VIPLogo} alt="VIPLogo" />
                  </div>
                  <img
                    src={Message}
                    alt="Message"
                    className="absolute bottom-[-25px] left-[190px]"
                  />
                </div>
                <div class="w-full md:w-1/2 flex flex-col items-start gap-3">
                  <h3 class="font-bold text-[28px] leading-[100%] tracking-normal text-[#3A643C]">
                    Flexible Work Timing
                  </h3>
                  <p class="font-medium text-[18px] leading-[131%] tracking-normal text-[#666666]">
                    We recognize the importance of managing your time. With the
                    availability toggle in the doctor’s app, you control when
                    patients can book consultations, ensuring a balanced and
                    stress-free practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="Join-Our-Circle-of-Care">
          <div className="bg-[#FFF7E2] flex flex-col items-center w-full py-[39px]">
            <div className="flex flex-col items-center justify-center gap-3 mb-[38px]">
              <h2 className="font-bold text-[40px] leading-[136%] tracking-[0.01em] text-[#33643F]">
                Join Our Circle of Care
              </h2>
              <p className="font-medium text-[20px] leading-[136%] tracking-[0.07em] text-[#4C4C4C]">
                Becoming a part of Amrutam is simple
              </p>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-[91.62px] py-[27px] w-full max-w-[1340px] self-end">
              <div className="flex flex-col gap-3 w-full lg:max-w-[578.3760986328125px]">
                {[
                  {
                    title: "Step 1: Get your referral code",
                    desc: "Contact us to receive your unique referral code.",
                  },
                  {
                    title: "Step 2: Register on Amrutam",
                    desc: "Sign up on the Amrutam Doctors app or website to join our specialist network.",
                  },
                  {
                    title: "Step 3: Complete KYC",
                    desc: "Fill in your details and upload the required documents for verification.",
                  },
                  {
                    title: "Step 4: Start consulting",
                    desc: "Once verified, begin offering consultations and helping patients.",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-center gap-[10px] bg-[#FFF7E2] border border-[#33643F80] rounded-[8px] py-7 px-8 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-bold text-[20px] leading-[100%] tracking-normal align-middle text-[#3A643C]">
                      {step.title}
                    </h3>
                    <p className="font-normal text-[14px] leading-[100%] tracking-normal align-middle text-[#3A643C]">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="w-full flex justify-center items-center relative">
                <img
                  src={CloudBackground}
                  alt="CloudBackground"
                  className=" w-[645.162109375px] h-[328.9635009765625px] mr-[27px]"
                />
                <img
                  src={form}
                  alt="form"
                  className="absolute top-[78px] left-[30px]"
                />
              </div>
            </div>

            <div className="flex justify-center items-center gap-9 mt-[38px] mb-7">
              <button className="font-['Nunito'] font-normal text-[20px] leading-[24px] tracking-normal text-center align-middle bg-[#3A643C] text-white rounded-[8px] py-[12px] px-[16px]">
                Consultations
              </button>
              <button className="font-['Nunito'] font-normal text-[20px] leading-[24px] tracking-normal text-center align-middle bg-[#FFF7E2] text-[#3A643C] rounded-[8px] py-[12px] px-[16px] border border-[#3A643C80]">
                Payment withdrawal
              </button>
              <button className="font-['Nunito'] font-normal text-[20px] leading-[24px] tracking-normal text-center align-middle bg-[#FFF7E2] text-[#3A643C] rounded-[8px] py-[12px] px-[16px] border border-[#3A643C80]">
                Schedule
              </button>
            </div>

            <div className="flex flex-col lg:flex-row justify-evenly items-center lg:items-center w-full max-w-[1240px] min-h-[560px]">
              <div className="flex flex-col items-center">
                <h3 className="font-bold text-[24px] leading-[100%] tracking-normal align-middle text-[#3A643C] mb-4">
                  Value Your Practice
                </h3>
                <img src={IphoneThird} alt="Iphone 15" />
              </div>

              <div className="flex flex-col items-center self-start mt-4">
                <img src={IphoneSec} alt="Iphone 15" />
                <h3 className="font-bold text-[24px] leading-[100%] tracking-normal align-middle text-[#3A643C] mt-4">
                  Today's Healing Journey
                </h3>
              </div>

              <div className="flex flex-col items-center">
                <h3 className="font-bold text-[24px] leading-[100%] tracking-normal align-middle text-[#3A643C] mb-4">
                  Consultation Details
                </h3>
                <img src={Iphone} alt="Iphone 15" />
              </div>
            </div>

            <div className="mt-[38px]">
              <button className="rounded-[12px] py-[12px] px-[36px] bg-[#3A643C] font-bold text-[20px] leading-[100%] tracking-normal text-center align-middle text-white hover:bg-[#2C4D2E] transition-all transform hover:-translate-y-1">
                Join Now
              </button>
            </div>
          </div>
        </section>
        <section className="What-other-Ayurvedic-Doctors-are-Saying">
          <div className="bg-[#FFF7E2] flex flex-col items-center w-full py-8 px-[100px] gap-[48px]">
            <div className="flex flex-col items-center justify-center gap-2">
              <h2 className="font-bold text-[40px] leading-[100%] tracking-normal text-center text-[#33643F]">
                What other Ayurvedic Doctors are Saying
              </h2>
              <p className="font-medium text-[16px] md:text-[20px] leading-[136%] tracking-[0.02em] text-[#4C4C4C] text-center font-['Nunito']">
                Trusted by experts – Hear what Ayurvedic doctors say about
                Amrutam!
              </p>
            </div>

            <div className="flex justify-between items-center gap-5 w-full max-w-[1240px] min-h-[283px]">
              <img src={TestimonialFirst} alt="Testimonial First" />
              <img src={TestimonialSecond} alt="Testimonial Second" />
              <img src={TestimonialThird} alt="Testimonial Third" />
            </div>
          </div>
        </section>
        <section className="Frequently-Asked-Questions">
          <div className="flex flex-col items-center w-full gap-[48px] pt-[33px] pr-[205px] pb-[33px] pl-[205px] bg-[#FFF7E2]">
            <div className="flex flex-col items-center justify-center gap-2">
              <h2 className="font-bold text-[40px] leading-[100%] tracking-[0.01em] text-center text-[#33643F]">
                Frequently Asked Questions
              </h2>
              <p className="font-normal text-[20px] leading-[1.5] tracking-normal text-center text-[#4C4C4C]">
                Find quick answers to common questions to help you navigate the
                app and its features easily.
              </p>
            </div>

            <div className="w-full max-w-[1030px] flex flex-col gap-[26px]">
              {[
                "What is Amrutam?",
                "How does Amrutam help me grow as a practitioner?",
                "How do I become a part of Amrutam Doctor?",
                "What is Amrutam Global as a platform?",
                "What documents do I need to provide?",
                "Is there a fee to join Amrutam?",
              ].map((question, idx) => (
                <div
                  key={idx}
                  className={
                    "flex justify-between items-start border-[#C6C1B9] border-b cursor-pointer h-[52px]"
                  }
                >
                  <p className="font-medium text-[20px] leading-[26px] tracking-[0.01em] align-middle text-[#666666] hover:text-[#33643F] transition-colors duration-200">
                    {question}
                  </p>
                  <img src={PlusSign} alt="Plus Sign" className="mt-2" />
                </div>
              ))}
            </div>

            <button className="rounded-[12px] py-[12px] px-[36px] bg-[#3A643C] font-bold text-[20px] leading-[100%] tracking-normal text-center align-middle text-white shadow-sm hover:bg-[#2C4D2E] hover:-translate-y-[2px] transition-all duration-300">
              See More
            </button>
          </div>
        </section>
        <section className="Get-Started-Today">
          <div className="bg-[#FFF7E2] flex justify-center w-full pt-[113px] pb-[90px]">
            <div className="flex flex-col lg:flex-row items-center justify-center w-full px-[84px] bg-[#FFEDBF] max-h-[637px]">
              <div className="flex flex-col w-full lg:w-[55%]">
                <h2 className="font-bold text-[40px] leading-[48px] tracking-normal text-[#3A643C] mb-6">
                  Get Started Today -<br />
                  Download the App Now!
                </h2>
                <p className="font-medium text-[20px] leading-[1.31] tracking-normal text-[#666666] h-[75px] mb-[32.11px]">
                  Simplify consultations, manage patients, and
                  <br /> grow your practice—all in one place.
                </p>
                <div className="grid grid-cols-2 gap-y-10 gap-x-4 mb-[73.64px] cursor-pointer">
                  {[
                    {
                      icon: Leaves,
                      text: (
                        <>
                          Build Trust and <br />
                          Community with Forum
                        </>
                      ),
                    },
                    {
                      icon: Coins,
                      text: (
                        <>
                          Earn More with Pay <br />
                          Per Conversation
                        </>
                      ),
                    },
                    {
                      icon: Phone,
                      text: (
                        <>
                          Attract Patients with <br />
                          5-Minute Free Call
                        </>
                      ),
                    },
                    {
                      icon: Wallet,
                      text: (
                        <>
                          Instant Access to Your <br /> Earnings with Wallet
                        </>
                      ),
                    },
                  ].map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-8 rounded-[12px] p-2 border border-[#9E9E9E] hover:bg-[#FFF8E6] transition-colors"
                    >
                      <div className="min-w-[40px] h-[40px] rounded-full flex items-center justify-center text-[24px]">
                        <img src={feat.icon} alt={feat.text} />
                      </div>
                      <p className="font-medium text-[16px] leading-[1.31] tracking-normal align-middle text-[#33643F]">
                        {feat.text}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex gap-[26.98px]">
                  <img src={GooglePlay} alt="Google Play" />
                  <img src={AppStore} alt="App Store" />
                </div>
              </div>

              <div className="-mt-[85px]">
                <img
                  src={GroupConnection}
                  alt="Group Connection"
                  className="w-[671px] h-[715.138916015625px] object-contain"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="Let-Connect">
          <div className="bg-[#FFF7E2] flex flex-col items-center w-full gap-10 px-[100px] py-[80px]">
            <div className="flex flex-col items-center justify-center gap-2">
              <h2 className="font-bold text-[40px] leading-[100%] tracking-[0%] text-[#33643F] text-center">
                Let's Connect
              </h2>
              <p className="font-normal text-[20px] leading-[150%] tracking-[0%] text-center text-[#4C4C4C]">
                We're here to help you on your wellness journey. Reach out to us
                for any questions,
                <br />
                product inquiries, or personalized advice.
              </p>
            </div>

            <div className="flex flex-col gap-5 lg:flex-row w-full max-w-[1240px] min-h-[471px]">
              <img
                src={Recipe}
                alt="Ayurvedic herbs and wooden spoon"
                className="max-w-[498px] h-full rounded-[8px]"
              />

              <div className="flex-1 min-h-[471px] flex flex-col justify-between max-w-[718px] h-full rounded-[8px] px-[36px] py-[35px] border border-[#C2C2C2]">
                <div className="flex flex-col gap-6 w-full">
                  <div className="flex flex-col sm:flex-row gap-8 w-full">
                    <div className="flex flex-col gap-2 w-full sm:w-1/2">
                      <label className="font-normal text-[14px] leading-[1.75] tracking-normal text-[#3A643B]">
                        Your Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Vikas Kumar"
                        className="bg-transparent border-b-2 border-[#C2C2C2] pb-[6px] text-[16px] md:text-[18px] text-[#7E7E7E] font-medium outline-none focus:border-[#3A643C] transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-2 w-full sm:w-1/2">
                      <label className="font-normal text-[14px] leading-[1.75] tracking-normal text-[#3A643B]">
                        Your Contact Number
                      </label>
                      <input
                        type="text"
                        defaultValue="8743414476"
                        className="bg-transparent border-b-2 border-[#C2C2C2] pb-[6px] text-[16px] md:text-[18px] text-[#7E7E7E] font-medium outline-none focus:border-[#3A643C] transition-colors"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-full mt-2">
                    <label className="font-normal text-[14px] leading-[1.75] tracking-normal text-[#3A643B]">
                      Your Email
                    </label>
                    <input
                      type="email"
                      defaultValue="vikass@gmail.com"
                      className="bg-transparent border-b-2 border-[#C2C2C2] pb-[6px] text-[16px] md:text-[18px] text-[#7E7E7E] font-medium outline-none focus:border-[#3A643C] transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-2 w-full mt-2 mb-4">
                    <label className="font-normal text-[14px] leading-[1.75] tracking-normal text-[#3A643B]">
                      Message (Optional)
                    </label>
                    <textarea
                      defaultValue="I want to On-board as a Doctor"
                      rows="3"
                      className="bg-transparent border-b-2 border-[#C2C2C2] pb-[6px] text-[16px] md:text-[18px] text-[#7E7E7E] font-medium outline-none focus:border-[#3A643C] transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>

                <button className="w-[236px] py-[4px] gap-[2px] rounded-[8px] bg-[#315918] opacity-100 font-bold text-[20px] leading-[1.75] tracking-normal text-white hover:bg-[#2C4D2E] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="Footer">
          <div className="bg-[#DBDCC4] pt-[76px] pb-[62px] px-[100px] flex justify-center w-full">
            <div className="flex flex-col md:flex-row justify-between w-full gap-12">
              <div className="flex flex-col w-full md:w-[35%]">
                <div className="w-fit h-[47px] overflow-hidden flex items-center justify-center mb-10">
                  <img
                    src={FooterLogo}
                    alt="Amrutam Footer Logo"
                    className="object-cover object-center w-full h-full max-w-[200px]"
                  />
                </div>
                <h3 className="font-semibold text-[28px] leading-[1.31] tracking-normal text-[#33643F] mb-6">
                  Get in touch
                </h3>
                <div className="flex flex-col gap-4">
                  <p className="font-medium text-[20px] leading-[1.31] tracking-normal text-[#4C4C4C] hover:text-[#33643F] cursor-pointer transition-colors duration-200">
                    support@amrutam.global
                  </p>
                  <p className="font-medium text-[20px] leading-[1.31] tracking-normal text-[#4C4C4C]">
                    Amrutam Pharmaceuticals Pvt Ltd.,
                    <br />
                    chitragupt ganj, Nai Sadak, Lashkar,
                    <br />
                    Gwalior - 474001
                  </p>
                  <p className="font-medium text-[20px] leading-[1.31] tracking-normal text-[#4C4C4C] hover:text-[#33643F] cursor-pointer transition-colors duration-200">
                    +91 9713171999
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-6 w-full md:w-[35%] md:pl-10">
                <h3 className="font-semibold text-[28px] leading-[1.31] tracking-normal text-[#33643F] mb-1">
                  Information
                </h3>
                <ul className="flex flex-col gap-4 font-medium text-[20px] leading-[1.31] tracking-normal text-[#4C4C4C]">
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#33643F] transition-colors duration-200"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#33643F] transition-colors duration-200"
                    >
                      Terms and Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#33643F] transition-colors duration-200"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#33643F] transition-colors duration-200"
                    >
                      Privacy Policy for Mobile App
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#33643F] transition-colors duration-200"
                    >
                      Shipping and Return Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#33643F] transition-colors duration-200"
                    >
                      International Delivery
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#33643F] transition-colors duration-200"
                    >
                      For Business, Hotels and Resorts
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col gap-5 w-full md:w-[30%]">
                <h3 className="font-semibold text-[28px] leading-[1.31] tracking-normal text-[#33643F]">
                  Follow Us
                </h3>
                <div className="flex gap-4 flex-wrap">
                  <img src={facebook} alt="Facebook" />
                  <img src={Instagram} alt="Instagram" />
                  <img src={YouTube} alt="YouTube" />
                  <img src={Twitter} alt="Twitter" />
                  <img src={Linkdin} alt="Linkdin" />
                  <img src={PI} alt="PI" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
