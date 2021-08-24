// some global

// customer supplier --------------------------------------------------------
var customerSupplierCategories = document.querySelectorAll(
  ".add-customer-supplier-main-first > div"
);
var cashSecCategoryWrapper = document.querySelectorAll(
  ".cash-sec-inner-main1 > div"
);
var cashCategorySpan = document.querySelector(".cash-sec-category-span");
let cashPreviousOperandTextElement = document.querySelector(
  "[c-data-previous-operand]"
);
let cashCurrentOperandTextElement = document.querySelector(
  "[c-data-current-operand]"
);

var clientCategory = document.querySelector(".client-category");
var customerSupplierSec = document.querySelector(".add-customer-supplier");
let customer = false;
let supplier = false;
var sold = false;
var buy = false;
var expense = false;
// total customer or supplier
var ttlCus = document.querySelector(".total-customers");
var ttlSup = document.querySelector(".total-suppliers");
var ttlSold = document.querySelector("#total-sold");
var ttlCash = document.querySelector("#total-cash");
let ttlCusNum = 0;
let ttlSupNum = 0;

// home------------------------------------------------------------
var ttlDbtCus = document.getElementById("total-debt-for-customer");
var ttlDbtMe = document.getElementById("total-debt-for-me");
var ttlSold = document.getElementById("total-sold");

// help --------------------------------------------------------------------
var helpSection = document.querySelector(".help");

var helpQuestionWrapper = document.querySelectorAll(".help-question-wrapper");
var helpQuestionHeading = document.querySelectorAll(".help-question-heading");
var showAnswerArrow = document.querySelectorAll(".help-show-answer-arrow");
// declare
var homeFromHelpBtn = document.querySelector(".home-from-help");

let loggedIn = false;

var editAllInput = document.querySelectorAll(
  ".edit-section-inner-main  div  input"
);
