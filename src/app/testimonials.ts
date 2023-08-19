export type Testimonial = {
  name: string;
  title: string;
  picture: string;
  message: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Jill R.",
    title: "Volunteer Chair, Pancreatic Cancer Action Network",
    picture:
      "https://www.app.com/gcdn/-mm-/460a40eda64cabeb782fe8ed8194c760dcd49232/c=0-288-3456-4896/local/-/media/2015/11/19/NJGroup/AsburyPark/635834885146998007-IMG-9675.JPG",
    message: `Zabi, You were incredibly helpful from start to finish… 
    I can’t thank you enough! You jumped in with both feet without any connection to the cause. 
    I’m impressed with your competency, your energy, your flexibility… you were willing to do anything 
    and everything, which is incredibly rare.`,
  },
  {
    name: "Jeanne T.",
    title: "Founder & Board President, Heart of Adoptions Alliance",
    picture:
      "https://floridaadoptionattorney.com/wp-content/uploads/2021/09/janne-t-optz.webp",
    message: `Zabi, Thank you for your outstanding support of the Heart of Adoptions Alliance gala.
       We hit it out of the park! We could not have pulled this off w/o the support of you and your volunteers
       you shared. Thank you for helping us make a difference! Hope to see you again!`,
  },
  {
    name: "Tammy",
    title: "Meetup Member",
    picture:
      "https://secure.meetupstatic.com/photos/member/c/1/d/8/member_256369624.jpeg",
    message:
      "I completely loved the experience [of volunteering at Trinity Cafe], from beginning to end! Thank you, Zabi, for organizing [Tampa Volunteers] & these events!!",
  },
  {
    name: "Beth D.",
    title: "Meetup Member",
    picture:
      "https://secure.meetupstatic.com/photos/member/1/c/7/4/highres_308887284.jpeg",
    message: "I appreciate the diversity of events Zabi offers to this group.",
  },
  {
    name: "Risa H.",
    title: "Meetup Member",
    picture:
      "https://secure.meetupstatic.com/photos/member/7/9/2/a/highres_312931018.jpeg",
    message:
      "Zabi and the other volunteers I have met on this meetup at these events are wonderful people giving back.",
  },
  {
    name: "Petra",
    title: "Meetup Member",
    picture:
      "https://secure.meetupstatic.com/photos/member/3/6/e/d/highres_309254061.jpeg",
    message:
      "Thank you Zabi for all the events that you organize, it takes a special person to do so.",
  },
];

export default testimonials;
