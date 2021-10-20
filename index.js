const  quiz=[
    {
        que:"que1: what does DOM stand for?",
        a1:"document object model",
        a2:"document orient model",
        a3:"doc object model",
        a4:"document offset model",
        ans: "an1"
    },
    {
        que:"Which of the following is not a programming language?",
        a1:"java",
        a2:"python",
        a3:"C++",
        a4:"HTML",
        ans:"an4"
    },
{
        que:"que3: Which of the folowing is an object-oriented programming language?",
        a1:"C++",
        a2:"CSS",
        a3:"C",
        a4:"HTML",
        ans: "an1"
    },
    {
        que:"que4: What does CSS mean?",
        a1:"Copy style sheet",
        a2:"Cascading style sheet",
        a3:"Current style sheet",
        a4:"Cascading soap sheet",
        ans: "an2"
    }
];

    const ques= document.querySelector(".question");
    const o1= document.querySelector("#o1");
    const o2= document.querySelector("#o2");
    const o3= document.querySelector("#o3");
    const o4= document.querySelector("#o4");
    const submit= document.querySelector(".btn");
    const answer= document.querySelectorAll(".ans");
    const scorex= document.querySelector("#bx");

    const bbx= document.querySelector(".bbx");


     let x=0;
     let score=0;
    const quesload = () => {
        ques.innerHTML =  quiz[x].que;
        o1.innerHTML =  quiz[x].a1;
        o2.innerHTML =  quiz[x].a2;
        o3.innerHTML =  quiz[x].a3;
        o4.innerHTML =  quiz[x].a4;
    }
    quesload();

 const uncheck = () => {
        answer.forEach((curval) => curval.checked = false);
    }

    const getcheck = () => {
        let str;
        answer.forEach((curval) => {
            if(curval.checked){
                str= curval.id;
            }
        });
        return str;
    };

   

    submit.addEventListener('click', () => {
        const checkans = getcheck();

        if(checkans==quiz[x].ans){
            score++;
        }
       
        x++;
        uncheck();

        if(x<quiz.length){
           
            quesload();
        } 
        else{
            scorex.innerHTML = `
            <h3> your score: ${score}/${quiz.length} ~</h3>
            <button class="btn" onclick="location.reload()">play again</button>
            `;
            bbx.style.display="block";
        }
});
    




