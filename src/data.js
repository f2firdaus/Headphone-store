import headphone1 from "./assets/products/headphone-prod-1.webp";
import headphone2 from "./assets/products/headphone-prod-2.webp";
import headphone3 from "./assets/products/headphone-prod-3.webp";
import headphone4 from "./assets/products/headphone-prod-4.webp";
import headphone5 from "./assets/products/headphone-prod-5.webp";
import watch1 from "./assets/products/watch-prod-1.webp";
import watch2 from "./assets/products/watch-prod-2.webp";
import watch3 from "./assets/products/watch-prod-3.webp";
import earbuds1 from "./assets/products/earbuds-prod-1.webp";
import earbuds2 from "./assets/products/earbuds-prod-2.webp";
import earbuds3 from "./assets/products/earbuds-prod-3.webp";
import earbuds4 from "./assets/products/earbuds-prod-4.webp";
// import earbuds5 from './assets/products/earbuds-prod-5.webp'
import speaker1 from "./assets/products/speaker-prod-1.webp";
import speaker2 from "./assets/products/speaker-prod-2.webp";
import speaker3 from "./assets/products/speaker-prod-3.webp";
import speaker4 from "./assets/products/speaker-prod-4.webp";
import speaker5 from "./assets/products/speaker-prod-5.webp";
import category1 from "./assets/category/cat-1.jpg";
import category2 from "./assets/category/cat-2.jpg";
import category3 from "./assets/category/cat-3.jpg";
import category4 from "./assets/category/cat-4.jpg";
const data = {
  categories: [
    {
      id: 1,
      name: "Headphones",
      image: `${category1}`,
      items: [
        {
          id: 1,
          name: "boAt Rockerz 450 DC edition ",
          price: 1999,
          description:
            "There is no better justice to your playlist & binging than Rockerz 450 boAt | DC edition. If low battery is your enemy, the 15HRS non-stop playback is here to rightfully combat that",
          image: `${headphone1}`,
        },
        {
          id: 2,
          name: "Rockerz 550 ",
          price: 1799,
          description:
            "boAt Rockerz 550 is an over-ear wireless headset that has been ergonomically designed to meet the needs of music lovers. The headphones come equipped with the latest Bluetooth v5.0 for instant wireless connectivity..",
          image: `${headphone2}`,
        },
        {
          id: 3,
          name: "boAt Rockerz 518 ",
          price: 1599,
          description:
            "boAt Rockerz 518 is designed to play Up to 20 hours. Don't just be loud, be loud and clear. ",
          image: `${headphone3}`,
        },
        {
          id: 4,
          name: "Rockerz 400",
          price: 1299,
          description:
            "Let's put an end to your worries about wires hanging and getting tangled with BoAt Rockerz 400 and connect with any Bluetooth device, connect and play. Dead batteries can kill your vibe. boAt Rockerz bluetooth headphones are designed to play Up to 8 hours. It has a High Definition Sound.",
          image: `${headphone4}`,
        },
        {
          id: 5,
          name: "Rockerz 450 Superman ",
          price: 1999,
          description:
            "There is no better justice to your playlist than Rockerz 450 boAt | DC edition. If low battery is your enemy, the 15HRS non-stop playback is here to rightfully combat that.",
          image: `${headphone5}`,
        },
      ],
    },
    {
      id: 2,
      name: "Smart Watches",
      image: `${category3}`,
      items: [
        {
          id: 6,
          name: 'boAt Wave Neo',
          price: 1799,
          description:
            "Introducing a #NeoWay to live smart and stylish – the all-new Watch Wave Neo. Check everything that you need in a smartwatch and then get some more. Packed with a 1.69 inches screen.",
          image: `${watch1}`,
        },
        {
          id: 7,
          name: 'boAt Iris',
          price: 4499,
          description:
            "Shoutout to all who see the glass half full. It is time to switch over to the bright side. Watch Iris will get you through the week with a 7-day battery backup. ",
          image: `${watch2}`,
        },
        {
          id: 8,
          name: 'boAt Vertex',
          price: 2299,
          description:
            "When you can be at the apex of your health, why compromise? Meet Watch Vertex, our all-new smartwatch that’s built to improve your lifestyle and push you closer towards your fitness goals.",
          image: `${watch3}`,
        },
      ],
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      image: `${category4}`,
      items: [
        {
          id: 9,
          name: "TRebel Airdopes 141 ",
          price: 1499,
          description:
            "Hello sassy and fierce ladies! We see you soaring high for your dreams, and we want to support them. Let TRebel Airdopes 141 be your biggest cheerleader while you win the world with your go-getter attitude! Shun their opinions by indulging in your rhythm with the 8mm Dynamic Drivers..",
          image: `${earbuds1}`,
        },
        {
          id: 10,
          name: "Airdopes 131 DC Edition ",
          price: 1399,
          description:
            "Sleek. Comfortable. Stylish. And a splash of amazing acoustic powers. Airdopes 131 true wireless earbuds are equipped with 13mm drivers that offer you beyond the ordinary sound.",
          image: `${earbuds2}`,
        },
        {
          id: 11,
          name: "boAt Airdopes 141 Pro",
          price: 1499,
          description:
            "Take a step up on your listening experience with boAt Airdopes 141 Pro. Start playing your tracks on our best wireless earbuds and don't stop with a total playback of 45 hours. ",
          image: `${earbuds3}`,
        },
        {
          id: 11,
          name: "boAt Airdopes 441 ",
          price: 2499,
          description:
            "Plug Into Nirvana with boAt Airdopes 441 TWS earbuds to enjoy your music in a truly wireless way. It has the IWP (Insta Wake N’ Pair) Technology, meaning as soon as one opens the charging case lid, the best earbuds power on and enter connection mode. ",
          image: `${earbuds4}`,
        },
        {
          id: 12,
          name: "boAt TRebel Airdopes 402 ",
          price: 1999,
          description:
            "The time hath come for you, my ladies, to walk with elegance dripping with every step you take. Let the royal shine and distinguish yourself from the crowd with boAt Airdopes 402, designed solely to compliment you and your personality.",
          image: `${earbuds4}`,
        },
      ],
    },
    {
      id: 4,
      name: "Speakers",
      image: `${category2}`,
      items: [
        {
          id: 13,
          name: "Stone 1500F ",
          price: 3999,
          description:
            "Add life to all your parties with the ultimate jukebox - Stone 1200F bluetooth speaker. It’s powered by 14W boAt Signature Sound with Passive Bass Radiator that’s built to add spark to all your plans. The RGB LED lights are perfect .",
          image: `${speaker1}`,
        },
        {
          id: 14,
          name: "Stone 352 ",
          price: 1699,
          description:
            "Be the life of every party as you carry the ultra-portable Stone 352 with you, wherever you go. Its 10W Stereo boAt Signature Sound will make you vibe with full force as every beat becomes clear. Too bored partying within four walls",
          image: `${speaker2}`,
        },
        {
          id: 15,
          name: "Stone 1000v2",
          price: 2999,
          description:
            "Powerful and Precise. Stone 1000v2 is the premier wireless speaker that provides the best audio in the business. With its 14W stereo sound, get a boogie on and party all night. Stone 1000v2 also comes packed with state-of-the-art specs to keep you engrossed and engaged through it all!.",
          image: `${speaker3}`,
        },
        {
          id: 16,
          name: "boAt Stone 500 ",
          price: 1999,
          description:
            "Become the life of every party with Stone 500. Experience 10W RMS stereo sound and groove with your gang on your favourite tunes. Double the thump with its TWS functionality that lets you connect & play 2 Stone 500 together. .",
          image: `${speaker4}`,
        },
        {
          id: 17,
          name: "Party Pal 60",
          price: 4999,
          description:
            "Wherever the party is tonight, make sure you carry the powerful 20W R.M.S Sound of the PartyPal 60 along. It’s time to create memories with wireless Bluetooth V5.0 guiding you to the shores of Nirvana. So, get loud and vibing with the integral space boom party inspired design of the boAt PartyPal 60. ",
          image: `${speaker5}`,
        },
      ],
    },
  ],
};
export default data;
