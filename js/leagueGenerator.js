import { basicFunctions } from "./basicFunctions";


export function leagueGenerator(teamList) {
            console.log("LIGA");
            let numberOfTeams = teamList.length;
            basicFunctions.randomizer(teamList);

            if (numberOfTeams % 2 === 0) {
                let matchesPerRound = numberOfTeams / 2;
                let listMiddle = numberOfTeams / 2;
                let hosts = teamList.slice(0,listMiddle);
                let guests = teamList.slice(listMiddle);
                console.log(hosts, guests);
                
                
            } else {
                let matchesPerRound = (numberOfTeams + 1) / 2;
                console.log(matchesPerRound, "nieparzysta");
                
                
            }
        };

