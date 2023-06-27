Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu").Click 
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username").Set "usermay" '=
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password").SetSecure "645d1ac221e58b61499c792adf681619854eab61593c"
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign_in_btnundefined").Click 
Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu_2").Click 
Browser("Advantage Shopping").Page("Advantage Shopping").Link("Sign out").Click

print  "hello got"
print  "hello"



wait 5


