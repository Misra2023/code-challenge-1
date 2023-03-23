//students marks
let marks = prompt("Enter the student marks");

if (marks >= 79) {
    console.log("A");
} else if (marks >= 60 && marks < 79) {
    console.log("B");
    } else if (marks >=49 && marks < 59) {
      console.log("C");
    } else if (marks >= 40 && marks < 49)  {
        console.log("D");
    } else if (marks < 40) {
        console.log("E");
    }
    console.log(marks);




    //speedlimit
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    function calculaterDemeritPoints(speed) {
        if (speed <= speedLimit) {
            console.log("Ok");
        } else {
            const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
            if (demeritPoints >= 12) }
            console.log("License suspended");
            { eslse {
                console.log('Demerit points: ${demeritpoints}');
            } 
        }
    }
    calculateDemeritpoints(60); // ok
    calculateDemeritpoints(75); // Demerit points: 1
    calculateDemeritpoints(100; // Demrit points: 6)





    //net salary
    function individualNetSalary(grossSalary) {
        const tax = 500;
        const nhif = 500;
        const nssf = 500;
        const netSalary = grossSalary - tax - nhif - nssf;
        return netSalary;
    }
    // console.log(individualNetSalary913000));