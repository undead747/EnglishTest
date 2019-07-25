class UI {
    constructor() {
        this.dynamicContent = document.getElementById("dynamic_content");
        this.list = [{
                ID: 0,
                title: "Study",
                content: [{
                        id: 0,
                        content: "What’s your major?"
                    },
                    {
                        id: 1,
                        content: "Do you like it?"
                    },
                    {
                        id: 2,
                        content: "How do you like your courses?"
                    },
                    {
                        id: 3,
                        content: "Which major do you want to choose in college? Why? (if you do not have a major yet)"
                    },
                    {
                        id: 4,
                        content: "Will you change it if you have the chance ?"
                    },
                    {
                        id: 5,
                        content: "Which major will you change it to?"
                    },
                    {
                        id: 6,
                        content: "Is it different from what you had in mind?"
                    },
                    {
                        id: 7,
                        content: "Why did you choose that major?"
                    }
                ]
            },
            {
                ID: 1,
                title: "Your living area",
                content: [{
                        id: 0,
                        content: "Where are you living at the moment?"
                    },
                    {
                        id: 1,
                        content: "Do many people live in your neighbourhood?"
                    },
                    {
                        id: 2,
                        content: "Do you have many friends there?"
                    },
                    {
                        id: 3,
                        content: "How long have you been living there?"
                    },
                    {
                        id: 4,
                        content: "What changes would you like to see in this area?"
                    },
                    {
                        id: 5,
                        content: "Who do you live with?"
                    },
                    {
                        id: 6,
                        content: "What do you like about the area around where you live?"
                    },
                    {
                        id: 7,
                        content: "Are you planning to move to another area to live?"
                    },
                    {
                        id: 8,
                        content: "Do you know many people living nearby?"
                    },
                    {
                        id: 9,
                        content: "What changes have you seen in this area since you have been living there?"
                    }
                ]
            },
            {
                ID: 2,
                title: "Perfume",
                content: [{
                        id: 0,
                        content: "Do you like perfume?"
                    },
                    {
                        id: 1,
                        content: "Do you use perfume?"
                    },
                    {
                        id: 2,
                        content: "Would you ever give perfume as a gift?"
                    },

                ]
            },
            {
                ID: 3,
                title: "Reading",
                content: [{
                        id: 0,
                        content: "Do you like reading?"
                    },
                    {
                        id: 1,
                        content: "How often do you read?"
                    },
                    {
                        id: 2,
                        content: "Do you usually read for leisure or for work purposes?"
                    },
                    {
                        id: 3,
                        content: "What kinds of book do you like to read?"
                    },
                    {
                        id: 4,
                        content: "What was your favourite book or story when you were a child?"
                    },
                    {
                        id: 5,
                        content: "Do you like E-books?"
                    },
                    {
                        id: 6,
                        content: "Do you ever read professional books?"
                    },
                ]
            },
            {
                ID: 4,
                title: "Apps",
                content: [{
                        id: 0,
                        content: "What apps do you often use?"
                    },
                    {
                        id: 1,
                        content: "Which do you prefer, an information app or a chat app?"
                    },
                    {
                        id: 2,
                        content: "Do you want to develop an app yourself?"
                    },
                    {
                        id: 3,
                        content: "Do you often use apps on mobile phones?"
                    },
                ]
            },
            {
                ID: 5,
                title: "Litter/ Rubbish",
                content: [{
                        id: 0,
                        content: "Do you think it’s important to keep the city clean?"
                    },
                    {
                        id: 1,
                        content: "What do you do when you see rubbish on the street?"
                    },
                    {
                        id: 2,
                        content: "Can you suggest why some people throw their litter on the ground?"
                    },
                    {
                        id: 3,
                        content: "Do you think plastic bags are a serious environmental problem?"
                    },
                    {
                        id: 4,
                        content: "Why do some people throw garbage on the street?"
                    },
                    {
                        id: 5,
                        content: "What do you do with the garbage when you are on the street?"
                    },
                    {
                        id: 6,
                        content: "How do you feel when you see other people throw garbage on the street?"
                    },
                    {
                        id: 7,
                        content: "Do you think your city is clean or not?"
                    },
                ]
            },
            {
                ID: 6,
                title: "Smiling",
                content: [{
                        id: 0,
                        content: "Do you like to smile?"
                    },
                    {
                        id: 1,
                        content: "How often do you smile?"
                    },
                    {
                        id: 2,
                        content: "Do you smile when you are having your picture taken?"
                    },
                    {
                        id: 3,
                        content: "When do people smile to others?"
                    },
                    {
                        id: 4,
                        content: "Can you sense (or feel, or tell) if someone’s smile is fake?"
                    },
                ]
            },
            {
                ID: 7,
                title: "Children’s Ideas",
                content: [{
                        id: 0,
                        content: "When do you think children start to have their own ideas?"
                    },
                    {
                        id: 1,
                        content: "Should parents follow their children’s ideas or should they say “No” to them?"
                    },
                    {
                        id: 2,
                        content: "Can children say no?"
                    },
                ]
            },
            {
                ID: 8,
                title: "Places to Play",
                content: [{
                        id: 0,
                        content: "Where did you play when you were a child?"
                    },
                    {
                        id: 1,
                        content: "Did you play at your friend’s home?"
                    },
                ]
            },
            {
                ID: 9,
                title: "Cities",
                content: [{
                        id: 0,
                        content: "Do you like the city you are living in now?"
                    },
                    {
                        id: 1,
                        content: "Which city do you want to go to?"
                    },
                    {
                        id: 2,
                        content: "Which city have you been to recently?"
                    },
                    {
                        id: 3,
                        content: "What kinds of city do you like?"
                    },
                    {
                        id: 4,
                        content: "Do you prefer the city or the countryside?"
                    },
                ]
            },
            {
                ID: 10,
                title: "Weather/ Season",
                content: [{
                        id: 0,
                        content: "Which season do you like best? /Do you have a favourite type of weather?"
                    },
                    {
                        id: 1,
                        content: "What’s the weather like in your city?"
                    },
                    {
                        id: 2,
                        content: "Are there four different seasons in your hometown?"
                    },
                    {
                        id: 3,
                        content: "Would you move to another city because of the weather?"
                    },
                    {
                        id: 4,
                        content: "Do you do different things in different weather (or different seasons)?"
                    },
                    {
                        id: 5,
                        content: "Would you prefer to live in a place that has the same weather all year, or a place that has four seasons?"
                    },
                    {
                        id: 6,
                        content: "Does the weather in your country change often?"
                    },
                    {
                        id: 7,
                        content: "Do you like it when it’s raining?"
                    },
                    {
                        id: 8,
                        content: "Do you feel the climate is changing?"
                    },
                    {
                        id: 9,
                        content: "Do you think the weather is more important to people who play sports?"
                    }
                ]
            },
            {
                ID: 11,
                title: "Sleep",
                content: [{
                        id: 0,
                        content: "How many hours do you sleep every day (or, every night)?"
                    },
                    {
                        id: 1,
                        content: "Do you think it’s good to have a nap during the day?"
                    },
                    {
                        id: 2,
                        content: "Did you sleep more in the past than you do now?"
                    },
                    {
                        id: 3,
                        content: "Do you think old people need more sleep than young people?"
                    },
                    {
                        id: 4,
                        content: "Have your sleeping habits changed since you were younger?"
                    },
                    {
                        id: 5,
                        content: "Do you think it’s important to have enough sleep (each day/night)?"
                    },
                ]
            },
            {
                ID: 12,
                title: "Pets/ Animals",
                content: [{
                        id: 0,
                        content: "Have you ever had (or, raised) a pet?"
                    },
                    {
                        id: 1,
                        content: "Do many people in your country have a pet?"
                    },
                    {
                        id: 2,
                        content: "What kind of pets do people like/dislike to have?"
                    },
                    {
                        id: 3,
                        content: "What kind of pets are common in your country?"
                    },
                ]
            },
            {
                ID: 13,
                title: "The sky",
                content: [{
                        id: 0,
                        content: "Do you often look at the sky? (Why?)"
                    },
                    {
                        id: 1,
                        content: "Do you know much about the stars and planets?"
                    },
                    {
                        id: 2,
                        content: "Can you see the moon and stars at night where you live?"
                    },
                    {
                        id: 3,
                        content: "Do you prefer to look at the sky in the daytime, or at night?"
                    },
                    {
                        id: 4,
                        content: "Is there a good place to look at the sky where you live?"
                    },
                    {
                        id: 5,
                        content: "Did you learn anything about the planets and stars at school?"
                    },
                ]
            },
            {
                ID: 14,
                title: "Films/ Movies",
                content: [{
                        id: 0,
                        content: "Do you like to watch movies? (Why?)"
                    },
                    {
                        id: 1,
                        content: "What types of films do you like to watch?"
                    },
                    {
                        id: 2,
                        content: "Do you often watch a movie (a film)?"
                    },
                    {
                        id: 3,
                        content: "Do you like going to the cinema?"
                    },
                    {
                        id: 4,
                        content: "Do you prefer to (or usually) watch a film alone or with others?"
                    },
                    {
                        id: 5,
                        content: "How often do you go to a cinema?"
                    },
                    {
                        id: 6,
                        content: "Has your taste in movies changed since you were younger?"
                    },
                    {
                        id: 7,
                        content: "Are any foreign movie stars famous in your country?"
                    },
                    {
                        id: 8,
                        content: "Do you have a favourite movie star?"
                    },
                    {
                        id: 9,
                        content: "Have you ever seen a movie star in real life?"
                    },
                    {
                        id: 10,
                        content: "Would you like to be a movie star?"
                    }
                ]
            },
            {
                ID: 15,
                title: "Crowded places",
                content: [{
                        id: 0,
                        content: "Do you like crowded places?"
                    },
                    {
                        id: 1,
                        content: "How do you feel in crowded places?"
                    },
                    {
                        id: 2,
                        content: "What are the most crowded places in your hometown (or where you are living now)?"
                    },
                    {
                        id: 3,
                        content: "Do you prefer to go to crowded places or places that have few people?"
                    },
                    {
                        id: 4,
                        content: "When was the last time you were in a crowded place?"
                    },
                    {
                        id: 5,
                        content: "Would you say people with the same interests usually get along with each other when they are in a crowd?"
                    }
                ]
            },
            {
                ID: 16,
                title: "Patience",
                content: [{
                        id: 0,
                        content: "Are you a patient person?"
                    },
                    {
                        id: 1,
                        content: "When are you impatient?"
                    },
                    {
                        id: 2,
                        content: "Do you think you are more patient now than when you were younger?"
                    },
                    {
                        id: 3,
                        content: "Do you think you will be more patient in the future?"
                    },
                    {
                        id: 4,
                        content: "Are you patient in your work or study?"
                    },
                    {
                        id: 5,
                        content: "Can you explain why some people are not very patient?"
                    },
                ]
            },
            {
                ID: 17,
                title: "Tea & Coffee",
                content: [{
                        id: 0,
                        content: "Do you prefer to drink tea, or coffee?"
                    },
                    {
                        id: 1,
                        content: "When you go out do you most often drink tea, or coffee?"
                    },
                    {
                        id: 2,
                        content: "When was the last time you drank some tea or coffee?"
                    },
                    {
                        id: 3,
                        content: "Which is more popular in your country, drinking tea or drinking coffee?"
                    },
                    {
                        id: 4,
                        content: "Do people in your country ever give tea as a gift?"
                    },
                    {
                        id: 5,
                        content: "When people in your country entertain guests do they usually drink tea, or coffee?"
                    },
                ]
            },
            {
                ID: 18,
                title: "Public Holidays",
                content: [{
                        id: 0,
                        content: "Does your country have many public holidays?"
                    },
                    {
                        id: 1,
                        content: "Do you have a favourite holiday?"
                    },
                    {
                        id: 2,
                        content: "Do you think there should be more public holidays?"
                    },
                    {
                        id: 3,
                        content: "What public holidays do you have in your country?"
                    },
                    {
                        id: 4,
                        content: "Would you say most people in your country know why you have those holidays?"
                    },
                    {
                        id: 5,
                        content: "What do people in your country do during holidays?"
                    },
                    {
                        id: 6,
                        content: "Do you think these holidays are important?"
                    },
                ]
            },
            {
                ID: 19,
                title: "Sharing",
                content: [{
                        id: 0,
                        content: "Do you like to share things with your friends?"
                    },
                    {
                        id: 1,
                        content: "When you were young, did your parents teach you to share with others?"
                    },
                    {
                        id: 2,
                        content: "Is there anything that you would not share with others?"
                    },
                    {
                        id: 3,
                        content: "How do you think parents could encourage their children to share?"
                    },
                    {
                        id: 4,
                        content: "Are you willing to share your favourite possessions?"
                    },
                    {
                        id: 5,
                        content: "Do you think there will be a car sharing in the future?"
                    },
                ]
            },
            {
                ID: 20,
                title: "Letters & Emails",
                content: [{
                        id: 0,
                        content: "Do you use email?"
                    },
                    {
                        id: 1,
                        content: "How often do you use email (or, write emails)?"
                    },
                    {
                        id: 2,
                        content: "Do you prefer to use email or text messaging?"
                    },
                    {
                        id: 3,
                        content: "Do you think it’s important to reply to emails immediately (or, quickly) after you receive them?"
                    },
                    {
                        id: 4,
                        content: "Do you like to receive handwritten letters and cards?"
                    },
                    {
                        id: 5,
                        content: "Would you say your handwriting is easy for others to read?"
                    },
                    {
                        id: 6,
                        content: "Do you prefer to write on a computer or to write using a pen?"
                    },
                    {
                        id: 7,
                        content: "Do you think a person’s handwriting reflects their personality?"
                    },
                ]
            },
            {
                ID: 21,
                title: "Drinking water",
                content: [{
                        id: 0,
                        content: "Do you like to drink water?"
                    },
                    {
                        id: 1,
                        content: "Do you prefer to drink bottled water or tap water?"
                    },
                    {
                        id: 2,
                        content: "Do you drink much water every day?"
                    },
                    {
                        id: 3,
                        content: "Do you prefer to drink hot water or cool (or cold) water?"
                    },
                    {
                        id: 4,
                        content: "How often do you have a drink of water?"
                    },
                    {
                        id: 5,
                        content: "Is bottled water very expensive in your country?"
                    },
                    {
                        id: 6,
                        content: "Would you say it’s important to drink water?"
                    },
                    {
                        id: 7,
                        content: "Have you ever had an experience of being thirsty, but not having any water to drink?"
                    },
                ]
            },
            {
                ID: 22,
                title: "Visiting relatives",
                content: [{
                        id: 0,
                        content: "Do you often visit your relatives? (Why?)"
                    },
                    {
                        id: 1,
                        content: "What do you do when you visit them?"
                    },
                    {
                        id: 2,
                        content: "When was the last time you visited them? what did you do?"
                    },
                    {
                        id: 3,
                        content: "Do you prefer visiting your relatives, or your friends?"
                    },
                    {
                        id: 4,
                        content: "Do you take anything when you visit your relatives?"
                    },
                ]
            },
            {
                ID: 23,
                title: "Music",
                content: [{
                        id: 0,
                        content: "Do you often (like to) listen to music?"
                    },
                    {
                        id: 1,
                        content: "When do you listen to music?"
                    },
                    {
                        id: 2,
                        content: "How much time do you spend listening to music every day?"
                    },
                    {
                        id: 3,
                        content: "What kinds of music do you like to listen to?"
                    },
                    {
                        id: 4,
                        content: "What’s your favorite kind of music?"
                    },
                    {
                        id: 5,
                        content: "Have you ever been to a concert before?"
                    },
                    {
                        id: 6,
                        content: "Do you like to listen to live music?"
                    },
                    {
                        id: 7,
                        content: "When did you start listening to this type of music?"
                    },
                    {
                        id: 8,
                        content: "Where do you listen to it?"
                    },
                    {
                        id: 9,
                        content: "How do you feel when you listen to this music?"
                    },
                    {
                        id: 10,
                        content: "Have you ever been to a musical performance?"
                    },
                    {
                        id: 11,
                        content: "Have you ever learned to play a musical instrument?"
                    },
                    {
                        id: 12,
                        content: "Is music an important subject at school in your country ?"
                    },
                    {
                        id: 13,
                        content: "Did you often listen to music when you were a child? (If yes give details.)"
                    },
                    {
                        id: 14,
                        content: "What kinds of music are (most) popular in your country?"
                    }
                ]
            },

            {
                ID: 24,
                title: "Sport",
                content: [{
                        id: 0,
                        content: "Do you like sports?"
                    },
                    {
                        id: 1,
                        content: "Do you often watch sports on TV?"
                    },
                    {
                        id: 2,
                        content: "How often do you play sports?"
                    },
                    {
                        id: 3,
                        content: "Do you prefer watching or playing sports?"
                    },
                    {
                        id: 4,
                        content: "What’s the most common sport in your country?"
                    },
                    {
                        id: 5,
                        content: "Do you think it is difficult to learn a new sport?"
                    },
                    {
                        id: 6,
                        content: "What do you like about the area around where you live?"
                    },
                    {
                        id: 7,
                        content: "Are there many celebrity athletes in your country?"
                    },
                    {
                        id: 8,
                        content: "Did you prefer team sports or individual sports when you were young?"
                    }
                ]
            },
            {
                ID: 25,
                title: "Time Management",
                content: [{
                        id: 0,
                        content: "How do you organize you time?"
                    },
                    {
                        id: 1,
                        content: "Do you make plans every day?"
                    },
                    {
                        id: 2,
                        content: "Would you say you manage your time well?"
                    },
                    {
                        id: 3,
                        content: "Are you ever late for anything?"
                    },
                    {
                        id: 4,
                        content: "Do you think young people organize their time in the same way?"
                    },
                    {
                        id: 5,
                        content: "What’s the biggest difficulty you have when managing time?"
                    }
                ]
            },
            {
                ID: 26,
                title: "Travel",
                content: [{
                        id: 0,
                        content: "Do you like travelling?"
                    },
                    {
                        id: 1,
                        content: "Where would you like to travel for a vacation? (Why?)"
                    },
                    {
                        id: 2,
                        content: "Who do you often spend holiday with?"
                    },
                    {
                        id: 3,
                        content: "Do you prefer traveling alone or in a group?"
                    },
                    {
                        id: 4,
                        content: "How much traveling have you done?"
                    },
                    {
                        id: 5,
                        content: "What kind of places have you visited in your life?"
                    },
                    {
                        id: 6,
                        content: "When you visit new places, what do you like to do?"
                    },
                    {
                        id: 7,
                        content: "In which seasons do you prefer to travel?"
                    },
                    {
                        id: 8,
                        content: "What is the best season to travel in your country?"
                    }
                ]
            },
            {
                ID: 27,
                title: "Maths",
                content: [{
                        id: 0,
                        content: "Do you like maths?"
                    },
                    {
                        id: 1,
                        content: "Do you think females are good at maths?"
                    },
                    {
                        id: 2,
                        content: "How often do you use a calculator?"
                    },
                    {
                        id: 3,
                        content: "Do you think maths is important?"
                    },
                    {
                        id: 4,
                        content: "Some people think that maths isn’t needed in our life. What do you think?"
                    }
                ]
            },
            {
                ID: 28,
                title: "Teachers",
                content: [{
                        id: 0,
                        content: "Do you have a favourite teacher?"
                    },
                    {
                        id: 1,
                        content: "What makes a good teacher?"
                    },
                    {
                        id: 2,
                        content: "Do you think teachers should be strict?"
                    },
                    {
                        id: 3,
                        content: "In what ways do you think teachers and parents are different when teaching young people?"
                    },
                    {
                        id: 4,
                        content: "Would you like to be a teacher?"
                    }
                ]
            },
            {
                ID: 29,
                title: "Watches",
                content: [{
                        id: 0,
                        content: "Do you usually wear a watch?"
                    },
                    {
                        id: 1,
                        content: "What kind of watch do you wear?"
                    },
                    {
                        id: 2,
                        content: "Do most people in your country (still) wear a watch nowadays?"
                    }
                ]
            },
            {
                ID: 30,
                title: "Bags",
                content: [{
                        id: 0,
                        content: "Do you like bags?"
                    },
                    {
                        id: 1,
                        content: "Do males and females generally use the same kinds of bags?"
                    }
                ]
            },
            {
                ID: 31,
                title: "Borrowing/lending",
                content: [{
                        id: 0,
                        content: "Have you ever borrowed books from others?"
                    },
                    {
                        id: 1,
                        content: "Have you ever borrowed money from others?"
                    },
                    {
                        id: 2,
                        content: "Do you like to lend things to others?"
                    },
                    {
                        id: 3,
                        content: "How do you feel when people don’t return things they borrowed from you?"
                    }
                ]
            },
            {
                ID: 32,
                title: "Pollutions",
                content: [{
                        id: 0,
                        content: "Is there anything being polluted in your hometown?"
                    },
                    {
                        id: 1,
                        content: "What are the common types of pollutions in the countryside?"
                    },
                    {
                        id: 2,
                        content: "What are the causes of those pollutions?"
                    },
                    {
                        id: 3,
                        content: "Have you ever done anything to help the environment?"
                    }
                ]
            },
            {
                ID: 33,
                title: "Outdoors",
                content: [{
                        id: 0,
                        content: "Do you prefer to be indoors or outdoors?"
                    },
                    {
                        id: 1,
                        content: "Did you like to go out when you were young?"
                    },
                    {
                        id: 2,
                        content: "Did you often go over your friends’ house when you were young?"
                    },
                    {
                        id: 3,
                        content: "Is it important for children to play outdoors?"
                    }
                ]
            },
            {
                ID: 34,
                title: "Plan",
                content: [{
                        id: 0,
                        content: "Do you make plans every day?"
                    },
                    {
                        id: 1,
                        content: "Are you good at managing your time?"
                    },
                    {
                        id: 2,
                        content: "What is the latest plan you made?"
                    },
                    {
                        id: 3,
                        content: "What is the hardest part about making plans?"
                    }
                ]
            },
            {
                ID: 35,
                title: "Social network",
                content: [{
                        id: 0,
                        content: "How often do you use social networking applications?"
                    },
                    {
                        id: 1,
                        content: "Why do you use social networking apps?"
                    },
                    {
                        id: 2,
                        content: "What are the disadvantages of social networking apps?"
                    },
                    {
                        id: 3,
                        content: "Do you think it is good to make friends?"
                    }
                ]
            },
            {
                ID: 36,
                title: "Efficiency",
                content: [{
                        id: 0,
                        content: "Do you prefer to study in the morning or in the evening?"
                    },
                    {
                        id: 1,
                        content: "Why do some people find it difficult to focus in the morning?"
                    },
                    {
                        id: 2,
                        content: "What do you do to improve your efficiency?"
                    }
                ]
            },
            {
                ID: 37,
                title: "Street markets",
                content: [{
                        id: 0,
                        content: "What do street markets sell?"
                    },
                    {
                        id: 1,
                        content: "Are street markets common in your country?"
                    },
                    {
                        id: 2,
                        content: "Do you think people like street markets? Why?"
                    },
                    {
                        id: 3,
                        content: "What are some differences of street markets and supermarkets?"
                    },
                    {
                        id: 4,
                        content: "Do you often go to supermarkets?"
                    }
                ]
            },
            {
                ID: 38,
                title: "Transports",
                content: [{
                        id: 0,
                        content: "Do you know how to drive?"
                    },
                    {
                        id: 1,
                        content: "Do you have a car?"
                    },
                    {
                        id: 2,
                        content: "Do you drive your car very often?"
                    },
                    {
                        id: 3,
                        content: "Do you think everyone should get a drivers’ license?"
                    },
                    {
                        id: 4,
                        content: "Do you think driving skills are important?"
                    },
                    {
                        id: 5,
                        content: "How often do you hire a taxi?"
                    },
                    {
                        id: 6,
                        content: "When was the last time you travelled by taxi?"
                    }
                ]
            },
            {
                ID: 39,
                title: "Sharing",
                content: [{
                        id: 0,
                        content: "Do you like to share things with your friends?"
                    },
                    {
                        id: 1,
                        content: "Do you have anything to share with others recently?"
                    },
                    {
                        id: 2,
                        content: "Did your parents teach you to share with others when you were a child?"
                    },
                    {
                        id: 3,
                        content: "How do you think parents could encourage their children to share?"
                    },
                    {
                        id: 4,
                        content: "What kinds of things do you like to share with others?"
                    },
                    {
                        id: 5,
                        content: "Are you willing to share your favourite possessions?"
                    },
                    {
                        id: 6,
                        content: "Is there anything that you would not share with others?"
                    },
                    {
                        id: 7,
                        content: "Do you think there will be a car sharing in the future?"
                    }
                ]
            },
            {
                ID: 40,
                title: "Painting/Drawing",
                content: [{
                        id: 0,
                        content: "Are you interested in painting and drawing?"
                    },
                    {
                        id: 1,
                        content: "What do you like to draw?"
                    },
                    {
                        id: 2,
                        content: "Did you ever learn how to draw or paint ?"
                    },
                    {
                        id: 3,
                        content: "Do you like to have pictures in your home?"
                    },
                    {
                        id: 4,
                        content: "If someone wanted to draw a picture of you, would you agree?"
                    }
                ]
            },
            {
                ID: 1,
                title: "Parks/ Gardens",
                content: [{
                        id: 0,
                        content: "Do you often go to a park or a public garden?"
                    },
                    {
                        id: 1,
                        content: "When was the last time you went to a park / public garden?"
                    },
                    {
                        id: 2,
                        content: "Can you suggest how parks in your city could be improved?"
                    },
                    {
                        id: 3,
                        content: "Do you prefer a park with open space or recreational facilities?"
                    }
                ]
            },
            {
                ID: 42,
                title: "Photos",
                content: [{
                        id: 0,
                        content: "Do you like taking photos?"
                    },
                    {
                        id: 1,
                        content: "How often do you take a photo?"
                    },
                    {
                        id: 2,
                        content: "How do you keep your photos?"
                    },
                    {
                        id: 3,
                        content: "Do you prefer to take pictures by yourself, or to have others take them for you?"
                    },
                    {
                        id: 4,
                        content: "Do you like to take pictures of your hometown?"
                    }
                ]
            },
            {
                ID: 43,
                title: "Shoes",
                content: [{
                        id: 0,
                        content: "How often do you buy shoes?"
                    },
                    {
                        id: 1,
                        content: "Do you ever to buy shoes online?"
                    },
                    {
                        id: 2,
                        content: "How many shoes do you have?"
                    },
                    {
                        id: 3,
                        content: "Do you prefer comfortable shoes or fashionable shoes?"
                    },
                    {
                        id: 4,
                        content: "WDo you know anyone who likes to buy a lot of shoes?"
                    }
                ]
            },
        ];
    }

    Random() {
        const listElement = this.list;
        const listTitleResult = [];
        const listFinalResult = [];
        let random = 0,
            i;
        for (i = 0; i < 4; i++) {

            random = parseInt((Math.random() * (listElement.length)), 10);
            listTitleResult.push(listElement[random]);
            listElement.splice(random, 1);

        }

        for (i = 0; i < 4; i++) {
            let listChild = listTitleResult[i].content;
            const listCloneResult = []; 

            let random1 = parseInt((Math.random() * (listChild.length)), 10);
            let theChoosenTwo = listChild[random1];

            let random2 = parseInt((Math.random() * (listChild.length)), 10);
            let theChoosenThree = listChild[random2];
            
            listCloneResult.push(listTitleResult[i].title);
            listCloneResult.push(theChoosenTwo);
            listCloneResult.push(theChoosenThree);
            
            listFinalResult.push(listCloneResult);
        }

      

        return listFinalResult;
    }

    print() {
        let list = this.Random(), i, j;
        
        for(i = 0;i < list.length;i++){
        const divTitle = document.createElement('div');
        const listChild = list[i];
        
        divTitle.innerHTML = `
         <div class="part1-div-margin">
            <h1 class="header">${listChild[0]}</h1>  
         </div>
       `;

        this.dynamicContent.appendChild(divTitle);
        
        for (let i = 1; i < listChild.length; i++) {
            const div = document.createElement('div');
            div.innerHTML = `
               <div class="card card-margin">
                   <div class="card-header question-title">Question number ${i}</div>
                   <div class="card-body">${listChild[i].content}</div>
               </div>
            `;

            this.dynamicContent.appendChild(div);
    }
}
}  
}


function eventListenters() {

}


document.addEventListener('DOMContentLoader', function () {
    eventListenters();
})

const ui = new UI();
ui.print();