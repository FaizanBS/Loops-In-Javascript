    // let i=0;
    // for(i=0;i<3;i++){
    //     console.log(i)
    // }
    let friends =["rohan","ali","Elion","shahbaz","jack"];
    // for (let index = 0; index < friends.length; index++) {
    //     console.log("hello friedn,"+friends[index]);
        
    // }
    // friends.forEach(function(element){
    //     console.log("hello freinds," + element)
    // })
    for (element of friends){
        console.log("hello,"+element)
    }
    let employee={
        name:"harry",
        salary:3,
        channel:"jal"

    }
    for(key in employee){
        console.log(`The ${key} of employee is ${employee[key]} `)
    }
    let i=0;
    while (i<4){
        console.log(`${i}  is less than 4`);
        i++;
    }
   
    do{

        console.log(`${i}  is less than 4`);
        i++;}
        while (i<4);   