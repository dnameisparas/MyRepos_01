$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:FeaFolder/dem.feature");
formatter.feature({
  "name": "testinggg",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "login validation on merc tours",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.match({
  "location": "DefStep.i_launch_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "I wnat to apply for a loan",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I wan to check the eligibility",
  "keyword": "Given "
});
formatter.match({
  "location": "DefStep.i_wan_to_check_the_eligibility()"
});
formatter.result({
  "status": "passed"
});
});