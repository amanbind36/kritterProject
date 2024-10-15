class College{
    constructor(name, location, fees, ranking) {
        this.name = name;
        this.location = location;
        this.fees = fees;
        this.ranking = ranking;
    }
}


let College1 = new College("IIT Delhi", "New Delhi", 10000, 1);
let College2 = new College("Jamia Millia Islamia", "Delhi", 5000, 8);
let College3 = new College("Delhi Technological University", "Delhi NCR", 7000, 12);
let College4 = new College("University of Delhi", "Delhi", 15000, 5);
let College5 = new College("Indira Gandhi Delhi Technical University", "Dwarka", 8000, 15);
let College6 = new College("National Institute of Fashion Technology", "Gurgaon", 25000, 6);
let College7 = new College("Guru Gobind Singh Indraprastha University", "Noida", 12000, 10);
let College8 = new College("Shivaji College", "Faridabad", 3000, 20);
let College9 = new College("Jawaharlal Nehru University", "New Delhi", 2000, 2);
let College10 = new College("Amity University", "Gurgaon", 20000, 3);


let colleges = [College1, College2, College3, College4, College5, College6, College7, College8, College9, College10];

// Take input 
let preferredLocation = "Delhi";
let maxFees = 20000;
let rankingWeight = 2;
let feesWeight = 1

let preferredLocations= colleges.filter((college)=>{
    let { location,fees}=college;
    return location === preferredLocation && maxFees >= fees;
    
})
// console.log(preferredLocations)


let collegeswithScore=preferredLocations.map((college)=>{
    let {ranking,fees}=college;
    let score = (((ranking) * rankingWeight) + ((fees) / maxFees  * feesWeight))
    
    let newCollege={...college,score}
    return newCollege;
})

collegeswithScore.sort((a,b)=>b.score-a.score)

//Output the College List

collegeswithScore.forEach((college)=>{
    // console.log(college);
let {name,location,score,fees,ranking}=college
console.log(`Name:${name} ,Location:${location} ,Fees:${fees},Ranking:${ranking},Score:${score}`)
   
})

