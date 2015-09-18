describe("login page and authentication", function() {
    var driver = browser.driver;
    it("should login page exist", function() {
	driver.get("http://localhost:8080/mgis-web-0.0.1");
	driver.isElementPresent(by.id('loginForm')).then(function(present){
	    expect(present).toBe(true);
	});
    });
    it("should login correctly", function() {
	driver.get("http://localhost:8080/mgis-web-0.0.1");
	var username = driver.findElement(by.id("username"));
	var password = driver.findElement(by.id("password"));
	var submit = driver.findElement(by.id("submitButton"));
	var login = driver.findElement(by.id("loginForm"));
	username.sendKeys("asd");
	password.sendKeys("asd");
	submit.click();
	driver.sleep(1000);
	driver.isElementPresent(by.css('div.navbar')).then(function(present){
	    expect(present).toBe(true);
	});
    });
    it("should logout correctly", function() {
	driver.get("http://localhost:8080/mgis-web-0.0.1");
	var logout = driver.findElement(by.css("[href='logout']"));
	logout.click();
	driver.sleep(1000);
	driver.isElementPresent(by.id('loginForm')).then(function(present){
	    expect(present).toBe(true);
	});
    })
});
