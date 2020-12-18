
const initState = {
    projects : [
        {id : 1, title : "I code react", body : "does it pay me",image:"Images/images.jpg"},
        {id : 2, title : "I code Django", body : "does it pay me",image:"Images/download.jpg"},
        {id : 3, title : "I code laravel", body : "does it pay me",image:"Images/download.jpg"},
        {id : 4, title : "Django", body : "this is the body",image:"Images/download.jpg"},
        {id : 6, title : "john", body : "this is the john",image:"Images/download.jpg"}

    ],
    members : [
        {id : 1, name : "I code react", description: "does it pay me",image:"Images/members/MUTHOMI.jpg"},
        {id : 2, name : "I code Django", description: "does/members it pay me",image:"Images/members/FELIX.jpg"},
        {id : 3, name : "I code laravel", description: "does/members it pay me",image:"Images/members/BEN.jpg"},
        {id : 4, name : "Django", description: "this/members is/members the body",image:"Images/members/PATO.jpg"},
        {id : 5, name : "john", description: "this/members is/members the john",image:"Images/members/DERICK.jpg"},
        {id : 6, name : "john", description: "this/members is/members the john",image:"Images/members/dante.jpg"},
        {id : 7, name : "john", description: "this/members is/members the john",image:"Images/members/JOHN.jpg"},
        {id : 7, name : "john", description: "this/members is/members the john",image:"Images/members/JOHN.jpg"}

    ]
}

const rootReducer = (state=initState,action) =>{
    return state
}

export default rootReducer