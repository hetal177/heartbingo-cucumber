$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("logintest.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10376886200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "As user when click on login button i should navigate to login page successfully",
  "description": "",
  "id": "login-test;as-user-when-click-on-login-button-i-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on log in link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.iAmOnHomepage()"
});
formatter.result({
  "duration": 226865200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.iClickOnLogInLink()"
});
formatter.result({
  "duration": 1001707300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 40330646300,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"__next\"]/form/p[2]/a\"}\n  (Session info: chrome\u003d97.0.4692.99)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-1AUVA277\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [00ef5c6607eba8ca5888bae7405fa864, findElement {using\u003dxpath, value\u003d//*[@id\u003d\"__next\"]/form/p[2]/a}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.99, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\kaush\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52619}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52619/devtoo..., se:cdpVersion: 97.0.4692.99, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 00ef5c6607eba8ca5888bae7405fa864\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat uk.co.heartbingo.utility.Utility.getTextFromElement(Utility.java:51)\r\n\tat uk.co.heartbingo.pages.LoginPage.getForgottenPasswordTextOnLoginPage(LoginPage.java:59)\r\n\tat uk.co.heartbingo.steps.LoginStepDef.iShouldNavigateToLoginPageSuccessfully(LoginStepDef.java:23)\r\n\tat ???.Then I should navigate to login page successfully(logintest.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1699694900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "User should get error message when enter invalid credentials",
  "description": "",
  "id": "login-test;user-should-get-error-message-when-enter-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on log in link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "enter username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see  error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "login-test;user-should-get-error-message-when-enter-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errorMessage"
      ],
      "line": 20,
      "id": "login-test;user-should-get-error-message-when-enter-invalid-credentials;;1"
    },
    {
      "cells": [
        "InvalidTest@test.com",
        "Test123",
        "The username or password you entered is incorrect. Please try again."
      ],
      "line": 21,
      "id": "login-test;user-should-get-error-message-when-enter-invalid-credentials;;2"
    },
    {
      "cells": [
        "Invalis121@gmail",
        "Test1234",
        "The username or password you entered is incorrect. Please try again."
      ],
      "line": 22,
      "id": "login-test;user-should-get-error-message-when-enter-invalid-credentials;;3"
    },
    {
      "cells": [
        "123*456",
        "asasdf()_",
        "The username or password you entered is incorrect. Please try again."
      ],
      "line": 23,
      "id": "login-test;user-should-get-error-message-when-enter-invalid-credentials;;4"
    },
    {
      "cells": [
        "123\"\"\"1334????",
        "234*\u0026^\u0026",
        "The username or password you entered is incorrect. Please try again."
      ],
      "line": 24,
      "id": "login-test;user-should-get-error-message-when-enter-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7614764100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should get error message when enter invalid credentials",
  "description": "",
  "id": "login-test;user-should-get-error-message-when-enter-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on log in link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "enter username \"InvalidTest@test.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "enter password \"Test123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see  error message \"The username or password you entered is incorrect. Please try again.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.iAmOnHomepage()"
});
formatter.result({
  "duration": 36900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.iClickOnLogInLink()"
});
formatter.result({
  "duration": 1297087900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "InvalidTest@test.com",
      "offset": 16
    }
  ],
  "location": "LoginStepDef.enterUsername(String)"
});
formatter.result({
  "duration": 20282110700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#batBeacon82393571913\"}\n  (Session info: chrome\u003d97.0.4692.99)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-1AUVA277\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [a76a640a07ea3a91042173eb7c05cacc, findElement {using\u003did, value\u003dbatBeacon82393571913}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.99, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\kaush\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52673}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52673/devtoo..., se:cdpVersion: 97.0.4692.99, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: a76a640a07ea3a91042173eb7c05cacc\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.remote.internal.WebElementToJsonConverter.apply(WebElementToJsonConverter.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:996)\r\n\tat uk.co.heartbingo.pages.LoginPage.switchToIframe(LoginPage.java:62)\r\n\tat uk.co.heartbingo.steps.LoginStepDef.enterUsername(LoginStepDef.java:29)\r\n\tat ???.And enter username \"InvalidTest@test.com\"(logintest.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test123",
      "offset": 16
    }
  ],
  "location": "LoginStepDef.enterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.clickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "The username or password you entered is incorrect. Please try again.",
      "offset": 29
    }
  ],
  "location": "LoginStepDef.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1370707900,
  "status": "passed"
});
formatter.before({
  "duration": 7337673200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should get error message when enter invalid credentials",
  "description": "",
  "id": "login-test;user-should-get-error-message-when-enter-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on log in link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "enter username \"Invalis121@gmail\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "enter password \"Test1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see  error message \"The username or password you entered is incorrect. Please try again.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.iAmOnHomepage()"
});
formatter.result({
  "duration": 50100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.iClickOnLogInLink()"
});
formatter.result({
  "duration": 1112436700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalis121@gmail",
      "offset": 16
    }
  ],
  "location": "LoginStepDef.enterUsername(String)"
});
formatter.result({
  "duration": 20079476400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#batBeacon82393571913\"}\n  (Session info: chrome\u003d97.0.4692.99)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-1AUVA277\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [3c2a07dc331cf588cfc873c76830baae, findElement {using\u003did, value\u003dbatBeacon82393571913}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.99, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\kaush\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52723}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52723/devtoo..., se:cdpVersion: 97.0.4692.99, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3c2a07dc331cf588cfc873c76830baae\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.remote.internal.WebElementToJsonConverter.apply(WebElementToJsonConverter.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:996)\r\n\tat uk.co.heartbingo.pages.LoginPage.switchToIframe(LoginPage.java:62)\r\n\tat uk.co.heartbingo.steps.LoginStepDef.enterUsername(LoginStepDef.java:29)\r\n\tat ???.And enter username \"Invalis121@gmail\"(logintest.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test1234",
      "offset": 16
    }
  ],
  "location": "LoginStepDef.enterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.clickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "The username or password you entered is incorrect. Please try again.",
      "offset": 29
    }
  ],
  "location": "LoginStepDef.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1632474900,
  "status": "passed"
});
formatter.before({
  "duration": 8149187400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should get error message when enter invalid credentials",
  "description": "",
  "id": "login-test;user-should-get-error-message-when-enter-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on log in link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "enter username \"123*456\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "enter password \"asasdf()_\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see  error message \"The username or password you entered is incorrect. Please try again.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.iAmOnHomepage()"
});
formatter.result({
  "duration": 28600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.iClickOnLogInLink()"
});
formatter.result({
  "duration": 1771103600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123*456",
      "offset": 16
    }
  ],
  "location": "LoginStepDef.enterUsername(String)"
});
formatter.result({
  "duration": 20210534400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#batBeacon82393571913\"}\n  (Session info: chrome\u003d97.0.4692.99)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-1AUVA277\u0027, ip: \u0027192.168.137.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [b1c966d515012e33936b16501052e968, findElement {using\u003did, value\u003dbatBeacon82393571913}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 97.0.4692.99, chrome: {chromedriverVersion: 97.0.4692.71 (adefa7837d02a..., userDataDir: C:\\Users\\kaush\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:52772}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52772/devtoo..., se:cdpVersion: 97.0.4692.99, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b1c966d515012e33936b16501052e968\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:66)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.remote.internal.WebElementToJsonConverter.apply(WebElementToJsonConverter.java:51)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:996)\r\n\tat uk.co.heartbingo.pages.LoginPage.switchToIframe(LoginPage.java:62)\r\n\tat uk.co.heartbingo.steps.LoginStepDef.enterUsername(LoginStepDef.java:29)\r\n\tat ???.And enter username \"123*456\"(logintest.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "asasdf()_",
      "offset": 16
    }
  ],
  "location": "LoginStepDef.enterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.clickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "The username or password you entered is incorrect. Please try again.",
      "offset": 29
    }
  ],
  "location": "LoginStepDef.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1403011200,
  "status": "passed"
});
formatter.before({
  "duration": 6403025800,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should get error message when enter invalid credentials",
  "description": "",
  "id": "login-test;user-should-get-error-message-when-enter-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on log in link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "enter username \"123\"\"\"1334????\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "enter password \"234*\u0026^\u0026\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see  error message \"The username or password you entered is incorrect. Please try again.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.iAmOnHomepage()"
});
formatter.result({
  "duration": 38600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDef.iClickOnLogInLink()"
});
formatter.result({
  "duration": 979172200,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "arguments": [
    {
      "val": "234*\u0026^\u0026",
      "offset": 16
    }
  ],
  "location": "LoginStepDef.enterPassword(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDef.clickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "The username or password you entered is incorrect. Please try again.",
      "offset": 29
    }
  ],
  "location": "LoginStepDef.iShouldSeeErrorMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1054448700,
  "status": "passed"
});
});