"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPhp,
  FaPython,
  FaFigma,
  FaDocker,
  FaGit,
  FaLaravel,
  FaSymfony,
  FaGithub,
  FaGraduationCap,
  FaBriefcase,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiDotnet,
  SiNextdotjs,
  SiTypescript,
  SiSqlite,
  SiMysql,
  SiSpringboot,
  SiTailwindcss,
  SiFlutter,
  SiPostgresql,
  SiOracle,
  SiMongodb,
} from "react-icons/si";

const about = {
  title: "À propos de moi",
  description:
    "Développeur Full Stack passionné avec une expertise en développement web moderne. Je me spécialise dans la création d'applications web performantes et intuitives en utilisant les dernières technologies.",
  info: [
    {
      fieldName: "Nom",
      fieldValue: "Yassir Benjima",
    },
    {
      fieldName: "Téléphone",
      fieldValue: "+212 623-401404",
    },
    {
      fieldName: "Email",
      fieldValue: "yassirbenjima18@gmail.com",
    },
    {
      fieldName: "Localisation",
      fieldValue: "Maroc",
    },
    {
      fieldName: "Expérience",
      fieldValue: "1+ année",
    },
    {
      fieldName: "Disponibilité",
      fieldValue: "Immédiate",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Mon expérience",
  description:
    "Expérience professionnelle en développement web et applications, avec une expertise en technologies modernes et frameworks populaires.",
  items: [
    {
      company: "DEVKIT SIO",
      position: "Full Stack Developpeur",
      duration: "Juillet 2025 - Août 2025",
    },
    {
      company: "GROW EASY",
      position: "Full Stack Developpeur",
      duration: "Juillet 2024",
    },
    {
      company: "212COMMUNICATION",
      position: "Full Stack Developpeur",
      duration: "Mars 2023",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "Ma formation",
  description:
    "Formation académique et technique en développement web et technologies de l'information.",
  items: [
    {
      institution: "Ecole Marocaine des Sciences de l'Ingénieur",
      degree: "Ingénieur en informatique et réseau",
      duration: "2018 - 2020",
    },
    {
      institution: "ISTA NTIC",
      degree: "Technicien spécialisé en développement digital",
      duration: "2021 - 2023",
    },
  ],
};

const skills = {
  title: "Mes compétences",
  description:
    "Expertise technique en développement web et technologies modernes, avec une maîtrise approfondie des frameworks et outils de développement.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaPhp />, name: "PHP" },
    { icon: <FaLaravel />, name: "Laravel" },
    { icon: <FaSymfony />, name: "Symfony" },
    { icon: <FaJava />, name: "Java" },
    { icon: <SiSpringboot />, name: "Spring Boot" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <SiDotnet />, name: ".NET" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiSqlite />, name: "SQLite" },
    { icon: <SiOracle />, name: "Oracle" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <FaGit />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiFlutter />, name: "Flutter" },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience" className="w-full">
              Expérience
            </TabsTrigger>
            <TabsTrigger value="education" className="w-full">
              Formation
            </TabsTrigger>
            <TabsTrigger value="skills" className="w-full">
              Compétences
            </TabsTrigger>
            <TabsTrigger value="about me" className="w-full">
              À propos
            </TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[520px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>

                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[520px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="text-1xl bg-[#232329] text-white">
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about me"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
