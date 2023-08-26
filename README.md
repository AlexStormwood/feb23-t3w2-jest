# feb23-t3w2-jest

Ed: https://edstem.org/au/courses/11264/lessons/32588/slides/228907

Goals:

- Learning Jest (JS test framework) - https://jestjs.io/docs/getting-started 
	- basic Jest test suites
		- describe
		- test 
		- test.each
		- test.skip
		- beforeEach & afterEach
		- beforeAll & afterAll
	- varieties of matchers
		- https://jestjs.io/docs/using-matchers
		- https://jestjs.io/docs/expect
	- Jest code coverage
	- mocks functions 
		- https://jestjs.io/docs/mock-function-api 
		- https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c 
- Refresher on TDD concepts
	- apply user stories to Jest test suites 
- Building a basic terminal app with TDD
	- environment variables!
		- https://www.npmjs.com/package/dotenv



# Dice rolling app 

## Users 

- Tabletop RPG gamers 
	- Roll a variety of dice and get results 
	- Roll a twenty-sided dice (D20) and see the result 
	- Roll a twenty-sided dice (D20) twice and seeing the worst result (roll with disadvantage) 
	- Roll a twenty-sided dice (D20) twice and seeing the best result (roll with advantage) 
- Casual tabletop gamers 
	- Roll a six-sided dice (D6) and see the result 