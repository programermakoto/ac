"use strict";


{
  function callback(entries,obs){
    entries.forEach(entry =>{
      if(!entry.isIntersecting){
        return;
      }

      entry.target.classList.add("appear");
      obs.unobserve(entry.target);
    });
  }




  const options={
    threshold:0.2,    //20%超えた場合
  };

  const observer = new IntersectionObserver(callback,options);   //場所取得
  const targets = document.querySelectorAll(".animate");  //監視する3つ物取得



  targets.forEach(target => {  //1つ1つバラバラにして
    observer.observe(target); //observe()でobserverに入ればtargetを監視対象内に
  });




}




// Q&A

document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.inner-1 dt');

    questions.forEach(question => {
        question.addEventListener('click', function () {
            const active = this.classList.contains('active');

            // 全てのddを閉じる
            document.querySelectorAll('.inner-1 dt').forEach(dt => {
                dt.classList.remove('active');
            });

            document.querySelectorAll('.inner-1 dd').forEach(dd => {
                dd.classList.remove('show');
            });

            // アクティブなdtとddを表示
            if (!active) {
                this.classList.add('active');
                this.nextElementSibling.classList.add('show');
            }
        });
    });
});


