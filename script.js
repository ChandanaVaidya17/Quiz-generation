//function createQuizForm() {
  // Create a new Form and name it
  var form = FormApp.create('Test Quiz');
  form.setIsQuiz(true); // Makes it a quiz with scoring
  
  // Configure Quiz settings
  form.setPublishingSummary(true);
  form.setShowLinkToRespondAgain(false);

  // Change the questions accordingly
  var questions = [
    {q: "Which operating system is open-source and commonly used by developers?", choices: ["MS Word", "Linux", "Photoshop", "Chrome"], correct: "Linux"},
    {q: "Which command is used to list files in Linux?", choices: ["show", "list", "ls", "dirr"], correct: "ls"},
    {q: "What is the purpose of the cd command in Linux?", choices: ["Create file", "Change directory", "Delete file", "Copy data"], correct: "Change directory"},
    {q: "Which of the following is an advantage of Linux?", choices: ["Closed source", "Expensive license", "Better developer control", "Only works offline"], correct: "Better developer control"},
    {q: "What is FlutterFlow mainly used for?", choices: ["Gaming", "Mobile app development", "Video editing", "Database backup"], correct: "Mobile app development"},
    {q: "FlutterFlow is based on which framework?", choices: ["React", "Angular", "Flutter", "Django"], correct: "Flutter"},
    {q: "What is the benefit of low-code platforms like FlutterFlow?", choices: ["Requires no internet", "Faster application development", "Removes databases", "Replaces APIs"], correct: "Faster application development"},
    {q: "Which type of applications can be built using FlutterFlow?", choices: ["Mobile apps", "Washing machine software only", "BIOS software", "Printer drivers"], correct: "Mobile apps"},
    {q: "What is Git mainly used for?", choices: ["Music streaming", "Version control", "Graphic design", "Operating system installation"], correct: "Version control"},
    {q: "Which command saves changes to the local Git repository?", choices: ["git pull", "git commit", "git fork", "git remove"], correct: "git commit"},
    {q: "Which Git command uploads code to GitHub?", choices: ["git status", "git push", "git clone", "git init"], correct: "git push"},
    {q: "What is the purpose of version control?", choices: ["Track code changes", "Increase monitor brightness", "Delete source code", "Format hard disk"], correct: "Track code changes"},
    {q: "Which platform is commonly used to host Git repositories online?", choices: ["YouTube", "GitHub", "WhatsApp", "Canva"], correct: "GitHub"},
    {q: "What is Node.js?", choices: ["Database software", "JavaScript runtime environment", "Linux distribution", "Mobile operating system"], correct: "JavaScript runtime environment"},
    {q: "Which language is primarily used with Node.js?", choices: ["Java", "Python", "JavaScript", "C++"], correct: "JavaScript"},
    {q: "What is a REST API used for?", choices: ["Application communication", "Photo editing", "Device charging", "Video rendering"], correct: "Application communication"},
    {q: "Which HTTP method is mainly used to retrieve data from an API?", choices: ["DELETE", "POST", "GET", "PUSH"], correct: "GET"},
    {q: "What type of software is PostgreSQL?", choices: ["Web browser", "Relational database", "Video editor", "Operating system"], correct: "Relational database"},
    {q: "Why are databases important in applications?", choices: ["To store and manage data", "To increase internet speed", "To design logos", "To install drivers"], correct: "To store and manage data"},
    {q: "Which component stores user information permanently in a web application?", choices: ["Frontend", "API", "Database", "Browser tab"], correct: "Database"}
  ];

  for (var i = 0; i < questions.length; i++) {
    var currentItem = questions[i];
    var item = form.addMultipleChoiceItem();
    item.setTitle(currentItem.q);
    
    var choiceArray = [];
    for (var j = 0; j < currentItem.choices.length; j++) {
      var choiceText = currentItem.choices[j];
      var isCorrect = (choiceText === currentItem.correct);
      choiceArray.push(item.createChoice(choiceText, isCorrect));
    }
    
    item.setChoices(choiceArray);
    item.setPoints(1); // Allocates 1 point per correct answer
    item.setRequired(true);
  }
  
  Logger.log('Your quiz is ready! Copy this URL to view or edit it: ' + form.getEditUrl());
}
