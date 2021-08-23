// some global

// customer supplier --------------------------------------------------------
var customerSupplierCategories = document.querySelectorAll(
  ".add-customer-supplier-main-first > div"
);
var clientCategory = document.querySelector(".client-category");
var customerSupplierSec = document.querySelector(".add-customer-supplier");
let customer = false;
let supplier = false;

// total customer or supplier
var ttlCus = document.querySelector(".total-customers");
var ttlSup = document.querySelector(".total-suppliers");
let ttlCusNum = 0;
let ttlSupNum = 0;

// home------------------------------------------------------------
var ttlDbtCus = document.getElementById("total-debt-for-customer");
var ttlDbtMe = document.getElementById("total-debt-for-me");

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
