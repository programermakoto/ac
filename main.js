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
