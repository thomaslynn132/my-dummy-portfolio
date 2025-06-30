"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Instagram,
  Twitter,
  Facebook,
  Send,
  MessageCircle,
  Phone,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function DeveloperPortfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });

  const skills = [
    {
      title: "HTML & CSS",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Javascript",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      title: "Webflow",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  const companies = [
    "/companies/one.png",
    "/companies/two.png",
    "/companies/three.png",
    "/companies/four.png",
    "/companies/five.png",
    "/companies/six.png",
  ];

  const workProcess = [
    {
      step: "Discovery",
      color: "bg-cyan-300",
      description:
        "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.",
    },
    {
      step: "Strategy",
      color: "bg-black text-white",
      description:
        "Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth code reviews we're here to set the stage for success.",
    },
    {
      step: "Design",
      color: "bg-sky-400",
      description:
        "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page will be designed, reviewed, and given your stamp of approval.",
    },
    {
      step: "Build",
      color: "bg-teal-300",
      description:
        "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <motion.header
        className="flex items-center justify-between p-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}>
        <div className="text-xl font-bold">DEVELOP.ME</div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-gray-600 transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-gray-600 transition-colors">
            About
          </a>
          <a href="#" className="hover:text-gray-600 transition-colors">
            Portfolio
          </a>
          <a href="#" className="hover:text-gray-600 transition-colors">
            Blog
          </a>
        </nav>
        <Button variant="outline" className="rounded-full bg-transparent">
          Start Project
        </Button>
      </motion.header>

      <section
        className="relative px-6 py-20"
        style={{
          backgroundImage: "url(/sectionOneBg.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}>
        <div className=" ">
          <div className="flex flex-col items-start justify-between">
            <motion.h1
              className="text-4xl md:text-6xl lg:text-[70px] font-bold leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}>
              Trusted{" "}
              <span className="bg-black rounded-lg p-3 text-white">
                Partner
              </span>{" "}
              for
              <br />
              <div className="h-14 w-full"></div>
              Your Website{" "}
              <span className="bg-black rounded-lg p-3 text-white">
                Develop.
              </span>
            </motion.h1>
            <div className="flex items-center justify-between w-full space-x-4 mb-8">
              <div className="flex items-start justify-center">
                <span className="-rotate-90">@willamrey</span>
                <motion.div
                  className="hidden lg:flex flex-col justify-center space-y-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}>
                  <div className="w-8 h-8  rounded-full flex items-center justify-center -rotate-90">
                    <Instagram className="size-[27px] text-black" />
                  </div>
                  <div className="w-8 h-8  rounded-full flex items-center  justify-center -rotate-90">
                    <Twitter className="size-[27px] text-black fill-black" />
                  </div>
                  <div className="w-8 h-8  rounded-full bg-black flex items-center justify-center -rotate-90">
                    <Facebook className="size-[25px] text-white pt-1" />
                  </div>
                  <div className="h-[45px] w-[2px] ml-3 bg-black"></div>
                </motion.div>
              </div>
              <div className="flex-1 ">
                <motion.p
                  className="text-lg mb-8 "
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}>
                  Building the world's best marketing websites for over a
                  decade. Your trusted partner for strategy, design, and dev.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}>
                  <Button className="rounded-full border border-black h-[78px] text-lg font-semibold bg-white text-black hover:bg-gray-100">
                    <div className=" border border-black rounded-full -translate-x-4 p-3 size-[54px] flex items-center justify-center ">
                      <Phone size={28} className=" fill-black" />
                    </div>
                    Schedule a Call
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-20 px-20 mx-6 rounded-3xl">
        <div className="mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className=" flex items-center justify-start">
                <div className="mb-4 text-white rounded-full flex items-center justify-center border-2 size-[44px] border-white">
                  <ArrowDown className="text-sm" size={16} />
                </div>
                <Badge
                  variant="outline"
                  className="mb-4 text-white h-[44px] border-2 text-base border-white">
                  Why Choose me
                </Badge>
              </div>
              <motion.h2
                className="text-4xl md:text-5xl font-bold"
                {...fadeInUp}>
                My Extensive
                <br />
                List of Skills
              </motion.h2>
            </div>
            <div className="flex flex-col items-end justify-end">
              <motion.p
                className=" border-b border-b-white text-end pb-5 text-gray-300"
                {...fadeInUp}>
                Building the world's best marketing Your trusted partner for
                strategy, design, and dev.
              </motion.p>
              <div className="flex items-center justify-between mt-5">
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white border border-white p-1 rounded-full">
                    <ArrowLeft className="size-9" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white border border-white p-1 rounded-full">
                    <ArrowRight className="size-9" />
                  </Button>
                </div>
              </div>{" "}
            </div>
          </div>

          <motion.div
            className="grid grid-cols-3"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}>
            {skills.map((skill, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card
                  className={`${
                    index === 1 && "rotate-12"
                  } bg-gray-900 rounded-xl border-gray-800 h-full w-full text-white`}>
                  <CardContent className="p-6">
                    <Image
                      src={"/reactIcon.png"}
                      alt="React Icon"
                      width={100}
                      height={100}
                      className="mb-4"
                    />
                    <h3 className="text-3xl font-bold mb-3">{skill.title}</h3>
                    <p className="text-gray-400 text-base">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section
        className="py-20 px-20"
        style={{
          backgroundImage: "url(/section2Bg.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
        }}>
        <div className=" mx-auto text-center">
          <span className="flex items-center justify-end">
            <div className="mb-4 text-black rounded-full flex items-center justify-center border-2 size-[44px] border-black">
              <ArrowDown />
            </div>
            <div className="mb-4 w-[100px] rounded-full flex items-center justify-center text-blcak h-[44px] border-2 text-base border-black">
              About
            </div>
          </span>
          <motion.h2
            className="text-[78px] md:text-6xl font-bold mb-8"
            {...fadeInUp}>
            I've been{" "}
            <span className="bg-black text-white rounded-md px-3 py-1">
              Developing
            </span>
            <br />
            <div className="w-full h-8"></div>
            Websites since{" "}
            <span className="bg-black text-white rounded-md px-3 py-1">
              2013
            </span>
          </motion.h2>

          <motion.p className="text-lg mb-12 max-w-2xl mx-auto" {...fadeInUp}>
            We start every new client interaction with an in-depth discovery
            call where we get to know each other and recommend the best course
            of action.
          </motion.p>

          <div className="mb-8 flex items-center gap-32 justify-between w-full">
            <div>
              {" "}
              <p className="text-3xl font-semibold text-left">
                PREVIOUSLY <br /> WORKED ON
              </p>
            </div>
            <motion.div
              className="flex flex-wrap gap-5 relative"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}>
              {companies.map((company, index) => {
                const isBlack = index === 0;

                const containerClasses = [
                  "h-[90px]",
                  "w-[270px]",
                  "p-5",
                  "rounded-full",
                  "border",
                  "flex",
                  "items-center",
                  "justify-center",
                  "text-sm",
                  "font-medium",
                  "border-black",
                  "transition-transform  duration-500 ease-in-out",
                  isBlack ? "bg-black text-white" : "bg-white text-black",
                  index === 0 ? "translate-x-20 rotate-12 z-50" : "",
                  index === 1 ? "translate-x-10  z-40" : "",
                  index === 2 ? "translate-x-5 rotate-[15deg] z-30" : "",
                  index === 4 ? "translate-x-10 rotate-12 z-20" : "",
                ].join(" ");

                const imageClasses = [
                  "w-auto",
                  "object-contain",
                  index === 2 ? "h-16 -rotate-[15deg]" : "h-6",
                  index === 0 ? "-rotate-12" : "",
                  index === 4 ? "rotate-12" : "",
                ].join(" ");

                return (
                  <motion.div
                    key={index}
                    className={containerClasses}
                    variants={fadeInUp}>
                    <Image
                      src={company}
                      alt={`Company logo ${index}`}
                      width={100}
                      height={50}
                      className={imageClasses}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#141414] rounded-3xl  text-white m-12 py-24 px-12">
        <div className="p-20 mx-auto">
          <div className="mb-12">
            <Badge variant="outline" className="mb-4 text-white border-white">
              Work Process
            </Badge>
            <motion.h2 className="text-4xl md:text-5xl font-bold" {...fadeInUp}>
              My Work Process
            </motion.h2>
          </div>

          <motion.div
            className="flex flex-wrap gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}>
            {workProcess.map((process, index) => (
              <motion.div
                key={index}
                className={`
        flex flex-col items-start w-[500px] h-[250px] space-y-4 p-6 rounded-xl 
        ${
          index === 1
            ? "bg-lime-300 text-black rotate-12 skew-y-1"
            : "bg-black text-white"
        }
      `}
                variants={fadeInUp}>
                <div
                  className={`
          
          px-3 py-1 rounded-full text-sm font-medium 
          flex items-center justify-between w-full
        `}>
                  <span
                    className={`text-xl ${process.color} px-5 py-2 rounded-full`}>
                    {process.step}
                  </span>
                  <Button
                    variant="link"
                    className={`${
                      index === 1 ? "text-black" : "text-white"
                    } p-0 h-auto`}>
                    → Read More
                  </Button>
                </div>

                <div className="flex-1">
                  <p
                    className={`${
                      index === 1 ? "text-black" : "text-gray-300"
                    } mb-2 text-base`}>
                    {process.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section
        style={{
          backgroundImage: "url('/section3Bg.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}>
        <div className="p-20 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {" "}
              <span className="flex items-center justify-start ">
                <div className="mb-4 text-black rounded-full flex items-center justify-center border-2 size-[44px] border-black">
                  <ArrowDown />
                </div>
                <div className="mb-4 w-[100px] rounded-full flex items-center justify-center text-blcak h-[44px] border-2 text-base border-black">
                  Contact
                </div>
              </span>
              <motion.h2
                className="text-4xl md:text-6xl font-bold mb-8"
                {...fadeInUp}>
                Interested in
                <br />
                <span className="bg-black text-white px-2 inline-block">
                  work
                </span>
                <span className="inline-block ml-2">together?</span>
              </motion.h2>
              <motion.p className="text-lg mb-8" {...fadeInUp}>
                We start every new client interaction with an in-depth discovery
                call where we get to know each other
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}>
                <Button className="rounded-full border border-black h-[58px] text-lg font-semibold bg-white text-black hover:bg-gray-100">
                  <div className=" border border-black rounded-full -translate-x-4 p-3 size-[44px] flex items-center justify-center ">
                    <Phone size={28} className=" fill-black" />
                  </div>
                  Schedule a Call
                </Button>
              </motion.div>
            </div>

            <motion.div className="bg-black p-8 rounded-lg" {...fadeInUp}>
              <div className="space-y-4">
                <Input
                  placeholder="Enter your name"
                  className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <Input
                  placeholder="Your email address"
                  type="email"
                  className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <Textarea
                  placeholder="Describe your project"
                  className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-400 min-h-[100px]"
                  value={formData.project}
                  onChange={(e) =>
                    setFormData({ ...formData, project: e.target.value })
                  }
                />
                <div className="flex space-x-4 items-center ">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}>
                    <Button className="rounded-full w-64 flex items-center justify-start border border-white h-[38px] text-lg font-semibold bg-black text-white hover:bg-gray-900">
                      <div className="bg-blcak text-white border border-white rounded-full -translate-x-4 p-3 size-[30px] flex items-center justify-center">
                        <Send className="w-4 h-4 mr-2" />
                      </div>
                      Send
                    </Button>
                  </motion.div>
                  <span className="text-white mx-3">or</span>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}>
                    <Button className="rounded-full w-64 flex items-center justify-start border border-white h-[38px] text-lg font-semibold bg-black text-white hover:bg-gray-900">
                      <div className="bg-blcak text-white border border-white rounded-full -translate-x-4 p-3 size-[30px] flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 mr-2" />
                      </div>
                      Contact Me
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12 px-6">
        <div className=" mx-auto p-20">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">DEVELOP.ME</h3>
              <p className="text-gray-400 text-sm mb-4">As you can</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Say Hello</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>HELLO@OPAM.COM</p>
                <p>MAURICEVILLE.COM</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Menu</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>HOME</p>
                <p>ABOUT</p>
                <p>PORTFOLIO</p>
                <p>BLOG</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Social</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>TWITTER</p>
                <p>INSTAGRAM</p>
                <p>FACEBOOK</p>
                <p>BEHANCE</p>
                <p>DRIBBBLE</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex justify-between items-center text-sm text-gray-400">
            <p className="text-white font-bold"> BESINK</p>
            <p>© DEVELOP.ME 2023</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">
                PRIVACY
              </a>
              <a href="#" className="hover:text-white transition-colors">
                TERMS
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
