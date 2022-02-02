(function(){
    const titleQuestions = [...document.querySelectorAll(".questions_title")]; // obtain every question and convert them to an array

    titleQuestions.forEach(question =>{ // obtain every question by separated
        question.addEventListener("click", ()=>{ // if a question is clicked
            let height = 0;
            let answer = question.nextElementSibling; // obtain the brother of question (the paragraph -> answer)
            let addPadding = question.parentElement.parentElement // obtain the h3, the parent and the parent so that we have the padding

            addPadding.classList.toggle("questions_padding--add") // toggle the padding class
            question.children[0].classList.toggle("questions_arrow--rotate") // obtain the first children of the question (h3) which is the span and we toggle the class to rotate

            if(answer.clientHeight === 0){ // if the paragraph is not opened
                height = answer.scrollHeight; // open the paragraph with the min height to be shown
            }

            answer.style.height = `${height}px`; // add the height to the paragraph

        });
    });
})();