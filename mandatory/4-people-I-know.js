/*

Below you will find a list of people that I know. 

*/

/*

1) Reading

Before you start, you should read through the object below so that you understand the structure of it.

When you've finished. Continue to the exercises below.

*/

let people = [
  {
    age: 39,
    company: "PEARLESSA",
    name: {
      first: "Vilma",
      last: "Hardy",
    },
    email: "vilma.hardy@pearlessa.info",
    friends: [
      {
        name: "Sally Nielsen",
        age: 37,
        skills: ["Data", "Strategic", "Problem"],
      },
      {
        name: "Barber Wooten",
        age: 59,
        skills: ["Numeracy", "Strategic", "thinking"],
      },
      {
        name: "Merle Gilbert",
        age: 44,
        skills: ["thinking", "management", "making"],
      },
      {
        name: "Norton Spence",
        age: 59,
        skills: ["Interviewing", "Observation", "Motivation"],
      },
      {
        name: "Angel Simon",
        age: 42,
        skills: ["Numeracy", "Strategic", "Research"],
      },
    ],
  },
  {
    age: 39,
    company: "PLUTORQUE",
    name: {
      first: "Aisha",
      last: "Gentry",
    },
    email: "aisha.gentry@plutorque.net",
    friends: [
      {
        name: "Latonya Hogan",
        age: 67,
        skills: ["Problem", "Sharing", "Project"],
      },
      {
        name: "Kate Sheppard",
        age: 42,
        skills: ["Scheduling", "management", "Respect"],
      },
      {
        name: "Lela Espinoza",
        age: 40,
        skills: ["management", "Meeting", "Data"],
      },
      {
        name: "Lindsay Larsen",
        age: 20,
        skills: ["Numeracy", "Reporting", "management"],
      },
      {
        name: "Deleon Gallegos",
        age: 48,
        skills: ["Respect", "Problem", "Decision"],
      },
    ],
  },
  {
    age: 36,
    company: "LINGOAGE",
    name: {
      first: "Mitchell",
      last: "Whitfield",
    },
    email: "mitchell.whitfield@lingoage.io",
    friends: [
      {
        name: "Head Fitzpatrick",
        age: 31,
        skills: ["People", "Collaboration", "data"],
      },
      {
        name: "Natasha Campos",
        age: 44,
        skills: ["Respect", "Critical", "Strategic"],
      },
      {
        name: "Abby Mclaughlin",
        age: 40,
        skills: ["analysis", "Planning", "Scheduling"],
      },
      {
        name: "Kramer Torres",
        age: 61,
        skills: ["Observation", "Troubleshooting", "Delegating"],
      },
      {
        name: "Lawrence Tillman",
        age: 42,
        skills: ["Planning", "thinking", "setting"],
      },
    ],
  },
  {
    age: 24,
    company: "MELBACOR",
    name: {
      first: "Hooper",
      last: "Kirk",
    },
    email: "hooper.kirk@melbacor.me",
    friends: [
      {
        name: "Clarissa Kirby",
        age: 37,
        skills: ["management", "making", "Categorizing"],
      },
      {
        name: "Contreras Ballard",
        age: 38,
        skills: ["Prioritizing", "Numeracy", "Data"],
      },
      {
        name: "Wyatt Small",
        age: 29,
        skills: ["Respect", "Decision", "Sharing"],
      },
      {
        name: "Mable Mcgee",
        age: 44,
        skills: ["Sharing", "Decision", "Prioritizing"],
      },
      {
        name: "Henry Rodgers",
        age: 39,
        skills: ["thinking", "Communication", "management"],
      },
    ],
  },
  {
    age: 40,
    company: "CIPROMOX",
    name: {
      first: "Sutton",
      last: "Quinn",
    },
    email: "sutton.quinn@cipromox.ca",
    friends: [
      {
        name: "Melanie Patterson",
        age: 40,
        skills: ["Reporting", "management", "Numeracy"],
      },
      {
        name: "April Cortez",
        age: 69,
        skills: ["Observation", "People", "management"],
      },
      {
        name: "Butler Frederick",
        age: 68,
        skills: ["Participation", "Data", "solving"],
      },
      {
        name: "Gill Barlow",
        age: 69,
        skills: ["Data", "People", "Coordinating"],
      },
      {
        name: "Rush May",
        age: 44,
        skills: ["Data", "Multi-tasking", "Research"],
      },
    ],
  },
  {
    age: 21,
    company: "ENVIRE",
    name: {
      first: "Haley",
      last: "Knox",
    },
    email: "haley.knox@envire.tv",
    friends: [
      {
        name: "Nannie Reyes",
        age: 47,
        skills: ["Sharing", "management", "Time"],
      },
      {
        name: "Sheena Reeves",
        age: 18,
        skills: ["making", "Strategic", "Sharing"],
      },
      {
        name: "Stacie Villarreal",
        age: 34,
        skills: ["Motivation", "Coordinating", "Listening"],
      },
      {
        name: "Enid Hays",
        age: 45,
        skills: ["Categorizing", "solving", "Respect"],
      },
      {
        name: "Pickett Rodriguez",
        age: 27,
        skills: ["management", "Communication", "management"],
      },
    ],
  },
  {
    age: 28,
    company: "PROSELY",
    name: {
      first: "Brittany",
      last: "Jacobson",
    },
    email: "brittany.jacobson@prosely.name",
    friends: [
      {
        name: "Glass Weaver",
        age: 64,
        skills: ["Listening", "making", "Flexibility"],
      },
      {
        name: "Brandi Dennis",
        age: 51,
        skills: ["Scheduling", "Motivation", "Interviewing"],
      },
      {
        name: "Lynch Johnston",
        age: 68,
        skills: ["data", "Decision", "Interviewing"],
      },
      {
        name: "Gena Good",
        age: 54,
        skills: ["Motivation", "management", "Multi-tasking"],
      },
      {
        name: "Baldwin Wyatt",
        age: 61,
        skills: ["Advising", "deadlines", "Strategic"],
      },
    ],
  },
  {
    age: 36,
    company: "CAPSCREEN",
    name: {
      first: "Jana",
      last: "Harrison",
    },
    email: "jana.harrison@capscreen.co.uk",
    friends: [
      {
        name: "Stacie Villarreal",
        age: 34,
        skills: ["Motivation", "Coordinating", "Listening"],
      },
      {
        name: "Dolly Hubbard",
        age: 55,
        skills: ["Coordinating", "Diplomacy", "Motivation"],
      },
      {
        name: "Cunningham Shelton",
        age: 39,
        skills: ["Prioritizing", "Multi-tasking", "Diplomacy"],
      },
      {
        name: "Gabriela Nunez",
        age: 31,
        skills: ["Data", "Goal", "management"],
      },
      {
        name: "Castro Castaneda",
        age: 63,
        skills: ["Multi-tasking", "Reporting", "making"],
      },
    ],
  },
  {
    age: 31,
    company: "POWERNET",
    name: {
      first: "Gloria",
      last: "Hall",
    },
    email: "gloria.hall@powernet.com",
    friends: [
      {
        name: "Lourdes Barr",
        age: 65,
        skills: ["Scheduling", "Delegating", "thinking"],
      },
      {
        name: "Luz Newton",
        age: 21,
        skills: ["Advising", "Multi-tasking", "Sharing"],
      },
      {
        name: "Kelli Holloway",
        age: 46,
        skills: ["Respect", "Collaboration", "Research"],
      },
      {
        name: "Silvia Bean",
        age: 32,
        skills: ["Data", "Motivation", "Goal"],
      },
      {
        name: "Cherie Ramirez",
        age: 36,
        skills: ["Advising", "Categorizing", "Communication"],
      },
    ],
  },
  {
    age: 22,
    company: "POWERNET",
    name: {
      first: "Clay",
      last: "Livingston",
    },
    email: "clay.livingston@powernet.com",
    friends: [
      {
        name: "Stacie Villarreal",
        age: 34,
        skills: ["Motivation", "Coordinating", "Listening"],
      },
      {
        name: "Roy Lynn",
        age: 31,
        skills: ["Project", "management", "Goal"],
      },
      {
        name: "Stacey Vaughan",
        age: 29,
        skills: ["Prioritizing", "Categorizing", "Observation"],
      },
      {
        name: "Bradshaw Watts",
        age: 66,
        skills: ["Decision", "Diplomacy", "Collaboration"],
      },
      {
        name: "Lee Warren",
        age: 27,
        skills: ["Strategic", "Advising", "management"],
      },
    ],
  },
];

/*
2) Aged 35 or Older

In the above object you can see my friends and the friends of my friends.

First, I want you to find all of my friends who are 35 or older.

*/

let thirtyFiveOrOlder = people.filter((human) => {
  if(human.age >= 35){
    return human;
  }
})

/*
3) Find the email address

Next, I want you to find all of the people who work for "POWERNET" and then store their emails in the array below

*/

let powerNetEmails = people.filter((human) => {
  if(human.company === "POWERNET"){
    return human.email;
  }
})

/*

3) Friends with "Stacie Villarreal"

Next, I want you to find all of my friends who are friends with Stacie Villarreal.

You can see who people's friends are by seeing the "friends" array in each of my friends objects.

This time, I only want the full names of the people are who friends with her.

*/

let friendsWithStacie = people.filter((human) => {
  if(human.name === "Stacie Villarreal"){
    return human.friends;
  }
})


/*

4) Find "Multi-tasking" friends

Next, I want you to find all of my friends who are good at "Multi-tasking"

You can tell if they are good at "Multi-tasking" because they will have it listed in their skills

This time, I only want the full names of the people who can multitask

*/

let friendsWhoCanMultitask = [];

/*
==================================================
====== TESTS - DO NOT MODIFY BELOW THIS LINE =====
==================================================
*/
const util = require("util");

function test(test_name, actual, expected) {
  let status;

  if (actual.toString() === expected.toString()) {
    status = "PASSED";
  } else {
    status = `FAILED: expected: ${util.inspect(
      expected
    )} but your function returned: ${util.inspect(actual)}`;
  }

  console.log(`${test_name}: ${status}`);
}

test("Friends are over 35", thirtyFiveOrOlder.length, 5);

test("Friends with Stacie Villarreal", friendsWithStacie, [
  "Clay Livingstone",
  "Jana Harrison",
  "Haley Knox",
]);

test("Powernet email addresses", powerNetEmails, [
  "clay.livingston@powernet.com",
  "gloria.hall@powernet.com",
]);

test("Friends who can multitask", friendsWhoCanMultitask, [
  "Rush May",
  "Luz Newton",
  "Castro Castaneda",
  "Cunningham Shelton",
  "Gena Good",
]);
