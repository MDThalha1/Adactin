$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User Login In the Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Launch the adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter the \"\u003cusername\u003e\" in Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter the \"\u003cpassword\u003e\" in Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user click The Login Button And Navigate to Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 9,
      "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;1"
    },
    {
      "cells": [
        "QWSASW",
        "THSHks"
      ],
      "line": 10,
      "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;2"
    },
    {
      "cells": [
        "jhsjksc",
        "hsjd"
      ],
      "line": 11,
      "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;3"
    },
    {
      "cells": [
        "mohamedthalha",
        "1497H6"
      ],
      "line": 12,
      "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "User Login In the Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Launch the adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter the \"QWSASW\" in Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter the \"THSHks\" in Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user click The Login Button And Navigate to Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.user_Launch_the_adactin_Application()"
});
formatter.result({
  "duration": 29798533044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QWSASW",
      "offset": 16
    }
  ],
  "location": "Stepdef.user_Enter_the_in_Username_Field(String)"
});
formatter.result({
  "duration": 173642946,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "THSHks",
      "offset": 16
    }
  ],
  "location": "Stepdef.user_Enter_the_in_Password_Field(String)"
});
formatter.result({
  "duration": 87460572,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.user_click_The_Login_Button_And_Navigate_to_Search_Hotel_Page()"
});
formatter.result({
  "duration": 631650137,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User Login In the Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Launch the adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter the \"jhsjksc\" in Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter the \"hsjd\" in Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user click The Login Button And Navigate to Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.user_Launch_the_adactin_Application()"
});
formatter.result({
  "duration": 468508601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jhsjksc",
      "offset": 16
    }
  ],
  "location": "Stepdef.user_Enter_the_in_Username_Field(String)"
});
formatter.result({
  "duration": 84857992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hsjd",
      "offset": 16
    }
  ],
  "location": "Stepdef.user_Enter_the_in_Password_Field(String)"
});
formatter.result({
  "duration": 88236301,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.user_click_The_Login_Button_And_Navigate_to_Search_Hotel_Page()"
});
formatter.result({
  "duration": 753512158,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User Login In the Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Launch the adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter the \"mohamedthalha\" in Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter the \"1497H6\" in Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user click The Login Button And Navigate to Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.user_Launch_the_adactin_Application()"
});
formatter.result({
  "duration": 538849699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mohamedthalha",
      "offset": 16
    }
  ],
  "location": "Stepdef.user_Enter_the_in_Username_Field(String)"
});
formatter.result({
  "duration": 100074921,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1497H6",
      "offset": 16
    }
  ],
  "location": "Stepdef.user_Enter_the_in_Password_Field(String)"
});
formatter.result({
  "duration": 80619710,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.user_click_The_Login_Button_And_Navigate_to_Search_Hotel_Page()"
});
formatter.result({
  "duration": 1580895107,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User Search Hotel in the Adactin Website",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-search-hotel-in-the-adactin-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "user search the Location For Hotel",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user Select the Hotel",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Select the Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user Select the total no of rooms",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user Select the Check-in Date in Hotel",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user Select the Check-out Date in Hotel",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user Enter the Adult Person in per room",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Enter the Child in per room",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user Click the Search Button And it Navigate to Hotels Pages",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.user_search_the_Location_For_Hotel()"
});
formatter.result({
  "duration": 82086923,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.user_Select_the_Hotel()"
});
formatter.result({
  "duration": 87037214,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.user_Select_the_Room_Type()"
});
formatter.result({
  "duration": 76914689,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.user_Select_the_total_no_of_rooms()"
});
formatter.result({
  "duration": 107062034,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.user_Select_the_Check_in_Date_in_Hotel()"
});
formatter.result({
  "duration": 156079160,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.user_Select_the_Check_out_Date_in_Hotel()"
});
formatter.result({
  "duration": 116993408,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.user_Enter_the_Adult_Person_in_per_room()"
});
formatter.result({
  "duration": 76965150,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.user_Enter_the_Child_in_per_room()"
});
formatter.result({
  "duration": 80479446,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.user_Click_the_Search_Button_And_it_Navigate_to_Hotels_Pages()"
});
formatter.result({
  "duration": 1066592030,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User want to Select Hotel in the adactin website",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-want-to-select-hotel-in-the-adactin-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "user select the Hotel",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user Click the Continue Button And Navigate to Payment Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.user_select_the_Hotel()"
});
formatter.result({
  "duration": 102829740,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.user_Click_the_Continue_Button_And_Navigate_to_Payment_Page()"
});
formatter.result({
  "duration": 1197002884,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User Will Book A Hotel in Adactin Website",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-will-book-a-hotel-in-adactin-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "user Enter the First name in Firstname Field",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user Enter The Lastname in Lastname Field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user Enter the Billing Address in Billing Address Field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user Enter the Credit Cardno in Credit Cardno Field",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user Enter the Credit cardType in Credit CardType Field",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user Enter the Expirydate of Card in Expiry Date Field",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User Enter the Cvvno in the Cvv Field",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Click the BookNow Button and it navigate to Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.user_Enter_the_First_name_in_Firstname_Field()"
});
formatter.result({
  "duration": 96104767,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.user_Enter_The_Lastname_in_Lastname_Field()"
});
formatter.result({
  "duration": 82394820,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.user_Enter_the_Billing_Address_in_Billing_Address_Field()"
});
formatter.result({
  "duration": 82038172,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.user_Enter_the_Credit_Cardno_in_Credit_Cardno_Field()"
});
formatter.result({
  "duration": 101209007,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.user_Enter_the_Credit_cardType_in_Credit_CardType_Field()"
});
formatter.result({
  "duration": 94724792,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.user_Enter_the_Expirydate_of_Card_in_Expiry_Date_Field()"
});
formatter.result({
  "duration": 162900351,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.user_Enter_the_Cvvno_in_the_Cvv_Field()"
});
formatter.result({
  "duration": 85648686,
  "status": "passed"
});
formatter.match({
  "location": "Stepdef.user_Click_the_BookNow_Button_and_it_navigate_to_Booking_Confirmation_Page()"
});
formatter.result({
  "duration": 79634869,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "User Booked A Hotel in Adactin website",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-booked-a-hotel-in-adactin-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@unit"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "user Click the Logout Button in the Adactin Website",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdef.user_Click_the_Logout_Button_in_the_Adactin_Website()"
});
formatter.result({
  "duration": 7448426905,
  "status": "passed"
});
});