import { CauseName } from "./causes";

export type Event = {
  name: string;
  date: string;
  org: string;
  image: string;
  cause: CauseName;
  meetupLink: string;
};

const events: Event[] = [
  {
    name: "Community Food Pantry",
    date: "Apr 2023",
    org: "Feeding Tampa Bay",
    image:
      "https://secure.meetupstatic.com/photos/event/9/4/9/e/highres_513038046.webp",
    meetupLink: "https://www.meetup.com/tampa-volunteers/events/293109340/",
    cause: "Hunger & Poverty",
  },
  {
    name: "Volunteer at Pet Rescue",
    date: "July 2023",
    org: "Humane Society of Tampa Bay",
    image:
      "https://secure.meetupstatic.com/photos/event/e/8/1/4/highres_514739412.webp",
    meetupLink: "https://www.meetup.com/tampa-volunteers/events/293685288/",
    cause: "Animal & Wildlife",
  },
  {
    name: "Restore Oyster Reef",
    date: "Aug 2023",
    org: "Pinellas County",
    image:
      "https://secure.meetupstatic.com/photos/event/b/9/d/1/highres_514907569.webp",
    meetupLink: "https://www.meetup.com/tampa-volunteers/events/294748840",
    cause: "Environmental",
  },
  {
    name: "Dinner Prep For Ronald McDonald House",
    date: "Sep 2023",
    org: "Ronald McDonald House Charities",
    image:
      "https://secure.meetupstatic.com/photos/event/c/7/f/7/highres_516111191.webp",
    meetupLink: "https://www.meetup.com/tampa-volunteers/events/295407923/",
    cause: "Health & Disease",
  },
  {
    name: "Halloween at Bakas Equestrian Center",
    date: "Oct 2023",
    org: "Bakas Equestrian Center",
    image:
      "https://secure.meetupstatic.com/photos/event/b/9/e/5/highres_516707589.webp",
    meetupLink: "https://www.meetup.com/tampa-volunteers/events/294728105/",
    cause: "Children & Youth",
  },
  {
    name: "Gasparilla Music Festival",
    date: "Feb 2024",
    org: "Pancreatic Cancer Action Network",
    image:
      "https://secure.meetupstatic.com/photos/event/9/e/e/7/highres_519220679.webp",
    meetupLink: "https://www.meetup.com/tampa-volunteers/events/298053017/",
    cause: "Arts & Culture",
  },
  {
    name: "Create Toys For Birds",
    date: "Nov 2023",
    org: "Florida Exotic Bird Sanctuary",
    image:
      "https://secure.meetupstatic.com/photos/event/7/d/e/0/highres_517052224.webp",
    meetupLink: "https://www.meetup.com/tampa-volunteers/events/295567958/",
    cause: "Animal & Wildlife",
  },
  {
    name: "Dunedin Causeway Cleanup",
    date: "Dec 2023",
    org: "Keep Pinellas Beautiful",
    image:
      "https://secure.meetupstatic.com/photos/event/5/3/f/4/highres_517701492.webp",
    meetupLink: "https://www.meetup.com/tampa-volunteers/events/294527143/",
    cause: "Environmental",
  },
];

export default events;
