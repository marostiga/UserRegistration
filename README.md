# Simple Register

Node js automation using Protractor framework from a user registration in a prototype User Registration page

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Node - Ubuntu

```
sudo apt-get install nodejs
```

Node - Windows / Mac

* [Nodejs](https://nodejs.org/en/download/) - The official website

* [Java-jre](https://www.oracle.com/technetwork/pt/java/javase/downloads/jre8-downloads-2133155.html) - The official website


Use npm to install Protractor globally with (recommended):

```
npm install -g protractor
```

or run inside the project root folder:

```
npm install protractor
```


Update Webdriver Manager

```
webdriver-manager update
```

## Running the tests

After you have installed the prerequisites, run the following commands:

First you need to start webdriver-manager to up a local server that will emulate the test browsers

```
webdriver-manager start
```

If you have trouble to up the local server this way, try running the command as superuser.

Ubuntu Example

```
sudo webdriver-manager start
```

After up the server go to the project folder and execute the command

```
protractor config/conf.js
```

After executing this command the automated test will start and end automatically generating a small report in the execution terminal itself.

### Break down into end to end tests

The test will access the user registration url, fill in the registration data and register the user. After confirming the registration, the system will be redirected to the initial user screen where the automation will validate the fields with the username.
After the tests, if successful, a report like this will be displayed.

```
[03:49:18] I/launcher - Running 1 instances of WebDriver
[03:49:18] I/direct - Using ChromeDriver directly...
Started
.


1 spec, 0 ilures
Finished in 14.297 seconds

[03:49:33] I/launcher - 0 instance(s) of WebDriver still running
[03:49:33] I/launcher - chrome #01 passed

```

## Deployment

The way the project was created is not the best for web systems implementation, but following this line of design and development, it is possible to create a standalone generic automation project and implement in non-angular applications that can be created any way type of test scenario for application in an optimized and generic manner.

Some simple correctly designed wait handling functions can optimize test execution time in non-angular applications. In the project in question, some functions were created that deal with waiting for the element and perform the action in the shortest possible time, so that the tests run faster and more safely.