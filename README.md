# sports-score

{
1. An API to store the following details for a match:
- Date of the match
- Venue of the match
- Names of the teams
- List of the players of each team
2. An API to get all the matches for a particular date. It should accept the date & should
return a list of matches.
3. An API which to get all details of a match. It should take match-it & should return all
the details about the match we stored in that match
4. An API to store past matches with the following details:
- Venue of the match
- Names of the teams
- List of the players of each team
- Date of the match
- Player Of Match
- Winner Team
- Performance of all the players
5. An API to get a team’s performance till now (Number of wins & losses).
6. An API to get all the past matches with all details.
}

## How to run locally?

{  Steps to run the project locally-
1. Clone the git repository to your local machine
2. Start the mongodb community server on mongodb compass
3. Run the following commands to install the npm packages in the project folder
   - npm i node
   - npm i mongodb
   - npm i mongoose
   - npm i mongoose-unique-validator
   - npm i nodemon
5. Open the project and navigate inside the src folder
6. Run 'nodemon app.js' to the start.
 }
 
 ## Routes
 1. To get the match-details, make a get request on
    - http://localhost:3000/matches/
 2. To post the match details, make a post request on
    - http://localhost:3000/matches
 3. To post a match, make a post request on
    - http://localhost:3000/past-matches/
 4. To get past matches, make a get request on
    - http://localhost:3000/past-matches/
 5. To get match by date, make a get request on
    - http://localhost:3000/matches/(*Enter-Date*)
 6. To get any team's performance, make a get request on
    - http://localhost:3000/past-matches/(*Enter-team-name*)
 

   
