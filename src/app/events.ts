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
    name: "Iconic: Portrait Edition 2023",
    date: "Feb 2023",
    org: "Morean Arts Center",
    image:
      "https://secure.meetupstatic.com/photos/event/6/5/e/d/highres_510926093.webp",
    meetupLink: "https://www.meetup.com/tampa-volunteers/events/291143333/",
    cause: "Arts & Culture",
  },
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
    name: "Agents of Change Gala",
    date: "Apr 2023",
    org: "Heart of Adoptions Alliance",
    image:
      "https://secure.meetupstatic.com/photos/event/2/4/7/highres_510120583.webp",
    meetupLink: "https://www.meetup.com/tampa-volunteers/events/291164832/",
    cause: "Children & Youth",
  },
  {
    name: "Warehouse Sorting",
    date: "June 2023",
    org: "Feeding Tampa Bay",
    image:
      "https://secure.meetupstatic.com/photos/event/2/e/9/5/600_512351925.webp?w=384",
    meetupLink: "https://www.meetup.com/tampa-volunteers/events/293108322/",
    cause: "Hunger & Poverty",
  },
  {
    name: "Clearwater Garden Club",
    date: "Oct 2023",
    org: "Keeping Pinellas Beautiful",
    image:
      "https://secure.meetupstatic.com/photos/event/8/d/5/a/highres_515076186.webp",
    meetupLink: "https://www.meetup.com/tampa-volunteers/events/295408166/",
    cause: "Environmental",
  },
  {
    name: "Create Toys for Primates",
    date: "July 2023",
    org: "Suncoast Primate Sanctuary",
    image:
      "https://secure.meetupstatic.com/photos/event/c/8/a/c/highres_514431372.webp",
    meetupLink: "https://www.meetup.com/tampa-volunteers/events/293671909/",
    cause: "Animal & Wildlife",
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
];

export default events;
