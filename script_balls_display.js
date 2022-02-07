
// Тернарний оператор замінює if і має два результати виконання true або false

//                умова  ? виконання true  : виконання false ;

let balls = prompt('To check the results, enter scores from 0 to 100.', [0]);

balls  <= 100 & balls >= 95 ? 
    console.log('Category - A') & 
    alert('Congratulations! You are in category A') : 
balls >= 85 & balls  <= 94 ? 
    console.log('Category - B') & 
    alert('Wonderful! You are in category B') : 
balls >= 75 & balls  <= 84 ?
    console.log('Category - С') & 
    alert('Fine! You are in category С') :
balls >= 65 & balls  <= 74 ?
    console.log('Category - D') & 
    alert('Good level! You are in category D') :
balls >= 60 & balls  <= 64 ?
    console.log('Category - E') & 
    alert('Average level! You are in category E') :
balls >= 0 & balls  <= 59 ?
    console.log('Category - FX') & 
    alert('Low score, you still need to study! You are in category FX') :
balls < 0 || balls  > 100 ?
    console.log('Error! Enter a valid value between 0 and 100.') & 
    alert('Error! Enter a valid value between 0 and 100.') : console.log('Error! Enter a valid value between 0 and 100.')

;                                                   

