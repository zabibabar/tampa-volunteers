export type Testimonial = {
  name: string;
  title: string;
  message: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Jill R.",
    title: "Volunteer Chair, Pancreatic Cancer Action Network",
    message: `Zabi, You were incredibly helpful from start to finish… 
    I can’t thank you enough! You jumped in with both feet without any connection to the cause. 
    I’m impressed with your competency, your energy, your flexibility… you were willing to do anything 
    and everything, which is incredibly rare.`,
  },
  {
    name: "Jeanne T.",
    title: "Founder & Board President, Heart of Adoptions Alliance",
    message: `Zabi, Thank you for your outstanding support of the Heart of Adoptions Alliance gala.
       We hit it out of the park! We could not have pulled this off w/o the support of you and your volunteers
       you shared. Thank you for helping us make a difference! Hope to see you again!`,
  },
  {
    name: "Donna R.",
    title: "Meetup Member",
    message: "I love giving back to the community!",
  },
  {
    name: "Beth D.",
    title: "Meetup Member",
    message: "I appreciate the diversity of events Zabi offers to this group.",
  },
  {
    name: "Risa H.",
    title: "Meetup Member",
    message:
      "Zabi and the other volunteers I have met on this meetup at these events are wonderful people giving back.",
  },
];

export default testimonials;
