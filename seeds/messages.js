exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("messages")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("messages").insert([
        {
          id: 1,
          message:
            "Deadass f*cking bought some airpods buying into the hype that they will be somehow revolutionary and worth the 160 f*cking quid. nope. Then i watched several f*king videos outlining how Apple is a f*cking scam and how their products are SH*T. Bit disconcerting to hear that these pair of sh*ts i just bought could probably be made for less than half the price. WHAT F*CKING HAPPENS NEXT???!?! AS IF STEVE MOTHERF*CKING JOBS HIMSELF HEARD ME FROM THE GRAVE, MY LEFT AIRPOD PROCEEDS TO STOP WORKING ENTIRELY.Keep in mind I have LITERALLY ONLY HAD THESE FOR A WEEK. Also keep in mind I HAVE DONE LITERALLY NOTHING TO THEM.honestly f*ck apple. f*ck people who are in the apple cult. I know this isnt THAT unpopular of an opinion but F*CK OFF."
        },
        {
          id: 2,
          message:
            "I work a sh!tty hourly minimum wage retail job which is enough to get me through uni but certainly not a job I plan to stay at beyond graduating. It’s one of those jobs where when you’re done for your shift you’re done. You shouldn’t be expected to be available to contact by phone 24/7. So when I get called about taking on extra shifts or coming to fill in on short notice and I can’t pick up the phone because I’m in class, sh!tting, literally doing anything better than talking to you, don’t rip into me about how you’ve been trying to contact me all morning blah blah. I don’t get paid enough to be on call nor do I get paid enough to worry about your terrible scheduling. If it’s not in my contract that I need to be on call and that it’s literally the end of the world when I can’t pick up, don’t act like it is. Thanks for reading I really needed to get this off my chest."
        },
        {
          id: 3,
          message:
            "IT CANNOT BE THAT FUCKING HARD F*CKING HELL THIS IS THE REASON I HAVE BEEN EATING ALONE ONLY FOR THE PAST FIVE YEARS IT MAKES ME WANT TO THROW THE FUCK IN THESE COWARDS FACESE I DONT WANT TO HEAR THAT SHIT GO LEARN BASIC TABLE MANNERISM YOU NASTY A$S HUMANS"
        },
        {
          id: 4,
          message:
            "my friend and i wanted to visit the swimming hall and gym today, we have no membership yet so we just wanted to take a look and ask for the price because it wasnt online. we arrived at the entrance and i didnt see that there was a woman sitting there at the cashout. so we were standing there for maybe 5 seconds no big deal. then my friend saw her first and started asking in english since she doesnt know any german. and i thought ok no problem. but the woman didnt quite understand her and i jumped in asking about the membership and everything, in german. i hesitated for maybe 5 seconds, again, this is perfectly normal and human, we werent greeted in a pleasant way at all. and its not everyday that someones being a rude b!tch. and this woman was in a completely sh!tty mood. no smile, no greeting, no nothing. and she dared to get pissed off just because we were a bit confusing with our questions (im on my period and pms is real so im sorry i guess for being a woman.). said shit like well why werent you asking me then? like.. what? i AM asking you RIGHT NOW. and then she told us that we have to go down the stairs and ask the gym staff about all of this, talk to them for 10 minutes and then come back because theres no way in h*ll we will be swimming today... Like what the actual f*ck is wrong with some people? Wasnt the first rude occurrence today. Im a uni student and frankly I dont give a f*ck if youve brainwashed yourself to hate every single monday until the day you die but that doesnt give you an excuse to treat people like sh*t. F*ck you"
        }
      ]);
    });
};
