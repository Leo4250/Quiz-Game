var quiz = {
  user: "Dave",
  questions: [
    {
      text: "What does CSS stand for?",
      responses: [
        { text: "Computer Style Sheets" },
        { text: "Creative Style Sheets" },
        { text: "Cascading Style Sheets", correct: true },
        { text: "Colorful Style Sheets" }
      ]
    },
    {
      text: "Which programming language is often used for web development?",
      responses: [
        { text: "Java" },
        { text: "Python" },
        { text: "JavaScript", correct: true },
        { text: "C++" }
      ]
    },
    {
      text: "What is the purpose of the HTML <head> element?",
      responses: [
        { text: "To define the main content of the document" },
        { text: "To contain metadata about the document", correct: true },
        { text: "To create a heading for the document" },
        { text: "To specify the document's body" }
      ]
    },
    {
      text: "What is the role of a CDN (Content Delivery Network) in web development?",
      responses: [
        { text: "To create databases" },
        { text: "To store cookies" },
        { text: "To distribute content to multiple servers for faster delivery", correct: true },
        { text: "To design user interfaces" }
      ]
    },
    {
      text: "Which of the following is NOT a valid HTML tag?",
      responses: [
        { text: "<div>" },
        { text: "<span>" },
        { text: "<paragraph>" },
        { text: "<section>", correct: true }
      ]
    },
    {
      text: "What is the purpose of the JavaScript function `setTimeout()`?",
      responses: [
        { text: "To perform mathematical calculations" },
        { text: "To delay the execution of code for a specified time", correct: true },
        { text: "To manipulate HTML elements" },
        { text: "To create loops" }
      ]
    },
    {
      text: "What is the CSS property used to control the layout of a webpage?",
      responses: [
        { text: "color" },
        { text: "font-size" },
        { text: "margin" },
        { text: "display", correct: true }
      ]
    },
    {
      text: "In programming, what does the acronym API stand for?",
      responses: [
        { text: "Application Programming Interface", correct: true },
        { text: "Advanced Program Integration" },
        { text: "Automated Processing Instructions" },
        { text: "Application Process Interface" }
      ]
    },
    {
      text: "Which of the following is a version control system?",
      responses: [
        { text: "Java" },
        { text: "Git", correct: true },
        { text: "Python" },
        { text: "HTML" }
      ]
    },
    {
      text: "What is the primary purpose of a database in web development?",
      responses: [
        { text: "To create animations" },
        { text: "To store and manage data", correct: true },
        { text: "To define styles for a webpage" },
        { text: "To execute server-side scripts" }
      ]
    }
  ]
};

userResponseSkelaton = Array(quiz.questions.length).fill(null);

var app = new Vue({
  el: "#app",
  data: {
    quiz: quiz,
    questionIndex: 0,
    userResponses: userResponseSkelaton,
    isActive: false
  },
  filters: {
    charIndex: function (i) {
      return String.fromCharCode(97 + i);
    }
  },
  methods: {
    restart: function () {
      this.questionIndex = 0;
      this.userResponses = Array(this.quiz.questions.length).fill(null);
    },
    selectOption: function (index) {
      Vue.set(this.userResponses, this.questionIndex, index);
    },
    next: function () {
      if (this.questionIndex < this.quiz.questions.length)
        this.questionIndex++;
    },
    prev: function () {
      if (this.quiz.questions.length > 0) this.questionIndex--;
    },
    score: function () {
      var score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        if (
          typeof this.quiz.questions[i].responses[
            this.userResponses[i]
          ] !== "undefined" &&
          this.quiz.questions[i].responses[this.userResponses[i]].correct
        ) {
          score = score + 1;
        }
      }
      return score;
    }
  }
});
