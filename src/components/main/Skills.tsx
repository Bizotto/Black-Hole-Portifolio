import { Backend_skill, Frontend_skill, Full_stack } from "@/constants";
import SkillsContent from "../sub/SkillsContent";
import SkillText from "../sub/SkillsText";

export default function Skills() {
  return (
    <section
      style={{ transform: "scale(0.9)" }}
      id="skills"
      className="relative flex h-full scroll-py-20 flex-col items-center justify-center gap-3 overflow-hidden"
    >
      <SkillText />
      <div className="mt-4 flex flex-row flex-wrap items-center justify-around gap-5">
        {Frontend_skill.map((image, index) => (
          <SkillsContent
            key={index}
            height={image.height}
            width={image.width}
            src={image.Image}
            index={index}
          />
        ))}
      </div>
      <div className="mt-4 flex flex-row flex-wrap items-center justify-around gap-5">
        {Backend_skill.map((image, index) => (
          <SkillsContent
            key={index}
            height={image.height}
            width={image.width}
            src={image.Image}
            index={index}
          />
        ))}
      </div>
      <div className="mt-4 flex flex-row flex-wrap items-center justify-around gap-5">
        {Full_stack.map((image, index) => (
          <SkillsContent
            key={index}
            height={image.height}
            width={image.width}
            src={image.Image}
            index={index}
          />
        ))}
      </div>
      <div className="absolute h-full w-full">
        <div className="absolute -z-10 flex h-full w-full items-center justify-center bg-cover opacity-30">
          <video
            className="h-[100vh] w-full"
            preload="false"
            loop
            muted
            autoPlay
            playsInline
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
}
