(function(){
    const titleQuestions =[...document.querySelectorAll('.question_title')];
    titleQuestions.forEach(question=>{
      question.addEventListener('click',()=>{
        let height =0;
        let answer = question.nextElementSibling;
        let addPadding = question.parentElement.parentElement;

        addPadding.classList.toggle('question_padding--add');

        question.children[0].classList.toggle ('question_arrow--rotate');

        if(answer.clientHeight ===0){
           height=answer.scrollHeight;
        }
        
        answer.style.height = `${height}px`;
          
      });
      
    });
})();