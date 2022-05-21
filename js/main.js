
const onCard = document.querySelector('.component-card');

const selectedScore = {
    status: false,
    value: 0
}; 

const textHandler = (heading, paragraph) => {
    return `<div class="component-card_text--container">
                <h1 class="component-card_text--container__heading">${heading}</h1>
                <p class="component-card_text--container__desc">${paragraph}</p>
            '</div>`;
}

const feedBackComponent = ` <div class="img-container">
                                <img src="./images/icon-star.svg" alt="" class="image star">
                            </div>
                            ${textHandler('How did we do?', 'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!')}
                            <ul class="component-card_feedback--container">
                                  <li class="feedback_score"><span>1</span></li>
                                  <li class="feedback_score"><span>2</span></li>
                                  <li class="feedback_score"><span>3</span></li>
                                  <li class="feedback_score"><span>4</span></li>
                                  <li class="feedback_score"><span>5</span></li>
                            </ul>
                            <button class="component-card_submit--btn">Submit</button>`;

onCard.innerHTML+=feedBackComponent; 

const ThankYouPage = () => {
    const ThankYouComponent = `<img src="./images/illustration-thank-you.svg" alt="" class="image illustration">
                               <p class="feedbackResult">You selected ${selectedScore.value} out 5</p>
                               ${textHandler("Thank you!","We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!")}
    `
    return ThankYouComponent;
}
const feedback = document.getElementsByClassName('feedback_score');

const feedbackScore = document.querySelector(".component-card_feedback--container");
feedbackScore.addEventListener("click", (e) => {
    if(e.target.nodeName !== "SPAN") return;
    selectedScore.status=true;
    selectedScore.value=e.target.textContent;
    for(let iter=0; iter < feedback.length ; iter ++) {
        feedback[iter].querySelector('span').classList.remove('active');
    }    
    e.target.classList.add("active");
})


onCard.addEventListener("click", (e)=> {
    const getTarget = e.target;
    const getTargetClass = getTarget.className;
    if(getTargetClass === "component-card_submit--btn") {
        if(!selectedScore.status) return;
        selectedScore.status=false;
        onCard.innerHTML="";
        onCard.classList.add('thankYouPage');
        onCard.innerHTML+=ThankYouPage();
        setInterval(() => {
            location.reload()
        }, 6000);
    } else {
        return;
    }
})

// console.log(onCard)