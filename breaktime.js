//blank messages and standup arrays
var messages = [];
var standup = [];

//blank messages that are being put off
var putOff = [];
var putOffStand = [];

//global variables for index and stand
var globalIndex = -1;
var globalStand = -1;

//for keeping track of the bedtime object. When removed, this value becomes true.
var bedtimeRemoved = false;

//date object for time-sensitive break messages
var d = new Date();

//Breaktime class utilizing encapsulation
class Breaktime {
  constructor(text,link,category,importance,stand) {
    this.text = text; //The text of the breaktime object.
    this.link = link; //The link, if any. Objects with no link are assigned the value "pass".
    this.category = category; //The category of the breaktime object.
    this.importance = importance; //How important a breaktime object is. Values of 3 and 4 are important.
    this.stand = stand; //Indicates whether or not the user needs to stand up for this task.
  }
}

const smallBreak = [//Relaxation
new Breaktime('Listen to a guided medidation.',"pass","meditate",3,false),
new Breaktime('Look away from the screen for about 2 minutes.',"https://www.google.com/search?q=2+minute+timer","relax",3,false),
new Breaktime('Take a deep breath.',"https://www.google.com/search?q=take+a+deep+breath","relax",3,false),
new Breaktime('Put on some focus/relaxation music.',"https://youtu.be/I-ZzDcALpmw","music",2,false),
  //Task checking
new Breaktime('Check your tasks for the day.',"pass","task",3,false),
new Breaktime('Check your tasks, please.<br>Do the first unfinished task.<br>You may need to stand up and stretch.',"pass","task",3,false),
  //Day planning
new Breaktime('Create tasks for today and tomorrow.',"pass","plan",3,false),
new Breaktime('Determine what you need to do and what you want to do today.',"pass","plan",3,false),
new Breaktime('List everything you\'re currently doing, and order them by priority.',"pass","plan2",3,false),
new Breaktime('List all the things you want to do, and order them by priority.',"pass","plan2",3,false),
  //Music
new Breaktime('Listen to a song you haven\'t listened to before.',"pass","misc",1,false),
new Breaktime('Put on some music to help you focus.',"https://youtu.be/xOA0T8ZjpFQ","music",2,false),
  //Miscellaneous
new Breaktime('Watch anime for 30 seconds.',"pass","anime",2,false),
new Breaktime('Say out loud the thing you need to get done.',"pass","task",2,false),
new Breaktime('Play a short game of Spider Solitaire (Easy).',"https://www.free-spider-solitaire.com/","game",1,false),
new Breaktime('Do some mouth exercises.',"https://youtu.be/wNscQ3bGxNk?t=110","exercise",2,false),
  //Goals
new Breaktime('Find a way to learn social skills.',"pass","social",3,false),
new Breaktime('Find a way to learn job interview skills.',"pass","job",3,false),
new Breaktime('Think of a goal. Any one. Set that as your break message.',"pass","misc",2,false)];

const smallStand = [//Health and fitness
new Breaktime('Refill your bottle and drink water.',"pass","health",3,true),
new Breaktime('Walk around for one minute.',"pass","exercise",3,true),
new Breaktime('Stare at an object 20 feet away for 20 seconds.',"pass","relax",3,true),
new Breaktime('Eat a snack if it has been 3 hours since you ate something.',"pass","food",2,true),
new Breaktime('Listen to your own music, and don\'t be afraid to dance to it.',"pass","music",1,true),
new Breaktime('Do planks for one minute.',"https://www.youtube.com/watch?v=z6KKo85V9Ew","exercise-heavy",3,true),
  //Miscellaneous Part 2
new Breaktime('Read just one page of that green book.',"pass","read",4,true)];
//new Breaktime('Do this drawing exercise with a drawing tablet.',"https://youtu.be/35rju_APLqQ","art",2,true)];

const bigBreak = [//Task checking
new Breaktime('Check your tasks list, please.<br>Do the first unfinished task.<br>You may need to stand up and stretch.',"pass","task",3,false),
  //Day planning
new Breaktime('Make a plan for today and tomorrow.',"pass","plan",3,false),
new Breaktime('Make an objective for today.',"pass","task",2,false),
  //Job hunting
new Breaktime('Apply for a job.',"pass","job",4,false),
new Breaktime('Go to Ascend Indiana, and find jobs.',"pass","job",4,false),
new Breaktime('Find a way to learn job interview skills.',"pass","job",3,false),
  //Anime watching
new Breaktime('Watch anime.',"pass","anime",2,false),
new Breaktime('If you\'re watching anime, watch a different anime.',"pass","anime",2,false),
new Breaktime('Watch anime.',"pass","anime",2,false),
  //Games
new Breaktime('Drive around how you want in Need for Speed: Hot Pursuit.',"pass","game",1,false),
new Breaktime('Play Sudoku (Medium).',"https://www.websudoku.com/?level=2","game",1,false),
new Breaktime('Solve a Minesweeper board on Expert.',"https://minesweeper.online/start/3","game",1,false),
  //Miscellaneous
new Breaktime('No routine? Form one.',"pass","plan",2,false),
new Breaktime('How about multiple ways to take a break?',"multiple.html","misc",2,false),
  //Goals
new Breaktime('Find a way to learn social skills.',"pass","social",3,false),
new Breaktime('Learn Full Stack on Skillshare.',"pass","coding",3,false),
new Breaktime('Learn PHP on Skillshare.',"pass","coding",3,false),
new Breaktime('Learn C++ on Skillshare.',"pass","coding",3,false),
new Breaktime('Learn WPF on Skillshare.',"pass","coding",3,false)];

const bigStand = [//Health and fitness
new Breaktime('Eat a meal if it has been 3 hours since you ate something.',"pass","food",2,true),
  //Personal hygiene
new Breaktime('Take a shower if you hadn\'t today, even if it\'s cold in your room.',"pass","health",3,true),
  //Miscellaneous Part 2
new Breaktime('Declutter your room.',"pass","misc",2,true),
new Breaktime('Play some Stepmania.',"stepmania.html","exercise-heavy",3,true),
new Breaktime('Play whatever you want on the piano.',"pass","misc",2,true),
//new Breaktime('Learn how to use Pygame by reading that book.',"pass","read",2,true),
new Breaktime('Read one chapter of that green book.',"pass","read",4,true),
new Breaktime('Solve a Rubik\'s cube.',"pass","game",1,true)];

const mobileBreak = [//Relaxation
new Breaktime('Listen to a guided medidation.',"pass","meditate",3,false),
new Breaktime('Look away from the screen for about 2 minutes.',"pass","relax",3,false),
new Breaktime('Take a deep breath.',"https://www.google.com/search?q=take+a+deep+breath","relax",3,false),
new Breaktime('Put on some focus/relaxation music.',"https://youtu.be/I-ZzDcALpmw","music",2,false),
  //Task checking
new Breaktime('Check your tasks for the day.',"pass","task",3,false),
new Breaktime('Check your tasks list, please.<br>Do the first unfinished task.<br>You may need to stand up and stretch.',"pass","task",3,false),
  //Day planning
new Breaktime('Create tasks for today and tomorrow.',"pass","plan",3,false),
new Breaktime('Make an objective for today.',"pass","task",2,false),
  //Music
new Breaktime('Put on some music to help you focus.',"https://youtu.be/xOA0T8ZjpFQ","music",2,false),
  //Games
new Breaktime('Solve a Minesweeper board on Expert.',"pass","game",1,false),
  //Anime
new Breaktime('Watch anime for 30 seconds.',"pass","anime",2,false),
new Breaktime('Watch anime.',"pass","anime",2,false),
  //Miscellaneous
new Breaktime('Say out loud the thing you need to get done.',"pass","task",2,false),
new Breaktime('Do some mouth exercises.',"https://youtu.be/wNscQ3bGxNk?t=110","exercise",2,false),
  //Goals
new Breaktime('Read the book <u>Atomic Habits</u>.',"pass","read",2,false),
new Breaktime('Find a way to learn social skills.',"pass","social",3,false),
new Breaktime('Find a way to learn job interview skills.',"pass","job",3,false)];

const mobileStand = [//Health and fitness
new Breaktime('That\'s all there is to it. Sit back down.',"pass","health",3,true),
new Breaktime('Drink some water.',"pass","health",3,true),
new Breaktime('Stare at an object 20 feet away for 20 seconds.',"pass","relax",3,true),
new Breaktime('Eat a snack if it has been 3 hours since you ate something.',"pass","food",2,true)];

function loadBreak(number) {
  //2 is for breaktime.html for small breaks.
  if(number === 2) {
    messages = messages.concat(smallBreak);
    standup = standup.concat(smallStand);
  }
  //3 is for bigbreak.html for long breaks.
  else if(number === 3) {
    messages = messages.concat(smallBreak,bigBreak);
    standup = standup.concat(smallStand,bigStand);
  }
  //5 is for breakm.html for taking breaks with a mobile device.
  else if(number === 5) {
    messages = mobileBreak;
    standup = mobileStand;
  }
  //6 is for standbreak.html for taking standing breaks.
  else if(number === 6)
    standup = smallStand;

  for(i = 0; i < standup.length; i++)
    messages.push(new Breaktime('Stand up and stretch if you can.',"pass",standup[i].category,standup[i].importance,true));
  if(d.getHours() < 3 || d.getHours() > 19) {
    messages.push(new Breaktime('Stand up and stretch if you can.',"pass","health",3,true));
    standup.push(new Breaktime('Change to your pajamas. No socks.',"pass","health",3,true),);
  }
  if(d.getHours() <= 4 || d.getHours() >= 22) {
    messages.push(new Breaktime('Stand up and stretch if you can.',"pass","sleep",2,true));
    standup.push(new Breaktime('Wear your pajamas and go to bed.',"pass","sleep",2,true));
  }
  console.log(messages);
  console.log(standup);

  //Displays the break message
  displayBreak(-1);
}

//This has a parameter if the programmer wants to check a break message with a specific index.
function displayBreak(index) {
  //If the standup element exists, it will be destroyed every time this function runs.
  if($("standup")) {
    $("break").removeChild($("standup"));
  }
  //This code runs if there are no more messages in the messages array.
  if(messages.length === 0) {
    //This code runs if any elements are in the putOff array. This is so that any tasks put off can appear again.
    if(putOff.length > 0) {
      for(var i in putOff)
        messages.push(putOff[i]);
      putOff = [];
      if(putOffStand.length > 0) {
        for(var i in putOffStand)
          standup.push(putOffStand[i]);
        putOffStand = [];
      }
    }
    //This message gets pushed if there are no more messages in the messages and putOf arrays.
    else {
      messages.push(new Breaktime("You're still here? Get back to whatever you should be doing!","pass","done",4,false))
    }
  }
  //Get random message index from messages array if parameter is out of bounds.
  if (index < 0 || index >= messages.length)
    index = Math.floor(Math.random() * messages.length);
  //Assigns the variable message to the breakMessage element.
  var message = $("breakMessage");
  //Creates the breakMessage element if it does not appear.
  if(!$("breakMessage")) {
    message = document.createElement("a");
    message.id = "breakMessage";
    $("break").appendChild(message);
  }
  // There is at least a 1 in 4 chance of the sleep message appearing at night, which is the last index.
  if((d.getHours() <= 4 || d.getHours() >= 22) && !Math.floor(Math.random() * 4) && !bedtimeRemoved)
    index = messages.length - 1;
  //Displays index number to the console.
  console.log("Message " + index);
  //Displays the break message in the webpage.
  message.innerHTML = messages[index].text;
  //Deletes the href attribute if the link value is "pass".
  if(messages[index].link === "pass")
    message.removeAttribute("href");
  else {
    console.log(":D");
    message.href = messages[index].link;
    message.target = "_blank";
  }
  //Sets globalIndex to index value.
  globalIndex = index;
  if(message.innerHTML === 'Stand up and stretch if you can.') {
    var standupMessage = $("standup");
    //Creates a standup element
    if(!$("standup")) {
      standupMessage = document.createElement("a");
      standupMessage.id = "standup";
      standupMessage.innerHTML = "[click or tap here]";
      standupMessage.style.display = "block";
      $("break").appendChild(standupMessage);
    }
    //The standIndex is calculated by subtracting the difference of the two array lengths by the index number.
    var standIndex = index - (messages.length - standup.length);
    console.log("Standup " + standIndex);
    //The event listener is added to the standupMessage element
    standupMessage.addEventListener("click",async function(){
      //Changes the text to the real standup break message
      $("standup").innerHTML = standup[standIndex].text;
      //Adds the hyperlink to the break message if it has one.
      if (standup[standIndex].link !== "pass") {
        await sleep(1); //This is to ensure that clicking on [click or tap here] won't result in an accidentall link click.
        standupMessage.href = standup[standIndex].link;
        standupMessage.target = "_blank";
      }
      else
        standupMessage.removeAttribute("href");
      //Displays the actions element
      actions.style.display = 'block';
    });
    globalStand = standIndex;
  }

  //Creates the actions element
  if(!$("actions")) {
    actions = document.createElement("div");
    actions.id = "actions";
    actions.classList.add("medium");
    actions.classList.add("space");
    hideable.appendChild(actions);
  }
  displayActions();
  //Hides the actions element if the message involves standing up.
  if(standIndex >= 0)
    actions.style.display = 'none';
}

//Displays actions based on the category of the task.
function displayActions() {
  if (messages[globalIndex].category === "done")
    actions.innerHTML = "<div class='space'>Immediately close this tab.</div>";
  else if (messages[globalIndex].category === "task")
    actions.innerHTML = "<div class='break-list space'><a class=action-link onclick='finished()'>I already did.</a><a class=action-link href='404.html' target='_blank'>I have nothing to do.</a></div>";
  else if (messages[globalIndex].category === "plan2")
    actions.innerHTML = "<div class='break-list space'><a class=action-link onclick='finished()'>I already did.</a><a class=action-link onclick='finished()'>I have nothing to do.</a></div>";
  else if(messages[globalIndex].category === "food")
    actions.innerHTML = "<div class='break-list space'><a class=action-link onclick='finished()'>I already did.</a><a class=action-link onclick='whyNot()'>It's impossible.</a></div><a class=action-link onclick=deleteCategory('food')>I am still full, even after 3 hours.</a>";
  else if(messages[globalIndex].category === "exercise-heavy")
    actions.innerHTML = "<div class='break-list space'><a class=action-link onclick='finished()'>I already did.</a><a class=action-link onclick='whyNot()'>It's impossible.</a></div><a class=action-link onclick=deleteCategory('exercise-heavy')>It's been less than 30 minutes since I ate.</a>";
  else
    actions.innerHTML = "<div class='break-list space'><a class=action-link onclick='finished()'>I already did.</a><a class=action-link onclick='whyNot()'>It's impossible.</a></div>";
}

//This runs when a task is finished.
function finished() {
  var category = messages[globalIndex].category;
  //If the task belongs to one of those categories, then all tasks with those categories get deleted.
  if(category === "plan" || category === "meditate" || category === "homework" || category === "food")
    deleteCategory(category);
  //Delete (splice) the break message away from the array.
  else {
    if(category === "sleep")
      bedtimeRemoved = true;
    if(messages[globalIndex].stand)
      standup.splice(globalStand,1);
    messages.splice(globalIndex,1);
    console.log(messages);
    console.log(standup);
    displayBreak(-1);
  }
}

//Replaces the actions if "It's impossible" is pressed.
function whyNot() {
  actions.innerHTML = "<div class='space'>Let me guess. You don't want to do it.</div> <div class='two-list space'><a class=action-link onclick='submitReason()'>I don't want to do it.</a><a class=action-link onclick='displayActions()'>Actually, I'll do it.</a></div><a class=action-link onclick='finished()'>It is absolutely impossible to do it now.</a>";
}

function deleteCategory(category) {
  var i = 0;
  while(i < messages.length) {
    if(messages[i].category === category)
      messages.splice(i,1);
    else
      i++;
  }

  i = 0;
  while(i < standup.length) {
    if(standup[i].category === category)
      standup.splice(i,1);
    else
      i++;
  }
  console.log(messages);
  console.log(standup);
  displayBreak(-1);
}

function submitReason() {
  if (messages[globalIndex].importance < 3)
    putOffBreak();
  else {
    if(Math.floor(Math.random() * 2) === 0)
      window.open("2minuterule.html", '_blank');
    else
      window.open("brave.html", '_blank');
  }
}

function putOffBreak() {
  if(messages[globalIndex].stand)
    putOffStand.push(standup[globalStand]);
  putOff.push(messages[globalIndex]);
  finished();
}

function $(x) {
  return document.getElementById(x);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
