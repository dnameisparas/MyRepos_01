package stepDef22july;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class DefStep {
	@Given("I launch the application")
	public void i_launch_the_application() {
	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
		System.out.println("code for launch");
	}

	@Given("I wan to check the eligibility")
	public void i_wan_to_check_the_eligibility() {
		System.out.println("code for loan eligibility");
	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
	}

	@Given("this month EMI")
	public void this_month_EMI() {
		System.out.println("code for EMI");
	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
	}
	
	
}
