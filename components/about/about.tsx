import React from "react";
import Container from "../container";
import Heading from "../heading";
import AboutItem from "./about-item";
import Tiago from "@/public/assets/photos/tiago.png";
import Ricardo from "@/public/assets/photos/ricardo.png";

const about = () => {
  return (
    <div className="bg-foreground pb-32">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Heading
            title="Tailored Solutions"
            subtitle="Crafting highly personalized strategies for unparalleled, far-reaching impact"
          />
          <AboutItem
            image={Tiago}
            title="Tiago Pereira"
            text="Nostrud laboris id consectetur cillum culpa excepteur tempor laboris adipisicing consectetur pariatur fugiat sit cillum. Proident culpa sint aliquip eiusmod magna nisi et ut ad irure fugiat. Anim esse ad cillum id magna enim ullamco velit nulla enim tempor tempor excepteur. Ut et anim incididunt minim dolor eu eiusmod occaecat qui excepteur proident minim. Pariatur aute voluptate labore sit excepteur officia cillum."
            link="/"
          />
          <AboutItem
            image={Ricardo}
            title="Ricardo Rocha"
            text="Nostrud laboris id consectetur cillum culpa excepteur tempor laboris adipisicing consectetur pariatur fugiat sit cillum. Proident culpa sint aliquip eiusmod magna nisi et ut ad irure fugiat. Anim esse ad cillum id magna enim ullamco velit nulla enim tempor tempor excepteur. Ut et anim incididunt minim dolor eu eiusmod occaecat qui excepteur proident minim. Pariatur aute voluptate labore sit excepteur officia cillum."
            link="/"
          />
        </div>
      </Container>
    </div>
  );
};

export default about;
