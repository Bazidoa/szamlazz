# szamlazz
This is a demo project for szamlazz

Start backend application after maven install

Start frontend application with ng serve after npm install

frontend:
http://localhost:4200/search-users

backend:
http://localhost:8080/api/user/search

h2 database:
http://localhost:8080/h2-console/
JDBC URL: jdbc:h2:mem:testdb

Notes:

GPT5
- add h2 database for my spring boot application 
- create a simple pagination component
- create a pipe for me that receives a boolean parameter and returns "Igen" or "Nem"
- create a pipe for me that returns Hentes Pék Kertétsz on JobEnum values
- give me a hungarian phone number regex for validation
- css-ben elég sokat ai inputut használtam

Amit rendes körülmények között még hozzátennék az angular projekthez
- state management ngrx store-ban (store, state, action, reducer, effect, selector és facade)
- feature szinten külön routing
- i18n translate
- rendes unit test coverage backend (jUnit) és frontend (jest) oldalon is
- css-ről néhány gondolat: angular-materialhoz vagyok szokva illetve eddig mindig úgy dolgoztam, hogy volt céges design, ami egy helyen volt karbantartva. 
	Saját projektben volt, hogy csináltam saját templatet, de jellemzően inkább a angular materialra támaszkodtam. 
	Volt dolgom már grid layouttal, flex layouttal, reszponzivitással, ha kell jobban bele is tudom ásni magam (sőt szívesen is ha szükség lenne rá), 
	most inkább arra mentem rá, hogy haladjak a feladattal.
