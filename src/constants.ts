interface Service {
  name: string;
  description: string;
  price: number;
}

export interface OpeningHours {
  day: string;
  hours: string;
}

export const services: Service[] = [
  {
    name: "Haircut",
    description:
      "A good haircut is the foundation of any good hairstyle. We offer a variety of haircuts to suit your needs.",
    price: 15,
  },
  {
    name: "Skin Fade",
    description: "Skin Fade",
    price: 20,
  },
  {
    name: "Beard Trim (clipper)",
    description: "Beard Trim (clipper)",
    price: 10,
  },
  {
    name: "Hot Towel Shave",
    description: "Hot Towel Shave",
    price: 15,
  },
];

export const OPENING_HOURS: OpeningHours[] = [
  {
    day: "Monday",
    hours: "9:00am - 5:00pm",
  },
  {
    day: "Tuesday",
    hours: "9:00am - 5:00pm",
  },
  {
    day: "Wednesday",
    hours: "9:00am - 5:00pm",
  },
  {
    day: "Thursday",
    hours: "9:00am - 5:00pm",
  },
  {
    day: "Friday",
    hours: "9:00am - 5:00pm",
  },
  {
    day: "Saturday",
    hours: "9:00am - 5:00pm",
  },
  {
    day: "Sunday",
    hours: "Closed",
  },
];
