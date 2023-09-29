let students = [    "Steven", 
                    "Jennifer",
                    "Hugh",
                    "Jay",
                    "Sharon",
                    "Delia",
                    "Elliot",    
                    "Billy"
                ];


for(let i = 0; i < students.length; i++)
    document.getElementById("output").innerHTML += students[i] + "<br/>";

console.log(students.length);