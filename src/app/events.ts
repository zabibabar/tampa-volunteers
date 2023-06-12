import { CauseName } from "./causes";

type Event = {
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
    name: "Tennis on the Green",
    date: "May 2023",
    org: "Children's Cancer Center",
    image:
      "https://secure.meetupstatic.com/photos/event/1/7/c/highres_511980380.webp",
    meetupLink: "https://www.meetup.com/tampa-volunteers/events/292810882/",
    cause: "Health & Disease",
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
    date: "July 2023",
    org: "Keeping Pinellas Beautiful",
    image:
      "https://secure.meetupstatic.com/photos/event/9/e/9/4/600_512920596.webp?w=384",
    meetupLink: "https://www.meetup.com/tampa-volunteers/events/293576623/",
    cause: "Environmental",
  },
  {
    name: "Create Toys for Primates",
    date: "July 2023",
    org: "Suncoast Primate Sanctuary",
    image:
      "https://secure.meetupstatic.com/photos/event/3/9/a/4/600_513074756.webp?w=384",
    meetupLink: "https://www.meetup.com/tampa-volunteers/events/293671909/",
    cause: "Animal & Wildlife",
  },
  {
    name: "Volunteer at Pet Rescue",
    date: "July 2023",
    org: "Humane Society of Tampa Bay",
    image:
      "https://secure.meetupstatic.com/photos/event/c/e/c/a/600_513052938.webp?w=384",
    meetupLink: "https://www.meetup.com/tampa-volunteers/events/293685288/",
    cause: "Animal & Wildlife",
  },
];

export default events;
